import { User } from "../modals/userModal.js";
import jwt from "jsonwebtoken"

export const signUp = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        if (
            name === "" ||
            email === "" ||
            password === ""
        ) {
            return res.status(400).json({
                success: false,
                message: "Please Enter all the details",
            });
        }
        const userExists = await User.findOne({ email });
        if (userExists) {
            return res.status(409).json({
                sucess: false,
                message: "Email ID already in use"
            })
        }

        let token = jwt.sign({ email }, process.env.JWT_SECRET);

        const createUser = await User.create({
            name, email, password,
            createdAt: new Date(Date.now()),
        });
        return res.status(201).json({
            success: true,
            message: "User registered successfully",
            data: createUser,
            token
        });

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};

export const login = async (req, res) => {
    try {
        const {
            email,
            password
        } = req.body;

        const findUser = await User.findOne({ email, password });
        if (!findUser) {
            return res.status(404).json({
                success: false,
                message: "No user found"
            })
        };
        let token = jwt.sign({ email }, process.env.JWT_SECRET);

        return res.status(200).json({
            success: true,
            message: "User login successfully",
            token
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};