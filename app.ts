import * as express from "express";
import { resolve } from "path";
import { mode } from "./config";

// Create the express application
const app = express();

// Declare the path to frontend's static assets
app.use(express.static(resolve("../frontend/static")));

// Intercept requests to return the frontend's static entry point
app.get("*", (_, response) => {
  response.sendFile(
    resolve(
      "../frontend",
      mode === "production" ? "build" : "dist",
      "index.html"
    )
  );
});

export default app;
