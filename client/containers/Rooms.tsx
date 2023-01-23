import { useSockets } from "../context/socket.context";
import { useRef } from "react";
import EVENTS from "../config/events";
import { useEffect, useState } from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import ColorHash from "color-hash";
import forward_image from "../public/forward.svg";
import previous_image from "../public/previous.svg";

import Image from "next/image";

var colorHash = new ColorHash({ hue: 150 });

function RoomsContainer({ username }) {
  //Spotify
  const { data: session } = useSession();

  // console.log(session);

  const [playing, setPlaying] = useState({});

  const getMyPlaying = async () => {
    const res = await fetch("/api/playing");
    const items = await res.json();
    setPlaying(items);
  };

  const skipToNext = async () => {
    const res1 = await fetch("/api/skip-next");
    if (res1.status == 200) {
      setTimeout(async function () {
        const res = await fetch("/api/playing");
        const items = await res.json();
        setPlaying(items);
      }, 500);
    }
  };

  const skipToPrevious = async () => {
    const res1 = await fetch("/api/skip-previous");
    if (res1.status == 200) {
      setTimeout(async function () {
        const res = await fetch("/api/playing");
        const items = await res.json();
        setPlaying(items);
      }, 500);
    }
  };

  // add logic that checks length of playing song and refresh then
  //   useEffect(() => {
  //     const intervalId = setInterval(getMyPlaying, 10000);
  //     return () => clearInterval(intervalId);
  // }, []);

  const playChosenTrack = async (key) => {
    const res = await fetch("/api/play-track", {
      method: "PUT",
      body: JSON.stringify(key),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const items = await res.json();
  };

  const { socket, roomId, rooms } = useSockets();
  let currentRoom = rooms[roomId]?.name || "";
  console.log(playing);
  useEffect(() => {
    // @ts-ignore
    const roomName = playing?.item?.artists[0].name;
    // @ts-ignore
    const roomId = playing?.item?.artists[0].uri;

    if (String(roomName) === currentRoom) return;
    if (!String(roomName).trim()) return;
    if (!String(roomId).trim()) return;

    //emit room created event
    socket.emit(EVENTS.CLIENT.CREATE_ROOM, { roomName, roomId });
    //set room name input back to empty string
    newRoomRef.current.value = "";
    console.log("Changing rooms!");
  }, [playing]);

  const newRoomRef = useRef(null);

  function handleJoinRoom(key) {
    // @ts-ignore
    if (key === roomId) return;
    //emit room joined event
    socket.emit(EVENTS.CLIENT.JOIN_ROOM, key);
  }

  return (
    <nav className="mx-4 h-full font-mono">
      <div className="text-2xl hidden">
        <input
          className="bg-gray-500"
          ref={newRoomRef}
          placeholder="Room name"
        />
        <br />
      </div>
      <div className="flex text-3xl mt-1 flex flex-col items-center">
        <p className="text-white tracking-tight font-semibold">Current Room:</p>
        <p className="text-green-500">{rooms[roomId]?.name}</p>
      </div>

      <div className="text-white">
        <div className="flex my-4 w-full justify-between">
          <div className="w-1/3 flex flex-col justify-center items-center">
            <button  className=""
              onClick={async () => {
                await skipToPrevious();
              }}
            >
              <Image width={64} height={64} src={previous_image}></Image>
            </button>
            <button className=""
              onClick={async () => {
                await skipToNext();
              }}
            >
              <Image width={64} height={64} src={forward_image}></Image>
            </button>
          </div>
          <section className="text-center flex flex-col justify-center w-1/3">
            {/* @ts-ignore */}
            <p>
              {/* @ts-ignore */}
              {playing?.item?.name ? playing?.item?.name
                : "Play music and press chatify"}
            </p>
            {/* @ts-ignore */}
            <p className={playing?.item?.name ? "visible" : "hidden"}>
              {/* @ts-ignore */}
              by: {playing?.item?.artists[0].name}
            </p>
            {/* @ts-ignore */}
            <p className="text-xl">User: {session?.token?.name}</p>
          </section>
          <div className="w-1/3 flex px-2 justify-center items-center">

          {/* @ts-ignore */}
          <img className=" rounded-xl" src={playing?.item?.album.images[0].url} ></img>
          </div>
        </div>
        <button
          className="text-4xl w-full rounded-2xl bg-green-500 shadow-lg hover:scale-90 hover:text-white text-black transition-transform duration-1000 ease-out"
          onClick={getMyPlaying}
        >
          chatify
        </button>
        {/* @ts-ignore
          <img className="w-24 rounded-xl h-24" src={session?.token?.picture} /> */}
      </div>

      {/* <section className="flex h-full flex-col ml-4 mt-6 text-xl overflow-y-auto overflow-x-hidden scrollbar-thin scrollbar-thumb-green-400 scrollbar-track-brown-light">
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
                style={{ color: colorHash.hex(key) }}
                className={
                  key === roomId
                    ? "hidden"
                    : "hover:scale-110 text-3xl transition transform duration-500 px-6 py-4 m-2"
                }
                disabled={key === roomId}
                title={`Join ${rooms[key].name}`}
                onClick={async () => {
                  await playChosenTrack(key);
                  await handleJoinRoom(key);
                }}
              >
                {rooms[key].name}
              </button>
            </div>
          );
        })}
      </section> */}
    </nav>
  );
}

export default RoomsContainer;
