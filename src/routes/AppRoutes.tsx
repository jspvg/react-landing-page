import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Pricing from "../pages/Pricing";
import Products from "../pages/Products";
import AboutUs from "../pages/About-Us";
import Careers from "../pages/Careers";
import Community from "../pages/Community";
import GetStarted from "../pages/Get-Started";
import Navigation from "../components/reusable/Navigation";

const AppRoutes = () => (
  <div className="d-flex row m-lg-4 px-lg-5">
    <Navigation />
    <div>
      <Routes>
        <Route path="*" element={<Home />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/products" element={<Products />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/community" element={<Community />} />
        <Route path="/get-started" element={<GetStarted />} />
      </Routes>
    </div>
  </div>
);

export default AppRoutes;
