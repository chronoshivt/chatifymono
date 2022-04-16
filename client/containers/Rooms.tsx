import { useSockets } from "../context/socket.context";
import { useRef } from "react";
import EVENTS from "../config/events";
import { useEffect, useState } from "react";
import { useSession, signIn, signOut } from "next-auth/react";

function RoomsContainer() {
  //Spotify
  const { data: session } = useSession();

  console.log(session);

  const [playing, setPlaying] = useState({});

  const getMyPlaying = async () => {
    const res = await fetch("/api/playing");
    const items = await res.json();
    setPlaying(items);
    console.log(playing);
  };

  useEffect(() => {
    // @ts-ignore
    const roomName = playing?.item?.name;
    // @ts-ignore
    const roomId = playing?.item?.id;

    if (!String(roomName).trim()) return;

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
    if (key === roomId) return;

    socket.emit(EVENTS.CLIENT.JOIN_ROOM, key);
  }

  function handleCreateRoom() {
    const roomName = newRoomRef.current.value || "";

    if (!String(roomName).trim()) return;

    //emit room created event
    socket.emit(EVENTS.CLIENT.CREATE_ROOM, { roomName });
    //set room name input back to empty string
    newRoomRef.current.value = "";
  }
  return (
    <nav className="p-2">
      <div className="text-2xl">
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

      {Object.keys(rooms).map((key) => {
        return (
          <div className="" key={key}>
            <button
              className="text-3xl p-4 bg-orange-400 m-2"
              disabled={key === roomId}
              title={`Join ${rooms[key].name}`}
              onClick={() => handleJoinRoom(key)}
            >
              {rooms[key].name}
            </button>
          </div>
        );
      })}

      <div className="bg-orange-300 h-24">
        {/* @ts-ignore */}
        <p className="text-2xl">User: {session?.token?.name}</p>
        {/* @ts-ignore */}
        <p>Current song: {playing?.item?.name}</p>

        <p>Current room : {roomId}</p>
        <button className="bg-purple-500 text-3xl" onClick={getMyPlaying}>
          Refresh
        </button>
      </div>
    </nav>
  );
}

export default RoomsContainer;
