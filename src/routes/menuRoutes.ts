import { Router } from "express";
import { getAllCoffees } from "../controllers/menuControllers.js";
const router = Router();
router.get("/", getAllCoffees);
export default router;
