import express, { json } from "express";
import mongoose from "mongoose";
import dotenv from 'dotenv';
import userRouter from "./routes/user.route.js";
import authRouter from "./routes/auth.route.js";
const PORT = 3011;
dotenv.config();                          

// Middelware
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