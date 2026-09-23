import {
  ArrowRight,
  BrainCircuit,
  Cloud,
  Code2,
  Database,
  Lightbulb,
  Rocket,
  ShieldCheck,
  Sparkles,
  Target,
  Users,
  Workflow,
} from "lucide-react";

import "./About.css";

export default function About() {
  const principles = [
    {
      icon: <Lightbulb size={24} />,
      number: "01",
      title: "Innovation",
      description:
        "We embrace emerging technologies and turn new ideas into practical solutions that create meaningful business value.",
    },
    {
      icon: <ShieldCheck size={24} />,
      number: "02",
      title: "Reliability",
      description:
        "We engineer secure, scalable and dependable systems designed to perform consistently as your business grows.",
    },
    {
      icon: <Target size={24} />,
      number: "03",
      title: "Business Focus",
      description:
        "Technology is only valuable when it solves a real problem. Every solution we build is aligned with measurable business outcomes.",
    },
    {
      icon: <Workflow size={24} />,
      number: "04",
      title: "End-to-End Delivery",
      description:
        "From strategy and architecture to development, deployment and optimization, we bring the entire technology lifecycle together.",
    },
  ];

  const capabilities = [
    {
      icon: <Code2 size={25} />,
      title: "Software Engineering",
      description:
        "Modern, scalable applications engineered around your products, processes and customers.",
    },
    {
      icon: <BrainCircuit size={25} />,
      title: "AI & Intelligent Solutions",
      description:
        "AI, machine learning, automation and intelligent systems designed to augment business operations.",
    },
    {
      icon: <Cloud size={25} />,
      title: "Cloud & DevOps",
      description:
        "Cloud-native architecture, infrastructure automation and delivery pipelines built for agility and scale.",
    },
    {
      icon: <Database size={25} />,
      title: "Data & Analytics",
      description:
        "Data platforms and analytics capabilities that turn complex information into actionable insights.",
    },
  ];

  const process = [
    {
      number: "01",
      title: "Discover",
      description:
        "We understand your business, users, challenges and objectives before defining the technology direction.",
    },
    {
      number: "02",
      title: "Design",
      description:
        "We translate requirements into clear product experiences, technical architecture and scalable solution designs.",
    },
    {
      number: "03",
      title: "Build",
      description:
        "Our engineering teams turn the strategy into secure, high-quality software and intelligent technology solutions.",
    },
    {
      number: "04",
      title: "Scale",
      description:
        "We continuously improve, optimize and evolve your technology as your business and customer needs change.",
    },
  ];

  const industries = [
    "Healthcare",
    "Financial Services",
    "Retail & E-commerce",
    "Education",
    "Manufacturing",
    "Logistics & Transportation",
    "Real Estate",
    "Professional Services",
  ];

  return (
    <main className="about-page">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="about-hero">

        <div className="about-hero-grid"></div>

        <div className="about-hero-container">

          <div className="about-hero-content">

            <div className="about-eyebrow">
              <span className="eyebrow-dot"></span>
              ABOUT ASCUBE INFOLABS
            </div>

            <h1>
              Engineering
              <span>what&apos;s next.</span>
            </h1>

            <p>
              ASCube InfoLabs brings together engineering, intelligence and
              innovation to help businesses build better digital experiences,
              modernize operations and scale with confidence.
            </p>

            <div className="about-hero-actions">
              <a href="/contact" className="about-primary-btn">
                Start a Conversation
                <ArrowRight size={18} />
              </a>

              <a href="/services" className="about-secondary-btn">
                Explore Our Services
              </a>
            </div>

          </div>

          <div className="about-hero-visual">

            <div className="about-orbit orbit-one"></div>
            <div className="about-orbit orbit-two"></div>
            <div className="about-orbit orbit-three"></div>

            <div className="about-core">

              <div className="core-glow"></div>

              <Sparkles size={34} />

              <span>ASCUBE</span>
              <small>INFOLABS</small>

            </div>

            <div className="about-floating-card card-top">
              <BrainCircuit size={20} />
              <div>
                <strong>Intelligent</strong>
                <span>Technology</span>
              </div>
            </div>

            <div className="about-floating-card card-bottom">
              <Rocket size={20} />
              <div>
                <strong>Built to Scale</strong>
                <span>Digital · Cloud · AI</span>
              </div>
            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          WHO WE ARE
      ===================================================== */}

      <section className="about-introduction">

        <div className="about-section-container">

          <div className="section-label">
            WHO WE ARE
          </div>

          <div className="introduction-grid">

            <div className="introduction-heading">
              <h2>
                Technology built around
                <span>real business needs.</span>
              </h2>
            </div>

            <div className="introduction-content">

              <p className="large-text">
                ASCube InfoLabs is an IT services and technology company
                focused on helping organizations navigate an increasingly
                digital world.
              </p>

              <p>
                We combine software engineering, artificial intelligence,
                cloud technologies, data and digital transformation
                capabilities to create solutions that are practical,
                scalable and built for long-term value.
              </p>

              <p>
                Whether you are building a new digital product, modernizing
                an existing platform, automating business processes or
                exploring the possibilities of AI, our teams work alongside
                you to turn technology into an advantage.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          CAPABILITIES
      ===================================================== */}

      <section className="capabilities-section">

        <div className="about-section-container">

          <div className="capabilities-header">

            <div>
              <div className="section-label">
                WHAT WE BRING TOGETHER
              </div>

              <h2>
                Multiple disciplines.
                <span>One technology partner.</span>
              </h2>
            </div>

            <p>
              From the first line of architecture to the final production
              deployment, our capabilities work together to solve complex
              technology challenges.
            </p>

          </div>

          <div className="capabilities-grid">

            {capabilities.map((item) => (
              <div className="capability-card" key={item.title}>

                <div className="capability-icon">
                  {item.icon}
                </div>

                <h3>{item.title}</h3>

                <p>{item.description}</p>

                <div className="capability-line"></div>

              </div>
            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          PRINCIPLES
      ===================================================== */}

      <section className="principles-section">

        <div className="about-section-container">

          <div className="principles-header">

            <div className="section-label">
              WHAT GUIDES US
            </div>

            <h2>
              Principles behind
              <span>every solution.</span>
            </h2>

          </div>

          <div className="principles-grid">

            {principles.map((item) => (
              <div className="principle-card" key={item.number}>

                <div className="principle-top">

                  <span className="principle-number">
                    {item.number}
                  </span>

                  <div className="principle-icon">
                    {item.icon}
                  </div>

                </div>

                <h3>{item.title}</h3>

                <p>{item.description}</p>

              </div>
            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          PROCESS
      ===================================================== */}

      <section className="process-section">

        <div className="about-section-container">

          <div className="process-header">

            <div>
              <div className="section-label">
                HOW WE WORK
              </div>

              <h2>
                From challenge
                <span>to meaningful outcome.</span>
              </h2>
            </div>

            <p>
              A structured approach helps us move quickly without losing
              sight of quality, usability and long-term scalability.
            </p>

          </div>

          <div className="process-list">

            {process.map((item, index) => (
              <div className="process-item" key={item.number}>

                <div className="process-number">
                  {item.number}
                </div>

                <div className="process-content">

                  <h3>{item.title}</h3>

                  <p>{item.description}</p>

                </div>

                {index !== process.length - 1 && (
                  <div className="process-arrow">
                    <ArrowRight size={20} />
                  </div>
                )}

              </div>
            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          INDUSTRIES
      ===================================================== */}

      <section className="industries-section">

        <div className="about-section-container">

          <div className="industries-grid">

            <div>

              <div className="section-label">
                INDUSTRIES
              </div>

              <h2>
                Technology that
                <span>adapts to your world.</span>
              </h2>

              <p>
                Different industries have different challenges. We bring
                technology expertise together with an understanding of
                industry-specific requirements to create solutions that fit
                the way organizations actually work.
              </p>

              <a href="/industries" className="text-link">
                Explore Industries
                <ArrowRight size={17} />
              </a>

            </div>

            <div className="industry-tags">

              {industries.map((industry) => (
                <div className="industry-tag" key={industry}>
                  <span></span>
                  {industry}
                </div>
              ))}

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          CTA
      ===================================================== */}

      <section className="about-cta">

        <div className="cta-pattern"></div>

        <div className="about-section-container">

          <div className="about-cta-content">

            <div className="section-label light">
              LET&apos;S BUILD WHAT&apos;S NEXT
            </div>

            <h2>
              Have a technology
              <span>challenge?</span>
            </h2>

            <p>
              Tell us what you&apos;re building, transforming or trying to
              solve. Let&apos;s explore what technology can make possible.
            </p>

            <a href="/contact" className="cta-button">
              Talk to ASCube InfoLabs
              <ArrowRight size={18} />
            </a>

          </div>

        </div>

      </section>

    </main>
  );
}