import asyncHandler from "express-async-handler";
import generateToken from "../utils/generateToken.js";
import User from "../models/User.js";

// @desc Login user
// @route POST /api/v1/users/login
// @access Public

const login = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  //find the user email
  const user = await User.findOne({ email });

  //check that email exist
  if (user && (await user.matchPassword(password))) {
    res.json({
      _id: user._id,
      email: user.email,
      role: user.role,
      emailIsVerified: user.emailIsVerified,
      token: generateToken(user._id),
    });
  } else {
    res.status(401);
    throw new Error("Invalid email or password");
  }
});

// @desc Register user
// @route POST /api/v1/users
// @access Public

const register = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  try {
    //check that user does not exist
    const userExist = await User.findOne({ email: email });
    if (userExist) {
      throw new Error("Email already exist");
    }
    //create user
    const user = await User.create({
      email,
      password,
    });

    res.status(200).json({
      status: "success",
      user: {
        _id: user._id,
        email: user.email,
        role: user.role,
      },
    });
  } catch (err) {
    console.log(err);
    res.status(401).json({
      status: "fail",
      error: err.message,
    });
  }
});

// @desc Get all users
// @route GET /api/v1/users
// @access Private - admin only

const getUsers = asyncHandler(async (req, res) => {
  //find all users
  const users = await User.find({});

  res.json({
    status: "success",
    users,
  });
});

// @desc GET user
// @route GET /api/v1/users/:id
// @access Private - client and admin only
const getUser = asyncHandler(async (req, res) => {
  const userId = req.params.id;

  //find a user
  const user = await User.findOne({ _id: userId });
  if (!user) {
    res.status(404);
    throw new Error("No user record found");
  }

  res.status(200).json({
    status: "success",
    user,
  });
});

// @desc Update user role
// @route PUT /api/v1/users/:id
// @access Private - admin only

const updateUserRole = asyncHandler(async (req, res) => {
  const userId = req.params.id;
  const { role } = req.body;
  console.log(userId, "id");
  //find all users
  const user = await User.findById({ _id: userId }).populate("membershipId");
  if (!user) {
    res.status(404);
    throw new Error("No user record found");
  }

  if (role) {
    user.role = role;
  }

  //save the updated record
  const updatedUser = await user.save();

  res.status(200).json({
    status: "success",
    updatedUser,
  });
});

// @desc Delete user
// @route DELETE /api/v1/users/:id
// @access Private - admin only
const deleteUser = asyncHandler(async (req, res) => {
  const userId = req.params.id;

  //find the user
  const user = await User.findById({ _id: userId });
  if (!user) {
    res.status(404);
    throw new Error("No user record found");
  }

  //remove found user
  await user.remove();

  res.status(200).json({
    status: "success",
    message: "user removed successfully",
  });
});

export { login, register, getUsers, updateUserRole, deleteUser, getUser };
