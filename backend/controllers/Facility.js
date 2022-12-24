import asyncHandler from "express-async-handler";
import Facility from "../models/Facility.js";

// @desc Create a facilty
// @route POST /api/v1/facilities
// @access Private - admin

const createFacility = asyncHandler(async (req, res) => {
  const { icon, title } = req.body;

  //create club plan
  const facility = await Facility.create({
    icon,
    title,
  });

  res.status(200).json({
    status: "success",
    facility,
  });
});

// @desc Get facilities
// @route GET /api/v1/facilities
// @access Public
const getFacilities = asyncHandler(async (req, res) => {
  //find all club plans
  const facilities = await Facility.find({});

  res.json({
    status: "success",
    facilities,
  });
});

// @desc Get facility
// @route GET /api/v1/facilities/:id
// @access Public
const getFacility = asyncHandler(async (req, res) => {
  const facilityId = req.params.id;

  //find club plan
  const facility = await Facility.findOne({ _id: facilityId });
  if (!facility) {
    res.status(404);
    throw new Error("No record found");
  }

  res.status(200).json({
    status: "success",
    facility,
  });
});

// @desc Update facility
// @route PUT /api/v1/faclities/:id
// @access Private - admin only

const updateFacility = asyncHandler(async (req, res) => {
  const facilityId = req.params.id;
  const { icon, title } = req.body;

  //find faclity
  const facility = await Facility.findById({ _id: facilityId });

  if (!facility) {
    res.status(404);
    throw new Error("No member record found");
  }

  if (icon) {
    facility.icon = icon;
  }

  if (title) {
    facility.title = title;
  }

  //save the updated record
  const updatedFacility = await facility.save();

  res.status(200).json({
    status: "success",
    updatedFacility,
  });
});

// @desc delete facility
// @route GET /api/v1/facilities/:id
// @access Private - admin
const deleteFacility = asyncHandler(async (req, res) => {
  const faciltyId = req.params.id;

  //find the facility
  const facility = await Facility.findById({ _id: faciltyId });
  if (!facility) {
    res.status(404);
    throw new Error("No record found");
  }

  //remove found itemm
  await facility.remove();

  res.status(200).json({
    status: "success",
    message: "Facility removed successfully",
  });
});

export {
  createFacility,
  getFacility,
  getFacilities,
  deleteFacility,
  updateFacility,
};
