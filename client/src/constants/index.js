import {
  ownCampaign,
  dashboard,
  logout,
  newCampaign,
  payment,
  withdraw,
} from "../assets";

export const navlinks = [
  {
    name: "All Campaigns",
    imgUrl: dashboard,
    link: "/",
  },
  {
    name: "Create Campaign",
    imgUrl: newCampaign,
    link: "/create-campaign",
  },
  {
    name: "Profile",
    imgUrl: ownCampaign,
    link: "/profile",
  },
];
