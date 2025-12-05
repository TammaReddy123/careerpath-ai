import pkg from "pg";
import dotenv from "dotenv";

dotenv.config();

const { Pool } = pkg;

if (!process.env.DATABASE_URL) {
  console.error("❌ DATABASE_URL is not set in .env file");
  process.exit(1);
}

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: process.env.DATABASE_URL.includes("neon.tech") 
    ? { rejectUnauthorized: false } 
    : false,
  max: 20,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 10000,
});

// Handle pool errors
pool.on("error", (err) => {
  console.error("Unexpected error on idle client", err);
  process.exit(-1);
});

export const query = (text, params) => pool.query(text, params);

export const connectDB = async () => {
  try {
    // Test connection
    const result = await pool.query("SELECT NOW()");
    console.log("✅ Database connection test successful:", result.rows[0].now);

    // Ensure tables exist (lightweight, runs once on boot)
    await pool.query(`
      CREATE TABLE IF NOT EXISTS users (
        id SERIAL PRIMARY KEY,
        name TEXT NOT NULL,
        email TEXT UNIQUE NOT NULL,
        password TEXT NOT NULL,
        profile_image TEXT,
        gender TEXT CHECK (gender IN ('male', 'female', 'other')),
        bio TEXT,
        created_at TIMESTAMPTZ DEFAULT NOW()
      );
    `);

    // Add new columns if they don't exist (for existing databases)
    try {
      await pool.query(`
        ALTER TABLE users 
        ADD COLUMN IF NOT EXISTS profile_image TEXT,
        ADD COLUMN IF NOT EXISTS gender TEXT CHECK (gender IN ('male', 'female', 'other')),
        ADD COLUMN IF NOT EXISTS bio TEXT;
      `);
    } catch (e) {
      // Columns might already exist, ignore error
      console.log("Note: Some columns may already exist");
    }

    await pool.query(`
      CREATE TABLE IF NOT EXISTS roadmaps (
        id SERIAL PRIMARY KEY,
        user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
        domain TEXT NOT NULL,
        level TEXT NOT NULL,
        steps JSONB NOT NULL DEFAULT '[]',
        created_at TIMESTAMPTZ DEFAULT NOW()
      );
    `);

    console.log("✅ PostgreSQL Connected and tables ready");
  } catch (error) {
    console.error("❌ PostgreSQL Connection Error:");
    console.error("   Message:", error.message);
    console.error("   Code:", error.code);
    console.error("   Detail:", error.detail);
    
    // Parse DATABASE_URL to show hostname (without password)
    let dbInfo = "Unable to parse";
    try {
      if (process.env.DATABASE_URL) {
        const url = new URL(process.env.DATABASE_URL);
        dbInfo = `${url.protocol}//${url.hostname}:${url.port || 'default'}/${url.pathname.slice(1)}`;
      }
    } catch (e) {
      dbInfo = "Invalid URL format";
    }
    console.error("   Database Host:", dbInfo);
    
    // Specific error handling
    if (error.code === "ENOTFOUND") {
      console.error("\n💡 DNS Resolution Failed - Possible causes:");
      console.error("   1. The database hostname is incorrect or the instance was deleted");
      console.error("   2. Your Neon database might be paused (free tier auto-pauses after inactivity)");
      console.error("   3. Network connectivity issues");
      console.error("\n   Action: Check your Neon dashboard and verify the DATABASE_URL in .env");
      console.error("   Neon Dashboard: https://console.neon.tech/");
      console.error("\n⚠️  Server will continue running, but database operations will fail.");
      console.error("   Fix the database connection and restart the server.");
    } else if (error.code === "ECONNREFUSED") {
      console.error("\n💡 Connection Refused - Check if DATABASE_URL is correct in .env file");
      console.error("\n⚠️  Server will continue running, but database operations will fail.");
    } else if (error.message.includes("password authentication")) {
      console.error("\n💡 Authentication Failed - Check database username and password");
      console.error("\n⚠️  Server will continue running, but database operations will fail.");
    } else if (error.message.includes("does not exist")) {
      console.error("\n💡 Database Not Found - Check if database name is correct");
      console.error("\n⚠️  Server will continue running, but database operations will fail.");
    } else {
      console.error("\n💡 Full error:", error);
      console.error("\n⚠️  Server will continue running, but database operations will fail.");
    }
    
    // Don't exit - let the server continue running so routes are still accessible
    // The routes will handle database errors gracefully
  }
};
