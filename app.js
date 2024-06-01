import express from "express";
import mongoose from "mongoose";
import dotenv from 'dotenv';
const PORT = 3011;

dotenv.config();                          
      
const app = express();

mongoose.connect(process.env.MONGODB_URI).then(() => {
    console.log("DB connected");
}).catch(err => {
    console.log(err);
})

app.listen(PORT, () => { 
    console.log(`Server is running on port: ${PORT}`)
})
 
