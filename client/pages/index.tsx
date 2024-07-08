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

  function handleSetUsername() {
    const value = usernameRef.current.value;
    if (!value) {
      return;
    }
    if(value.length > 8) {
      return;
    }

    setUsername(value);
    localStorage.setItem("username", value);
  }

  const [list, setList] = useState([]);
  const [playing, setPlaying] = useState({});

  useEffect(() => {
    if (usernameRef)
      usernameRef.current.value = localStorage.getItem("username") || "";
  }, []);

  return (
    <div className="bg-black w-screen max-h-screen h-screen overflow-x-hidden overflow-y-auto flex flex-col">
    {!username && (
      <p className="text-3xl text-center my-4 text-white">Chatify places you in an anonymous web IRC
      chatroom with other Spotify users that are streaming the same artist as you.
      </p>)}
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
        <div className="flex flex-col justify-center w-full">
          <input
            className="text-3xl m-4 p-1 text-white bg-gray-600 focus:placeholder-black focus:outline-none"
            placeholder="Create a username"
            ref={usernameRef}
          />
          <button
            className="bg-green-500 mx-4 py-2 hover:bg-green-300 hover:scale-110 hover:shadow-lg hover:shadow-black transition duration-200 ease-out"
            onClick={handleSetUsername}
          >
            START
          </button>
        </div>
      )}
      {username && session && (
        <div className="h-full">
           <section className="h-1/2">
            <MessagesContainer />
          </section>
          <div className="">
            {/* @ts-ignore */}
            <RoomsContainer username={username} />
          </div>
        </div>
      )}
    </div>
  );
}
