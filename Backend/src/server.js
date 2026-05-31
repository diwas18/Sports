import dotenv from "dotenv";
import express from "express";
import newsRoutes from "./routes/newsRoutes.js";
import { connectDB } from "../config/db.js";
import rateLimiter from "./middleware/rateLimiter.js";
import cors from "cors"

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5002;

app.use(express.json());
app.use(rateLimiter);
app.use(cors({
    origin: "http://localhost:5173", // your frontend URL
    credentials: true
}));
 
app.use("/api/news", newsRoutes);

const startServer = async () => {
    try {
        await connectDB();
        app.listen(PORT, () => {
            console.log(`Server started on port ${PORT}`);
        });
    } catch (error) {
        console.error("Server failed to start", error);
    }
};

startServer();