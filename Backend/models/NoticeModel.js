import mongoose from "mongoose";

const noticeSchema = new mongoose.Schema({
  content: { type: String, required: true },
}, { timestamps: true }); // This adds createdAt and updatedAt fields

export const Notice = mongoose.model("Notice", noticeSchema);