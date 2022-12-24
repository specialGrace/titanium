import express from "express";
const router = express.Router();
import {
  getQuotation,
  getQuotations,
  createQuotation,
  updateQuotation,
  deleteQuotation,
} from "../controllers/Quotation.mjs";
import {
  protect,
  csrfProtection,
  authorizeUser,
} from "../middlewares/auth.mjs";

router.route("/").get(getQuotations).post(createQuotation);

router
  .route("/:id")
  .get(getQuotation)
  .put(protect, authorizeUser(["admin"]), updateQuotation)
  .delete(protect, authorizeUser(["admin"]), deleteQuotation);

export default router;
