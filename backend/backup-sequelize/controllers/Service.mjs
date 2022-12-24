import asyncHandler from "express-async-handler";
import { Service } from "../models/central.mjs";

// @desc Create a service
// @route POST /api/v1/services
// @access Private - admin

const createService = asyncHandler(async (req, res) => {
  const { description, title } = req.body;

  //create service
  const service = await Service.create({
    description,
    title,
  });

  res.status(200).json({
    status: "success",
    service,
  });
});

// @desc Get services
// @route GET /api/v1/services
// @access Public
const getServices = asyncHandler(async (req, res) => {
  //find all services
  const services = await Service.findAll({});

  res.json({
    status: "success",
    services,
  });
});

// @desc Get service
// @route GET /api/v1/Services/:id
// @access Public
const getService = asyncHandler(async (req, res) => {
  const serviceId = req.params.id;

  //find service
  const service = await Service.findOne({ where: { id: serviceId } });
  if (!service) {
    res.status(404);
    throw new Error("No record found");
  }

  res.status(200).json({
    status: "success",
    service,
  });
});

// @desc Update service
// @route PUT /api/v1/Services/:id
// @access Private - admin only

const updateService = asyncHandler(async (req, res) => {
  const serviceId = req.params.id;
  const { description, title } = req.body;

  //find faclity
  const service = await Service.findById({ _id: serviceId });

  if (!service) {
    res.status(404);
    throw new Error("No record found");
  }

  if (description) {
    service.description = description;
  }

  if (title) {
    service.title = title;
  }

  //save the updated record
  const updatedService = await service.save();

  res.status(200).json({
    status: "success",
    updatedService,
  });
});

// @desc delete services
// @route GET /api/v1/services/:id
// @access private - admin
const deleteService = asyncHandler(async (req, res) => {
  const serviceId = req.params.id;

  //find the facility
  const service = await Service.findOne({ where: { id: serviceId } });
  if (!service) {
    res.status(404);
    throw new Error("No record found");
  }

  //remove found itemm
  await service.destroy();

  res.status(200).json({
    status: "success",
    message: "Service removed successfully",
  });
});

export { createService, getService, getServices, deleteService, updateService };
