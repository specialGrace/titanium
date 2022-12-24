import mongoose from "mongoose";

const facilitySchema = new mongoose.Schema(
  {
    facility_id: { type: String },
    icon: { type: String, required: [true, "field is required"] },
    title: { type: String, required: [true, "field is required"] },
  },
  {
    timestamps: true,
  }
);

const Facility = mongoose.model("Facility", facilitySchema);

export default Facility;
