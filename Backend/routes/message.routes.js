import express from "express"
import { isAuthenticated } from "../middleware/verifiedToken.js"
import { sendMessage, getMessage } from "../controller/message.controller.js"


const router = express.Router()

router.post("/send/:id",isAuthenticated, sendMessage)
router.get("/:id",isAuthenticated, getMessage)

export default router