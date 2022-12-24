import dotenv from "dotenv";
dotenv.config();

import mongoose from "mongoose";
import colors from "colors";
import connectDB from "./config/db.js";
import SampleProperties from "./sampleRecords/properties.js";

connectDB();
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
