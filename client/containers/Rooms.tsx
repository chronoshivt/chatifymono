import { useSockets } from "../context/socket.context";
import { useRef } from "react";
import EVENTS from "../config/events";
import { useEffect, useState } from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import ColorHash from "color-hash";

var colorHash = new ColorHash({ hue: 96 });

function RoomsContainer({ username }) {
  //Spotify
  const { data: session } = useSession();

  console.log(session);

  const [playing, setPlaying] = useState({});

  const getMyPlaying = async () => {
    const res = await fetch("/api/playing");
    const items = await res.json();
    setPlaying(items);
    console.log(playing);
    socket.emit(EVENTS.CLIENT.LEAVE_ROOM, roomId);
  };

  const playChosenTrack = async (key) => {
    const res = await fetch("/api/play-track", {
      method: "PUT",
      body: JSON.stringify(key),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const items = await res.json();
    console.log(items);
    console.log(colorHash.hex(key));
  };
  // @ts-ignore

  const [testHash, setHash] = useState(colorHash.hex("pussssy"));

  useEffect(() => {
  
    // @ts-ignore
    const roomName = playing?.item?.artists[0].name;
    // @ts-ignore
    const roomId = playing?.item?.artists[0].uri;

    if (!String(roomName).trim()) return;
    if (!String(roomId).trim()) return;

    //emit room created event
    socket.emit(EVENTS.CLIENT.CREATE_ROOM, { roomName, roomId });
    //set room name input back to empty string
    newRoomRef.current.value = "";
    console.log("Changing rooms!");
  }, [playing]);
  const { socket, roomId, rooms } = useSockets();

  // const getCurrentlyPlaying = async () => {
  //   const res = await fetch("/api/playing");
  //   const song = await res.json();
  //   const songId = song.item.artists[0].id;
  //   console.log(song);
  //   console.log(song.item.artists[0].name);

  //   console.log(song.item.artists[0].id);

  //   if (songId == roomId) return;
  //   socket.emit(EVENTS.CLIENT.JOIN_ROOM, songId);
  // };

  const newRoomRef = useRef(null);

  function handleJoinRoom(key) {
    // @ts-ignore
    let previous = roomId;

    if (key === roomId) return;

    //emit room joined event
    socket.emit(EVENTS.CLIENT.JOIN_ROOM, key);

    socket.emit(EVENTS.CLIENT.LEAVE_ROOM, previous);
  }

  function handleCreateRoom() {
    const roomName = newRoomRef.current.value || "";

    if (!String(roomName).trim()) return;

    //emit room created event
    socket.emit(EVENTS.CLIENT.CREATE_ROOM, { roomName });
    //set room name input back to empty string
    newRoomRef.current.value = "";

    socket.emit(EVENTS.CLIENT.LEAVE_ROOM, roomId);
  }
  return (
    <nav className="  flex flex-col h-full  shadow-md bg-brown-light">
      <div className="text-2xl hidden">
        <input
          className="bg-gray-500"
          ref={newRoomRef}
          placeholder="Room name"
        />
        <br />
        <button className="bg-blue-500" onClick={handleCreateRoom}>
          CREATE ROOM
        </button>
      </div>
      <section className="flex h-full flex-col items-center overflow-y-auto overflow-x-hidden scrollbar-thin scrollbar-thumb-purple-400 scrollbar-track-brown-light">
        {Object.keys(rooms).map((key) => {
          return (
            <div
              className={rooms[key].name === "empty" || rooms[key].name === undefined  ? "hidden" : ""}
              key={key}
            >
              <button
                style={{ backgroundColor: colorHash.hex(key) }}
                className={
                  key === roomId
                    ? "text-3xl transition transform duration-500 -hue-rotate-180 translate-x-12 scale-110 px-6 brightness-150 py-4 rounded-full m-2"
                    : "text-3xl transition transform duration-500 rounded-full px-6 py-4 m-2"
                }
                disabled={key === roomId}
                title={`Join ${rooms[key].name}`}
                onClick={() => {
                  handleJoinRoom(key);
                  playChosenTrack(key);
                }}
              >
                {rooms[key].name}
              </button>
            </div>
          );
        })}
      </section>
      <div
        // @ts-ignore
        style={{}}
        className=" flex bg-purple-400 rounded-r-3xl flex-col p-4"
      >
        <button
          className="text-4xl m-4 py-4 rounded-2xl bg-lime-300 shadow-lg"
          onClick={getMyPlaying}
        >
          chatify
        </button>
        {/* @ts-ignore */}
        <p className="text-2xl">User: {session?.token?.name}</p>
        {/* @ts-ignore */}
        <p>Current song: {playing?.item?.name}</p>

        <p>Current room : {roomId}</p>
      </div>
    </nav>
  );
}

export default RoomsContainer;
