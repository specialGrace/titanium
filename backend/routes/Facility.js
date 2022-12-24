import express from "express";
const router = express.Router();
import {
  getFacility,
  getFacilities,
  createFacility,
  updateFacility,
  deleteFacility,
} from "../controllers/Facility.js";
import { protect, csrfProtection, authorizeUser } from "../middlewares/auth.js";

//club plans route definition
router
  .route("/")
  .get(getFacilities)
  .post(protect, authorizeUser(["admin"]), createFacility);

router
  .route("/:id")
  .get(getFacility)
  .put(protect, authorizeUser(["admin"]), updateFacility)
  .delete(protect, authorizeUser(["admin"]), deleteFacility);

export default router;
