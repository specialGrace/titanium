import { Sequelize, DataTypes, UUIDV4 } from "sequelize";
import { connection } from "../database/db.js";
import Property from "./Property.js";

const Feature = connection.define(
  "Feature",
  {
    icon: { type: DataTypes.STRING, allowNull: false },
    title: { type: DataTypes.STRING, allowNull: false },
    description: { type: DataTypes.STRING, allowNull: false },
  },
  {}
);

//Feature.hasMany(Property, { as: "Feature", foreignKey: "property_featureId" });

export default Feature;
