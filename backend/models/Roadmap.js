import mongoose from "mongoose";

const roadmapSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    domain: { type: String, required: true },
    level: { type: String, required: true },
    steps: { type: Array, default: [] },
  },
  { timestamps: true }
);

export default mongoose.model("Roadmap", roadmapSchema);


