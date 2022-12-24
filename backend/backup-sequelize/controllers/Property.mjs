import asyncHandler from "express-async-handler";
import { Facility } from "../models/central.mjs";
import { Property } from "../models/central.mjs";
import { PropertyFeature } from "../models/central.mjs";
import { PropertyPlan } from "../models/central.mjs";
import { Image } from "../models/central.mjs";
import { uploadToCloudinary } from "../utils/uploadToCloudinary.mjs";

// @desc Create a property
// @route POST /api/v1/properties
// @access Private - admin

const createProperty = asyncHandler(async (req, res) => {
  const { video_url, title, description, pricing, location, no_of_beds } =
    req.body;

  const rgx = /^http/gi;

  if (rgx.test(video_url)) {
    //create Image
    const property = await Property.create({
      video_url,
      videoUrlId: "",
      title,
      description,
      pricing,
      location,
      no_of_beds,
    });

    res.status(200).json({
      status: "success",
      property,
    });
  } else {
    //upload to cloudinary helper function
    const result = await uploadToCloudinary(video_url, "video");

    //create property
    const property = await Property.create({
      video_url: result.secure_url,
      videoUrlId: result.public_id,
      title,
      description,
      pricing,
      location,
      no_of_beds,
    });

    res.status(200).json({
      status: "success",
      property,
    });
  }
});

// @desc Get properties
// @route GET /api/v1/properties
// @access Private - admin
const getProperties = asyncHandler(async (req, res) => {
  //find all properties
  const properties = await Property.findAll({
    include: [
      { model: Facility, as: "facilities" },
      { model: Image, as: "images" },
      { model: PropertyFeature, as: "propertyFeatures" },
      { model: PropertyPlan, as: "propertyPlans" },
    ],
  });

  res.json({
    status: "success",
    properties,
  });
});

// @desc Get property
// @route GET /api/v1/properties/:id
// @access Private - admin
const getProperty = asyncHandler(async (req, res) => {
  const propertyId = req.params.id;

  //find property
  const property = await Property.findOne({ where: { id: propertyId } });
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
  const property = await Property.findOne({ where: { id: propertyId } });
  if (!property) {
    res.status(404);
    throw new Error("No record found");
  }

  //remove found itemm
  await property.destroy();

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
