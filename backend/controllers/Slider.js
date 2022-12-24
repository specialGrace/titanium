import asyncHandler from "express-async-handler";
import Slider from "../models/Slider.js";

// @desc Create a slider
// @route POST /api/v1/sliders
// @access Private - admin

const createSlider = asyncHandler(async (req, res) => {
  const { image, url, description, title } = req.body;

  //create slider
  const slider = await Slider.create({
    image,
    url,
    description,
    title,
  });

  res.status(200).json({
    status: "success",
    slider,
  });
});

// @desc Get sliders
// @route GET /api/v1/sliders
// @access Public
const getSliders = asyncHandler(async (req, res) => {
  //find all sliders
  const sliders = await Slider.find({});

  res.json({
    status: "success",
    sliders,
  });
});

// @desc Get slider
// @route GET /api/v1/sliders/:id
// @access Public
const getSlider = asyncHandler(async (req, res) => {
  const sliderId = req.params.id;

  //find slider
  const slider = await Slider.findOne({ _id: sliderId });
  if (!slider) {
    res.status(404);
    throw new Error("No record found");
  }

  res.status(200).json({
    status: "success",
    slider,
  });
});

// @desc Update slider
// @route PUT /api/v1/sliders/:id
// @access Private - admin only

const updateSlider = asyncHandler(async (req, res) => {
  const sliderId = req.params.id;
  const { image, url, description, title } = req.body;

  //find slider
  const slider = await Slider.findById({ _id: sliderId });

  if (!slider) {
    res.status(404);
    throw new Error("No record found");
  }

  if (image) {
    slider.image = image;
  }

  if (url) {
    slider.url = url;
  }

  if (description) {
    slider.description = description;
  }

  if (title) {
    slider.title = title;
  }

  //save the updated record
  const updatedSlider = await slider.save();

  res.status(200).json({
    status: "success",
    updatedSlider,
  });
});

// @desc delete slider
// @route GET /api/v1/sliders/:id
// @access private - admin
const deleteSlider = asyncHandler(async (req, res) => {
  const sliderId = req.params.id;

  //find the facility
  const slider = await Slider.findById({ _id: sliderId });
  if (!slider) {
    res.status(404);
    throw new Error("No record found");
  }

  //remove found itemm
  await slider.remove();

  res.status(200).json({
    status: "success",
    message: "slider removed successfully",
  });
});

export { createSlider, getSlider, getSliders, deleteSlider, updateSlider };