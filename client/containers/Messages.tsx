import { useSockets } from "../context/socket.context";
import { useEffect, useRef } from "react";
import EVENTS from "../config/events";
import { useSession, signIn, signOut } from "next-auth/react";
import membersImage from "../public/member.png";
import Image from "next/image"

import ColorHash from "color-hash";

var colorHash = new ColorHash();
var colorHashLight = new ColorHash({  lightness: 0.7 });

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
    <div className="font-mono flex flex-col h-full">
      <div className="bg-brown-dark my-2 mx-6 flex justify-end">
            <p className="text-white mt-3 text-3xl"></p>
            <Image src="/member.png" height={50} width={50}/>
      </div>
    <div className="justify-end flex flex-col h-full overflow-y-auto">
      <div className="overflow-y-auto scrollbar-thin scrollbar-thumb-green-500">
      <section className="bg-brown-dark">
        {messages.map((message, index) => {
          return (
            <div
              style={{ color: colorHashLight.hex(message.username) }}
              key={index}
              className={
                message.username === "You"
                  ? "flex px-4 py-1 hue-rotate-180 my-1 text-2xl mx-10"
                  : "flex px-4 py-1 hue-rotate-180 my-1 text-2xl mx-10"
              }
            >
              <p 
                style={{ color: colorHashLight.hex(message.username) }}
                className="pr-4">{message.username} -</p>
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
      </div>
      <div className="p-4 bg-gray-400 mx-6 rounded-3xl my-8">
        <input
          onKeyPress={(e) => {
            if (e.key === "Enter") {
              handleSendMessage();
            }
          }}
          className="text-3xl bg-gray-400 w-full text-black placeholder-black pl-2 outline-none flex"
          placeholder="Send a message"
          ref={newMessageRef}
        />
      </div>
      </div>
    </div>
  );
}

export default MessagesContainer;
