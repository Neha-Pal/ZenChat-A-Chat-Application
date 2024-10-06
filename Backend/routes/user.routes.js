import express from "express";
import { isAuthenticated } from "../middleware/verifiedToken.js"

import { getUserForSidebar } from "../controller/user.controller.js"; 

const router = express.Router()

router.get("/",isAuthenticated,getUserForSidebar)

export default router