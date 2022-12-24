import asyncHandler from "express-async-handler";
import PropertyPlan from "../models/PropertyPlan.js";

// @desc Create a plan
// @route POST /api/v1/property_plans
// @access Private - admin

const createPlan = asyncHandler(async (req, res) => {
  const { price, image, title } = req.body;

  //create plan
  const plan = await PropertyPlan.create({
    price,
    title,
    image,
  });

  res.status(200).json({
    status: "success",
    plan,
  });
});

// @desc Get plans
// @route GET /api/v1/plans
// @access Private - admin
const getPlans = asyncHandler(async (req, res) => {
  //find all club plans
  const plans = await PropertyPlan.find({});

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
  const plan = await PropertyPlan.findOne({ _id: planId });
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
  const plan = await PropertyPlan.findById({ _id: planId });
  if (!plan) {
    res.status(404);
    throw new Error("No record found");
  }

  //remove found itemm
  await plan.remove();

  res.status(200).json({
    status: "success",
    message: "Plan removed successfully",
  });
});

export { createPlan, getPlan, getPlans, deletePlan, updatePlan };
