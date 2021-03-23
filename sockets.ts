import { Server } from "socket.io";
import { http } from "./app";

export const io = new Server(http, {
  cors: {
    origin: "http://localhost:8080",
    methods: ["GET", "POST"],
  },
});
io.on("connection", (socket) => {
  console.log("New connection!");
  socket.onAny(console.log);
});
