import { Sequelize, DataTypes, UUIDV4 } from "sequelize";
import { connection } from "../database/db.js";
import Property from "./Property.js";

const Facility = connection.define(
  "Facility",
  {
    icon: { type: DataTypes.STRING, allowNull: false },
    title: { type: DataTypes.STRING, allowNull: false },
  },
  {}
);

// Facility.hasMany(Property, {
//   as: "Facility",
//   foreignKey: "property_facilityId",
// });

export default Facility;
