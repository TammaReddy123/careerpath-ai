import roadmaps from "../data/roadmaps.js";
import { query } from "../config/db.js";

// Generate roadmap from static rule engine
export const generateRoadmap = (req, res) => {
  const { domain, level } = req.body;

  if (!domain || !level)
    return res.status(400).json({ msg: "domain & level required" });

  const domainData = roadmaps[domain];
  if (!domainData) return res.status(404).json({ msg: "Domain not found" });

  const levelData = domainData[level];
  if (!levelData) return res.status(404).json({ msg: "Level not found" });

  res.json({
    domain,
    level,
    steps: levelData,
  });
};

// Save a generated roadmap for logged-in user
export const saveRoadmap = async (req, res) => {
  try {
    const { domain, level, steps } = req.body;
    if (!domain || !level || !steps) {
      return res
        .status(400)
        .json({ msg: "domain, level and steps are required" });
    }

    const result = await query(
      "INSERT INTO roadmaps (user_id, domain, level, steps) VALUES ($1, $2, $3, $4) RETURNING *",
      [req.userId, domain, level, JSON.stringify(steps)]
    );

    res.status(201).json({ msg: "Roadmap saved", roadmap: result.rows[0] });
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Failed to save roadmap" });
  }
};

// Get all saved roadmaps for logged-in user
export const getAllRoadmaps = async (req, res) => {
  try {
    const items = await query(
      "SELECT * FROM roadmaps WHERE user_id = $1 ORDER BY created_at DESC",
      [req.userId]
    );
    res.json(items.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Failed to fetch roadmaps" });
  }
};

// Delete a saved roadmap
export const deleteRoadmap = async (req, res) => {
  try {
    const { id } = req.params;

    const result = await query(
      "DELETE FROM roadmaps WHERE id = $1 AND user_id = $2 RETURNING id",
      [id, req.userId]
    );

    if (!result.rows.length) {
      return res.status(404).json({ msg: "Roadmap not found" });
    }

    res.json({ msg: "Roadmap deleted" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Failed to delete roadmap" });
  }
};
