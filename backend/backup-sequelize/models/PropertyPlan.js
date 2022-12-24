import { Sequelize, DataTypes, UUIDV4 } from "sequelize";
import { connection } from "../database/db.js";
import Property from "./Property.js";

const PropertyPlan = connection.define(
  "PropertyPlan",
  {
    title: { type: DataTypes.STRING, allowNull: false },
    image: { type: DataTypes.STRING, allowNull: false },
    price: { type: DataTypes.STRING, allowNull: false },
  },
  {}
);

//Plan.hasMany(Property, { as: "Plan", foreignKey: "property_planId" });

export default PropertyPlan;
