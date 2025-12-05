import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { query } from "../config/db.js";

// REGISTER
export const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    
    // Validation
    if (!name || !email || !password) {
      return res.status(400).json({ msg: "Name, email and password are required" });
    }

    if (password.length < 6) {
      return res.status(400).json({ msg: "Password must be at least 6 characters" });
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ msg: "Please enter a valid email address" });
    }

    // Check if user already exists
    const existing = await query("SELECT id FROM users WHERE email = $1", [email]);
    if (existing.rows.length) {
      return res.status(400).json({ msg: "User with this email already exists" });
    }

    // Hash password and create user
    const hash = await bcrypt.hash(password, 10);
    const { profile_image, gender } = req.body;
    
    await query(
      "INSERT INTO users (name, email, password, profile_image, gender) VALUES ($1, $2, $3, $4, $5)",
      [
        name.trim(),
        email.toLowerCase().trim(),
        hash,
        profile_image || null,
        gender || null,
      ]
    );

    res.json({ msg: "Registered Successfully ✅" });
  } catch (err) {
    console.error("Registration error:", err);
    
    // Handle specific database errors
    if (err.code === "23505") {
      return res.status(400).json({ msg: "User with this email already exists" });
    }
    
    res.status(500).json({ 
      msg: err.message || "Server error. Please try again later." 
    });
  }
};

// LOGIN
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ msg: "Email and password are required" });
    }

    const userRes = await query("SELECT id, password FROM users WHERE email = $1", [email]);
    const user = userRes.rows[0];
    if (!user) return res.status(400).json({ msg: "User not found" });

    const valid = await bcrypt.compare(password, user.password);
    if (!valid) return res.status(400).json({ msg: "Invalid credentials" });

    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });

    res.json({ msg: "Login successful ✅", token });
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Server error" });
  }
};

// GET USER PROFILE
export const getProfile = async (req, res) => {
  try {
    const userId = req.userId;
    const userRes = await query(
      "SELECT id, name, email, profile_image, gender, bio, created_at FROM users WHERE id = $1",
      [userId]
    );
    const user = userRes.rows[0];
    
    if (!user) {
      return res.status(404).json({ msg: "User not found" });
    }

    res.json({
      id: user.id,
      name: user.name,
      email: user.email,
      profileImage: user.profile_image,
      gender: user.gender,
      bio: user.bio,
      createdAt: user.created_at
    });
  } catch (err) {
    console.error("Get profile error:", err);
    res.status(500).json({ msg: "Server error" });
  }
};

// UPDATE USER PROFILE
export const updateProfile = async (req, res) => {
  try {
    const userId = req.userId;
    const { name, bio, profile_image, gender } = req.body;

    const updates = [];
    const values = [];
    let paramCount = 1;

    if (name) {
      updates.push(`name = $${paramCount++}`);
      values.push(name.trim());
    }
    if (bio !== undefined) {
      updates.push(`bio = $${paramCount++}`);
      values.push(bio);
    }
    if (profile_image !== undefined) {
      updates.push(`profile_image = $${paramCount++}`);
      values.push(profile_image);
    }
    if (gender !== undefined) {
      updates.push(`gender = $${paramCount++}`);
      values.push(gender);
    }

    if (updates.length === 0) {
      return res.status(400).json({ msg: "No fields to update" });
    }

    values.push(userId);
    const queryText = `UPDATE users SET ${updates.join(", ")} WHERE id = $${paramCount} RETURNING id, name, email, profile_image, gender, bio`;
    
    const result = await query(queryText, values);
    res.json({
      msg: "Profile updated successfully",
      user: result.rows[0]
    });
  } catch (err) {
    console.error("Update profile error:", err);
    res.status(500).json({ msg: "Server error" });
  }
};
