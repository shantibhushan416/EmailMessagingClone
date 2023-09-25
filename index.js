import express, { json } from "express";
import dotenv from "dotenv";
import Connection from "./database/db.js";
import routes from "./routes/Route.js";
import cors from "cors";
import path from "path";

const __dirname = path.resolve();

const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json({ extended: true }));
app.use("/", routes);

app.use(express.static(path.join(__dirname, "./gfrontend/build")));
app.get("*", function (_, res) {
  res.sendFile(
    path.join(__dirname, "./gfrontend/build/index.html"),
    function (err) {
      res.status(500).send(err);
    }
  );
});

dotenv.config();

const PORT = process.env.PORT || 8000;

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

Connection(USERNAME, PASSWORD);

app.listen(PORT, () =>
  console.log(`Server is running successfully on PORT ${PORT}`)
);
