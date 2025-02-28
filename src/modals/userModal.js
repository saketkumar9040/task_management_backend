import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: String,
    email: { type: String, unique: true },
    password: String,
    createdAt: Date,
    updatedAt: Date,
});

export const User = mongoose.model("users", userSchema);