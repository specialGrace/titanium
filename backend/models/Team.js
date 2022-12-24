import mongoose from "mongoose";

const teamSchema = new mongoose.Schema(
  {
    image: { type: String, required: [true, "field is required"] },
    name: { type: String, required: [true, "field is required"] },
    designation: { type: String, required: [true, "field is required"] },
  },
  {
    timestamps: true,
  }
);

const Team = mongoose.model("Team", teamSchema);

export default Team;
