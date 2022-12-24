import express from "express";
const router = express.Router();

import {
  createMember,
  getMember,
  getMembers,
  deleteMember,
  updateMember,
} from "../controllers/Membership.mjs";
import {
  protect,
  csrfProtection,
  authorizeUser,
} from "../middlewares/auth.mjs";

router.route("/").get(getMembers).post(createMember);

router
  .route("/:id")
  .get(protect, authorizeUser(["admin"]), getMember)
  .put(protect, authorizeUser(["admin"]), updateMember)
  .delete(protect, authorizeUser(["admin"]), deleteMember);

export default router;
