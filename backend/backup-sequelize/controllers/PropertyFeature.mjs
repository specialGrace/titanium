import asyncHandler from "express-async-handler";
import { PropertyFeature } from "../models/central.mjs";
import { uploadToCloudinary } from "../utils/uploadToCloudinary.mjs";
// @desc Create a property feature
// @route POST /api/v1/property_features
// @access Private - admin

const createPropertFeature = asyncHandler(async (req, res) => {
  const { icon, title, description, propertyId } = req.body;

  const rgx = /^http/gi;

  if (rgx.test(icon)) {
    //create Image
    const propertyFeature = await PropertyFeature.create({
      icon: icon,
      iconId: "",
      title,
      description,
      propertyId,
    });

    res.status(200).json({
      status: "success",
      propertyFeature,
    });
  } else {
    //upload to cloudinary helper function
    const result = await uploadToCloudinary(icon, "image");

    //create Image
    const propertyFeature = await PropertyFeature.create({
      icon: result.secure_url,
      iconId: result.public_id,
      title,
      description,
      propertyId,
    });

    res.status(200).json({
      status: "success",
      propertyFeature,
    });
  }
});

// @desc get property feature
// @route GET /api/v1/property_features
// @access Private - admin

const getPropertyFeatures = asyncHandler(async (req, res) => {
  //find all property feature
  const propertyFeatures = await PropertyFeature.find({ model: Property });

  res.json({
    status: "success",
    propertyFeatures,
  });
});

// @desc get property feature
// @route GET /api/v1/property_features/:id
// @access Private - admin
const getPropertyFeature = asyncHandler(async (req, res) => {
  const property_featureId = req.params.id;

  //find property feature
  const property_feature = await PropertyFeature.findOne({
    where: {
      id: property_featureId,
    },
  });
  if (!property_feature) {
    res.status(404);
    throw new Error("No record found");
  }

  res.status(200).json({
    status: "success",
    property_feature,
  });
});

// @desc update property feature
// @route PUT /api/v1/property_features/:id
// @access Private - admin

const updatePropertyFeature = asyncHandler(async (req, res) => {
  const property_featureId = req.params.id;
  const { icon, title, description } = req.body;

  //find property feature
  const property_feature = await PropertyFeature.findById({
    _id: property_featureId,
  });

  if (!property_feature) {
    res.status(404);
    throw new Error("No member record found");
  }

  if (icon) {
    property_feature.icon = icon;
  }

  if (title) {
    property_feature.title = title;
  }
  if (description) {
    property_feature.description = description;
  }

  //save the updated record
  const updatedPropertyFeature = await facility.save();

  res.status(200).json({
    status: "success",
    updatedPropertyFeature,
  });
});
// @desc delete property feature
// @route DELETE /api/v1/property_features/:id
// @access Private - admin

const deletePropertyFeature = asyncHandler(async (req, res) => {
  const property_featureId = req.params.id;

  //find the facility
  const property_feature = await PropertyFeature.findOne({
    id: property_featureId,
  });
  if (!property_feature) {
    res.status(404);
    throw new Error("No record found");
  }

  //remove found itemm
  await property_feature.destroy();

  res.status(200).json({
    status: "success",
    message: "Facility removed successfully",
  });
});

export {
  createPropertFeature,
  getPropertyFeature,
  getPropertyFeatures,
  deletePropertyFeature,
  updatePropertyFeature,
};
