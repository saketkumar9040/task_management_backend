import express from "express";
import { signUp, login } from "../controllers/userController.js";
import { createTask, deleteTaskById, getAllTask, getTaskById, updateTaskById } from "../controllers/taskController.js";

const router = express.Router();

router.get("/",(req,res)=>{
    res.status(200).json({
        success:true,
        message:"Welcome to task management backend"
    })
})

//   USER  API'S  ==============================================================================>
router.post("/auth/signup", signUp);
router.post("/auth/login", login);

//  TASKS API'S  ================================================================================>
router.post("/tasks", createTask);
router.get("/tasks", getAllTask);
router.get("/tasks/:id", getTaskById);
router.put("/tasks/:id", updateTaskById);
router.delete("/tasks/:id", deleteTaskById);

export default router;