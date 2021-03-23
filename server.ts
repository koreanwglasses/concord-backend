import { port, mode } from "./config"
import bot from "./bot";
import app from "./app";

bot.login();
app.listen(port);
console.log(`App listening on port ${port}...`);
console.log(`Running in ${mode} mode`)