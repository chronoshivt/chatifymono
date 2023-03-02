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


  // when user starts typing
  function handleChange(event) {
    console.log(event.target.value);
    const message = event.target.value;
    const date = new Date();
    let sent = false;
  // if the message is an empty string, remove the message from the chat
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
    // otherwise, emit a new message with what's being typed
    socket.emit(EVENTS.CLIENT.COMPOSE_ROOM_MESSAGE, {
      roomId,
      message,
      username,
      sent,
    });
    console.log(messages);
    // if the composed message was empty before, add a new message to the chat
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
      // otherwise find the already composed message and append it
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
    <div className="font-mono w-full h-full">
      <section className="p-4 h-5/6 overflow-y-auto overflow-x-hidden max-w-full scrollbar-thin scrollbar-thumb-green-400">
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
              className="flex hue-rotate-180 break-normal justify-start text-2xl"
            >
              <p style={{ color: msg_color }} className="">
                {message.username}<span className="saturate-0 text-md">:</span>
              </p>
              <p className="w-full overflow-hidden" key={index}>
                {message.message}
              </p>
              <p className="text-xs text-right saturate-0 w-1/6">{message.time}</p>
            </div>
          );
          //{message.message}
        })}
        <div ref={messageEndRef} />
      </section>

      <div className="bg-brown-dark mx-2 rounded-2xl">
        <input
          onChange={handleChange}
          className="text-2xl bg-brown-dark mx-4 p-1 text-white placeholder-gray-500 outline-none"
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
