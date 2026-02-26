import express from "express"
import { getMessage, sendMessage } from "../controllers/message.controller.js"
import { protectRoute } from "../middleware/protectRoute.js"

const rourer = express.Router()

rourer.get("/:id" ,protectRoute,getMessage)
rourer.post("/send/:id" ,protectRoute,sendMessage)


export default rourer