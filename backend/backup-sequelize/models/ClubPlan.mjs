import { DataTypes } from "sequelize";
import db from "../database/db.mjs";

const ClubPlan = db.define("ClubPlan", {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: "silver",
  },
  price: { type: DataTypes.STRING, allowNull: false },
  short_desc: { type: DataTypes.TEXT, allowNull: false },
  long_desc: { type: DataTypes.TEXT, allowNull: false },
  benefits: { type: DataTypes.STRING, allowNull: false },
});

export default ClubPlan;
