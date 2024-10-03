import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config()

mongoose.connect(process.env.MONGO_URI).then(()=>{
    console.log("MongoDB connected")
})
.catch((err)=>{
    console.log(err)
})

const app = express();

const PORT = process.env.PORT || 6000

app.get("/",(req, res)=>{
    res.send("Backend")
})

app.listen(PORT, ()=>{
    console.log(`Server is running on PORT ${PORT}`)
})