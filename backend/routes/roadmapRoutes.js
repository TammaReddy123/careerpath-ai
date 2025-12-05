import { Router } from "express";
import {
  generateRoadmap,
  saveRoadmap,
  getAllRoadmaps,
  deleteRoadmap,
} from "../controllers/roadmapController.js";
import { requireAuth } from "../middleware/auth.js";

const router = Router();

// Public: rule-based roadmap generator
router.post("/generate", generateRoadmap);

// Protected: saved roadmaps
router.post("/save", requireAuth, saveRoadmap);
router.get("/all", requireAuth, getAllRoadmaps);
router.delete("/:id", requireAuth, deleteRoadmap);

export default router;
