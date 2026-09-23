import {
  ArrowUpRight,
  Mail,
  MapPin,
  Phone,
  ArrowRight,
} from "lucide-react";

import "./Footer.css";
import ascubeLogo from "../../assets/logos/ascube-logo.png";


export default function Footer() {
  const services = [
    "Software Engineering",
    "Web Development",
    "Mobile Applications",
    "AI & Intelligent Solutions",
    "Cloud & DevOps",
    "Digital Transformation",
  ];

  const industries = [
    "Healthcare",
    "Finance & Banking",
    "Retail & E-Commerce",
    "Education",
    "Manufacturing",
    "Travel & Hospitality",
  ];

  const company = [
    {
      label: "About Us",
      href: "/about",
    },
    {
      label: "Technologies",
      href: "/technologies",
    },
    {
      label: "Case Studies",
      href: "/case-studies",
    },
    {
      label: "Careers",
      href: "/careers",
    },
    {
      label: "Contact",
      href: "/contact",
    },
  ];

  return (
    <footer className="site-footer">

      {/* =====================================================
          CTA SECTION
      ===================================================== */}

      <section className="footer-cta">

        <div className="footer-cta-overlay"></div>

        <div className="footer-cta-content">

          <span className="footer-eyebrow">
            LET'S BUILD SOMETHING GREAT
          </span>

          <h2>
            Have an idea?
            <br />
            <span>Let's make it real.</span>
          </h2>

          <p>
            From concept to deployment, ASCube InfoLabs
            helps businesses turn technology into
            meaningful digital experiences.
          </p>

          <a
            href="/contact"
            className="footer-cta-button"
          >
            Start a Project
            <ArrowRight size={18} />
          </a>

        </div>

      </section>


      {/* =====================================================
          MAIN FOOTER
      ===================================================== */}

      <div className="footer-main">

        <div className="footer-container">

          {/* =================================================
              BRAND
          ================================================= */}

          <div className="footer-brand">

            <a
              href="/"
              className="footer-logo"
            >
              <img
                src={ascubeLogo}
                alt="A S Cube InfoLabs"
              />
            </a>

            <p>
              A S Cube InfoLabs delivers end-to-end
              technology solutions that help businesses
              innovate, transform and scale.
            </p>

            <div className="footer-location">
              <MapPin size={16} />
              <span>
                Hyderabad, Telangana, India
              </span>
            </div>

          </div>


          {/* =================================================
              SERVICES
          ================================================= */}

          <div className="footer-column">

            <h3>Services</h3>

            <ul>
              {services.map((service) => (
                <li key={service}>
                  <a href="/services">
                    {service}
                  </a>
                </li>
              ))}
            </ul>

          </div>


          {/* =================================================
              INDUSTRIES
          ================================================= */}

          <div className="footer-column">

            <h3>Industries</h3>

            <ul>
              {industries.map((industry) => (
                <li key={industry}>
                  <a href="/industries">
                    {industry}
                  </a>
                </li>
              ))}
            </ul>

          </div>


          {/* =================================================
              COMPANY
          ================================================= */}

          <div className="footer-column">

            <h3>Company</h3>

            <ul>
              {company.map((item) => (
                <li key={item.label}>
                  <a href={item.href}>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>

          </div>


          {/* =================================================
              CONTACT
          ================================================= */}

          <div className="footer-column footer-contact">

            <h3>Get in touch</h3>

            <a
              href="mailto:info@ascubeinfolabs.com"
              className="footer-contact-item"
            >
              <span className="footer-contact-icon">
                <Mail size={16} />
              </span>

              <span>
                info@ascubeinfolabs.com
              </span>
            </a>
{/* 
            <a
              href="tel:+910000000000"
              className="footer-contact-item"
            >
              <span className="footer-contact-icon">
                <Phone size={16} />
              </span>

              <span>
                
              </span>
            </a> */}

            <a
              href="/contact"
              className="footer-contact-link"
            >
              Talk to our team
              <ArrowUpRight size={16} />
            </a>

          </div>

        </div>

      </div>


      {/* =====================================================
          BOTTOM BAR
      ===================================================== */}

      <div className="footer-bottom">

        <div className="footer-bottom-container">

          <p>
            © {new Date().getFullYear()} ASCube InfoLabs.
            All rights reserved.
          </p>

          <div className="footer-legal">

            <a href="#">
              Privacy Policy
            </a>

            <a href="#">
              Terms of Service
            </a>

          </div>

        </div>

      </div>

    </footer>
  );
}