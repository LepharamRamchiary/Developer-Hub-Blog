import express, { json } from "express";
import mongoose from "mongoose";
import dotenv from 'dotenv';
import userRouter from "./routes/user.route.js";
import authRouter from "./routes/auth.route.js";
const PORT = 8000;
dotenv.config();

// Middleware
const app = express();

// sending json data to db
app.use(express.json());

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