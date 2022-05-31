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
    <div className="bg-brown-mid h-screen">
      {session && !username && (
        <>
          {/* @ts-ignore */}
          <p className="text-3xl text-white text-center">

          {/* @ts-ignore */}
          Signed into Spotify account: {session?.token?.name} <br />
          <button className="text-xl bg-green-300 text-black px-4 py-2 m-4" onClick={() => signOut()}>Sign out</button>
          </p>
          <br />
          <p className="text-white text-center text-lg">Chatify places you
          in an anonymous chat with other users currently
          streaming the same artist as you.
          <br />
          Press the chatify button to sync your currently playing song
          with the app.
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
        <p className="text-3xl text-white text-center">

{/* @ts-ignore */}
Not signed in. <br />
<button className="text-xl bg-green-300 text-black px-4 py-2 m-4" onClick={() => signIn()}>Sign in</button>
</p>
<br />
<p className="text-white text-center text-lg">Chatify places you
          in an anonymous chat with other users currently
          streaming the same artist as you.
          <br />
          Press the chatify button to sync your currently playing song
          with the app.
          </p>
    
        </>
      )}
      {!username && (
        <div className="flex my-8 justify-center">
          <input
            className="text-3xl text-white bg-brown-light"
            placeholder="choose a name :)"
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
