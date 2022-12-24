import express from "express";
const router = express.Router();
import {
  createImage,
  getImage,
  getImages,
  deleteImage,
  updateImage,
} from "../controllers/Image.mjs";
import {
  protect,
  csrfProtection,
  authorizeUser,
} from "../middlewares/auth.mjs";

router.route("/").get(getImages).post(createImage);

router
  .route("/:id")
  .get(getImage)
  .put(protect, authorizeUser(["admin"]), updateImage)
  .delete(protect, authorizeUser(["admin"]), deleteImage);

export default router;
