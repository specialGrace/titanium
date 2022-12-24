import dotenv from "dotenv";
// cofig connection
dotenv.config();

import express from "express";
import path from "path";
import colors from "colors";
import morgan from "morgan";
import cors from "cors";
import cookieParser from "cookie-parser";
import { csrfProtection } from "./middlewares/auth.js";
import { notFound, errorHandler } from "./middlewares/error.js";
import connectDB from "./configs/db.js";

//route inports
import HomeRoute from "./routes/Home.js";
import SettingRoute from "./routes/Setting.js";
import UserRoute from "./routes/User.js";
import MembershipRoute from "./routes/Membership.js";
import ClubPlanRoute from "./routes/ClubPlan.js";
import FacilityRoute from "./routes/Facility.js";
import PropertyPlanRoute from "./routes/PropertyPlan.js";
import PropertyRoute from "./routes/Property.js";
import PropertyFeatureRoute from "./routes/PropertyFeature.js";
import ServiceRoute from "./routes/Service.js";
import SliderRoute from "./routes/Slider.js";
import TeamRoute from "./routes/Team.js";
import QuotationRoute from "./routes/Quotation.js";

//app middlware configurations
const app = express();
const __dirname = path.resolve();

// log request information in development
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}
//enables passing of body requests
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));
//production setup - serve frontend static build
app.use(express.static(path.join(__dirname, "../frontend/out")));
// set up cors
const origin =
  process.NODE_ENV === "development"
    ? "http://localhost:3000"
    : "https://titanium.com";

const corsOptions = {
  origin: origin,
  credentials: true,
};

app.use(cors(corsOptions));
// setup "cookie" is true in csrfProtection
app.use(cookieParser());
//csurf protectio
app.get("/getcsrf", csrfProtection, function (req, res) {
  // pass the csrfToken to the view
  // res.render('send', { csrfToken: req.csrfToken() })
  res.json({ csrfToken: req.csrfToken() });
});

//route middleware
app.use("/api/v1/home", HomeRoute);
app.use("/api/v1/setting", SettingRoute);
app.use("/api/v1/users", UserRoute);
app.use("/api/v1/members", MembershipRoute);
app.use("/api/v1/club_plans", ClubPlanRoute);
app.use("/api/v1/facilities", FacilityRoute);
app.use("/api/v1/property_plans", PropertyPlanRoute);
app.use("/api/v1/properties", PropertyRoute);
app.use("/api/v1/property_features", PropertyFeatureRoute);

app.use("/api/v1/services", ServiceRoute);
app.use("/api/v1/sliders", SliderRoute);
app.use("/api/v1/team", TeamRoute);
app.use("/api/v1/quotations", QuotationRoute);

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
    res.send("Welcomme to titanium backend !!!!");
  });
}

const port = process.env.PORT || 8000;

const start = async (port) => {
  try {
    // database connection

    const conn = await connectDB();
    app.listen(
      port,
      console.log(
        `Server running on ${process.env.NODE_ENV} mode on port ${port}`.yellow
          .underline
      )
    );
    console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline);
  } catch (error) {
    console.log(`Error: ${error.message}`.red.underline.bold);
    process.exit(1);
  }
};

//start server function
start(port);
