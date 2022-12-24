import express from "express";
const router = express.Router();
import {
  createPlan,
  getPlan,
  getPlans,
  deletePlan,
  updatePlan,
} from "../controllers/PropertyPlan";
import { protect, csrfProtection, authorizeUser } from "../middlewares/auth.js";

router
  .route("/")
  .get(getPlans)
  .post(protect, authorizeUser(["admin"]), createPlan);

router
  .route("/:id")
  .get(getPlan)
  .put(protect, authorizeUser(["admin"]), updatePlan)
  .delete(protect, authorizeUser(["admin"]), deletePlan);

export default router;
