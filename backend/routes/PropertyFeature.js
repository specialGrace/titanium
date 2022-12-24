import express from "express";
const router = express.Router();
import {
  createPropertFeature,
  getPropertyFeature,
  getPropertyFeatures,
  deletePropertyFeature,
  updatePropertyFeature,
} from "../controllers/PropertyFeature.js";
import { protect, csrfProtection, authorizeUser } from "../middlewares/auth.js";

router
  .route("/")
  .get(getPropertyFeatures)
  .post(protect, authorizeUser(["admin"]), createPropertFeature);

router
  .route("/:id")
  .get(getPropertyFeature)
  .put(protect, authorizeUser(["admin"]), updatePropertyFeature)
  .delete(protect, authorizeUser(["admin"]), deletePropertyFeature);

export default router;
