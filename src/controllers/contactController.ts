import { Request, Response } from "express";
import pool from "../lib/db.js";
export const createContactMessage = async (req: Request, res: Response) => {
  try {
    const { name, email, message } = req.body;
    if (!name || !email || !message) {
      return res.status(400).json({ message: "All fields are required" });
    }
    const result = await pool.query(
      `INSERT INTO "ContactMessage"
            (name, email, message) VALUES($1,$2,$3) RETURNING *
            `,
      [name, email, message],
    );

    res.status(201).json({
      message: "Message sent Successfully",
      data: result.rows[0],
    });
  } catch (error) {
    console.error("DATABASE ERROR:", error);
    res.status(500).json({ message: "Failed to send message" });
  }
};
