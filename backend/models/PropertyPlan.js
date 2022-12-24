import mongoose from "mongoose";

const propertyPlanSchema = new mongoose.Schema(
  {
    title: { type: String, required: [true, "field is required"] },
    image: { type: String, required: [true, "field is required"] },
    price: { type: Number, required: [true, "field is required"] },
  },
  {
    timestamps: true,
  }
);

const PropertyPlan = mongoose.model("PropertyPlan", propertyPlanSchema);

export default PropertyPlan;
