import express from "express";
const router = express.Router();
import {
  createProperty,
  getProperty,
  getProperties,
  deleteProperty,
  updateProperty,
} from "../controllers/Property.js";
import { protect, csrfProtection, authorizeUser } from "../middlewares/auth.js";

router
  .route("/")
  .get(getProperties)
  .post(protect, authorizeUser(["admin"]), createProperty);

router
  .route("/:id")
  .get(getProperty)
  .put(protect, authorizeUser(["admin"]), updateProperty)
  .delete(protect, authorizeUser(["admin"]), deleteProperty);

export default router;
