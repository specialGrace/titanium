import express from "express";
const router = express.Router();
import {
  createProperty,
  getProperty,
  getProperties,
  deleteProperty,
  updateProperty,
} from "../controllers/Property.mjs";
import {
  protect,
  csrfProtection,
  authorizeUser,
} from "../middlewares/auth.mjs";

router.route("/").get(getProperties).post(createProperty);

router
  .route("/:id")
  .get(getProperty)
  .put(protect, authorizeUser(["admin"]), updateProperty)
  .delete(protect, authorizeUser(["admin"]), deleteProperty);

export default router;
