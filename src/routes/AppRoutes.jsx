import { Routes, Route } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";

import Home from "../pages/Home/Home";
import About from "../pages/About/About";

import Services from "../pages/Services/Services";
import ServiceDetails from "../pages/Services/ServiceDetails";

import Industries from "../pages/Industries/Industries";
import IndustryDetails from "../pages/Industries/IndustryDetails";

import Technologies from "../pages/Technologies/Technologies";

import CaseStudies from "../pages/CaseStudies/CaseStudies";
import CaseStudyDetails from "../pages/CaseStudies/CaseStudyDetails";

import Careers from "../pages/Careers/Careers";
import Contact from "../pages/Contact/Contact";

export default function AppRoutes() {
  return (
    <Routes>

      <Route element={<MainLayout />}>

        <Route path="/" element={<Home />} />

        <Route path="/about" element={<About />} />

        <Route path="/services" element={<Services />} />
        <Route path="/services/:slug" element={<ServiceDetails />} />

        <Route path="/industries" element={<Industries />} />
        <Route path="/industries/:slug" element={<IndustryDetails />} />

        <Route path="/technologies" element={<Technologies />} />

        <Route path="/case-studies" element={<CaseStudies />} />
        <Route
          path="/case-studies/:slug"
          element={<CaseStudyDetails />}
        />

        <Route path="/careers" element={<Careers />} />

        <Route path="/contact" element={<Contact />} />

      </Route>

    </Routes>
  );
}