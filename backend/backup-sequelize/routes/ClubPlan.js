import express from "express";
const router = express.Router();
import {
  getClubPlan,
  getClubPlans,
  createClubPlan,
  updateClubPlan,
  deleteClubPlan,
} from "../controllers/ClubPlan.js";
import { protect, csrfProtection, authorizeUser } from "../middlewares/auth.js";

//club plans route definition
router
  .route("/")
  .get(protect, authorizeUser(["admin"]), getClubPlans)
  .post(protect, authorizeUser(["admin"]), createClubPlan);

router
  .route("/:id")
  .get(protect, authorizeUser(["admin"]), getClubPlan)
  .put(protect, authorizeUser(["admin"]), updateClubPlan)
  .delete(protect, authorizeUser(["admin"]), deleteClubPlan);

export default router;
