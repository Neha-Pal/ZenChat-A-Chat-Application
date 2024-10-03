import express from "express";
import dotenv from "dotenv";


const app = express();




app.get("/",(req, res)=>{
    res.send("Backend")
})

const PORT = process.env.PORT || 6000
app.listen(PORT, ()=>{
    console.log(`Server is running on PORT ${PORT}`)
})