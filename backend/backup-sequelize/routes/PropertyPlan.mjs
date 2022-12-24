import express from "express";
const router = express.Router();
import {
  createPlan,
  getPlan,
  getPlans,
  deletePlan,
  updatePlan,
} from "../controllers/PropertyPlan.mjs";
import {
  protect,
  csrfProtection,
  authorizeUser,
} from "../middlewares/auth.mjs";

router.route("/").get(getPlans).post(createPlan);

router
  .route("/:id")
  .get(getPlan)
  .put(protect, authorizeUser(["admin"]), updatePlan)
  .delete(protect, authorizeUser(["admin"]), deletePlan);

export default router;
