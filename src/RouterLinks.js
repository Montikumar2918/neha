import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Contact from "./pages/Contact";
import Faq from "./pages/Faq";
import Home from "./pages/Home"; 
import NotFound from "./pages/NotFound";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import ProductDetails from "./pages/ProductDetails";
import TermsConditions from "./pages/TermsConditions";
import Career from "./pages/Career";
import JobDetails from "./pages/JobDetails";

function RouterLinks() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<Home />} />
          {/* <Route path="teams" element={<Teams />}>
            <Route path=":teamId" element={<Team />} />
            <Route path=":teamId/edit" element={<EditTeam />} />
            <Route path="new" element={<NewTeamForm />} />
            <Route index element={<LeagueStandings />} />
          </Route> */} 
        </Route>
        {/* <Route element={<PageLayout />}>
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/tos" element={<Tos />} />
        </Route> */} 
          <Route path="/faq"  element={<Faq />} />
          <Route path="/product-details" element={<ProductDetails />} />
          <Route path="/terms-and-conditions" element={<TermsConditions />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/career" element={<Career />} />
          <Route path="/job-details" element={<JobDetails />} />
          <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default RouterLinks;
