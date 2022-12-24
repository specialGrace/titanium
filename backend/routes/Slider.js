import express from "express";
const router = express.Router();
import {
  getSlider,
  getSliders,
  createSlider,
  updateSlider,
  deleteSlider,
} from "../controllers/Slider.js";
import { protect, csrfProtection, authorizeUser } from "../middlewares/auth.js";

router
  .route("/")
  .get(getSliders)
  .post(protect, authorizeUser(["admin"]), createSlider);

router
  .route("/:id")
  .get(getSlider)
  .put(protect, authorizeUser(["admin"]), updateSlider)
  .delete(protect, authorizeUser(["admin"]), deleteSlider);

export default router;
