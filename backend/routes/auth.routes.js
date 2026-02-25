import express from "express"
import { loginUser, logoutUser, signupUser } from "../controllers/auth.controller.js"

const rourer = express.Router()

rourer.post("/signup" ,signupUser)

rourer.post('/login' ,loginUser)

rourer.post('/logout',logoutUser)


export default rourer