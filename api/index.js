import "dotenv/config";
import express, { json } from "express";
import cors from "cors";
import logger from "morgan";

import routes from "./routes.js";

const app = express();

app.use(cors({ origin: "*" }));
app.use(logger("dev"));
app.use(json());

app.use("/", routes);

const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log(`Listening to port ${port}..`);
});
