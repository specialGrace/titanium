import asyncHandler from "express-async-handler";
import Property from "../models/Property.js";

// @desc Create a property
// @route POST /api/v1/properties
// @access Private - admin

const createProperty = asyncHandler(async (req, res) => {
  const {
    video_url,
    title,
    description,
    pricing,
    location,
    no_of_beds,
    property_facilities,
    images,
    property_features,
    property_plans,
  } = req.body;

  //create club property
  const property = await Property.create({
    video_url,
    title,
    description,
    pricing,
    location,
    no_of_beds,
    property_facilities,
    images,
    property_features,
    property_plans,
  });

  res.status(200).json({
    status: "success",
    property,
  });
});

// @desc Get properties
// @route GET /api/v1/properties
// @access Public
const getProperties = asyncHandler(async (req, res) => {
  //find all properties
  const properties = await Property.find({})
    .populate("property_facilities")
    .populate("property_features")
    .populate("property_plans");

  res.json({
    status: "success",
    properties,
  });
});

// @desc Get property
// @route GET /api/v1/properties/:id
// @access Public
const getProperty = asyncHandler(async (req, res) => {
  const propertyId = req.params.id;

  //find property
  const property = await Property.findOne({ _id: propertyId });
  if (!property) {
    res.status(404);
    throw new Error("No record found");
  }

  res.status(200).json({
    status: "success",
    property,
  });
});

// @desc Update property
// @route PUT /api/v1/properties/:id
// @access Private - admin only

const updateProperty = asyncHandler(async (req, res) => {
  const propertyId = req.params.id;
  const {
    title,
    description,
    pricing,
    location,
    no_of_beds,
    video_url,
    property_facilities,
    images,
    property_features,
    property_plans,
  } = req.body;

  //find faclity
  const property = await Property.findById({ _id: propertyId });

  if (!property) {
    res.status(404);
    throw new Error("No member record found");
  }

  if (no_of_beds) {
    property.no_of_beds = no_of_beds;
  }

  if (description) {
    property.description = description;
  }
  if (title) {
    property.title = title;
  }

  if (pricing) {
    property.pricing = pricing;
  }

  if (location) {
    property.location = location;
  }

  //save the updated record
  const updatedProperty = await property.save();

  res.status(200).json({
    status: "success",
    updatedProperty,
  });
});

// @desc delete property
// @route GET /api/v1/properties/:id
// @access Private - admin
const deleteProperty = asyncHandler(async (req, res) => {
  const propertyId = req.params.id;

  //find the property
  const property = await Property.findById({ _id: propertyId });
  if (!property) {
    res.status(404);
    throw new Error("No record found");
  }

  //remove found itemm
  await property.remove();

  res.status(200).json({
    status: "success",
    message: "Property removed successfully",
  });
});

export {
  createProperty,
  getProperty,
  getProperties,
  deleteProperty,
  updateProperty,
};
