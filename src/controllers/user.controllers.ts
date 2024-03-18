import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function fetchUsers(req: Request, res: Response) {
  try {
    const users = await prisma.user.findMany({
      select: {
        id: true,
        email: true,
        name: true,
      },
    });

    res.status(200).json({ users: users });
  } catch (error) {
    res.status(500).json({ message: "Error accessing endpoint" });
  }
}
