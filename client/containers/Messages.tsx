import { useSockets } from "../context/socket.context";
import { useRef } from "react";
import EVENTS from "../config/events";

function MessagesContainer() {
  const { socket, messages, roomId, username, setMessages } = useSockets();
  const newMessageRef = useRef(null);
  // returns the hours number for a date, between 1 and 12
  function hours12(date) {
    return (date.getHours() + 24) % 12 || 12;
  }

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
        time: `${(date.getHours() + 24) % 12 || 12}:${date.getMinutes()}`,
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
      <section className="overflow-y-auto bg-purple-300">
        {messages.map((message, index) => {
          return (
            <div className="flex px-4 my-1 text-2xl">
              <p className="text-gray-800">{message.username} </p>
              <p className="flex-1" key={index}>
                : {JSON.stringify(message.message)}
              </p>
              <p className="">{message.time}</p>
            </div>
          );
          //{message.message}
        })}
      </section>

      <div className="p-4 bg-emerald-300">
        <textarea
          className="text-3xl bg-gray-300 w-full text-red-300"
          rows={1}
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
