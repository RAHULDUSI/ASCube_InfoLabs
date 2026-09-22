import "./Home.css";
import heroTech from "../../assets/images/hero-tech.png";

import {
  ArrowRight,
  Sparkles,
  ShieldCheck,
  Layers3,
  Workflow,
  Code2,
  Globe2,
  Smartphone,
  BrainCircuit,
} from "lucide-react";

const capabilities = [
  {
    icon: <Sparkles size={22} />,
    title: "Innovation",
    description: "Modern technology for evolving business needs.",
  },
  {
    icon: <ShieldCheck size={22} />,
    title: "Reliability",
    description: "Secure and dependable solutions engineered for scale.",
  },
  {
    icon: <Layers3 size={22} />,
    title: "End-to-End",
    description:
      "From strategy and design to development and delivery.",
  },
  {
    icon: <Workflow size={22} />,
    title: "Business Focused",
    description:
      "Technology aligned with measurable business outcomes.",
  },
];

const services = [
  {
    number: "01",
    icon: <Code2 size={22} />,
    title: "Software Engineering",
    description:
      "Scalable, secure and high-performance software solutions built around your business requirements.",
  },
  {
    number: "02",
    icon: <Globe2 size={22} />,
    title: "Web Development",
    description:
      "Modern digital experiences and enterprise web applications designed for performance and growth.",
  },
  {
    number: "03",
    icon: <Smartphone size={22} />,
    title: "Mobile Applications",
    description:
      "Engaging mobile experiences across platforms with intuitive interfaces and reliable architecture.",
  },
  {
    number: "04",
    icon: <BrainCircuit size={22} />,
    title: "AI & Intelligent Solutions",
    description:
      "AI-powered solutions, automation and intelligent systems that help businesses operate smarter.",
  },
];

export default function Home() {
  return (
    <main className="home-page">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="hero">

        <div className="hero-container">

          {/* LEFT CONTENT */}

          <div className="hero-content">

            <div className="hero-eyebrow">
              <span className="hero-eyebrow-dot"></span>
              END-TO-END IT SERVICES
            </div>

            <h1>
              Technology
              <br />
              that
              <br />
              <span>moves</span>
              <br />
              <span>business</span>
              <br />
              <span>forward.</span>
            </h1>

            <p className="hero-description">
              ASCube InfoLabs delivers end-to-end technology
              solutions that help businesses innovate,
              transform and scale in a constantly evolving
              digital world.
            </p>

            <div className="hero-actions">

              <a
                href="/contact"
                className="hero-primary-button"
              >
                Start a Project
                <ArrowRight size={18} />
              </a>

              <a
                href="/services"
                className="hero-secondary-button"
              >
                Explore Services
              </a>

            </div>

            <div className="hero-meta">

              <span>Software</span>
              <span>Cloud</span>
              <span>AI & Automation</span>
              <span>Digital Transformation</span>

            </div>

          </div>


          {/* RIGHT VISUAL */}

          <div className="hero-visual">

            <div className="hero-image-glow"></div>

            <div className="hero-image-wrapper">

              <img
                src={heroTech}
                alt="ASCube InfoLabs futuristic technology environment"
              />

              {/* TOP FLOATING CARD */}

              <div className="floating-card floating-card-one">

                <div className="floating-card-icon">
                  <BrainCircuit size={20} />
                </div>

                <div className="floating-card-content">
                  <strong>Intelligent Solutions</strong>

                  <span>
                    AI · Automation · Data
                  </span>
                </div>

              </div>


              {/* BOTTOM FLOATING CARD */}

              <div className="floating-card floating-card-two">

                <div className="floating-card-icon">
                  <Sparkles size={20} />
                </div>

                <div className="floating-card-content">
                  <strong>Built to Scale</strong>

                  <span>
                    Cloud · Software · Digital
                  </span>
                </div>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          CAPABILITIES
      ===================================================== */}

      <section className="capabilities-section">

        <div className="capabilities-container">

          {capabilities.map((item) => (
            <div
              className="capability-card"
              key={item.title}
            >

              <div className="capability-icon">
                {item.icon}
              </div>

              <div className="capability-content">

                <h3>{item.title}</h3>

                <p>{item.description}</p>

              </div>

            </div>
          ))}

        </div>

      </section>


      {/* =====================================================
          SERVICES
      ===================================================== */}

      <section className="services-section">

        <div className="services-container">

          <div className="services-heading">

            <span className="section-eyebrow">
              WHAT WE DO
            </span>

            <h2>
              Technology expertise
              <br />
              without boundaries.
            </h2>

            <p>
              From software engineering and cloud solutions
              to AI and intelligent automation, we bring
              together the capabilities required to solve
              complex technology challenges.
            </p>

          </div>


          <div className="services-grid">

            {services.map((service) => (
              <article
                className="service-card"
                key={service.number}
              >

                <div className="service-card-top">

                  <div className="service-icon">
                    {service.icon}
                  </div>

                  <span className="service-number">
                    {service.number}
                  </span>

                </div>

                <h3>
                  {service.title}
                </h3>

                <p>
                  {service.description}
                </p>

                <a
                  href="/services"
                  className="service-link"
                >
                  Explore
                  <ArrowRight size={16} />
                </a>

              </article>
            ))}

          </div>

        </div>

      </section>

    </main>
  );
}