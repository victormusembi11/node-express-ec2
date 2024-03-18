import express, { Request, Response } from "express";

const app = express();

app.use(express.json());

app.listen(5000, () => console.log("Server is running on port 5000"));

app.get("/", (req: Request, res: Response) => {
  res.status(200).json({ message: "Hello, World!" });
});
