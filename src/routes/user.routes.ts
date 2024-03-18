import express from "express";

import { fetchUsers } from "../controllers/user.controllers";

export const router = express.Router();

router.get("/", fetchUsers);
