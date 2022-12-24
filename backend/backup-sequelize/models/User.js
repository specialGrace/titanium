import { Sequelize, DataTypes, UUIDV4 } from "sequelize";
import { connection } from "../database/db.js";
// import Membership from "./Membership.js";
import bcrypt from "bcryptjs";
import Membership from "./Membership.js";

const User = connection.define(
  "User",
  {
    email: {
      validate: { isEmail: true },
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    role: {
      type: DataTypes.ENUM,
      values: ["admin", "client", "super-admin"],
      allowNull: false,
      defaultValue: "client",
    },
    emailIsVerified: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      set(value) {
        const hasedPW = passwordHashed(value);
        this.setDataValue("password", hasedPW);
      },
    },
  },
  {
    defaultScope: {
      attributes: { exclude: ["password"] },
    },
    scopes: {
      withPassword: {
        attributes: {},
      },
    },
  }
);

User.hasOne(Membership, { as: "Referral", foreignKey: "referralId" });
Membership.hasOne(User, { as: "Member", foreignKey: "MembershipId" });

//Recipe.belongsTo(cook, {as:'CookRef', foreignKey:'cookId}) one recipe can only belong to cook
//Recipe.hasMany(feedback, {as:'Comments'}) one recipe can have multiple feedbacks

//hash password beefore saving to db
const passwordHashed = (password) => {
  const salt = bcrypt.genSaltSync(10);
  const hashed = bcrypt.hashSync(password, salt);
  return hashed;
};

export default User;
