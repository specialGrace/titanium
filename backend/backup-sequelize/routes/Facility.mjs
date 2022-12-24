import express from "express";
const router = express.Router();
import {
  getFacility,
  getFacilities,
  createFacility,
  updateFacility,
  deleteFacility,
} from "../controllers/Facility.mjs";
import {
  protect,
  csrfProtection,
  authorizeUser,
} from "../middlewares/auth.mjs";

//club plans route definition
router.route("/").get(getFacilities).post(createFacility);

router
  .route("/:id")
  .get(getFacility)
  .put(protect, authorizeUser(["admin"]), updateFacility)
  .delete(protect, authorizeUser(["admin"]), deleteFacility);

export default router;
