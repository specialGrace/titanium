import express from "express";
import bodyParser from "body-parser";
import path from "path";
import { database } from "./database/db.js";
import { notFound, errorHandler } from "./middlewares/error.js";
//route inports
import UserRoute from "./routes/User.js";
import MembershipRoute from "./routes/Membership.js";
import ClubPlanRoute from "./routes/ClubPlan.js";
// import FacilityRoute from "./routes/Facility.js";
// import PlanRoute from "./routes/Plan.js";
// import PropertyRoute from "./routes/Property.js";
// import PropertyFeatureRoute from "./routes/PropertyFeature.js";
// import ServiceRoute from "./routes/Service.js";
// import SliderRoute from "./routes/Slider.js";
// import TeamRoute from "./routes/Team.js";

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
app.use("/api/v1/users", UserRoute);
app.use("/api/v1/members", MembershipRoute);
app.use("/api/v1/club_plans", ClubPlanRoute);
// app.use("/api/v1/facilities", FacilityRoute);
// app.use("/api/v1/plans", PlanRoute);
// app.use("/api/v1/properties", PropertyRoute);
// app.use("/api/v1/property_features", PropertyFeatureRoute);

// app.use("/api/v1/service", ServiceRoute);
// app.use("/api/v1/slider", SliderRoute);
// app.use("/api/v1/team", TeamRoute);

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
  //connect database
  await database();
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
