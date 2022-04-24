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
    <div className="bg-green-400 h-screen">
      {session && !username && (
        <>
          {/* @ts-ignore */}
          Signed in as {session?.token?.email} <br />
          <button onClick={() => signOut()}>Sign out</button>
          <br />
          {/* @ts-ignore */}
          User: {session?.token?.name}
          <br />
          <button className="px-4 py-2 bg-purple-400" onClick={getMyPlaylists}>
            My playlists
          </button>
          <br />
          <button className="px-4 py-2 bg-emerald-400" onClick={getMyPlaying}>
            {" "}
            Currently playing
          </button>
          {/* @ts-ignore */}
          <p>Song Title: {playing?.item?.name}</p>
        </>
      )}
      {!session && (
        <>
          Not signed in <br />
          <button onClick={() => signIn()}>Sign in</button>
        </>
      )}
      {!username && (
        <div className="flex bg-emerald-500 justify-center">
          <input
            className="text-3xl bg-gray-600"
            placeholder="Username"
            ref={usernameRef}
          />
          <button
            className="rounded-full bg-green-600 px-4 py-2"
            onClick={handleSetUsername}
          >
            START
          </button>
        </div>
      )}
      {username && session && (
        <div className="bg-brown-dark flex h-screen">
          {/* <button onClick={() => getMyPlaylists()}>PLAYLIST</button> */}
          <div className="w-2/6">
            {/* @ts-ignore */}
            <RoomsContainer username={username} />
          </div>
          <section className="flex-1 w-4/6">
            <MessagesContainer />
          </section>
        </div>
      )}
    </div>
  );
}
