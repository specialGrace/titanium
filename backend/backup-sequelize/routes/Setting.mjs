import express from "express";
const router = express.Router();
import {
  createSetting,
  getSetting,
  getSettings,
  deleteSetting,
  updateSetting,
} from "../controllers/Setting.mjs";
import {
  protect,
  csrfProtection,
  authorizeUser,
} from "../middlewares/auth.mjs";

router
  .route("/")
  .get(getSettings)
  .post(protect, authorizeUser(["admin"]), createSetting);

router
  .route("/:id")
  .get(getSetting)
  .put(protect, authorizeUser(["admin"]), updateSetting)
  .delete(protect, authorizeUser(["admin"]), deleteSetting);

export default router;
