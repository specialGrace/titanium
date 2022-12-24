import express from "express";
const router = express.Router();
import {
  getTeam,
  getTeams,
  createTeam,
  updateTeam,
  deleteTeam,
} from "../controllers/Team.js";
import { protect, csrfProtection, authorizeUser } from "../middlewares/auth.js";

router
  .route("/")
  .get(getTeams)
  .post(protect, authorizeUser(["admin"]), createTeam);

router
  .route("/:id")
  .get(getTeam)
  .put(protect, authorizeUser(["admin"]), updateTeam)
  .delete(protect, authorizeUser(["admin"]), deleteTeam);

export default router;
