import express, { json } from "express";
import mongoose from "mongoose";
import dotenv from 'dotenv';
import userRouter from "./routes/user.route.js";
import authRouter from "./routes/auth.route.js";
import postRouter from "./routes/post.route.js"
import commentRouter from "./routes/comment.route.js";
import cookieParser from "cookie-parser";
import path from "path";

const PORT = 8000;
dotenv.config();

const __dirname = path.resolve();

// Middleware
const app = express();

// sending json data to db
app.use(express.json());

app.use(cookieParser());

mongoose.connect(process.env.MONGODB_URI).then(() => {
    console.log("DB connected");
}).catch(err => {
    console.log(err);
})

app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`)
})


app.use("/api/user", userRouter);
app.use("/api/auth", authRouter);
app.use("/api/post", postRouter);
app.use("/api/comment", commentRouter);

app.use(express.static(path.join(__dirname, "/client/dist")))

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "dist", "index.html"))
})


// Middleware for error heading
app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || "Internal Server Error";
    res.status(statusCode).json({
        success: false,
        statusCode,
        message
    });
});