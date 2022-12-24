import express from "express";
const router = express.Router();
import { getHomeData } from "../controllers/Home.js";
import { protect, csrfProtection, authorizeUser } from "../middlewares/auth.js";

router.route("/").get(getHomeData);

export default router;
