import { Sequelize, DataTypes, UUIDV4 } from "sequelize";
import { connection } from "../database/db.js";
import Membership from "./Membership.js";
import Facility from "./Facility.js";
import PropertyPlan from "./PropertyPlan.js";
import PropertyFeature from "./PropertyFeature.js";

const Property = connection.define(
  "Property",
  {
    video_url: { type: DataTypes.STRING, allowNull: false },
    title: { type: DataTypes.STRING, allowNull: false },
    description: { type: DataTypes.STRING, allowNull: false },
    pricing: { type: DataTypes.STRING, allowNull: false },
    location: { type: DataTypes.STRING, allowNull: false },
    no_of_beds: { type: DataTypes.STRING, allowNull: false },
    images: {
      type: DataTypes.ARRAY({ type: DataTypes.STRING, allowNull: false }),
    },
  },
  {}
);

Property.hasMany(Facility, { as: "Property", foreignKey: "propertyId" });
Property.hasMany(PropertyPlan, { as: "Property", foreignKey: "propertyId" });
Property.hasMany(PropertyFeature, { as: "Property", foreignKey: "propertyId" });

// Property.hasOne(Membership, { as: "Property", foreignKey: "club_Property_Id" });

export default Property;
