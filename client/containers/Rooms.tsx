import { useSockets } from "../context/socket.context";
import { useRef, useEffect, useState } from "react";
import EVENTS from "../config/events";
import { useSession } from "next-auth/react";
import ColorHash from "color-hash";
import Image from "next/image";
import pause_image from "../public/pause.svg";
import play_image from "../public/play.svg";
import spotify_logo from "../public/logos.svg";

const colorHash = new ColorHash({ hue: 150 });

interface Artist {
  name: string;
  uri: string;
}

interface Album {
  images: { url: string }[];
  uri: string;
}

interface TrackItem {
  name: string;
  artists: Artist[];
  album: Album;
  uri: string;
}

interface PlayingState {
  item?: TrackItem;
  is_playing?: boolean;
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

  const pausePlayback = async (): Promise<void> => {
    const res = await fetch("/api/pause");
    if (res.ok) {
      setPlaying((prev) => ({ ...prev, is_playing: false }));
    }
  };

  const resumePlayback = async (): Promise<void> => {
    const res = await fetch("/api/resume");
    if (res.ok) {
      setPlaying((prev) => ({ ...prev, is_playing: true }));
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

    if (
      !roomName ||
      !roomId ||
      String(roomName) === rooms[roomId]?.name ||
      !String(roomName).trim() ||
      !String(roomId).trim()
    )
      return;

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

  const renderRoomButtons = () => (
    <section className="flex rotate-180 text-lg overflow-y-hidden overflow-x-auto scrollbar-thin scrollbar-thumb-green-300">
      <div className="rotate-180 flex">
        {Object.entries(rooms).map(([key, room]: [string, Room]) => {
          if (room.name === "empty" || room.name === undefined) return null;
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
  );

  const renderPlaybackControls = () => (
    <div className="w-1/3 flex flex-col justify-center items-center">
      <button
        className="text-4xl bg-green-500 rounded-full w-16 h-16 p-2 flex items-center justify-center hover:bg-green-600 transition-colors duration-300"
        onClick={playing.is_playing ? pausePlayback : resumePlayback}
      >
        <Image
          className=""
          width={64}
          height={64}
          alt="controls"
          src={playing.is_playing ? pause_image : play_image}
        />
      </button>
    </div>
  );

  const renderCurrentRoom = () => (
    <section className="text-center flex flex-col justify-center w-1/3">
      <div className="flex text-2xl flex-col items-center">
        <div className="flex items-center mb-2">
          <p className="text-white tracking-tight font-semibold">Current Room:</p>
        </div>
        <p className="text-green-500">{rooms[roomId]?.name}</p>
        <p className="text-xl">User: {session?.token?.name ?? "Unknown"}</p>
      </div>
    </section>
  );

  const renderPlayingInfo = () => (
    <div className="w-1/3 flex flex-col justify-center items-center">
          <Image
            src={spotify_logo}
            alt="Spotify Logo"           
            className=""
            height={64}
          />
      {playing.item?.album.images[1]?.url && (
        <img
          src={playing.item.album.images[1].url}
          className="rounded-xl w-32 h-32"
          alt="Album cover"
        />
      )}
      <p className="">
        {playing.item?.name ? (
          <a
            href={playing.item.album.uri}
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-400 hover:underline"
          >
            Song: {playing.item.name}
          </a>
        ) : (
          "Play a song on Spotify"
        )}
      </p>
      {playing.item?.name && (
        <p>
          by:{" "}
          {playing.item.artists[0] ? (
            <a
              href={playing.item.artists[0].uri}
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-400 hover:underline"
            >
              {playing.item.artists[0].name}
            </a>
          ) : (
            "Unknown Artist"
          )}
        </p>
      )}
    </div>
  );

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
      {renderRoomButtons()}
      <div className="text-white -mt-4">
        <div className="flex justify-between my-2 w-full">
          {renderPlaybackControls()}
          {renderCurrentRoom()}
          {renderPlayingInfo()}
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