import logger from "./utils/logger.js";

const EVENTS = {
  connection: "connection",
  disconnect: "disconnect",
  CLIENT: {
    CREATE_ROOM: "CREATE_ROOM",
    SEND_ROOM_MESSAGE: "SEND_ROOM_MESSAGE",
    JOIN_ROOM: "JOIN_ROOM",
    LEAVE_ROOM: "LEAVE_ROOM",
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
    // socket.leave(socket.id);

    // Disconnectc handling
    socket.on("disconnect", (reason) => {
      console.log(
        "Socket " + socket.id + " Disconnected! Connected:" + socket.connected
      );
      if (socket.connected == false) {
        for (let key in rooms) {
          if (rooms[key].users.includes(socket.id)) {
            console.log("deleting " + key);
            delete rooms[key];
          }
        }
        socket.broadcast.emit(EVENTS.SERVER.ROOMS, rooms);
        //emit back to the room creator with all the rooms
        socket.emit(EVENTS.SERVER.ROOMS, rooms);
      }
    });

    // When a user creates a new room
    socket.on(EVENTS.CLIENT.CREATE_ROOM, ({ roomName, roomId }) => {
      console.log("Creating a room/ Chatify Button pressed");

      let previous_room = Array.from(socket.rooms.values())[0];
      // console.log(1, io.of("/").adapter.rooms);
      // console.log(2, rooms);

      if (io.of("/").adapter.rooms[roomId] != undefined) {
        console.log("room exists, joining it instead");
        let room_users = rooms[roomId].users;

        room_users.push(socket.id);

        socket.join(roomId);
        rooms[roomId].users = room_users;

        // socket.emit(EVENTS.SERVER.JOINED_ROOM, roomId);
        // console.log(arrayWithFilterObjects);
      } else {
        //add a new room to the rooms object
        rooms[roomId] = {
          name: roomName,
          users: [socket.id],
        };
        socket.join(roomId);
      }

      if (rooms[previous_room] && rooms[previous_room].name !== roomName) {
        // after creating or joing a room, leave the previous one.
        console.log(
          "After creating or joing a new room, leaving room " + previous_room
        );
        socket.leave(previous_room);
        let previous_users = rooms[previous_room].users;
        rooms[previous_room].users = previous_users.filter(
          (item) => item !== socket.id
        );
        if (rooms[previous_room].users.length < 1) {
          console.log("There are no more users in this room, deleting");
          console.log("Rooms:", rooms);
          delete rooms[previous_room];
          console.log("Rooms:", rooms);
        }
        socket.broadcast.emit(EVENTS.SERVER.ROOMS, rooms);
        //emit back to the room creator with all the rooms
        socket.emit(EVENTS.SERVER.ROOMS, rooms);
      }

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

      let room_users = rooms[roomId].users;
      let previous_room = Array.from(socket.rooms.values())[0];

      room_users.push(socket.id);

      rooms[roomId].users = room_users;

      socket.emit(EVENTS.SERVER.JOINED_ROOM, roomId);

      //now after joing a room, leave the previous one.
      console.log("Now after joing a new room, leaving room " + previous_room);
      socket.leave(previous_room);
      if (rooms[previous_room]) {
        let previous_users = rooms[previous_room].users;
        rooms[previous_room].users = previous_users.filter(
          (item) => item !== socket.id
        );
        if (rooms[previous_room].users.length < 1) {
          console.log("There are no more users in this room, deleting");
          console.log("Rooms:", rooms);
          delete rooms[previous_room];
          console.log("Rooms:", rooms);
        }
        socket.broadcast.emit(EVENTS.SERVER.ROOMS, rooms);
        //emit back to the room creator with all the rooms
        socket.emit(EVENTS.SERVER.ROOMS, rooms);
      }
    });

    //WHen a user leaves a room
    socket.on(EVENTS.CLIENT.LEAVE_ROOM, (roomId) => {
      // rooms[roomId] = {
      //   name: "empty"
      // }

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
