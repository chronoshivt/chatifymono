import { useSockets } from "../context/socket.context";
import { useEffect, useRef, useState } from "react";
import { useSession, signIn, signOut } from "next-auth/react";

import RoomsContainer from "../containers/Rooms";
import MessagesContainer from "../containers/Messages";

export default function Home() {
  //Socket
  const { socket, username, setUsername } = useSockets();
  const usernameRef = useRef(null);

  //Spotify Session
  const { data: session } = useSession();

  console.log(session);

  function handleSetUsername() {
    const value = usernameRef.current.value;
    if (!value) {
      return;
    }

    setUsername(value);
    localStorage.setItem("username", value);
  }

  const [list, setList] = useState([]);
  const [playing, setPlaying] = useState({});

  const getMyPlaylists = async () => {
    const res = await fetch("/api/playlists");
    const { items } = await res.json();
    setList(items);
    console.log(list);
  };
  const getMyPlaying = async () => {
    const res = await fetch("/api/playing");
    const items = await res.json();
    setPlaying(items);
    console.log(playing);
  };

  useEffect(() => {
    if (usernameRef)
      usernameRef.current.value = localStorage.getItem("username") || "";
  }, []);

  return (
    <div className="bg-black h-screen max-h-screen">
      {session && !username && (
        <>
          {/* @ts-ignore */}
          <p className="text-3xl text-white text-center">
            {/* @ts-ignore */}
            Signed into Spotify account: {session?.token?.name} <br />
            <button
              className="text-xl bg-green-500 text-black px-4 py-2 m-4 hover:shadow-xl hover:shadow-black hover:bg-green-300 hover:scale-110 transition duration-200 ease-out"
              onClick={() => signOut()}
            >
              Sign out
            </button>
          </p>
          <br />
          <p className="text-white text-center text-lg">
            Chatify places you in an anonymous chat with other users that are
            currently streaming the same artist as you.
            <br />
            Press the chatify button to sync your current song with the app.
          </p>
          {/* <button className="px-4 py-2 bg-purple-400" onClick={getMyPlaylists}>
            My playlists
          </button>
          <br /> */}
          {/* <button className="px-4 py-2 bg-emerald-400" onClick={getMyPlaying}>
            {" "}
            Currently playing
          </button> */}
          {/* @ts-ignore */}
          {/* <p className="text-white">Song playing: {playing?.item?.name ? playing?.item?.name: "No song playing :("}</p> */}
        </>
      )}
      {!session && (
        <>
          <p className="text-3xl text-white text-center cursor-default w-full">
            {/* @ts-ignore */}
            Sign in to <span className="text-green-500">Spotify</span> to start{" "}
            <br />
            <button
              className="text-xl bg-green-500 text-black px-4 py-2 m-4 hover:shadow-xl hover:shadow-black hover:bg-green-300 hover:scale-110 transition duration-200 ease-out"
              onClick={() => signIn()}
            >
              Sign in
            </button>
          </p>

          <br />
          <p className="text-white text-center text-lg">
            Chatify places you in an anonymous chat with other users that are
            currently streaming the same artist as you.
            <br />
            Press the chatify button to sync your current song with the app.
          </p>
        </>
      )}
      {!username && (
        <div className="flex my-8 justify-center items-center">
          <input
            className="text-3xl text-white bg-brown-light focus:placeholder-black pl-3 py-2 focus:outline-none"
            placeholder="Create a username"
            ref={usernameRef}
          />
          <button
            className="rounded-full bg-green-500 px-4 py-2 hover:bg-green-300 hover:scale-110 hover:shadow-lg hover:shadow-black transition duration-200 ease-out ml-4"
            onClick={handleSetUsername}
          >
            START
          </button>
        </div>
      )}
      {username && session && (
        <main className="h-screen">
          {/* <button onClick={() => getMyPlaylists()}>PLAYLIST</button> */}
          <section className="h-3/5">
            <MessagesContainer />
          </section>
          <div className="h-2/5">
            {/* @ts-ignore */}
            <RoomsContainer username={username} />
          </div>
        </main>
      )}
    </div>
  );
}
