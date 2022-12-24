import asyncHandler from "express-async-handler";
import { Quotation } from "../models/central.mjs";

// @desc Create a quotation
// @route POST /api/v1/quotations
// @access Private

const createQuotation = asyncHandler(async (req, res) => {
  const { title, detail } = req.body;

  //create quotation
  const quotation = await Quotation.create({
    title,
    detail,
  });

  res.status(200).json({
    status: "success",
    quotation,
  });
});

// @desc Get quotations
// @route GET /api/v1/quotations
// @access Private
const getQuotations = asyncHandler(async (req, res) => {
  //find all quotations
  const quotations = await Quotation.find({});

  res.json({
    status: "success",
    quotations,
  });
});

// @desc Get quotation
// @route GET /api/v1/quotations/:id
// @access Private
const getQuotation = asyncHandler(async (req, res) => {
  const quotationId = req.params.id;

  //find quotation
  const quotation = await Quotation.findOne({ where: { id: quotationId } });
  if (!quotation) {
    res.status(404);
    throw new Error("No record found");
  }

  res.status(200).json({
    status: "success",
    quotation,
  });
});

// @desc Update quotation
// @route PUT /api/v1/quotations/:id
// @access Private - admin only

const updateQuotation = asyncHandler(async (req, res) => {
  const quotationId = req.params.id;
  const { title, detail } = req.body;

  //find quotation
  const quotation = await Quotation.findById({ _id: quotationId });

  if (!quotation) {
    res.status(404);
    throw new Error("No record found");
  }

  if (title) {
    quotation.title = title;
  }

  if (detail) {
    quotation.detail = detail;
  }

  //save the updated record
  const updatedQuotation = await quotation.save();

  res.status(200).json({
    status: "success",
    updatedQuotation,
  });
});

// @desc delete quotation
// @route GET /api/v1/quotations/:id
// @access private - admin
const deleteQuotation = asyncHandler(async (req, res) => {
  const quotationId = req.params.id;

  //find the quotation
  const quotation = await Quotation.findOne({ where: { id: quotationId } });
  if (!quotation) {
    res.status(404);
    throw new Error("No record found");
  }

  //remove found itemm
  await quotation.destroy();

  res.status(200).json({
    status: "success",
    message: "quotation removed successfully",
  });
});

export {
  createQuotation,
  getQuotation,
  getQuotations,
  deleteQuotation,
  updateQuotation,
};
