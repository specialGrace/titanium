import asyncHandler from "express-async-handler";
import { Team } from "../models/central.mjs";
import { uploadToCloudinary } from "../utils/uploadToCloudinary.mjs";

// @desc Create a team
// @route POST /api/v1/teams
// @access Private - admin

const createTeam = asyncHandler(async (req, res) => {
  const { image, name, designation } = req.body;

  const rgx = /^http/gi;

  if (rgx.test(image)) {
    //create team
    const team = await Team.create({
      image: image,
      imageId: "",
      name,
      designation,
    });

    res.status(200).json({
      status: "success",
      team,
    });
  } else {
    //upload to cloudinary helper function
    const result = await uploadToCloudinary(image, "image");

    //create team
    const team = await Team.create({
      image: result.secure_url,
      imageId: result.public_id,
      name,
      designation,
    });

    res.status(200).json({
      status: "success",
      team,
    });
  }
});

// @desc Get teams
// @route GET /api/v1/teams
// @access Public
const getTeams = asyncHandler(async (req, res) => {
  //find all teams
  const teams = await Team.findAll({});

  res.json({
    status: "success",
    teams,
  });
});

// @desc Get team
// @route GET /api/v1/teams/:id
// @access Public
const getTeam = asyncHandler(async (req, res) => {
  const teamId = req.params.id;

  //find team
  const team = await Team.findOne({ where: { id: teamId } });
  if (!team) {
    res.status(404);
    throw new Error("No record found");
  }

  res.status(200).json({
    status: "success",
    team,
  });
});

// @desc Update team
// @route PUT /api/v1/teams/:id
// @access Private - admin only

const updateTeam = asyncHandler(async (req, res) => {
  const teamId = req.params.id;
  const { image, name, designation } = req.body;

  //find team
  const team = await Team.findOne({ where: { id: teamId } });

  if (!team) {
    res.status(404);
    throw new Error("No record found");
  }

  const rgx = /^http/gi;

  if (rgx.test(image)) {
    // updated record
    const updatedTeam = await team.update({
      image: image,
      imageId: "",
      name,
      designation,
    });

    res.status(200).json({
      status: "success",
      updatedTeam,
    });
  } else {
    //upload to cloudinary helper function
    const result = await uploadToCloudinary(image, "image");

    //create team
    const team = await Team.create({
      image: result.secure_url,
      imageId: result.public_id,
      name,
      designation,
    });
  }

  //save the updated record
  const updatedTeam = await team.save();

  res.status(200).json({
    status: "success",
    updatedTeam,
  });
});

// @desc delete team
// @route GET /api/v1/teams/:id
// @access private - admin
const deleteTeam = asyncHandler(async (req, res) => {
  const teamId = req.params.id;

  //find the team
  const team = await Team.findOne({ where: { id: teamId } });
  if (!team) {
    res.status(404);
    throw new Error("No record found");
  }

  //remove found itemm
  await team.destroy();

  res.status(200).json({
    status: "success",
    message: "team removed successfully",
  });
});

export { createTeam, getTeam, getTeams, deleteTeam, updateTeam };
