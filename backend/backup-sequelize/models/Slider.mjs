import { DataTypes } from "sequelize";
import db from "../database/db.mjs";

const Slider = db.define(
  "Slider",
  {
    image: { type: DataTypes.STRING, allowNull: false },
    imageId: { type: DataTypes.STRING, allowNull: true },
    url: { type: DataTypes.STRING, allowNull: false },
    title: { type: DataTypes.STRING, allowNull: false },
    description: { type: DataTypes.STRING, allowNull: false },
  },
  {}
);

export default Slider;
