import asyncHandler from "express-async-handler";
import { Property } from "../models/central.mjs";
import { PropertyPlan } from "../models/central.mjs";
import { uploadToCloudinary } from "../utils/uploadToCloudinary.mjs";

// @desc Create a plan
// @route POST /api/v1/property_plans
// @access Private - admin

const createPlan = asyncHandler(async (req, res) => {
  const { price, image, title, propertyId } = req.body;

  if (rgx.test(image)) {
    //create Image
    const propertyPlan = await PropertyPlan.create({
      image: image,
      imageId: "",
      title,
      price,
      propertyId,
    });

    res.status(200).json({
      status: "success",
      propertyPlan,
    });
  } else {
    //upload to cloudinary helper function
    const result = await uploadToCloudinary(image, "image");

    //create plan
    const propertyPlan = await PropertyPlan.create({
      image: result.secure_url,
      imageId: result.public_id,
      title,
      price,
      propertyId,
    });

    res.status(200).json({
      status: "success",
      propertyPlan,
    });
  }
});

// @desc Get plans
// @route GET /api/v1/plans
// @access Private - admin
const getPlans = asyncHandler(async (req, res) => {
  //find all club plans
  const plans = await PropertyPlan.findAll({ model: Property });

  res.json({
    status: "success",
    plans,
  });
});

// @desc Get a plan
// @route GET /api/v1/plans/:id
// @access Private - admin
const getPlan = asyncHandler(async (req, res) => {
  const planId = req.params.id;

  //find club plan
  const plan = await PropertyPlan.findOne({ where: { id: planId } });
  if (!plan) {
    res.status(404);
    throw new Error("No record found");
  }

  res.status(200).json({
    status: "success",
    plan,
  });
});

// @desc Update plan
// @route PUT /api/v1/plans/:id
// @access Private - admin only

const updatePlan = asyncHandler(async (req, res) => {
  const planId = req.params.id;
  const { price, image, title } = req.body;

  //find faclity
  const plan = await PropertyPlan.findById({ _id: planId });

  if (!plan) {
    res.status(404);
    throw new Error("No member record found");
  }

  if (price) {
    plan.price = price;
  }

  if (image) {
    plan.image = image;
  }

  if (title) {
    plan.title = title;
  }

  //save the updated record
  const updatedPlan = await plan.save();

  res.status(200).json({
    status: "success",
    updatedPlan,
  });
});

// @desc delete plan
// @route GET /api/v1/plans/:id
// @access Private - admin
const deletePlan = asyncHandler(async (req, res) => {
  const planId = req.params.id;

  //find the facility
  const plan = await PropertyPlan.findOne({ where: { id: planId } });
  if (!plan) {
    res.status(404);
    throw new Error("No record found");
  }

  //remove found itemm
  await plan.destroy();

  res.status(200).json({
    status: "success",
    message: "Plan removed successfully",
  });
});

export { createPlan, getPlan, getPlans, deletePlan, updatePlan };
