import express from "express";
const router = express.Router();
import {
  getService,
  getServices,
  createService,
  updateService,
  deleteService,
} from "../controllers/Service.js";
import { protect, csrfProtection, authorizeUser } from "../middlewares/auth.js";

router
  .route("/")
  .get(getServices)
  .post(protect, authorizeUser(["admin"]), createService);

router
  .route("/:id")
  .get(getService)
  .put(protect, authorizeUser(["admin"]), updateService)
  .delete(protect, authorizeUser(["admin"]), deleteService);

export default router;