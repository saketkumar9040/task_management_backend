import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./src/configs/db.js";
import router from "./src/routes/route.js";


dotenv.config();

connectDB();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

app.use('/', router)

app.listen(PORT, () => console.log(`server running on ${PORT}`));