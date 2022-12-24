import mongoose from "mongoose";

const sliderSchema = new mongoose.Schema(
  {
    image: { type: String, required: [true, "field is required"] },
    url: { type: String, required: [true, "field is required"] },
    title: { type: String, required: [true, "field is required"] },
    description: { type: String, required: [true, "field is required"] },
  },
  {
    timestamps: true,
  }
);

const Slider = mongoose.model("Slider", sliderSchema);

export default Slider;
