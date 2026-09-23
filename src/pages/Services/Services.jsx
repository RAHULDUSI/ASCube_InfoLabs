import {
  ArrowUpRight,
  ArrowRight,
  Code2,
  Globe2,
  Smartphone,
  BrainCircuit,
  CloudCog,
  Database,
  Check,
  Sparkles,
} from "lucide-react";

import { Link } from "react-router-dom";

import "./Services.css";

const services = [
  {
    number: "01",
    icon: Code2,
    title: "Software Engineering",
    shortTitle: "Software",
    description:
      "Modern, scalable software applications engineered around your products, processes, and customers.",
    details:
      "We design and build reliable software platforms that are secure, maintainable, and ready to evolve with your business.",
    capabilities: [
      "Custom Software Development",
      "Enterprise Applications",
      "API Development",
      "Legacy Modernization",
      "System Integration",
      "Quality Engineering",
    ],
    technologies: ["React", "Node.js", ".NET", "Java", "Python"],
  },

  {
    number: "02",
    icon: Globe2,
    title: "Web Development",
    shortTitle: "Web",
    description:
      "High-performance digital experiences and enterprise web applications designed for growth.",
    details:
      "From corporate websites to complex web platforms, we create responsive digital products focused on performance, usability, and scalability.",
    capabilities: [
      "Corporate Websites",
      "Enterprise Web Applications",
      "E-Commerce Platforms",
      "Progressive Web Apps",
      "CMS Development",
      "Web API Integration",
    ],
    technologies: ["React", "Next.js", "Angular", "Node.js", "TypeScript"],
  },

  {
    number: "03",
    icon: Smartphone,
    title: "Mobile Applications",
    shortTitle: "Mobile",
    description:
      "Engaging mobile experiences across platforms with intuitive interfaces and dependable architecture.",
    details:
      "We create mobile applications that combine thoughtful user experiences with robust backend systems and scalable architecture.",
    capabilities: [
      "iOS Applications",
      "Android Applications",
      "Cross-Platform Apps",
      "Mobile UI/UX",
      "API Integration",
      "App Maintenance",
    ],
    technologies: ["React Native", "Flutter", "Android", "iOS"],
  },

  {
    number: "04",
    icon: BrainCircuit,
    title: "AI & Intelligent Solutions",
    shortTitle: "Artificial Intelligence",
    description:
      "AI, machine learning, automation, and intelligent systems designed to augment business operations.",
    details:
      "We help organizations move beyond experimentation by turning AI capabilities into practical business applications and intelligent workflows.",
    capabilities: [
      "Generative AI Solutions",
      "AI Agents",
      "Machine Learning",
      "Natural Language Processing",
      "Intelligent Automation",
      "AI-Powered Applications",
    ],
    technologies: ["Python", "OpenAI", "LangChain", "TensorFlow", "FastAPI"],
  },

  {
    number: "05",
    icon: CloudCog,
    title: "Cloud & DevOps",
    shortTitle: "Cloud",
    description:
      "Cloud-native architecture, infrastructure automation, and delivery pipelines built for agility and scale.",
    details:
      "We modernize infrastructure and delivery processes to help teams deploy faster, operate reliably, and scale confidently.",
    capabilities: [
      "Cloud Architecture",
      "Cloud Migration",
      "CI/CD Pipelines",
      "Infrastructure Automation",
      "Containerization",
      "Monitoring & Observability",
    ],
    technologies: ["AWS", "Azure", "Docker", "Kubernetes", "GitHub Actions"],
  },

  {
    number: "06",
    icon: Database,
    title: "Data & Analytics",
    shortTitle: "Data",
    description:
      "Data platforms and analytics capabilities that turn complex information into actionable insights.",
    details:
      "We help businesses build reliable data foundations and analytical systems that make information easier to understand and act upon.",
    capabilities: [
      "Data Engineering",
      "Data Warehousing",
      "Business Intelligence",
      "Data Visualization",
      "ETL Pipelines",
      "Predictive Analytics",
    ],
    technologies: ["Python", "SQL", "PostgreSQL", "Power BI", "MongoDB"],
  },
];

const processSteps = [
  {
    number: "01",
    title: "Discover",
    description:
      "We understand your business, users, objectives, constraints, and technology landscape.",
  },
  {
    number: "02",
    title: "Define",
    description:
      "We translate business requirements into a clear technology strategy and delivery roadmap.",
  },
  {
    number: "03",
    title: "Design",
    description:
      "We create scalable architecture and intuitive experiences before development begins.",
  },
  {
    number: "04",
    title: "Build",
    description:
      "Our engineering teams develop, integrate, test, and continuously improve the solution.",
  },
  {
    number: "05",
    title: "Launch",
    description:
      "We deploy your solution through reliable release processes with quality and security in mind.",
  },
  {
    number: "06",
    title: "Scale",
    description:
      "We continue to optimize, maintain, and evolve the platform as your business grows.",
  },
];

const technologyGroups = [
  {
    title: "Frontend",
    technologies: ["React", "Angular", "Next.js", "TypeScript"],
  },
  {
    title: "Backend",
    technologies: ["Node.js", ".NET", "Java", "Python"],
  },
  {
    title: "AI & Data",
    technologies: ["OpenAI", "LangChain", "TensorFlow", "SQL"],
  },
  {
    title: "Cloud & DevOps",
    technologies: ["Azure", "AWS", "Docker", "Kubernetes"],
  },
];

export default function Services() {
  return (
    <main className="services-page">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="services-hero">

        <div className="services-hero-glow services-glow-one"></div>
        <div className="services-hero-glow services-glow-two"></div>

        <div className="services-container">

          <div className="services-hero-content">

            <div className="services-eyebrow">
              <span className="eyebrow-dot"></span>
              END-TO-END IT SERVICES
            </div>

            <h1>
              Technology
              <br />
              built around
              <span> your business.</span>
            </h1>

            <p>
              From software engineering and cloud solutions to AI and
              intelligent automation, ASCube InfoLabs delivers technology
              designed to solve real business challenges.
            </p>

            <div className="services-hero-actions">
              <Link to="/contact" className="primary-button">
                Discuss Your Project
                <ArrowUpRight size={17} />
              </Link>

              <a href="#services" className="secondary-button">
                Explore Services
                <ArrowRight size={17} />
              </a>
            </div>

          </div>

          {/* Hero visual */}

          <div className="services-hero-visual">

            <div className="hero-orbit orbit-one"></div>
            <div className="hero-orbit orbit-two"></div>
            <div className="hero-orbit orbit-three"></div>

            <div className="hero-core">
              <div className="hero-core-icon">
                <Sparkles size={30} />
              </div>

              <span>ASCUBE</span>

              <strong>
                Digital
                <br />
                Engineering
              </strong>
            </div>

            <div className="hero-floating-card hero-card-top">
              <span>01</span>
              <div>
                <strong>Engineering</strong>
                <small>Build • Integrate • Scale</small>
              </div>
            </div>

            <div className="hero-floating-card hero-card-bottom">
              <span>02</span>
              <div>
                <strong>Intelligence</strong>
                <small>AI • Data • Automation</small>
              </div>
            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          INTRO
      ===================================================== */}

      <section className="services-intro">

        <div className="services-container">

          <div className="section-label">
            WHAT WE DO
          </div>

          <div className="services-intro-grid">

            <h2>
              Technology expertise
              <br />
              <span>without boundaries.</span>
            </h2>

            <div className="services-intro-copy">
              <p>
                Businesses today need technology that does more than
                function. It needs to create efficiency, improve customer
                experiences, unlock intelligence, and support long-term
                growth.
              </p>

              <p>
                ASCube InfoLabs brings engineering, design, AI, cloud, and
                data capabilities together to create technology solutions
                aligned with your business objectives.
              </p>
            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          SERVICES GRID
      ===================================================== */}

      <section
        className="services-list-section"
        id="services"
      >

        <div className="services-container">

          <div className="services-section-heading">

            <div>
              <div className="section-label">
                OUR EXPERTISE
              </div>

              <h2>
                Solutions engineered
                <br />
                <span>for what's next.</span>
              </h2>
            </div>

            <p>
              Explore our core technology capabilities and discover how
              ASCube can help turn your ideas into scalable digital products.
            </p>

          </div>


          <div className="services-grid">

            {services.map((service) => {

              const Icon = service.icon;

              return (
                <article
                  className="service-card"
                  key={service.number}
                >

                  <div className="service-card-top">

                    <span className="service-number">
                      {service.number}
                    </span>

                    <div className="service-icon">
                      <Icon size={25} strokeWidth={1.8} />
                    </div>

                  </div>

                  <h3>{service.title}</h3>

                  <p className="service-card-description">
                    {service.description}
                  </p>

                  <div className="service-divider"></div>

                  <div className="service-capabilities">

                    {service.capabilities.slice(0, 4).map(
                      (capability) => (
                        <div
                          className="service-capability"
                          key={capability}
                        >
                          <Check size={14} />
                          <span>{capability}</span>
                        </div>
                      )
                    )}

                  </div>

                  <Link
                    to={`/services/${service.shortTitle
                      .toLowerCase()
                      .replace(/\s+/g, "-")}`}
                    className="service-card-link"
                  >
                    Explore service
                    <ArrowUpRight size={16} />
                  </Link>

                </article>
              );
            })}

          </div>

        </div>

      </section>


      {/* =====================================================
          FEATURED AI SECTION
      ===================================================== */}

      <section className="ai-feature-section">

        <div className="services-container">

          <div className="ai-feature">

            <div className="ai-feature-content">

              <div className="ai-feature-label">
                <BrainCircuit size={17} />
                INTELLIGENT TECHNOLOGY
              </div>

              <h2>
                Build smarter with
                <span> AI.</span>
              </h2>

              <p>
                AI is changing how businesses operate, serve customers,
                analyze information, and make decisions. We help turn AI
                capabilities into practical systems that create measurable
                value.
              </p>

              <div className="ai-feature-points">

                <div>
                  <Check size={16} />
                  <span>AI-powered applications</span>
                </div>

                <div>
                  <Check size={16} />
                  <span>Intelligent automation</span>
                </div>

                <div>
                  <Check size={16} />
                  <span>AI agents & copilots</span>
                </div>

                <div>
                  <Check size={16} />
                  <span>Data-driven intelligence</span>
                </div>

              </div>

              <Link
                to="/contact"
                className="ai-feature-button"
              >
                Talk to our AI team
                <ArrowUpRight size={17} />
              </Link>

            </div>


            <div className="ai-feature-visual">

              <div className="ai-grid"></div>

              <div className="ai-circle ai-circle-one"></div>
              <div className="ai-circle ai-circle-two"></div>
              <div className="ai-circle ai-circle-three"></div>

              <div className="ai-center-node">
                <BrainCircuit size={34} />
                <span>AI CORE</span>
              </div>

              <div className="ai-node ai-node-one">
                <span>DATA</span>
              </div>

              <div className="ai-node ai-node-two">
                <span>AUTOMATION</span>
              </div>

              <div className="ai-node ai-node-three">
                <span>INSIGHT</span>
              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          TECHNOLOGY ECOSYSTEM
      ===================================================== */}

      <section className="technology-section">

        <div className="services-container">

          <div className="technology-heading">

            <div>
              <div className="section-label">
                TECHNOLOGY ECOSYSTEM
              </div>

              <h2>
                Built with the
                <br />
                <span>right technology.</span>
              </h2>
            </div>

            <p>
              We choose technologies based on your product requirements,
              scalability needs, security expectations, and long-term
              objectives.
            </p>

          </div>


          <div className="technology-grid">

            {technologyGroups.map((group) => (
              <div
                className="technology-group"
                key={group.title}
              >

                <h3>{group.title}</h3>

                <div className="technology-tags">

                  {group.technologies.map((technology) => (
                    <span key={technology}>
                      {technology}
                    </span>
                  ))}

                </div>

              </div>
            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
    PROCESS
===================================================== */}

<section className="process-section">

  <div className="services-container">

    {/* SECTION HEADER */}

    <div className="process-heading">

      <div className="process-heading-left">

        <div className="section-label">
          HOW WE WORK
        </div>

        <h2>
          From idea to
          <br />
          <span>impact.</span>
        </h2>

      </div>

      <div className="process-heading-right">
        <p>
          Great technology starts with a clear understanding of the
          problem. Our structured approach keeps every stage focused,
          collaborative, and aligned with your business objectives.
        </p>
      </div>

    </div>


    {/* PROCESS TIMELINE */}

    <div className="process-wrapper">

      <div className="process-line-main"></div>

      <div className="process-grid">

        {processSteps.map((step, index) => (

          <article
            className="process-item"
            key={step.number}
          >

            {/* NUMBER */}

            <div className="process-number-wrapper">

              <span className="process-number">
                {step.number}
              </span>

            </div>


            {/* CONTENT */}

            <div className="process-content">

              <div className="process-step-label">
                STEP {step.number}
              </div>

              <h3>
                {step.title}
              </h3>

              <p>
                {step.description}
              </p>

            </div>


            {/* CONNECTOR */}

            {index < processSteps.length - 1 && (
              <div className="process-connector">
                <ArrowRight size={16} />
              </div>
            )}

          </article>

        ))}

      </div>

    </div>

  </div>

</section>

      {/* =====================================================
          FINAL CTA
      ===================================================== */}

      <section className="services-cta-section">

        <div className="services-container">

          <div className="services-cta">

            <div className="cta-glow"></div>

            <div className="services-cta-content">

              <div className="section-label light-label">
                HAVE A TECHNOLOGY CHALLENGE?
              </div>

              <h2>
                Let's build what's
                <br />
                <span>next.</span>
              </h2>

              <p>
                Tell us what you're trying to solve. Our team can help you
                identify the right technology approach and turn the idea
                into a scalable solution.
              </p>

              <Link
                to="/contact"
                className="cta-button"
              >
                Start a Conversation
                <ArrowUpRight size={17} />
              </Link>

            </div>

            <div className="cta-decoration">
              <div></div>
              <div></div>
              <div></div>
            </div>

          </div>

        </div>

      </section>

    </main>
  );
}