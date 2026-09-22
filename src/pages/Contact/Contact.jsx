import { useState } from "react";

import {
  ArrowRight,
  Check,
  Clock3,
  Mail,
  MapPin,
  Phone,
  Send,
  Sparkles,
} from "lucide-react";

import "./Contact.css";

export default function Contact() {
  const [selectedServices, setSelectedServices] = useState([]);

  const services = [
    "Software Development",
    "Web Development",
    "Mobile Applications",
    "AI & Machine Learning",
    "Cloud & DevOps",
    "Digital Transformation",
    "UI/UX Design",
    "IT Consulting",
  ];

  const industries = [
    "Healthcare",
    "Finance & Banking",
    "Retail & E-Commerce",
    "Education",
    "Manufacturing",
    "Travel & Hospitality",
    "Real Estate",
    "Other",
  ];

  const toggleService = (service) => {
    setSelectedServices((current) =>
      current.includes(service)
        ? current.filter((item) => item !== service)
        : [...current, service]
    );
  };

  return (
    <main className="contact-page">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="contact-hero">

        <div className="contact-hero-glow"></div>

        <div className="contact-container">

          <div className="contact-hero-content">

            <span className="contact-eyebrow">
              START A CONVERSATION
            </span>

            <h1>
              Tell us what
              <br />
              you're <span>building.</span>
            </h1>

            <p>
              Whether you have a clear product vision or
              you're still exploring possibilities, let's
              figure out the right technology path together.
            </p>

            <div className="contact-hero-points">

              <div>
                <Check size={16} />
                <span>Strategy to deployment</span>
              </div>

              <div>
                <Check size={16} />
                <span>Flexible engagement models</span>
              </div>

              <div>
                <Check size={16} />
                <span>Technology tailored to your goals</span>
              </div>

            </div>

          </div>


          {/* Hero visual */}

          <div className="contact-hero-visual">

            <div className="contact-orbit orbit-one"></div>
            <div className="contact-orbit orbit-two"></div>

            <div className="contact-visual-core">

              <Sparkles size={32} />

              <span>
                Ideas
              </span>

              <strong>
                → Technology
              </strong>

              <span>
                → Impact
              </span>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          PROJECT FORM AREA
      ===================================================== */}

      <section className="project-section">

        <div className="contact-container">

          <div className="project-layout">

            {/* =================================================
                FORM
            ================================================= */}

            <div className="project-form-wrapper">

              <div className="project-form-heading">

                <span className="section-label">
                  PROJECT BRIEF
                </span>

                <h2>
                  Let's understand
                  <br />
                  your requirements.
                </h2>

                <p>
                  Share a few details about your project.
                  You don't need to have everything figured
                  out — we'll take it from there.
                </p>

              </div>


              <form className="project-form">

                {/* NAME / EMAIL */}

                <div className="form-row">

                  <div className="form-field">

                    <label htmlFor="name">
                      Your Name
                    </label>

                    <input
                      id="name"
                      type="text"
                      placeholder="John Doe"
                    />

                  </div>


                  <div className="form-field">

                    <label htmlFor="email">
                      Work Email
                    </label>

                    <input
                      id="email"
                      type="email"
                      placeholder="john@company.com"
                    />

                  </div>

                </div>


                {/* COMPANY / PHONE */}

                <div className="form-row">

                  <div className="form-field">

                    <label htmlFor="company">
                      Company
                    </label>

                    <input
                      id="company"
                      type="text"
                      placeholder="Company name"
                    />

                  </div>


                  <div className="form-field">

                    <label htmlFor="phone">
                      Phone Number
                    </label>

                    <input
                      id="phone"
                      type="tel"
                      placeholder="+91 00000 00000"
                    />

                  </div>

                </div>


                {/* SERVICES */}

                <div className="form-field service-selection">

                  <label>
                    What can we help you with?
                  </label>

                  <div className="service-options">

                    {services.map((service) => {

                      const selected =
                        selectedServices.includes(service);

                      return (
                        <button
                          type="button"
                          key={service}
                          className={`service-option ${
                            selected ? "selected" : ""
                          }`}
                          onClick={() =>
                            toggleService(service)
                          }
                        >

                          <span className="service-option-check">
                            {selected && (
                              <Check size={12} />
                            )}
                          </span>

                          {service}

                        </button>
                      );
                    })}

                  </div>

                </div>


                {/* INDUSTRY / TIMELINE */}

                <div className="form-row">

                  <div className="form-field">

                    <label htmlFor="industry">
                      Industry
                    </label>

                    <select id="industry">

                      <option value="">
                        Select your industry
                      </option>

                      {industries.map((industry) => (
                        <option
                          key={industry}
                          value={industry}
                        >
                          {industry}
                        </option>
                      ))}

                    </select>

                  </div>


                  <div className="form-field">

                    <label htmlFor="timeline">
                      Expected Timeline
                    </label>

                    <select id="timeline">

                      <option value="">
                        Select timeline
                      </option>

                      <option>
                        Less than 1 month
                      </option>

                      <option>
                        1 – 3 months
                      </option>

                      <option>
                        3 – 6 months
                      </option>

                      <option>
                        6+ months
                      </option>

                      <option>
                        Not sure yet
                      </option>

                    </select>

                  </div>

                </div>


                {/* MESSAGE */}

                <div className="form-field">

                  <label htmlFor="message">
                    Tell us about your project
                  </label>

                  <textarea
                    id="message"
                    rows="6"
                    placeholder="What are you trying to build, improve or solve?"
                  ></textarea>

                </div>


                {/* SUBMIT */}

                <div className="form-submit">

                  <button
                    type="submit"
                    className="project-submit"
                  >
                    Send Project Brief
                    <Send size={17} />
                  </button>

                  <span>
                    We usually respond within one
                    business day.
                  </span>

                </div>

              </form>

            </div>


            {/* =================================================
                RIGHT PANEL
            ================================================= */}

            <aside className="contact-sidebar">

              {/* WHAT HAPPENS NEXT */}

              <div className="next-card">

                <span className="sidebar-label">
                  WHAT HAPPENS NEXT
                </span>

                <h3>
                  A simple path from
                  <br />
                  idea to execution.
                </h3>


                <div className="process-list">

                  <div className="process-item">

                    <span className="process-number">
                      01
                    </span>

                    <div>
                      <strong>
                        We listen
                      </strong>

                      <p>
                        We understand your business,
                        goals and technical requirements.
                      </p>
                    </div>

                  </div>


                  <div className="process-item">

                    <span className="process-number">
                      02
                    </span>

                    <div>
                      <strong>
                        We shape
                      </strong>

                      <p>
                        Our team identifies the right
                        technology approach and roadmap.
                      </p>
                    </div>

                  </div>


                  <div className="process-item">

                    <span className="process-number">
                      03
                    </span>

                    <div>
                      <strong>
                        We build
                      </strong>

                      <p>
                        Your solution moves from concept
                        into a structured execution plan.
                      </p>
                    </div>

                  </div>

                </div>

              </div>


              {/* CONTACT CARD */}

              <div className="direct-contact-card">

                <span className="sidebar-label">
                  PREFER A DIRECT CONVERSATION?
                </span>

                <h3>
                  Let's talk.
                </h3>

                <p>
                  Reach out directly and our team
                  will get back to you.
                </p>


                <div className="direct-contact-list">

                  <a href="mailto:info@ascubeinfolabs.com">

                    <span className="direct-icon">
                      <Mail size={16} />
                    </span>

                    info@ascubeinfolabs.com

                  </a>


                  <a href="tel:+910000000000">

                    <span className="direct-icon">
                      <Phone size={16} />
                    </span>

                    +91 00000 00000

                  </a>


                  <div>

                    <span className="direct-icon">
                      <MapPin size={16} />
                    </span>

                    Hyderabad, Telangana, India

                  </div>

                </div>

              </div>

            </aside>

          </div>

        </div>

      </section>


      {/* =====================================================
          BOTTOM STATEMENT
      ===================================================== */}

      <section className="contact-bottom">

        <div className="contact-container">

          <div className="contact-bottom-content">

            <Clock3 size={20} />

            <span>
              No rigid templates. No unnecessary complexity.
            </span>

            <strong>
              Just technology built around your business.
            </strong>

          </div>

          <a
            href="/services"
            className="contact-bottom-link"
          >
            Explore our capabilities
            <ArrowRight size={17} />
          </a>

        </div>

      </section>

    </main>
  );
}