import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: [true, "email is required"],
      unique: true,
    },
    role: {
      type: String,
      required: true,
      enum: ["client", "admin"],
      default: "client",
    },
    membershipId: {
      type: mongoose.Schema.ObjectId,
      ref: "Membership",
    },
    refererId: {
      type: String,
    },
    emailIsVerified: {
      type: Boolean,
      required: [true, "field is required"],
      default: false,
    },
    password: { type: String, required: [true, "password is required"] },
  },
  {
    timestamps: true,
  }
);

//check for password match
userSchema.methods.matchPassword = async function (passwordToBeVerified) {
  return await bcrypt.compare(passwordToBeVerified, this.password);
};

//hash password beefore saving to db
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }

  const salt = await bcrypt.genSalt(10);

  const hashed = await bcrypt.hash(this.password, salt);

  this.password = hashed;
});

const User = mongoose.model("User", userSchema);

export default User;
