import { createServer } from "http";
import { Server } from "socket.io";
import cors from "cors";
import socket from "./socket.js";
import express from "express";

const port = process.env.PORT || 4000;
const host = process.env.HOST || "localhost";
const corsOrigin = ["https://chatifymono.vercel.app", "http://localhost:3000"];
const app = express();

const httpServer = createServer(app);

const io = new Server(httpServer, {
  cors: {
    origin: corsOrigin,
    credentials: true,
  },
});

app.get("/", (_, res) => res.send("Server is up"));

httpServer.listen(port, host, () => {
  console.log("live on port:", port);
  socket({ io });
});
