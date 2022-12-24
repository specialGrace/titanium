import { DataTypes } from "sequelize";
import db from "../database/db.mjs";

const Setting = db.define(
  "Setting",
  {
    name: { type: DataTypes.STRING, allowNull: false },
  },
  {}
);

export default Setting;
