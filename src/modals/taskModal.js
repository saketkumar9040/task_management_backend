import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
     title:String,
     description:String,
     createdAt:Date,
     updatedAt:Date,
});

export const User = mongoose.model("users",userSchema);