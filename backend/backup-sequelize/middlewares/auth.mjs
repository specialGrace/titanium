import dotenv from "dotenv";
// cofig connection
dotenv.config();
import JWT from "jsonwebtoken";
import asyncHandler from "express-async-handler";
import csrf from "csurf";
import User from "../models/User.mjs";

const protect = asyncHandler(async (req, res, next) => {
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    token = req.headers.authorization.split(" ")[1];

    try {
      const decoded = await JWT.verify(token, process.env.JWT_SECRET);

      const user = await User.findByPk(decoded.id);

      console.log(user, "aauthentication");

      req.user = user;
      next();
    } catch (err) {
      console.log(err.message);
      res.status(401).json({
        status: "failed",
        error: err.message,
      });
    }
  }

  if (!token) {
    res.status(401).json({
      status: "failed",
      error: "No token, Not authorized!",
    });
  }
});

//user role authorization

const authorizeUser = (roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      throw new Error(
        `Role (${req.user.role}) is not allowed to access this resource.`
      );
    }

    next();
  };
};

const isSecure = process.env.NODE_ENV === "production" ? true : false;
// csurf protect config middleware
const csrfProtection = csrf({
  cookie: {
    key: "_cProtect",
    secure: isSecure,
    sameSite: "lax",
    httpOnly: "true",
  },
});

export { protect, authorizeUser, csrfProtection };
