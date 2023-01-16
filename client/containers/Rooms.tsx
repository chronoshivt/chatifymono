import { useSockets } from "../context/socket.context";
import { useRef } from "react";
import EVENTS from "../config/events";
import { useEffect, useState } from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import ColorHash from "color-hash";

var colorHash = new ColorHash({ hue: 150 });

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
    // socket.emit(EVENTS.CLIENT.LEAVE_ROOM, roomId);
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

  const newRoomRef = useRef(null);

  function handleJoinRoom(key) {
    // @ts-ignore
    let previous = roomId;

    if (key === roomId) return;
    //emit room joined event
    socket.emit(EVENTS.CLIENT.JOIN_ROOM, key);
  }

  return (
    <nav className="  flex flex-col h-full shadow-md bg-black font-mono">
      <div className="bg-black h-20 flex">
        <p className="text-white text-5xl tracking-tight font-semibold pl-3 mt-1">
          Current Room:
        </p>
        <p className="text-right text-5xl text-green-500 ml-4 mt-1">
          {rooms[roomId]?.name}
        </p>
      </div>

      <div className="text-2xl hidden">
        <input
          className="bg-gray-500"
          ref={newRoomRef}
          placeholder="Room name"
        />
        <br />
      </div>
      <section className="flex h-full flex-col ml-4 mt-6 text-xl overflow-y-auto overflow-x-hidden scrollbar-thin scrollbar-thumb-green-400 scrollbar-track-brown-light">
        <p className="text-white mb-4">{"Active Rooms (Click To Join):"}</p>
        {Object.keys(rooms).map((key) => {
          return (
            <div
              className={
                rooms[key].name === "empty" || rooms[key].name === undefined
                  ? "hidden"
                  : ""
              }
              key={key}
            >
              <button
                style={{ backgroundColor: colorHash.hex(key) }}
                className={
                  key === roomId
                    ? "hidden"
                    : "hover:scale-110 text-3xl transition transform duration-500 rounded-full px-6 py-4 m-2"
                }
                disabled={key === roomId}
                title={`Join ${rooms[key].name}`}
                onClick={() => {
                  handleJoinRoom(key);
                  playChosenTrack(key);
                  getMyPlaying();
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
        className=" flex bg-SlateGray rounded-r-xl flex-col p-4 text-white"
      >
        <div className="flex mx-4">
          {/* @ts-ignore */}
          <img className="w-24 rounded-xl h-24" src={session?.token?.picture} />

          <section className="w-full text-right">
            {/* @ts-ignore */}

            <p className="text-2xl">User: {session?.token?.name}</p>

            {/* @ts-ignore */}
            <p>{/* @ts-ignore */}
              Listening to:{playing?.item?.name ? playing?.item?.name
                : "Play music and press chatify"}
            </p>
            {/* @ts-ignore */}
            <p className={playing?.item?.name ? "visible" : "hidden"}>
              {/* @ts-ignore */}
              by: {playing?.item?.artists[0].name}
            </p>
          </section>
        </div>
        <button
          className="text-4xl m-4 py-4 rounded-2xl bg-green-500 shadow-lg hover:scale-90 hover:text-white text-black transition-transform duration-1000 ease-out"
          onClick={getMyPlaying}
        >
          Chatify
        </button>
      </div>
    </nav>
  );
}

export default RoomsContainer;
