import { useState } from "react";
import { ChevronDown, Menu, X, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

import logo from "../../assets/logos/ascube-logo.png";

import "./Navbar.css";

const services = [
  {
    title: "Software Engineering",
    description: "Scalable software solutions for modern businesses.",
  },
  {
    title: "Web Development",
    description: "High-performance web applications and experiences.",
  },
  {
    title: "Mobile Applications",
    description: "Engaging mobile experiences across platforms.",
  },
  {
    title: "AI & Intelligent Solutions",
    description: "AI, automation and intelligent business solutions.",
  },
  {
    title: "Cloud & DevOps",
    description: "Cloud infrastructure, automation and deployment.",
  },
  {
    title: "Data & Analytics",
    description: "Data engineering, analytics and actionable insights.",
  },
];

const industries = [
  "Healthcare",
  "Banking & Finance",
  "Education",
  "Retail & E-Commerce",
  "Real Estate",
  "Manufacturing",
  "Logistics",
  "Automotive",
  "Hospitality",
  "Travel & Tourism",
  "Media & Entertainment",
  "Startups & SMEs",
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openMobileDropdown, setOpenMobileDropdown] = useState(null);

  const toggleMobileDropdown = (menu) => {
    setOpenMobileDropdown(
      openMobileDropdown === menu ? null : menu
    );
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setOpenMobileDropdown(null);
  };

  return (
    <header className="navbar">

      <div className="navbar-container">

        {/* ================= LOGO ================= */}

        <Link
          to="/"
          className="navbar-brand"
          onClick={closeMobileMenu}
        >
          <img
            src={logo}
            alt="ASCube InfoLabs"
            className="navbar-logo"
          />

          <div className="brand-text">
            <span className="brand-name">ASCube</span>
            <span className="brand-subtitle">INFOLABS</span>
          </div>
        </Link>


        {/* ================= DESKTOP NAV ================= */}

        <nav className="desktop-nav">

          <Link to="/" className="nav-link">
            Home
          </Link>


          {/* SERVICES */}

          <div className="nav-dropdown">

            <button className="nav-link dropdown-trigger">
              Services
              <ChevronDown size={14} />
            </button>

            <div className="dropdown-menu services-menu">

              <div className="dropdown-header">
                <span>OUR EXPERTISE</span>

                <p>
                  Technology solutions designed around
                  your business.
                </p>
              </div>

              <div className="services-dropdown-grid">

                {services.map((service, index) => (
                  <Link
                    to="/services"
                    className="service-dropdown-item"
                    key={service.title}
                  >
                    <span className="dropdown-number">
                      0{index + 1}
                    </span>

                    <div>
                      <strong>{service.title}</strong>

                      <p>{service.description}</p>
                    </div>

                    <ArrowUpRight size={15} />
                  </Link>
                ))}

              </div>

              <Link
                to="/services"
                className="dropdown-footer-link"
              >
                Explore all services
                <ArrowUpRight size={15} />
              </Link>

            </div>

          </div>


          {/* INDUSTRIES */}

          <div className="nav-dropdown">

            <button className="nav-link dropdown-trigger">
              Industries
              <ChevronDown size={14} />
            </button>

            <div className="dropdown-menu industries-menu">

              <div className="dropdown-header">
                <span>INDUSTRIES WE SERVE</span>

                <p>
                  Technology expertise adapted to
                  different business environments.
                </p>
              </div>

              <div className="industries-dropdown-grid">

                {industries.map((industry, index) => (
                  <Link
                    to="/industries"
                    className="industry-dropdown-item"
                    key={industry}
                  >
                    <span>
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <strong>{industry}</strong>

                    <ArrowUpRight size={14} />
                  </Link>
                ))}

              </div>

              <Link
                to="/industries"
                className="dropdown-footer-link"
              >
                Explore industries
                <ArrowUpRight size={15} />
              </Link>

            </div>

          </div>


          <Link
            to="/technologies"
            className="nav-link"
          >
            Technologies
          </Link>

          <Link
            to="/case-studies"
            className="nav-link"
          >
            Case Studies
          </Link>

          <Link
            to="/about"
            className="nav-link"
          >
            About
          </Link>

          <Link
            to="/careers"
            className="nav-link"
          >
            Careers
          </Link>

        </nav>


        {/* ================= DESKTOP CTA ================= */}

        <Link
          to="/contact"
          className="navbar-cta"
        >
          Let's Talk
          <ArrowUpRight size={16} />
        </Link>


        {/* ================= MOBILE BUTTON ================= */}

        <button
          className="mobile-menu-button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle navigation"
        >
          {mobileMenuOpen ? (
            <X size={24} />
          ) : (
            <Menu size={24} />
          )}
        </button>

      </div>


      {/* ================= MOBILE NAV ================= */}

      <div
        className={`mobile-nav ${
          mobileMenuOpen ? "mobile-nav-open" : ""
        }`}
      >

        <Link
          to="/"
          className="mobile-nav-link"
          onClick={closeMobileMenu}
        >
          Home
        </Link>


        {/* MOBILE SERVICES */}

        <div className="mobile-dropdown">

          <button
            className="mobile-dropdown-button"
            onClick={() => toggleMobileDropdown("services")}
          >
            <span>Services</span>

            <ChevronDown
              size={18}
              className={
                openMobileDropdown === "services"
                  ? "rotate-icon"
                  : ""
              }
            />
          </button>

          {openMobileDropdown === "services" && (
            <div className="mobile-dropdown-content">

              {services.map((service) => (
                <Link
                  to="/services"
                  key={service.title}
                  onClick={closeMobileMenu}
                >
                  {service.title}
                </Link>
              ))}

            </div>
          )}

        </div>


        {/* MOBILE INDUSTRIES */}

        <div className="mobile-dropdown">

          <button
            className="mobile-dropdown-button"
            onClick={() => toggleMobileDropdown("industries")}
          >
            <span>Industries</span>

            <ChevronDown
              size={18}
              className={
                openMobileDropdown === "industries"
                  ? "rotate-icon"
                  : ""
              }
            />
          </button>

          {openMobileDropdown === "industries" && (
            <div className="mobile-dropdown-content">

              {industries.map((industry) => (
                <Link
                  to="/industries"
                  key={industry}
                  onClick={closeMobileMenu}
                >
                  {industry}
                </Link>
              ))}

            </div>
          )}

        </div>


        <Link
          to="/technologies"
          className="mobile-nav-link"
          onClick={closeMobileMenu}
        >
          Technologies
        </Link>

        <Link
          to="/case-studies"
          className="mobile-nav-link"
          onClick={closeMobileMenu}
        >
          Case Studies
        </Link>

        <Link
          to="/about"
          className="mobile-nav-link"
          onClick={closeMobileMenu}
        >
          About
        </Link>

        <Link
          to="/careers"
          className="mobile-nav-link"
          onClick={closeMobileMenu}
        >
          Careers
        </Link>


        <Link
          to="/contact"
          className="mobile-contact-button"
          onClick={closeMobileMenu}
        >
          Let's Talk
          <ArrowUpRight size={17} />
        </Link>

      </div>

    </header>
  );
}