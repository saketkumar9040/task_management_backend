import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
     title: String,
     description: String,
     userId: mongoose.Schema.Types.ObjectId,
     createdAt: Date,
     updatedAt: Date,
});

export const Task = mongoose.model("tasks", taskSchema);