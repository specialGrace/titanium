import { Sequelize, DataTypes, UUIDV4 } from "sequelize";
import { connection } from "../database/db.js";

const Membership = connection.define(
  "Membership",
  {
    firstname: { type: DataTypes.STRING, allowNull: true },
    lastname: { type: DataTypes.STRING, allowNull: true },
    job_title: { type: DataTypes.STRING, allowNull: true },
    email: { type: DataTypes.STRING, allowNull: true },
    phone: { type: DataTypes.STRING, allowNull: true },
    marital_Status: {
      type: DataTypes.ENUM,
      values: ["single", "married"],
      allowNull: true,
      ddefaultValue: "single",
    },
    employment_status: {
      type: DataTypes.ENUM,
      values: ["employed", "unemployed", "self-employed", "student"],
      allowNull: true,
      ddefaultValue: "employed",
    },
    join_date: {
      type: DataTypes.DATE,
      allowNull: true,
      ddefaultValue: Sequelize.fn("NOW"),
    },
    heard_about: { type: DataTypes.STRING, allowNull: true },
  },
  {
    // Other model options go here
  }
);

export default Membership;
