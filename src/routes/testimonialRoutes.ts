import { Router } from "express";
import { getAllTestimonials } from "../controllers/testimonialController.js";

const router = Router();
router.get("/", getAllTestimonials);
export default router;
