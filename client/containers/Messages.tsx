import { useSockets } from "../context/socket.context";
import { useEffect, useRef } from "react";
import EVENTS from "../config/events";
import { useSession, signIn, signOut } from "next-auth/react";

import ColorHash from "color-hash";

var colorHash = new ColorHash();
var colorHashLight = new ColorHash({ lightness: 0.7 });

function MessagesContainer() {
  //Spotify
  const { data: session } = useSession();

  const { socket, messages, roomId, username, setMessages } = useSockets();
  const newMessageRef = useRef(null);

  const messageEndRef = useRef(null);

  useEffect(() => {
    messageEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  function handleSendMessage() {
    const message = newMessageRef.current.value;

    if (!String(message).trim()) {
      return;
    }
    socket.emit(EVENTS.CLIENT.SEND_ROOM_MESSAGE, { roomId, message, username });
    const date = new Date();

    setMessages([
      ...messages,
      {
        username: "You",
        message,
        // @ts-ignore
        time: `${date.toLocaleString("en-US", {
          hour: "numeric",
          minute: "numeric",
          hour12: true,
        })}`,
      },
    ]);

    newMessageRef.current.value = "";
  }

  if (!roomId) {
    return <div />;
  }
  return (
    <div className="flex h-full justify-end flex-col">
      <div className="bg-emerald-400"></div>
      <section className="overflow-y-auto scrollbar-thin scrollbar-thumb-lime-300 scrollbar-track-brown-light bg-black">
        {messages.map((message, index) => {
          return (
            <div
              style={{ backgroundColor: colorHashLight.hex(message.username) }}
              key={index}
              className={
                message.username === "You"
                  ? "flex px-4 py-1 border-black border-t-4 text-2xl"
                  : "flex px-4 py-1 border-white border-t-4 text-2xl"
              }
            >
              <p className="text-black pr-1">{message.username} -</p>
              <p className="flex-1" key={index}>
                {message.message}
              </p>
              <p className="">{message.time}</p>
            </div>
          );
          //{message.message}
        })}
        <div ref={messageEndRef} />
      </section>

      <div className="p-4 bg-lime-300 ">
        <input
          onKeyPress={(e) => {
            if (e.key === "Enter") {
              handleSendMessage();
            }
          }}
          className="text-3xl bg-gray-300 w-full text-black"
          placeholder="Tell us what you are thinking"
          ref={newMessageRef}
        />
      </div>
      <button
        className="py-6 px-8 bg-brown-light rounded-xl text-emerald-400 "
        onClick={handleSendMessage}
      >
        SEND MESSAGE
      </button>
    </div>
  );
}

export default MessagesContainer;
