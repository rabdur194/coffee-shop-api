import { Router } from "express";
import { getAllFeatures } from "../controllers/featureController.js";
const router = Router();
router.get("/", getAllFeatures);
export default router;
