import React from "react";
import { Route, Routes } from "react-router-dom";

import { NavbarV2 } from "./components";
import {
  CampaignDetails,
  CreateCampaign,
  Home,
  Profile,
  Logout,
} from "./pages";

const App = () => {
  return (
    <div className="bg-blur relative sm:-8 p-4 bg-[#13131a] min-h-screen flex flex-row">

      <div className="flex-1 max-sm:w-full max-w-[1280px] mx-auto sm:pr-5">
        <NavbarV2 />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/create-campaign" element={<CreateCampaign />} />
          <Route path="/campaign-details/:id" element={<CampaignDetails />} />
          <Route path="/logout" element={<Logout />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
