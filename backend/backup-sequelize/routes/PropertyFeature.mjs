import express from "express";
const router = express.Router();
import {
  createPropertFeature,
  getPropertyFeature,
  getPropertyFeatures,
  deletePropertyFeature,
  updatePropertyFeature,
} from "../controllers/PropertyFeature.mjs";
import {
  protect,
  csrfProtection,
  authorizeUser,
} from "../middlewares/auth.mjs";

router.route("/").get(getPropertyFeatures).post(createPropertFeature);

router
  .route("/:id")
  .get(getPropertyFeature)
  .put(protect, authorizeUser(["admin"]), updatePropertyFeature)
  .delete(protect, authorizeUser(["admin"]), deletePropertyFeature);

export default router;
