import db from "../database/db.mjs";
import asyncHandler from "express-async-handler";
import { Team } from "../models/central.mjs";
import { Setting } from "../models/central.mjs";
import { Property } from "../models/central.mjs";
import { Slider } from "../models/central.mjs";
import { Service } from "../models/central.mjs";
import { PropertyFeature } from "../models/central.mjs";
import { Image } from "../models/central.mjs";
import { Facility } from "../models/central.mjs";
import { PropertyPlan } from "../models/central.mjs";

// @desc Get teams
// @route GET /api/v1/teams
// @access Public
const getHomeData = asyncHandler(async (req, res) => {
  // get teams
  const teams = await Team.findAll({});

  //find all settings
  const settings = await Setting.findAll({});

  //find all properties
  const properties = await Property.findAll({
    include: [
      { model: Facility, as: "facilities" },
      { model: Image, as: "images" },
      { model: PropertyFeature, as: "propertyFeatures" },
      { model: PropertyPlan, as: "propertyPlans" },
    ],
  });

  const sliders = await Slider.findAll({});

  //find all services
  const services = await Service.findAll({});

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
