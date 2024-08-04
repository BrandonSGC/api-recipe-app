import express, { Request, Response } from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import { sequelize } from "./config/db";
import userRoutes from "./routes/user.routes";

export async function connectDB() {
  try {
    await sequelize.authenticate();
    sequelize.sync();
    //console.log("[server]: Connection to DB succesful");
  } catch (error) {
    console.error(error);
  }
}

const server = express();
dotenv.config();
connectDB();

// Middlewares
server.use(express.json());
server.use(morgan("dev"));

// Routes & Routers
server.get("/", (req: Request, res: Response) => {
  res.status(200).json({ message: "Hi there!!!" });
});
server.use("/api/users", userRoutes);

export default server;
