import { Client } from "discord.js";
import * as config from "./config.local";

const client = new Client();

client.on("message", (message) => {
  console.log(message.content);
});

const login = () => client.login(config.token);

export default { login };
