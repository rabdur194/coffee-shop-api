import { Request, Response } from "express";
import pool from "../lib/db.js";

export const getAllFeatures = async (req: Request, res: Response) => {
  try {
    const result = await pool.query(`
      SELECT * FROM "Feature"
      ORDER BY id ASC
    `);

    res.json(result.rows);
  } catch (error) {
    console.error("DATABASE ERROR:", error);
    res.status(500).json({ message: "Failed to fetch menu" });
  }
};
