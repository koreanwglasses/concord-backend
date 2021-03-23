import { port, mode } from "./config";
import { client } from "./bot";
import { http } from "./app";
import { token } from "./config.local";

client.login(token);
http.listen(port);
console.log(`App listening on port ${port}...`);
console.log(`Running in ${mode} mode`);
