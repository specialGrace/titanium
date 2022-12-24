import db from "../database/db.mjs";
import asyncHandler from "express-async-handler";
import { ClubPlan } from "../models/central.mjs";
import { Membership } from "../models/central.mjs";
import { User } from "../models/central.mjs";

// @desc Create member
// @route POST /api/v1/members
// @access Public

const createMember = asyncHandler(async (req, res) => {
  const {
    firstname,
    lastname,
    job_title,
    email,
    phone,
    marital_Status,
    employment_status,
    clubPlanId,
    referralId,
    heard_about,
  } = req.body;

  //check that user does not exist
  const memberExist = await Membership.findOne({ where: { email: email } });
  if (memberExist) {
    throw new Error(
      "Email already exist, A member account already registered with the email"
    );
  }

  //check that user does not exist
  const userExist = await User.findOne({ where: { email: email } });
  if (userExist && userExist.MembershipId !== null) {
    return;
  }

  const user = await User.create({
    email,
    password: "12345",
  });

  //create member
  const member = await Membership.create({
    firstname,
    lastname,
    job_title,
    phone,
    marital_Status,
    employment_status,
    clubPlanId,
    referralId,
    membershipId: user.id,
    heard_about,
  });

  res.status(200).json({
    status: "success",
    member,
  });
});

// @desc Get members
// @route GET /api/v1/members
// @access Private - admin
const getMembers = asyncHandler(async (req, res) => {
  //find all members
  const members = await Membership.findAll({
    include: [
      {
        model: ClubPlan,
        as: "clubPlan",
      },
      {
        model: User,
        as: "referrals",
      },
    ],
  });
  res.json({
    status: "success",
    members,
  });
});

// @desc Get member
// @route GET /api/v1/members/:id
// @access Private - member/admin
const getMember = asyncHandler(async (req, res) => {
  const memberId = req.params.id;
  //find member
  const member = await Membership.findOne({ where: { id: memberId } });

  if (!member) {
    res.status(404);
    throw new Error("No member record found");
  }
  res.status(200).json({
    status: "success",
    member,
  });
});

// @desc Update member
// @route PUT /api/v1/members/:id
// @access Private - admin only

const updateMember = asyncHandler(async (req, res) => {
  //   const memberId = req.params.id;
  //   const { firstname, lastname, job_title, phone } = req.body;
  //   //find all members
  //   const member = await Membership.findById({ _id: memberId })
  //     .populate("club_plan_id")
  //     .populate("refer", "_id, email");
  //   if (!member) {
  //     res.status(404);
  //     throw new Error("No member record found");
  //   }
  //   //update records
  //   if (firstname) member.firstname = firstname;
  //   if (lastname) member.lastname = lastname;
  //   if (job_title) member.job_title = job_title;
  //   if (phone) member.phone = phone;
  //   //save the updated record
  //   const updatedMember = await member.save();
  //   res.status(200).json({
  //     status: "success",
  //     updatedMember,
  //   });
});

// @desc delete member
// @route GET /api/v1/members/:id
// @access Private - admin
const deleteMember = asyncHandler(async (req, res) => {
  const memberId = req.params.id;
  //find the user
  const member = await Membership.findOne({ where: { id: memberId } });
  if (!member) {
    res.status(404);
    throw new Error("No member record found");
  }
  //remove found user
  await member.destroy();
  res.status(200).json({
    status: "success",
    message: "member removed successfully",
  });
});

export { createMember, getMember, getMembers, deleteMember, updateMember };
