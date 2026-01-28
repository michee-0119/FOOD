import { configDotenv } from "dotenv";
import express, { Application } from "express";
import cors from "cors";
import { userRouter } from "./routers";
import connectToMongoDb from "./mongoDB";

configDotenv();

const app: Application = express();

app.use(cors());
app.use(express.json());

app.use("/users", userRouter);

app.listen(8000, () => {
  connectToMongoDb();
  console.log("http://localhost:8000");
});
