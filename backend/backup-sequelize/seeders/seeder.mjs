import dotenv from "dotenv";
dotenv.config();

import {
  Membership,
  ClubPlan,
  Facility,
  User,
  PropertyFeature,
  PropertyPlan,
  Image,
  Property,
  Quotation,
  Service,
  Slider,
  Team,
  Setting,
} from "../models/central.mjs";
import colors from "colors";

//sample data
import SampleProperties from "./sampleRecords/properties.js";
// Database
import db from "./database/db.mjs";
// Test DB
db.authenticate()
  .then(() => console.log("Database connected..."))
  .catch((err) => console.log("Error: " + err));

//import test records into db
const importData = async () => {
  try {
    // await Doctor.deleteMany();

    // const createdAdmin = await SampleProperties.insertMany(admin);
    console.log("Data Imported!".green.inverse);
    process.exit();
  } catch (error) {
    console.log(`${error}`.red.inverse);
    process.exit(1);
  }
};

//destroy test records into db
const destroyData = async () => {
  try {
    // await SampleProperties.deleteMany();

    console.log("Data Destroyed!".red.inverse);
    process.exit();
  } catch (error) {
    console.log(`${error}`.red.inverse);
    process.exit(1);
  }
};

if (process.argv[2] === "-d") {
  destroyData();
} else {
  importData();
}
