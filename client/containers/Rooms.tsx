import { useSockets } from "../context/socket.context";
import { useRef, useEffect, useState } from "react";
import EVENTS from "../config/events";
import { useSession } from "next-auth/react";
import ColorHash from "color-hash";
import forward_image from "../public/forward.svg";
import previous_image from "../public/previous.svg";
import Image from "next/image";

const colorHash = new ColorHash({ hue: 150 });

interface Artist {
  name: string;
  uri: string;
}

interface Album {
  images: { url: string }[];
}

interface TrackItem {
  name: string;
  artists: Artist[];
  album: Album;
}

interface PlayingState {
  item?: TrackItem;
}

interface Room {
  name: string;
}

interface RoomsContainerProps {
  username: string;
}

function RoomsContainer({ username }: RoomsContainerProps): JSX.Element {
  const { data: session } = useSession();
  const [playing, setPlaying] = useState<PlayingState>({});
  const { socket, roomId, rooms } = useSockets();
  const newRoomRef = useRef<HTMLInputElement>(null);

  const getMyPlaying = async (): Promise<void> => {
    const res = await fetch("/api/playing");
    const items: PlayingState = await res.json();
    setPlaying(items);
  };

  const skipToNext = async (): Promise<void> => {
    const res = await fetch("/api/skip-next");
    if (res.status === 200) {
      setTimeout(getMyPlaying, 500);
    }
  };

  const skipToPrevious = async (): Promise<void> => {
    const res = await fetch("/api/skip-previous");
    if (res.status === 200) {
      setTimeout(getMyPlaying, 500);
    }
  };

  const playChosenTrack = async (key: string): Promise<void> => {
    const res = await fetch("/api/play-track", {
      method: "PUT",
      body: JSON.stringify(key),
      headers: {
        "Content-Type": "application/json",
      },
    });
    await res.json();
    await getMyPlaying();
  };

  useEffect(() => {
    const roomName = playing.item?.artists[0]?.name;
    const roomId = playing.item?.artists[0]?.uri;

    if (!roomName || !roomId) return;
    if (String(roomName) === rooms[roomId]?.name) return;
    if (!String(roomName).trim() || !String(roomId).trim()) return;

    socket.emit(EVENTS.CLIENT.CREATE_ROOM, { roomName, roomId });
    if (newRoomRef.current) {
      newRoomRef.current.value = "";
    }
  }, [playing, rooms, socket]);

  const handleJoinRoom = async (key: string): Promise<void> => {
    if (key === roomId) return;
    await playChosenTrack(key);
    socket.emit(EVENTS.CLIENT.JOIN_ROOM, key);
  };

  return (
    <nav className="mx-4 h-full md:mt-0 font-mono">
      <div className="text-xs hidden">
        <input
          className="bg-gray-500"
          ref={newRoomRef}
          placeholder="Room name"
        />
        <br />
      </div>
      <p className="text-white text-center text-xl w-full">
        {"Active Rooms (Click To Join):"}
      </p>
      <section className="flex rotate-180 text-lg overflow-y-hidden overflow-x-auto scrollbar-thin scrollbar-thumb-green-300">
        <div className="rotate-180 flex">
          {Object.entries(rooms).map(([key, room]: [string, Room]) => {
            if (room.name === "empty" || room.name === undefined) {
              return null;
            }
            return (
              <div key={key}>
                <button
                  style={{ color: colorHash.hex(key) }}
                  className={
                    key === roomId
                      ? "py-4"
                      : "hover:scale-110 truncate text-2xl transition transform duration-500 px-6 py-4"
                  }
                  disabled={key === roomId}
                  title={`Join ${room.name}`}
                  onClick={() => handleJoinRoom(key)}
                >
                  {room.name}
                </button>
              </div>
            );
          })}
        </div>
      </section>
      <div className="text-white -mt-4">
        <div className="flex justify-between my-2 w-full">
          <div className="w-1/3 flex flex-col justify-center items-center">
            <button
              className=""
              onClick={skipToPrevious}
            >
              <Image width={64} height={64} src={previous_image} alt="Previous" />
            </button>
            <button
              className=""
              onClick={skipToNext}
            >
              <Image width={64} height={64} src={forward_image} alt="Next" />
            </button>
          </div>
          <section className="text-center flex flex-col justify-center w-1/3">
            <div className="flex text-2xl flex flex-col items-center">
              <p className="text-white tracking-tight font-semibold">
                Current Room:
              </p>
              <p className="text-green-500">{rooms[roomId]?.name}</p>
              <p className="text-xl">User: {session?.token?.name ?? 'Unknown'}</p>
            </div>
          </section>
          <div className="w-1/3 flex flex-col justify-center items-center">
            {playing.item?.album.images[1]?.url && (
              <img 
                src={playing.item.album.images[1].url}
                className="rounded-xl w-32 h-32"
                alt="Album cover"
              />
            )}
            <p className="">
              {playing.item?.name 
                ? `Song: ${playing.item.name}`
                : "Play a song on Spotify"}
            </p>
            {playing.item?.name && (
              <p>
                by: {playing.item.artists[0]?.name ?? 'Unknown Artist'}
              </p>
            )}
          </div>
        </div>
        <button
          className="text-4xl w-full rounded-2xl bg-green-500 shadow-lg hover:scale-90 hover:text-white text-black transition-transform duration-1000 ease-out"
          onClick={getMyPlaying}
        >
          Chat
        </button>
      </div>
    </nav>
  );
}

export default RoomsContainer;