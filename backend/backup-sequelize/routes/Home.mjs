import express from "express";
const router = express.Router();
import { getHomeData } from "../controllers/Home.mjs";

router.route("/").get(getHomeData);

export default router;
