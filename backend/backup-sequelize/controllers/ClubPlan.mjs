import asyncHandler from "express-async-handler";
import db from "../database/db.mjs";
import { ClubPlan } from "../models/central.mjs";
import { Membership } from "../models/central.mjs";

// @desc Create a club plan
// @route POST /api/v1/club_plans
// @access Private - admin

const createClubPlan = asyncHandler(async (req, res) => {
  const { title, price, short_desc, long_desc, benefits } = req.body;

  //create club plan
  const clubPlan = await ClubPlan.create({
    title,
    price,
    short_desc,
    long_desc,
    benefits,
  });

  res.status(200).json({
    status: "success",
    clubPlan,
  });
});

// @desc Get club plans
// @route GET /api/v1/club_plans
// @access Private - admin
const getClubPlans = asyncHandler(async (req, res) => {
  //find all club plans
  const clubPlans = await ClubPlan.findAll({
    include: [
      {
        model: Membership,
        as: "members",
      },
    ],
  });

  res.json({
    status: "success",
    clubPlans,
  });
});

// @desc Get club plan
// @route GET /api/v1/club_plans/:id
// @access Private - admin
const getClubPlan = asyncHandler(async (req, res) => {
  const planId = req.params.id;
  //find club plan
  const clubPlan = await ClubPlan.findOne({ where: { id: planId } });
  if (!clubPlan) {
    res.status(404);
    throw new Error("No record found");
  }
  res.status(200).json({
    status: "success",
    clubPlan,
  });
});

// @desc Update club plan
// @route PUT /api/v1/club_plans/:id
// @access Private - admin only

const updateClubPlan = asyncHandler(async (req, res) => {
  //   const planId = req.params.id;
  //   const { title, price, short_desc, long_desc, benefits } = req.body;
  //   //find club plan
  //   const clubPlan = await ClubPlan.findById({ _id: planId });
  //   if (!clubPlan) {
  //     res.status(404);
  //     throw new Error("No member record found");
  //   }
  //   if (title) {
  //     clubPlan.title = title;
  //   }
  //   if (price) {
  //     clubPlan.price = price;
  //   }
  //   if (short_desc) {
  //     clubPlan.short_desc = short_desc;
  //   }
  //   if (long_desc) {
  //     clubPlan.long_desc = long_desc;
  //   }
  //   if (benefits) {
  //     clubPlan.benefits = benefits;
  //   }
  //   //save the updated record
  //   const updatedClubPlan = await clubPlan.save();
  //   res.status(200).json({
  //     status: "success",
  //     updatedClubPlan,
  //   });
});

// @desc delete club plan
// @route GET /api/v1/club_plans/:id
// @access Private - admin
const deleteClubPlan = asyncHandler(async (req, res) => {
  const planId = req.params.id;
  //find the club plan
  const clubPlan = await ClubPlan.findOne({ where: { id: planId } });
  if (!clubPlan) {
    res.status(404);
    throw new Error("No record found");
  }
  //remove found itemm
  await clubPlan.destroy();
  res.status(200).json({
    status: "success",
    message: "user removed successfully",
  });
});

export {
  createClubPlan,
  getClubPlan,
  getClubPlans,
  deleteClubPlan,
  updateClubPlan,
};
