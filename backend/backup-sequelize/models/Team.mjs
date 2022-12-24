import { DataTypes } from "sequelize";
import db from "../database/db.mjs";

const Team = db.define(
  "Team",
  {
    image: { type: DataTypes.STRING, allowNull: false },
    imageId: { type: DataTypes.STRING, allowNull: true },
    name: { type: DataTypes.STRING, allowNull: false },
    designation: { type: DataTypes.STRING, allowNull: false },
  },
  {}
);

export default Team;
