import express from "express";

import { router } from "./routes/user.routes";

const app = express();

app.use(express.json());

app.listen(5000, () => console.log("Server is running on port 5000"));

app.use("/api/v1/users", router);
