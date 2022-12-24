import express from "express";
const router = express.Router();

import {
  register,
  login,
  getUsers,
  getUser,
  updateUserRole,
  deleteUser,
} from "../controllers/User.mjs";
import {
  protect,
  csrfProtection,
  authorizeUser,
} from "../middlewares/auth.mjs";

router.route("/").get(protect, getUsers).post(register);
router.route("/login").post(login);

router
  .route("/:id")
  .get(protect, authorizeUser(["admin"]), getUser)
  .put(protect, authorizeUser(["admin"]), updateUserRole)
  .delete(protect, authorizeUser(["admin"]), deleteUser);

export default router;
