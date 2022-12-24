import express from "express";
const router = express.Router();
import {
  getClubPlan,
  getClubPlans,
  createClubPlan,
  updateClubPlan,
  deleteClubPlan,
} from "../controllers/ClubPlan.mjs";
import {
  protect,
  csrfProtection,
  authorizeUser,
} from "../middlewares/auth.mjs";

//club plans route definition
router.route("/").get(getClubPlans).post(createClubPlan);

router
  .route("/:id")
  .get(protect, authorizeUser(["admin"]), getClubPlan)
  .put(protect, authorizeUser(["admin"]), updateClubPlan)
  .delete(protect, authorizeUser(["admin"]), deleteClubPlan);

export default router;
