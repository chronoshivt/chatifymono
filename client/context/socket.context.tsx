import { createContext, useContext, useEffect } from "react";
import io, { Socket } from "socket.io-client";
import { SOCKET_URL } from "../config/default";
import { useState } from "react";
import EVENTS from "../config/events";
interface Context {
  socket: Socket;
  username?: string;
  setUsername: Function;
  messages?: {
    message: string;
    time: string;
    username: string;
    sent: boolean;
  }[];
  setMessages: Function;
  roomId?: string;
  rooms: object;
}
// socket
const socket = io(SOCKET_URL);

// init context
const SocketContext = createContext<Context>({
  socket,
  setUsername: () => false,
  setMessages: () => false,
  rooms: {},
  messages: [],
});

function SocketsProvider(props: any) {
  const [username, setUsername] = useState("");
  const [roomId, setRoomId] = useState("");
  const [rooms, setRooms] = useState({});
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    window.onfocus = function () {
      document.title = "Chatify :D";
    };
  }, []);
  // serve the rooms
  socket.on(EVENTS.SERVER.ROOMS, (value) => {
    setRooms(value);
  });
  // after joining the rooms
  socket.on(EVENTS.SERVER.JOINED_ROOM, (value) => {
    setRoomId(value);
    setMessages([]);
  });

  // receiving a message
  socket.on(EVENTS.SERVER.ROOM_MESSAGE, ({ message, username, time }) => {
    if (!document.hasFocus()) {
      document.title = "new message..!";
    }
    let newArray = messages.map(function (obj) {
      if (obj.username === username && obj.sent === false) {
        obj.message = message;
        obj.time = time;
        obj.sent = true;
      }
      return obj;
    });
    setMessages(newArray);
  });

  // when a user is composing a message
  socket.on(
    EVENTS.SERVER.COMPOSED_ROOM_MESSAGE,
    ({ message, username, time }) => {
      if (!document.hasFocus()) {
        document.title = "msg comppsing..!";
      }
      let result = messages.find(function (obj) {
        return obj.username === username && obj.sent === false;
      });
      // check if user was already composing a message
      if (!result) {
        // if not, add a new message to the array
        setMessages([...messages, { message, username, time, sent: false }]);
      } else {
        // if yes find the unsent message and edit it
        let newArray = messages.map(function (obj) {
          if (obj.username === username && obj.sent === false) {
            obj.message = message;
          }
          return obj;
        });
        setMessages(newArray);
      }
    }
  );

  // when a user stops typing
  socket.on(EVENTS.SERVER.ROOM_HIDDEN, ({ username }) => {
    if (!document.hasFocus()) {
      document.title = "user " + username + " is hiding..!";
    }
    // remove the composing message from the array
    let newArray = [];
    messages.map(function (obj) {
      if (obj.username === username && obj.sent === false) {
      } else {
        newArray.push(obj);
      }
    });
    setMessages(newArray);
  });

  return (
    <SocketContext.Provider
      value={{
        socket,
        username,
        setUsername,
        rooms,
        roomId,
        messages,
        setMessages,
      }}
      {...props}
    />
  );
}

export const useSockets = () => useContext(SocketContext);

export default SocketsProvider;
