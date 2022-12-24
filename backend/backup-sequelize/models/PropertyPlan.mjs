import { DataTypes } from "sequelize";
import db from "../database/db.mjs";

const PropertyPlan = db.define(
  "PropertyPlan",
  {
    title: { type: DataTypes.STRING, allowNull: false },
    image: { type: DataTypes.STRING, allowNull: false },
    imageId: { type: DataTypes.STRING, allowNull: true },
    price: { type: DataTypes.STRING, allowNull: false },
  },
  {}
);

export default PropertyPlan;
