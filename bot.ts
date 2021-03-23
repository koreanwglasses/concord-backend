import { Client } from "discord.js";
import { io } from "./sockets";

export const client = new Client();

client.on("ready", () => {
  console.log(`Discord client ready! Logged in as ${client.user.tag}`);
});

client.on("message", (message) => {
  io.emit("discord-message", message);
});
