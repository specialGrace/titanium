import asyncHandler from "express-async-handler";
import Setting from "../models/Setting.js";

// @desc Create a setting
// @route POST /api/v1/settings
// @access Private - admin

const createSetting = asyncHandler(async (req, res) => {
  const { name } = req.body;

  //create setting
  const setting = await Setting.create({
    name,
  });

  res.status(200).json({
    status: "success",
    setting,
  });
});

// @desc Get settings
// @route GET /api/v1/settings
// @access Public
const getSettings = asyncHandler(async (req, res) => {
  //find all settings
  const settings = await Setting.find({});

  res.json({
    status: "success",
    settings,
  });
});

// @desc Get setting
// @route GET /api/v1/settings/:id
// @access Public
const getSetting = asyncHandler(async (req, res) => {
  const settingId = req.params.id;

  //find setting
  const setting = await Setting.findOne({ _id: settingId });
  if (!setting) {
    res.status(404);
    throw new Error("No record found");
  }

  res.status(200).json({
    status: "success",
    setting,
  });
});

// @desc Update setting
// @route PUT /api/v1/settings/:id
// @access Private - admin only

const updateSetting = asyncHandler(async (req, res) => {
  const settingId = req.params.id;
  const { name } = req.body;

  //find setting
  const setting = await Setting.findById({ _id: settingId });

  if (!setting) {
    res.status(404);
    throw new Error("No record found");
  }

  if (name) {
    setting.name = name;
  }

  //save the updated record
  const updatedSetting = await setting.save();

  res.status(200).json({
    status: "success",
    updatedSetting,
  });
});

// @desc delete setting
// @route GET /api/v1/settings/:id
// @access private - admin
const deleteSetting = asyncHandler(async (req, res) => {
  const settingId = req.params.id;

  //find the setting
  const setting = await Setting.findById({ _id: settingId });
  if (!setting) {
    res.status(404);
    throw new Error("No record found");
  }

  //remove found itemm
  await setting.remove();

  res.status(200).json({
    status: "success",
    message: "setting removed successfully",
  });
});

export { createSetting, getSetting, getSettings, deleteSetting, updateSetting };
