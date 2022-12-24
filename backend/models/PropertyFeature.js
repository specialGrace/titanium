import mongoose from "mongoose";

const featureSchema = new mongoose.Schema(
  {
    icon: { type: String, required: [true, "field is required"] },
    title: { type: String, required: [true, "field is required"] },
    description: { type: String, required: [true, "field is required"] },
  },
  {
    timestamps: true,
  }
);

const Feature = mongoose.model("Feature", featureSchema);

export default Feature;
