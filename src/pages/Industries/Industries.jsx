import {
  ArrowUpRight,
  Activity,
  Landmark,
  GraduationCap,
  ShoppingBag,
  Building2,
  Factory,
  Truck,
  Car,
  Hotel,
  Plane,
  Film,
  Rocket,
  ShieldCheck,
  BarChart3,
  Cloud,
  BrainCircuit,
} from "lucide-react";

import { Link } from "react-router-dom";

import "./Industries.css";

const industries = [
  {
    number: "01",
    title: "Healthcare",
    slug: "healthcare",
    icon: Activity,
    description:
      "Connected digital solutions that improve patient experiences, operational visibility, and healthcare workflows.",
    capabilities: [
      "Healthcare platforms",
      "Patient engagement",
      "Workflow automation",
      "Analytics & reporting",
    ],
  },
  {
    number: "02",
    title: "Banking & Finance",
    slug: "banking-finance",
    icon: Landmark,
    description:
      "Secure and intelligent financial technology built for digital banking, analytics, automation, and customer experiences.",
    capabilities: [
      "Digital banking",
      "Financial platforms",
      "Risk analytics",
      "Process automation",
    ],
  },
  {
    number: "03",
    title: "Education",
    slug: "education",
    icon: GraduationCap,
    description:
      "Technology platforms that connect students, educators, institutions, and learning experiences.",
    capabilities: [
      "Learning platforms",
      "Student systems",
      "Virtual classrooms",
      "Education analytics",
    ],
  },
  {
    number: "04",
    title: "Retail & E-Commerce",
    slug: "retail-ecommerce",
    icon: ShoppingBag,
    description:
      "Digital commerce experiences designed to improve customer engagement, operations, and business growth.",
    capabilities: [
      "E-commerce platforms",
      "Customer experiences",
      "Inventory systems",
      "Business analytics",
    ],
  },
  {
    number: "05",
    title: "Real Estate",
    slug: "real-estate",
    icon: Building2,
    description:
      "Digital platforms that simplify property discovery, management, transactions, and customer engagement.",
    capabilities: [
      "Property platforms",
      "Lead management",
      "Property analytics",
      "Digital experiences",
    ],
  },
  {
    number: "06",
    title: "Manufacturing",
    slug: "manufacturing",
    icon: Factory,
    description:
      "Connected technology solutions that improve production visibility, operational efficiency, and decision-making.",
    capabilities: [
      "Process automation",
      "Operations platforms",
      "IoT integration",
      "Production analytics",
    ],
  },
  {
    number: "07",
    title: "Logistics",
    slug: "logistics",
    icon: Truck,
    description:
      "Technology solutions that bring visibility, intelligence, and automation to complex logistics operations.",
    capabilities: [
      "Fleet management",
      "Route intelligence",
      "Tracking platforms",
      "Operational analytics",
    ],
  },
  {
    number: "08",
    title: "Automotive",
    slug: "automotive",
    icon: Car,
    description:
      "Connected automotive technology focused on mobility, service operations, customer experience, and intelligence.",
    capabilities: [
      "Mobility platforms",
      "Vehicle services",
      "Connected systems",
      "Predictive analytics",
    ],
  },
  {
    number: "09",
    title: "Hospitality",
    slug: "hospitality",
    icon: Hotel,
    description:
      "Digital experiences and operational platforms that help hospitality businesses serve customers more efficiently.",
    capabilities: [
      "Guest experiences",
      "Booking platforms",
      "Operations systems",
      "Business intelligence",
    ],
  },
  {
    number: "10",
    title: "Travel & Tourism",
    slug: "travel-tourism",
    icon: Plane,
    description:
      "Technology platforms that make travel discovery, booking, operations, and customer engagement more connected.",
    capabilities: [
      "Travel platforms",
      "Booking systems",
      "Personalization",
      "Travel analytics",
    ],
  },
  {
    number: "11",
    title: "Media & Entertainment",
    slug: "media-entertainment",
    icon: Film,
    description:
      "Digital products that help media and entertainment businesses create engaging and scalable experiences.",
    capabilities: [
      "Digital platforms",
      "Content systems",
      "Audience analytics",
      "Personalization",
    ],
  },
  {
    number: "12",
    title: "Startups & SMEs",
    slug: "startups-smes",
    icon: Rocket,
    description:
      "Flexible technology partnerships for startups and growing businesses looking to build, launch, and scale.",
    capabilities: [
      "MVP development",
      "Product engineering",
      "Cloud solutions",
      "Technology strategy",
    ],
  },
];

const capabilities = [
  {
    icon: BrainCircuit,
    title: "AI & Intelligent Systems",
    description:
      "AI-powered products, automation, intelligent workflows, and decision-support systems.",
  },
  {
    icon: Cloud,
    title: "Cloud & Digital Platforms",
    description:
      "Cloud-native applications and scalable digital infrastructure designed for growth.",
  },
  {
    icon: BarChart3,
    title: "Data & Analytics",
    description:
      "Turn operational and customer data into meaningful insights and measurable outcomes.",
  },
  {
    icon: ShieldCheck,
    title: "Security & Reliability",
    description:
      "Secure architectures, reliable systems, and engineering practices designed for production.",
  },
];

export default function Industries() {
  return (
    <main className="industries-page">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="industries-hero">

        <div className="industries-hero-glow industries-glow-one" />
        <div className="industries-hero-glow industries-glow-two" />

        <div className="industries-container industries-hero-grid">

          <div className="industries-hero-content">

            <div className="industries-eyebrow">
              <span className="eyebrow-dot" />
              INDUSTRY-FOCUSED TECHNOLOGY
            </div>

            <h1>
              Technology built
              <br />
              around <span>your industry.</span>
            </h1>

            <p className="industries-hero-description">
              Every industry has different challenges, customers,
              workflows, and regulations. We design technology
              solutions around those realities — not around a
              one-size-fits-all template.
            </p>

            <div className="industries-hero-actions">

              <Link
                to="/contact"
                className="industries-primary-button"
              >
                Discuss Your Challenge
                <ArrowUpRight size={17} />
              </Link>

              <a
                href="#industry-list"
                className="industries-secondary-button"
              >
                Explore Industries
              </a>

            </div>

          </div>

          <div className="industries-hero-visual">

            <div className="hero-orbit hero-orbit-one" />
            <div className="hero-orbit hero-orbit-two" />

            <div className="hero-center-card">

              <div className="hero-center-icon">
                <BrainCircuit size={30} />
              </div>

              <span>ASCUBE INFOLABS</span>

              <strong>
                Technology
                <br />
                Across Industries
              </strong>

              <p>
                Engineering · AI · Cloud · Data
              </p>

            </div>

            <div className="hero-floating-card hero-floating-one">
              <Activity size={18} />
              <span>Healthcare</span>
            </div>

            <div className="hero-floating-card hero-floating-two">
              <Landmark size={18} />
              <span>Finance</span>
            </div>

            <div className="hero-floating-card hero-floating-three">
              <Truck size={18} />
              <span>Logistics</span>
            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          INTRO
      ===================================================== */}

      <section className="industries-intro">

        <div className="industries-container industries-intro-grid">

          <div>
            <span className="section-kicker">
              INDUSTRIES WE SERVE
            </span>

            <h2>
              Deep technology.
              <br />
              <span>Industry context.</span>
            </h2>
          </div>

          <div className="industries-intro-copy">

            <p>
              We work across industries where technology can
              meaningfully improve how organizations operate,
              serve customers, and make decisions.
            </p>

            <p>
              Our teams combine software engineering, artificial
              intelligence, cloud, data, and product thinking to
              build solutions that fit the way your business
              actually works.
            </p>

          </div>

        </div>

      </section>


      {/* =====================================================
          INDUSTRY GRID
      ===================================================== */}

      <section
        className="industry-list-section"
        id="industry-list"
      >

        <div className="industries-container">

          <div className="industry-section-heading">

            <div>
              <span className="section-kicker">
                OUR INDUSTRY EXPERTISE
              </span>

              <h2>
                Solutions shaped by
                <br />
                <span>real-world problems.</span>
              </h2>
            </div>

            <p>
              Explore how we apply technology across different
              business environments.
            </p>

          </div>


          <div className="industry-grid">

            {industries.map((industry) => {

              const Icon = industry.icon;

              return (
                <Link
                  to={`/industries/${industry.slug}`}
                  className="industry-card"
                  key={industry.slug}
                >

                  <div className="industry-card-top">

                    <span className="industry-number">
                      {industry.number}
                    </span>

                    <div className="industry-card-icon">
                      <Icon size={21} />
                    </div>

                    <ArrowUpRight
                      size={19}
                      className="industry-card-arrow"
                    />

                  </div>


                  <div className="industry-card-content">

                    <h3>{industry.title}</h3>

                    <p>{industry.description}</p>

                  </div>


                  <div className="industry-capabilities">

                    {industry.capabilities.slice(0, 3).map(
                      (capability) => (
                        <span key={capability}>
                          {capability}
                        </span>
                      )
                    )}

                  </div>


                  <div className="industry-card-footer">

                    <span>
                      Explore industry
                    </span>

                    <span className="industry-line" />

                  </div>

                </Link>
              );
            })}

          </div>

        </div>

      </section>


      {/* =====================================================
          CAPABILITIES
      ===================================================== */}

      <section className="capabilities-section">

        <div className="industries-container">

          <div className="capabilities-heading">

            <div>
              <span className="section-kicker">
                WHAT WE BRING
              </span>

              <h2>
                Technology capabilities
                <br />
                <span>that travel across industries.</span>
              </h2>
            </div>

            <p>
              Industry knowledge matters. So does strong
              engineering. Our core capabilities support
              businesses across multiple sectors.
            </p>

          </div>


          <div className="capabilities-grid">

            {capabilities.map((capability) => {

              const Icon = capability.icon;

              return (
                <div
                  className="capability-card"
                  key={capability.title}
                >

                  <div className="capability-icon">
                    <Icon size={22} />
                  </div>

                  <div>

                    <h3>{capability.title}</h3>

                    <p>{capability.description}</p>

                  </div>

                </div>
              );
            })}

          </div>

        </div>

      </section>


      {/* =====================================================
          CTA
      ===================================================== */}

      <section className="industries-cta">

        <div className="industries-cta-glow" />

        <div className="industries-container industries-cta-inner">

          <div>

            <span className="cta-kicker">
              HAVE A BUSINESS CHALLENGE?
            </span>

            <h2>
              Let's build technology
              <br />
              that works for your industry.
            </h2>

            <p>
              Tell us what you're trying to solve. We'll help
              you explore the right technology approach.
            </p>

          </div>

          <Link
            to="/contact"
            className="industries-cta-button"
          >
            Start a Conversation
            <ArrowUpRight size={18} />
          </Link>

        </div>

      </section>

    </main>
  );
}