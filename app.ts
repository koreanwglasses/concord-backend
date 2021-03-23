import * as express from "express";
import * as cors from "cors";
import { resolve } from "path";

// Create the express application
const app = express();

app.use(cors())

app.get("/api/test", (_, response) => {
  response.status(200).json({message: "hello world! :3"})
})

// Declare the path to frontend's static assets
app.use(express.static(resolve("../frontend/static")));

// Intercept requests to return the frontend's static entry point
app.get("*", (_, response) => {
  response.sendFile(
    resolve(
      "../frontend/build/index.html"
    )
  );
});

export default app;
