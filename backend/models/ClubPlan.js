import mongoose from "mongoose";

const clubPlanSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "field is required"],
      enum: ["basic", "gold", "diamond"],
      default: "basic",
    },
    price: { type: Number, required: [true, "field is required"] },
    short_desc: { type: String, required: [true, "field is required"] },
    long_desc: { type: String, required: [true, "field is required"] },
    benefits: { type: String, required: [true, "field is required"] },
  },
  {
    timestamps: true,
  }
);

const ClubPlan = mongoose.model("ClubPlan", clubPlanSchema);

export default ClubPlan;
