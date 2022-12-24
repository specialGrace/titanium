import ClubPlan from "./ClubPlan.mjs";
import Facility from "./Facility.mjs";
import Image from "./Image.mjs";
import Membership from "./Membership.mjs";
import Property from "./Property.mjs";
import PropertyPlan from "./PropertyPlan.mjs";
import PropertyFeature from "./PropertyFeature.mjs";
import User from "./User.mjs";
import Quotation from "./Quotation.mjs";
import Service from "./Service.mjs";
import Setting from "./Setting.mjs";
import Slider from "./Slider.mjs";
import Team from "./Team.mjs";

import db from "../database/db.mjs";

ClubPlan.hasMany(Membership, { as: "members", foreignKey: "clubPlanId" }); //clubplan can have many member
Membership.belongsTo(ClubPlan, { as: "clubPlan", foreignKey: "clubPlanId" }); //member can only have one plan

User.hasMany(Membership, { as: "referrals", foreignKey: "referralId" }); //User can have many referral
Membership.belongsTo(User, { as: "referral", foreignKey: "referralId" }); //member can only have one referral

Property.hasMany(Facility, { as: "facilities", foreignKey: "propertyId" });
// Facility.belongsTo(Property);

Property.hasMany(PropertyPlan, {
  as: "propertyPlans",
  foreignKey: "propertyId",
});
// PropertyPlan.belongsTo(Property);

Property.hasMany(PropertyFeature, {
  as: "propertyFeatures",
  foreignKey: "propertyId",
});
// PropertyFeature.belongsTo(Property);

Property.hasMany(Image, {
  as: "images",
  foreignKey: "propertyId",
});
// Image.belongsTo(Property);

db.sync().then(() => {
  console.log("tables created");
});

export {
  Membership,
  ClubPlan,
  Facility,
  User,
  PropertyFeature,
  PropertyPlan,
  Image,
  Property,
  Quotation,
  Service,
  Slider,
  Team,
  Setting,
};
