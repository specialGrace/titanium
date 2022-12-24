import asyncHandler from "express-async-handler";
import Team from "../models/Team.js";
import Setting from "../models/Setting.js";
import Property from "../models/Property.js";
import Slider from "../models/Slider.js";
import Service from "../models/Service.js";

// @desc Get teams
// @route GET /api/v1/teams
// @access Public
const getHomeData = asyncHandler(async (req, res) => {
  // get teams
  const teams = await Team.find({});

  //find all settings
  const settings = await Setting.find({});

  //find all properties
  const properties = await Property.find({});

  const sliders = await Slider.find({});

  //find all services
  const services = await Service.find({});

  res.json({
    status: "success",
    data: {
      teams,
      settings,
      properties,
      sliders,
      services,
    },
  });
});

export { getHomeData };
