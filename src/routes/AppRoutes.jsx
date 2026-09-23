import { Routes, Route, Navigate } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";

// Home
import Home from "../pages/Home/Home";

// About
import About from "../pages/About/About";

// Services
import Services from "../pages/Services/Services";
import ServiceDetails from "../pages/Services/ServiceDetails";

// Industries
import Industries from "../pages/Industries/Industries";
import IndustryDetails from "../pages/Industries/IndustryDetails";

// Technologies
import Technologies from "../pages/Technologies/Technologies";

// Case Studies
import CaseStudies from "../pages/CaseStudies/CaseStudies";
import CaseStudyDetails from "../pages/CaseStudies/CaseStudyDetails";

// Careers
import Careers from "../pages/Careers/Careers";

// Contact
import Contact from "../pages/Contact/Contact";

export default function AppRoutes() {
  return (
    <Routes>

      {/* =====================================================
          MAIN WEBSITE LAYOUT
      ===================================================== */}

      <Route element={<MainLayout />}>

        {/* HOME */}
        <Route
          path="/"
          element={<Home />}
        />

        {/* ABOUT */}
        <Route
          path="/about"
          element={<About />}
        />

        {/* =====================================================
            SERVICES
        ===================================================== */}

        <Route
          path="/services"
          element={<Services />}
        />

        <Route
          path="/services/:slug"
          element={<ServiceDetails />}
        />

        {/* =====================================================
            INDUSTRIES
        ===================================================== */}

        <Route
          path="/industries"
          element={<Industries />}
        />

        <Route
          path="/industries/:slug"
          element={<IndustryDetails />}
        />

        {/* =====================================================
            TECHNOLOGIES
        ===================================================== */}

        <Route
          path="/technologies"
          element={<Technologies />}
        />

        {/* =====================================================
            CASE STUDIES
        ===================================================== */}

        <Route
          path="/case-studies"
          element={<CaseStudies />}
        />

        <Route
          path="/case-studies/:slug"
          element={<CaseStudyDetails />}
        />

        {/* =====================================================
            CAREERS
        ===================================================== */}

        <Route
          path="/careers"
          element={<Careers />}
        />

        {/* =====================================================
            CONTACT
        ===================================================== */}

        <Route
          path="/contact"
          element={<Contact />}
        />

        {/* =====================================================
            UNKNOWN ROUTES
            Redirect everything unknown to Home
        ===================================================== */}

        <Route
          path="*"
          element={<Navigate to="/" replace />}
        />

      </Route>

    </Routes>
  );
}