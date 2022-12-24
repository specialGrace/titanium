import { Sequelize, DataTypes, UUIDV4 } from "sequelize";
import { connection } from "../database/db.js";
import Membership from "./Membership.js";

const ClubPlan = connection.define("ClubPlan", {
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

ClubPlan.hasOne(Membership, { as: "ClubPlan", foreignKey: "club_planId" });

export default ClubPlan;
