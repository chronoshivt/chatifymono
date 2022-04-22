import { useSockets } from "../context/socket.context";
import { useEffect, useRef } from "react";
import EVENTS from "../config/events";

function MessagesContainer() {
  const { socket, messages, roomId, username, setMessages } = useSockets();
  const newMessageRef = useRef(null);
  // returns the hours number for a date, between 1 and 12
  function hours12(date) {
    return (date.getHours() + 24) % 12 || 12;
  }

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
      <section className="overflow-y-auto bg-black">
        {messages.map((message, index) => {
          return (
            <div
              key={index}
              className={
                message.username === "You"
                  ? "flex px-4 py-1 bg-purple-300 border-purple-500 border-t-4 text-2xl"
                  : "flex px-4 py-1 border-yellow-600 border-t-4  bg-yellow-300 text-2xl"
              }
            >
              <p className="text-gray-800 pr-1">{message.username} -</p>
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

      <div className="p-4 bg-emerald-300">
        <input
          onKeyPress={(e) => {
            if (e.key === "Enter") {
              handleSendMessage();
            }
          }}
          className="text-3xl bg-gray-300 w-full text-red-300"
          placeholder="Tell us what you are thinking"
          ref={newMessageRef}
        />
      </div>
      <button className="py-4 px-8 bg-orange-200 " onClick={handleSendMessage}>
        SEND MESSAGE
      </button>
    </div>
  );
}

export default MessagesContainer;
