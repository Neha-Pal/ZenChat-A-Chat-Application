import express from "express"
import { isAuthenticated } from "../middleware/verifiedToken.js"
import { sendMessage } from "../controller/message.controller.js"


const router = express.Router()

router.post("/send/:id",isAuthenticated, sendMessage)

export default router