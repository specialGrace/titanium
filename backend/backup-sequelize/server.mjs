import dotenv from "dotenv";
dotenv.config();

import express from "express";
import bodyParser from "body-parser";
import path from "path";
import { notFound, errorHandler } from "./middlewares/error.mjs";
//route inports
import HomeRoute from "./routes/Home.mjs";
import SettingRoute from "./routes/Setting.mjs";
import QuotationRoute from "./routes/Quotation.mjs";
import UserRoute from "./routes/User.mjs";
import MembershipRoute from "./routes/Membership.mjs";
import ClubPlanRoute from "./routes/ClubPlan.mjs";
import FacilityRoute from "./routes/Facility.mjs";
import PropertyPlanRoute from "./routes/PropertyPlan.mjs";
import PropertyRoute from "./routes/Property.mjs";
import PropertyFeatureRoute from "./routes/PropertyFeature.mjs";
import ServiceRoute from "./routes/Service.mjs";
import SliderRoute from "./routes/Slider.mjs";
import TeamRoute from "./routes/Team.mjs";
import ImageRoute from "./routes/Image.mjs";

// Database
import db from "./database/db.mjs";
// Test DB
db.authenticate()
  .then(() => console.log("Database connected..."))
  .catch((err) => console.log("Error: " + err));

const app = express();
const __dirname = path.resolve();

/*
 Object-Relational Mapping (ORM) is a technique that lets you query 
and manipulate data from a database using an object-oriented paradigm
*/

// place holder for the data
const users = [];

app.use(bodyParser.json());
//production setup
app.use(express.static(path.join(__dirname, "../frontend/out")));

//route middleware
app.use("/api/v1/home", HomeRoute);
app.use("/api/v1/settings", SettingRoute);
app.use("/api/v1/users", UserRoute);
app.use("/api/v1/members", MembershipRoute);
app.use("/api/v1/club_plans", ClubPlanRoute);
app.use("/api/v1/facilities", FacilityRoute);
app.use("/api/v1/plans", PropertyPlanRoute);
app.use("/api/v1/properties", PropertyRoute);
app.use("/api/v1/property_features", PropertyFeatureRoute);

app.use("/api/v1/services", ServiceRoute);
app.use("/api/v1/sliders", SliderRoute);
app.use("/api/v1/team", TeamRoute);
app.use("/api/v1/quotations", QuotationRoute);
app.use("/api/v1/images", ImageRoute);

// error handlers - must be after routes definatio above
app.use(notFound);
app.use(errorHandler);

//production setup
if (process.env.NODE_ENV === "production") {
  app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend/out/index.html"));
  });
} else {
  app.get("/", (req, res) => {
    res.send("App Works !!!!");
  });
}

const port = process.env.PORT || 8000;
const start = async (port) => {
  //start server
  app.listen(port, (err) => {
    if (err) {
      console.log(err);
      return;
    }
    console.log("server is running");
  });
};

start(port);
