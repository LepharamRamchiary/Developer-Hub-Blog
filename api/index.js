import express from "express";
import mongoose from "mongoose";
import 'dotenv/config';
const PORT = 3011;
const MONGODB_URI = process.env.MONGODB_URI;

const app = express();

mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log("DB connected");
}).catch(err => {
    console.log(err);
})

app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`)
})

