import {
  ArrowRight,
  ArrowUpRight,
  Building2,
  Car,
  GraduationCap,
  HeartPulse,
  Landmark,
  ShoppingBag,
  Truck,
  Plane,
  Factory,
  Home,
  Utensils,
  BriefcaseBusiness,
} from "lucide-react";

import { Link } from "react-router-dom";

import "./Industries.css";

const industries = [
  {
    slug: "healthcare",
    title: "Healthcare",
    description:
      "Digital platforms, intelligent workflows, patient engagement, and connected healthcare experiences.",
    icon: HeartPulse,
  },
  {
    slug: "banking-finance",
    title: "Banking & Finance",
    description:
      "Secure digital banking, financial platforms, analytics, automation, and intelligent operations.",
    icon: Landmark,
  },
  {
    slug: "education",
    title: "Education",
    description:
      "Learning platforms, student experiences, institutional systems, and intelligent education technology.",
    icon: GraduationCap,
  },
  {
    slug: "retail-e-commerce",
    title: "Retail & E-Commerce",
    description:
      "Scalable commerce platforms, customer experiences, inventory systems, and retail intelligence.",
    icon: ShoppingBag,
  },
  {
    slug: "real-estate",
    title: "Real Estate",
    description:
      "Property platforms, lead management, automation, analytics, and connected real-estate operations.",
    icon: Home,
  },
  {
    slug: "manufacturing",
    title: "Manufacturing",
    description:
      "Connected operations, workflow automation, analytics, supply-chain visibility, and industrial platforms.",
    icon: Factory,
  },
  {
    slug: "logistics",
    title: "Logistics",
    description:
      "Fleet intelligence, route optimization, tracking, automation, and logistics management systems.",
    icon: Truck,
  },
  {
    slug: "automotive",
    title: "Automotive",
    description:
      "Connected vehicle experiences, service platforms, fleet systems, and automotive intelligence.",
    icon: Car,
  },
  {
    slug: "hospitality",
    title: "Hospitality",
    description:
      "Guest experiences, booking platforms, operational systems, and hospitality automation.",
    icon: Utensils,
  },
  {
    slug: "travel-tourism",
    title: "Travel & Tourism",
    description:
      "Travel platforms, booking experiences, personalization, and intelligent travel operations.",
    icon: Plane,
  },
  {
    slug: "media-entertainment",
    title: "Media & Entertainment",
    description:
      "Digital experiences, content platforms, audience intelligence, and scalable media technology.",
    icon: BriefcaseBusiness,
  },
  {
    slug: "startups-smes",
    title: "Startups & SMEs",
    description:
      "Modern digital products, automation, scalable architecture, and technology built for growth.",
    icon: Building2,
  },
];

function HeroVisual() {
  return (
    <div className="industries-hero-visual">

      {/* Background glow */}
      <div className="hero-visual-glow" />

      {/* Decorative rings */}
      <div className="hero-ring hero-ring-one" />
      <div className="hero-ring hero-ring-two" />

      {/* Large background panel */}
      <div className="visual-back-panel" />

      {/* Main dark panel */}
      <div className="visual-main-panel">

        <div className="visual-main-icon">
          <span>✦</span>
        </div>

        <span className="visual-eyebrow">
          ASCUBE INFOLABS
        </span>

        <h3>
          Technology
          <br />
          Across
          <br />
          Industries
        </h3>

        <p>
          Engineering · AI · Cloud · Data
        </p>

      </div>

      {/* Finance card */}
      <div className="visual-industry-card finance-card">

        <div className="visual-card-icon">
          <Landmark size={19} />
        </div>

        <div>
          <strong>Finance</strong>
          <span>INTELLIGENT SYSTEMS</span>
        </div>

      </div>

      {/* Logistics card */}
      <div className="visual-industry-card logistics-card">

        <div className="visual-card-icon">
          <Truck size={19} />
        </div>

        <div>
          <strong>Logistics</strong>
          <span>OPERATIONAL INTELLIGENCE</span>
        </div>

      </div>

      {/* Small floating dots */}
      <span className="visual-dot dot-one" />
      <span className="visual-dot dot-two" />
      <span className="visual-dot dot-three" />

    </div>
  );
}

export default function Industries() {
  return (
    <main className="industries-page">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="industries-hero">

        <div className="industries-hero-container">

          {/* LEFT CONTENT */}

          <div className="industries-hero-content">

            <div className="industries-eyebrow">
              <span className="eyebrow-dot" />
              INDUSTRY-FOCUSED TECHNOLOGY
            </div>

            <h1>
              Technology built
              <br />
              around{" "}
              <span>your</span>
              <br />
              <span>industry.</span>
            </h1>

            <p className="industries-hero-description">
              Every industry has different customers, workflows,
              challenges, regulations, and opportunities. We design
              technology around those realities — not around a
              one-size-fits-all template.
            </p>

            <div className="industries-hero-actions">

              <Link
                to="/contact"
                className="primary-hero-button"
              >
                Discuss Your Challenge
                <ArrowUpRight size={18} />
              </Link>

              <a
                href="#industries"
                className="secondary-hero-button"
              >
                Explore Industries
                <ArrowRight size={18} />
              </a>

            </div>

            <div className="hero-bottom-line">
              <span />
              <p>
                Built around your business.
                <strong> Designed for what comes next.</strong>
              </p>
            </div>

          </div>


          {/* RIGHT VISUAL */}

          <HeroVisual />

        </div>

      </section>


      {/* =====================================================
          INDUSTRIES INTRO
      ===================================================== */}

      <section
        className="industries-intro"
        id="industries"
      >

        <div className="industries-section-container">

          <div className="section-label">
            <span />
            INDUSTRIES WE SERVE
          </div>

          <div className="industries-intro-grid">

            <h2>
              Technology that
              <span> understands context.</span>
            </h2>

            <p>
              The right technology solution starts with understanding
              the industry behind the problem. Our teams combine
              engineering expertise with domain-aware thinking to
              create digital products that fit the way businesses
              actually operate.
            </p>

          </div>

        </div>

      </section>


      {/* =====================================================
          INDUSTRY CARDS
      ===================================================== */}

      <section className="industries-grid-section">

        <div className="industries-section-container">

          <div className="industry-grid">

            {industries.map((industry, index) => {

              const Icon = industry.icon;

              return (
                <Link
                  key={industry.slug}
                  to={`/industries/${industry.slug}`}
                  className="industry-card"
                >

                  <div className="industry-card-top">

                    <span className="industry-number">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <div className="industry-icon">
                      <Icon size={21} />
                    </div>

                  </div>

                  <div className="industry-card-content">

                    <h3>
                      {industry.title}
                    </h3>

                    <p>
                      {industry.description}
                    </p>

                  </div>

                  <div className="industry-card-footer">

                    <span>
                      Explore industry
                    </span>

                    <ArrowUpRight size={17} />

                  </div>

                </Link>
              );
            })}

          </div>

        </div>

      </section>


      {/* =====================================================
          CTA
      ===================================================== */}

      <section className="industries-cta">

        <div className="industries-cta-container">

          <div>

            <span className="cta-label">
              HAVE A BUSINESS CHALLENGE?
            </span>

            <h2>
              Let's build technology
              <br />
              around your reality.
            </h2>

            <p>
              Tell us what you're trying to solve.
              We'll help you turn the challenge into
              a scalable digital solution.
            </p>

          </div>

          <Link
            to="/contact"
            className="cta-button"
          >
            Start a Conversation
            <ArrowUpRight size={18} />
          </Link>

        </div>

      </section>

    </main>
  );
}