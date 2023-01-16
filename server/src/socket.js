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
function join_room() {

}

function leave_room(socket, roomId) {
  if (!roomId) roomId = "";
  let previous = socket.rooms
  previous.forEach((_room) => {
    
    if( _room === socket.id )return;
    if(_room === roomId) return;
    
    console.log(`Client ${socket.id} is LEAVING ${_room}`)
     let previous_room_users = rooms[_room].users;
      socket.leave(_room);
      rooms[_room].users = previous_room_users.filter(
        (item) => item !== socket.id
      );
      if(rooms[_room].users.length === 0){
        delete rooms[_room];
      }
    });
};

function socket({ io }) {
  logger.info("Sockets Enabled");

  io.on(EVENTS.connection, (socket) => {
    logger.info(`User connected ${socket.id}`);

    socket.emit(EVENTS.SERVER.ROOMS, rooms);

    // Disconnectc handling
    socket.on("disconnect", (reason) => {
      console.log(
        "Socket " + socket.id + " disconnected! Connected: " + socket.connected
      );
      if (socket.connected == false) {
        for (let key in rooms) {
          if(!rooms[key].users) {
            delete rooms[key];
            continue;
          }
          if (rooms[key].users.includes(socket.id)) {
            let previous_room_users = rooms[key].users;
            rooms[key].users = previous_room_users.filter(
              (item) => item !== socket.id
              );
              if(rooms[key].users.length === 0){
              console.log("Deleting " + key +" because "+socket.id+" disconnected.");
              delete rooms[key];
            }
           
          }
        }
        socket.broadcast.emit(EVENTS.SERVER.ROOMS, rooms);
        //emit back to the room creator with all the rooms
        socket.emit(EVENTS.SERVER.ROOMS, rooms);
      }
    });

    // When a user creates a new room
    socket.on(EVENTS.CLIENT.CREATE_ROOM, ({ roomName, roomId }) => {
      console.log(`Client ${socket.id} is requesting to create and/or join room ${roomName}`)

      let previous_rooms = Array.from(socket.rooms);
      if (rooms[roomId] != undefined) {
        console.log("room exists, joining it instead");
        let room_users = rooms[roomId].users;

        room_users.push(socket.id);
        rooms[roomId].users = room_users;
        socket.join(roomId);
      } else {
        //add a new room to the rooms object
        rooms[roomId] = {
          name: roomName,
          users: [socket.id],
        };
        socket.join(roomId);
      }
      if (previous_rooms) {
        leave_room( socket, roomId);
      }
      //broadcast an event saying there is a new room
      socket.broadcast.emit(EVENTS.SERVER.ROOMS, rooms);
      //emit back to the room creator with all the rooms
      socket.emit(EVENTS.SERVER.ROOMS, rooms);
      //emit an event back to the room creator
      socket.emit(EVENTS.SERVER.JOINED_ROOM, roomId);
    });

    // When a user sends a room message

    socket.on(EVENTS.CLIENT.SEND_ROOM_MESSAGE,
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

      console.log(`Client ${socket.id} is requesting to join room ${roomId}`)
      let previous_rooms = Array.from(socket.rooms);
      let room_users = rooms[roomId].users;
      // first join the new room
      socket.join(roomId);
      room_users.push(socket.id);
      rooms[roomId].users = room_users;
      // then leave the room;
      leave_room(socket, roomId);

      //broadcast an event saying there is a new room
      socket.broadcast.emit(EVENTS.SERVER.ROOMS, rooms);
       //emit back to the room creator with all the rooms
      socket.emit(EVENTS.SERVER.ROOMS, rooms);
       //emit an event back to the room creator
      socket.emit(EVENTS.SERVER.JOINED_ROOM, roomId);
    });

  });
}

export default socket;
