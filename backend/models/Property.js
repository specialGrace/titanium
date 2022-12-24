import mongoose from "mongoose";

const propertiesSchema = new mongoose.Schema(
  {
    video_url: { type: String, required: [true, "field is required"] },
    title: { type: String, required: [true, "field is required"] },
    description: { type: String, required: [true, "field is required"] },
    pricing: { type: Number, required: [true, "field is required"] },
    location: { type: String, required: [true, "field is required"] },
    no_of_beds: { type: Number, required: [true, "field is required"] },
    property_facilities: [
      {
        type: mongoose.Schema.ObjectId,
        ref: "Facility",
      },
    ],
    images: [
      {
        image_id: { type: String, required: [true, "field is required"] },
        image_url: { type: String, required: [true, "field is required"] },
      },
    ],
    property_features: [
      {
        type: mongoose.Schema.ObjectId,
        ref: "Feature",
      },
    ],
    property_plans: [
      {
        type: mongoose.Schema.ObjectId,
        ref: "Plan",
      },
    ],
  },
  {
    timestamps: true,
  }
);

const Properties = mongoose.model("Properties", propertiesSchema);

export default Properties;
