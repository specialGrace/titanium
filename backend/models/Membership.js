import mongoose from "mongoose";

const membershipSchema = new mongoose.Schema(
  {
    firstname: { type: String, required: [true, "first name is required"] },
    lastname: { type: String, required: [true, "last name is required"] },
    job_title: { type: String, required: [true, "job_title is required"] },
    email: { type: String, required: [true, "email is required"] },
    phone: { type: String, required: [true, "phone number name is required"] },
    marital_Status: {
      type: String,
      required: [true, " field required"],
      enum: ["single", "married"],
      default: "single",
    },
    employment_status: {
      type: String,
      required: [true, "field is required"],
      enum: ["employed", "unemployed", "self-employed", "student"],
      default: "employed",
    },
    club_plan_id: {
      type: mongoose.Schema.ObjectId,
      ref: "ClubPlan",
    },
    join_date: { type: Date, required: true, default: Date.now },
    heard_about: { type: String, required: [true, "field is required"] },
    referral: {
      type: mongoose.Schema.ObjectId,
      ref: "User",
    },
  },
  {
    timestamps: true,
  }
);

const Membership = mongoose.model("Membership", membershipSchema);

export default Membership;
