import { Task } from "../modals/taskModal.js";

export const createTask = async (req, res) => {
    try {
        const { title, description, userId } = req.body;
        if (title == "" || description == "" || userId == "") {
            return res.status(400).json({
                success: false,
                message: "Title / Description cannot be Empty"
            })
        };
        const createTask = await Task.create({ title, description, userId });
        return res.status(201).json({
            success: true,
            message: "Task created successfully",
            data: createTask
        })
    } catch (error) {
        return res.status(500).json({ success: false, message: error.message })
    }
}

export const getAllTask = async (req, res) => {
    try {
        const taskData = await Task.find({});
        return res.status(200).json({
            success: true,
            message: "Task Fetched Successfully",
            data: taskData
        })
    } catch (error) {
        return res.status(500).json({ success: false, message: error.message })
    }
}

export const getTaskById = async (req, res) => {
    try {
        const { id } = req.params;
        if (!id || id == null || id == undefined) {
            return res.status(400).json({
                success: false,
                message: "Task ID cannot be null"
            })
        }
        const taskData = await Task.findById(id);
        return res.status(200).json({
            success: false,
            message: "Task Fetched Successfully",
            data: taskData
        })
    } catch (error) {
        return res.status(500).json({ success: false, message: error.message })
    }
};

export const updateTaskById = async (req, res) => {
    try {
        const { id } = req.params;
        const { title, description } = req.body;

        if (!id || id == null || id == undefined) {
            return res.status(400).json({
                success: false,
                message: "Task ID cannot be null"
            })
        }
        if (title == "" && description == "") {
            return res.status(400).json({
                success: false,
                message: "Title / Description cannot be Empty"
            })
        };

        const taskExists = await Task.findById(id);
        const updateTask = await Task.findByIdAndUpdate(id, { "title": title || taskExists.title, "description": description || taskExists.description }, { new: true });
        return res.status(200).json({
            success: false,
            message: "Task updated Successfully",
            data: updateTask
        })
    } catch (error) {
        return res.status(500).json({ success: false, message: error.message })
    }
};

export const deleteTaskById = async (req, res) => {
    try {
        const { id } = req.params;

        if (!id || id == null || id == undefined) {
            return res.status(400).json({
                success: false,
                message: "Task ID cannot be null"
            })
        }

        const deleteTask = await Task.findByIdAndDelete(id);
        return res.status(200).json({
            success: false,
            message: "Task Deleted Successfully",
        })
    } catch (error) {
        return res.status(500).json({ success: false, message: error.message })
    }
}