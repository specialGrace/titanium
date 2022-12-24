import { DataTypes } from "sequelize";
import db from "../database/db.mjs";

const Service = db.define(
  "Service",
  {
    title: { type: DataTypes.STRING, allowNull: false },
    description: { type: DataTypes.STRING, allowNull: false },
  },
  {}
);

export default Service;
