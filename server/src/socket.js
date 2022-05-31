import logger from "./utils/logger.js";

const EVENTS = {
  connection: "connection",
  CLIENT: {
    CREATE_ROOM: "CREATE_ROOM",
    SEND_ROOM_MESSAGE: "SEND_ROOM_MESSAGE",
    JOIN_ROOM: "JOIN_ROOM",
    LEAVE_ROOM: "EVENTS.CLIENT.LEAVE_ROOM",
  },
  SERVER: {
    ROOMS: "ROOMS",
    JOINED_ROOM: "JOINED_ROOM",
    ROOM_MESSAGE: "ROOM_MESSAGE",
    LEFT_ROOM: "LEFT_ROOM",
  },
};

const rooms = {};

function socket({ io }) {
  logger.info("Sockets Enabled");

  io.on(EVENTS.connection, (socket) => {
    logger.info(`User connected ${socket.id}`);

    socket.emit(EVENTS.SERVER.ROOMS, rooms);

    // When a user creates a new room
    socket.on(EVENTS.CLIENT.CREATE_ROOM, ({ roomName, roomId }) => {
      console.log(rooms);
      const arrayOfRooms = Object.values(rooms);

      const arrayWithFilterObjects = arrayOfRooms.filter(
        (o) => o.name === roomName
      );

      if (arrayWithFilterObjects.length) {
        console.log("Exists");
        socket.join(roomId);
        rooms[roomId] = {
          name: roomName
        }

        socket.emit(EVENTS.SERVER.JOINED_ROOM, roomId);
        // console.log(arrayWithFilterObjects);
      }

      //add a new room to the rooms object
      rooms[roomId] = {
        name: roomName,
      };

      socket.join(roomId);

      //broadcast an event saying there is a new room
      socket.broadcast.emit(EVENTS.SERVER.ROOMS, rooms);
      //emit back to the room creator with all the rooms
      socket.emit(EVENTS.SERVER.ROOMS, rooms);
      //emit an event back to the room creator
      socket.emit(EVENTS.SERVER.JOINED_ROOM, roomId);
    });

    // When a user sends a room message

    socket.on(
      EVENTS.CLIENT.SEND_ROOM_MESSAGE,
      ({ roomId, message, username }) => {
        const date = new Date();

        socket.to(roomId).emit(EVENTS.SERVER.ROOM_MESSAGE, {
          message,
          username,
          time: `${date.toLocaleString("en-US", {
            hour: "numeric",
            minute: "numeric",
            hour12: true,
          })}`,
        });
      }
    );

    // When a user joins a room

    socket.on(EVENTS.CLIENT.JOIN_ROOM, (roomId) => {
      socket.join(roomId);

      socket.emit(EVENTS.SERVER.JOINED_ROOM, roomId);
    });

    //WHen a user leaves a room
    socket.on(EVENTS.CLIENT.LEAVE_ROOM, (roomId) => {
      
      
      
      rooms[roomId] = {
        name: "empty"
      }

      socket.leave(roomId);


      console.log("Leaving room", roomId);

      socket.emit(EVENTS.SERVER.LEFT_ROOM, roomId);
      //broadcast an event saying there is a new room
      socket.broadcast.emit(EVENTS.SERVER.ROOMS, rooms);
      //emit back to the room creator with all the rooms
      socket.emit(EVENTS.SERVER.ROOMS, rooms);
      console.log("Rooms:", rooms);
    });
  });
}

export default socket;
