import express from "express"
import dotenv from "dotenv"
import authRoutes from "./routes/auth.routes.js"
import { connectToMongoDB } from "./db/connectToMONGOdb.js"

dotenv.config()
const PORT = process.env.PORT || 5000

const app = express()
app.use(express.json())


app.get("/" ,(req,res)=>{
    res.json("Hello api")
})

app.use("/api/auth" , authRoutes)

 

app.listen(PORT , ()=>{
    connectToMongoDB()
    console.log("server is runing on port 5000");
    
})