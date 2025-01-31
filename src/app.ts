import express, { Request, Response } from "express";
import cors from "cors";
import userRoutes from "./routes/user.routes";

const app = express();

app.use(cors());
app.use(express.json());
app.use("/user", userRoutes);
app.get("/", (req: Request, res: Response) => {
  res.status(200).json({ message: "Health Check!" });
});

export default app;
