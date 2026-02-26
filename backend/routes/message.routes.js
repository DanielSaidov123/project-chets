import express from "express"
import { sendMessage } from "../controllers/message.controller.js"
import { protectRoute } from "../middleware/protectRoute.js"

const rourer = express.Router()

rourer.post("/send/:id" ,protectRoute,sendMessage)


export default rourer