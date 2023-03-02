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
    <nav className="mx-4 h-full -mt-8 md:mt-0 font-mono">
      <div className="text-xs hidden">
        <input
          className="bg-gray-500"
          ref={newRoomRef}
          placeholder="Room name"
        />
        <br />
      </div>
      <p className="text-white text-center text-xl w-full">
        {"Active Rooms (Click To Join):"}
      </p>
      <section className="flex rotate-180 text-lg overflow-y-hidden overflow-x-auto scrollbar-thin scrollbar-thumb-green-300">
        <div className="rotate-180 flex">
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
                      ? "py-4"
                      : "hover:scale-110 truncate text-2xl transition transform duration-500 px-6 py-4"
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
        </div>
      </section>
      {/* spotify player, could probably be turned into a seperate component */}
      <div className="text-white -mt-4">
        <div className="flex justify-between my-2 w-full">
          <div className="w-1/3 flex flex-col justify-center items-center">
            <button
              className=""
              onClick={async () => {
                await skipToPrevious();
              }}
            >
              <Image width={64} height={64} src={previous_image}></Image>
            </button>
            <button
              className=""
              onClick={async () => {
                await skipToNext();
              }}
            >
              <Image width={64} height={64} src={forward_image}></Image>
            </button>
          </div>
          <section className="text-center flex flex-col justify-center w-1/3">
            <div className="flex text-2xl flex flex-col items-center">
              <p className="text-white tracking-tight font-semibold">
                Current Room:
              </p>
              <p className="text-green-500">{rooms[roomId]?.name}</p>
              {/* @ts-ignore */}
              <p className="text-xl">User: {session?.token?.name}</p>
            </div>
          </section>
          <div className="w-1/3 flex flex-col justify-center items-center">
            {/* @ts-ignore */}
            <img src={playing?.item?.album.images[1].url}
              className=" rounded-xl w-32 h-32"
            ></img>
            {/* @ts-ignore */}
            <p className="">
              {/* @ts-ignore */}
              {playing?.item?.name ? "Song: " + playing?.item?.name
                : "Play a song on Spotify"}
            </p>
            {/* @ts-ignore */}
            <p className={playing?.item?.name ? "visible" : "hidden"}>
              {/* @ts-ignore */}
              by: {playing?.item?.artists[0].name}
            </p>
          </div>
        </div>
        <button
          className="text-4xl w-full rounded-2xl bg-green-500 shadow-lg hover:scale-90 hover:text-white text-black transition-transform duration-1000 ease-out"
          onClick={getMyPlaying}
        >
          Chatify
        </button>
        {/* @ts-ignore
          <img className="w-24 rounded-xl h-24" src={session?.token?.picture} /> */}
      </div>
    </nav>
  );
}

export default RoomsContainer;
