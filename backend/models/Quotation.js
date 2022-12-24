import mongoose from "mongoose";

const quotationSchema = new mongoose.Schema(
  {
    title: { type: String, required: [true, "field is required"] },
    detail: { type: String, required: [true, "field is required"] },
  },
  {
    timestamps: true,
  }
);

const Quotation = mongoose.model("Quotation", quotationSchema);

export default Quotation;
