import { useSockets } from "../context/socket.context";
import { useEffect, useRef, useState } from "react";
import EVENTS from "../config/events";
import { useSession, signIn, signOut } from "next-auth/react";
import membersImage from "../public/member.png";
import Image from "next/image";

import ColorHash from "color-hash";

var colorHash = new ColorHash();
var colorHashLight = new ColorHash({ lightness: 0.7 });

function MessagesContainer() {
  //Spotify
  const { data: session } = useSession();

  const [composed_message, setComposed_message] = useState(false);
  const { socket, messages, roomId, username, setMessages } = useSockets();
  const newMessageRef = useRef(null);

  const messageEndRef = useRef(null);

  function handleChange(event) {
    console.log(event.target.value);
    const message = event.target.value;
    const date = new Date();
    let sent = false;
    if (!String(message).trim()) {
      socket.emit(EVENTS.CLIENT.ROOM_HIDE, {
        roomId,
        message: "",
        username,
        sent,
      });
      let newArray = [];
      messages.map(function (obj) {
        if (obj.username === "You" && obj.sent === false) {
        } else {
          newArray.push(obj);
        }
      });
      setComposed_message(false);
      setMessages(newArray);
      return;
    }
    socket.emit(EVENTS.CLIENT.COMPOSE_ROOM_MESSAGE, {
      roomId,
      message,
      username,
      sent,
    });
    console.log(messages);
    if (composed_message == false) {
      setComposed_message(message);
      setMessages([
        ...messages,
        {
          sent: false,
          username: "You",
          message: composed_message,
          // @ts-ignore
          time: `${date.toLocaleString("en-US", {
            hour: "numeric",
            minute: "numeric",
            hour12: true,
          })}`,
        },
      ]);
    } else {
      let newArray = messages.map(function (obj) {
        if (obj.username === "You" && obj.sent === false) {
          obj.message = message;
        }
        return obj;
      });
      setMessages(newArray);
    }
  }

  useEffect(() => {
    messageEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  function handleSendMessage() {
    // when enter is pressed,
    const message = newMessageRef.current.value;

    if (!String(message).trim()) {
      return;
    }
    // emit a new message sent to server
    socket.emit(EVENTS.CLIENT.SEND_ROOM_MESSAGE, { roomId, message, username });
    const date = new Date();
    // find the unsent message in the array and make it sent
    let newArray = messages.map(function (obj) {
      if (obj.username === "You" && obj.sent === false) {
        obj.message = message;
        obj.sent = true;
        obj.time = `${date.toLocaleString("en-US", {
          hour: "numeric",
          minute: "numeric",
          hour12: true,
        })}`;
      }
      return obj;
    });
    setComposed_message(false);
    setMessages(newArray);
    newMessageRef.current.value = "";
  }

  if (!roomId) {
    return <div />;
  }
  return (
    <div className="font-mono h-full px-4">
      <section className="h-5/6 overflow-y-auto overflow-x-hidden w-full scrollbar-thin scrollbar-thumb-green-400">
        {messages.map((message, index) => {
          console.log(message);
          let msg_color;
          if (message.username === "You") {
            msg_color = colorHashLight.hex(username);
          } else {
            msg_color = colorHashLight.hex(message.username);
          }
          return (
            <div
              style={{ color: msg_color }}
              key={index}
              className={"flex px-4 hue-rotate-180 my-1 text-2xl"}
            >
              <p style={{ color: msg_color }} className="pr-4">
                {message.username} -
              </p>
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

      <div className="bg-brown-dark">
        <input
          onChange={handleChange}
          className="text-3xl bg-brown-dark text-white placeholder-gray-500 outline-none"
          placeholder="Send a message"
          ref={newMessageRef}
          onKeyDown={(event) => {
            if (event.key === "Enter") {
              handleSendMessage();
            }
          }}
        />
      </div>
    </div>
  );
}

export default MessagesContainer;
