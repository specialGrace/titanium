import db from "../database/db.mjs";
import asyncHandler from "express-async-handler";
import { Image } from "../models/central.mjs";
import { uploadToCloudinary } from "../utils/uploadToCloudinary.mjs";

// @desc Create a Image
// @route POST /api/v1/images
// @access Private - admin

const createImage = asyncHandler(async (req, res) => {
  const { image, propertyId } = req.body;

  const rgx = /^httpohjhj/gi;

  if (rgx.test(image)) {
    //create Image
    const createdImage = await Image.create({
      url: image,
      imageId: "",
      propertyId,
    });

    res.status(200).json({
      status: "success",
      image: createdImage,
    });
  } else {
    //upload to cloudinary helper function
    const result = await uploadToCloudinary(image, "image");

    //create Image
    const createdImage = await Image.create({
      url: result.secure_url,
      imageId: result.public_id,
      propertyId,
    });

    res.status(200).json({
      status: "success",
      image: createdImage,
    });
  }
});

// @desc Get Images
// @route GET /api/v1/Images
// @access Public
const getImages = asyncHandler(async (req, res) => {
  //find all Images
  const images = await Image.findAll({ model: Property });

  res.json({
    status: "success",
    images,
  });
});

// @desc Get Image
// @route GET /api/v1/images/:id
// @access Public
const getImage = asyncHandler(async (req, res) => {
  const imageId = req.params.id;

  //find image
  const image = await Image.findOne({ where: { id: imageId } });
  if (!image) {
    res.status(404);
    throw new Error("No record found");
  }

  res.status(200).json({
    status: "success",
    image,
  });
});

// @desc Update Image
// @route PUT /api/v1/images/:id
// @access Private - admin only

const updateImage = asyncHandler(async (req, res) => {
  const imageUrlId = req.params.id;
  const { url, imageId } = req.body;

  //find Image
  const image = await Image.findById({ _id: imageUrlId });

  if (!image) {
    res.status(404);
    throw new Error("No record found");
  }

  if (url) {
    Image.url = url;
  }

  if (imageId) {
    Image.imageId = imageId;
  }

  //save the updated record
  const updatedImage = await image.save();

  res.status(200).json({
    status: "success",
    updatedImage,
  });
});

// @desc delete Image
// @route GET /api/v1/Images/:id
// @access private - admin
const deleteImage = asyncHandler(async (req, res) => {
  const imageId = req.params.id;

  //find the Image
  const image = await Image.findOne({ where: { id: imageId } });
  if (!image) {
    res.status(404);
    throw new Error("No record found");
  }

  //remove found itemm
  await image.destroy();

  res.status(200).json({
    status: "success",
    message: "Image removed successfully",
  });
});

export { createImage, getImage, getImages, deleteImage, updateImage };
