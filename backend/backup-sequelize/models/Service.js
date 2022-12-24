import { Sequelize, DataTypes, UUIDV4 } from "sequelize";
import { connection } from "../database/db.js";

const Service = connection.define(
  "Service",
  {
    title: { type: DataTypes.STRING, allowNull: false },
    description: { type: DataTypes.STRING, allowNull: false },
  },
  {}
);

export default Service;
