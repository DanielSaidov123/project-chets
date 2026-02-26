import express from "express"
import { getUserForSidebar } from "../controllers/user.controller.js"
import { protectRoute } from "../middleware/protectRoute.js"

const rourer = express.Router()

rourer.get("/" , protectRoute,getUserForSidebar )


export default rourer