import {
  ArrowRight,
  ArrowUpRight,
  Brain,
  Cloud,
  Code2,
  Database,
  Layers3,
  Smartphone,
  Sparkles,
  ShieldCheck,
  Workflow,
} from "lucide-react";

import { Link } from "react-router-dom";

import "./Technologies.css";

const technologyGroups = [
  {
    icon: Code2,
    number: "01",
    title: "Frontend Engineering",
    description:
      "Modern interfaces engineered for speed, accessibility, responsiveness and exceptional user experiences.",
    technologies: [
      "React",
      "Angular",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
    ],
  },
  {
    icon: Layers3,
    number: "02",
    title: "Backend Engineering",
    description:
      "Reliable backend systems and APIs designed for security, performance and long-term scalability.",
    technologies: [
      "Node.js",
      "Express.js",
      "Java",
      "Spring Boot",
      "Python",
      "FastAPI",
      "REST APIs",
      "Microservices",
    ],
  },
  {
    icon: Smartphone,
    number: "03",
    title: "Mobile Development",
    description:
      "Cross-platform and native mobile experiences built around usability, performance and maintainability.",
    technologies: [
      "React Native",
      "Flutter",
      "Android",
      "iOS",
      "Mobile APIs",
      "Push Notifications",
    ],
  },
  {
    icon: Brain,
    number: "04",
    title: "AI & Machine Learning",
    description:
      "Intelligent systems that combine machine learning, generative AI and automation to solve complex problems.",
    technologies: [
      "Python",
      "Machine Learning",
      "Generative AI",
      "LLMs",
      "LangChain",
      "AI Agents",
      "NLP",
      "Computer Vision",
    ],
  },
  {
    icon: Cloud,
    number: "05",
    title: "Cloud & DevOps",
    description:
      "Cloud-native infrastructure and automated delivery pipelines built for reliability and continuous growth.",
    technologies: [
      "Microsoft Azure",
      "AWS",
      "Docker",
      "CI/CD",
      "GitHub Actions",
      "Linux",
      "Cloud Architecture",
    ],
  },
  {
    icon: Database,
    number: "06",
    title: "Data & Analytics",
    description:
      "Data platforms that turn structured and unstructured information into reliable, actionable intelligence.",
    technologies: [
      "PostgreSQL",
      "MySQL",
      "SQL Server",
      "MongoDB",
      "Data Engineering",
      "Analytics",
      "ETL",
      "Data APIs",
    ],
  },
];

const technologyPrinciples = [
  {
    number: "01",
    icon: Layers3,
    title: "Architecture First",
    description:
      "We design the technical foundation before implementation begins, ensuring every system is built with scalability and maintainability in mind.",
  },
  {
    number: "02",
    icon: ShieldCheck,
    title: "Engineering Excellence",
    description:
      "Clean code, modular architecture, testing and secure development practices remain central to every solution.",
  },
  {
    number: "03",
    icon: Cloud,
    title: "Cloud Ready",
    description:
      "Solutions are designed to operate efficiently across modern cloud and distributed environments.",
  },
  {
    number: "04",
    icon: Workflow,
    title: "Built to Evolve",
    description:
      "Technology should adapt with your business. We build systems that can continuously evolve without unnecessary technical debt.",
  },
];

const architectureItems = [
  {
    icon: Code2,
    label: "Engineering",
    value: "Software",
  },
  {
    icon: Brain,
    label: "Intelligence",
    value: "AI & Data",
  },
  {
    icon: Cloud,
    label: "Infrastructure",
    value: "Cloud",
  },
  {
    icon: Database,
    label: "Platforms",
    value: "Data",
  },
];

export default function Technologies() {
  return (
    <main className="technologies-page">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="tech-hero">

        <div className="tech-hero-grid"></div>

        <div className="tech-hero-glow tech-glow-one"></div>
        <div className="tech-hero-glow tech-glow-two"></div>

        <div className="tech-hero-ring ring-one"></div>
        <div className="tech-hero-ring ring-two"></div>

        <div className="tech-container tech-hero-container">

          {/* HERO CONTENT */}

          <div className="tech-hero-content">

            <div className="tech-eyebrow">
              <span className="tech-eyebrow-dot"></span>
              TECHNOLOGY & ENGINEERING
            </div>

            <h1>
              Technology
              <span>built for what’s next.</span>
            </h1>

            <p>
              We combine modern technologies, proven engineering practices
              and intelligent systems to build digital products that are
              reliable today and ready for tomorrow.
            </p>

            <div className="tech-hero-actions">

              <Link
                to="/contact"
                className="tech-primary-btn"
              >
                Start a Project
                <ArrowUpRight size={17} />
              </Link>

              <Link
                to="/services"
                className="tech-secondary-btn"
              >
                Explore Services
                <ArrowRight size={17} />
              </Link>

            </div>

            <div className="tech-hero-meta">

              <div>
                <strong>Engineering</strong>
                <span>Built for scale</span>
              </div>

              <div>
                <strong>Intelligence</strong>
                <span>AI & automation</span>
              </div>

              <div>
                <strong>Infrastructure</strong>
                <span>Cloud ready</span>
              </div>

            </div>

          </div>


          {/* HERO VISUAL */}

          <div className="tech-hero-visual">

            <div className="visual-backdrop"></div>

            <div className="visual-grid"></div>

            <div className="tech-orbit orbit-one"></div>
            <div className="tech-orbit orbit-two"></div>
            <div className="tech-orbit orbit-three"></div>


            {/* BACK ARCHITECTURE CARDS */}

            <div className="architecture-card architecture-card-one">
              <Code2 size={19} />
              <div>
                <span>Build</span>
                <strong>Software</strong>
              </div>
            </div>

            <div className="architecture-card architecture-card-two">
              <Brain size={19} />
              <div>
                <span>Think</span>
                <strong>Intelligence</strong>
              </div>
            </div>

            <div className="architecture-card architecture-card-three">
              <Cloud size={19} />
              <div>
                <span>Scale</span>
                <strong>Cloud</strong>
              </div>
            </div>


            {/* MAIN CORE */}

            <div className="tech-core-wrapper">

              <div className="tech-core">

                <div className="tech-core-icon">
                  <Sparkles size={28} />
                </div>

                <span>ASCUBE INFOLABS</span>

                <strong>
                  Digital
                  <br />
                  Engineering
                </strong>

                <small>
                  Engineering · AI · Cloud · Data
                </small>

              </div>

            </div>


            {/* FLOATING CAPABILITY CARDS */}

            <div className="tech-floating-card tech-card-one">

              <div className="floating-icon">
                <Code2 size={18} />
              </div>

              <div>
                <strong>Engineering</strong>
                <span>Modern software</span>
              </div>

            </div>


            <div className="tech-floating-card tech-card-two">

              <div className="floating-icon">
                <Brain size={18} />
              </div>

              <div>
                <strong>Intelligence</strong>
                <span>AI & automation</span>
              </div>

            </div>


            <div className="tech-floating-card tech-card-three">

              <div className="floating-icon">
                <Cloud size={18} />
              </div>

              <div>
                <strong>Cloud</strong>
                <span>Built to scale</span>
              </div>

            </div>


            {/* SMALL DATA INDICATORS */}

            <div className="visual-status status-one">
              <span></span>
              SYSTEMS
            </div>

            <div className="visual-status status-two">
              <span></span>
              DATA
            </div>

            <div className="visual-status status-three">
              <span></span>
              AI
            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          INTRO
      ===================================================== */}

      <section className="tech-intro">

        <div className="tech-container">

          <div className="tech-section-heading">

            <div className="tech-small-label">
              OUR TECHNOLOGY ECOSYSTEM
            </div>

            <h2>
              The right technology
              <span>for the right problem.</span>
            </h2>

          </div>

          <div className="tech-intro-copy">

            <p>
              Technology should never be selected simply because it is
              popular. We choose tools and architectures based on the
              problem, business objectives, scalability requirements and
              long-term maintainability.
            </p>

            <div className="intro-line"></div>

            <span>
              Strategy → Architecture → Engineering → Scale
            </span>

          </div>

        </div>

      </section>


      {/* =====================================================
          TECHNOLOGY STACK
      ===================================================== */}

      <section className="technology-stack-section">

        <div className="tech-container">

          <div className="technology-section-header">

            <div>

              <div className="tech-small-label">
                OUR TECHNOLOGY STACK
              </div>

              <h2>
                Built with modern
                <span>technology ecosystems.</span>
              </h2>

            </div>

            <p>
              A flexible engineering stack allows us to select the right
              tools for every product, platform and business challenge.
            </p>

          </div>


          <div className="technology-grid">

            {technologyGroups.map((group) => {

              const Icon = group.icon;

              return (
                <article
                  className="technology-card"
                  key={group.title}
                >

                  <div className="technology-card-number">
                    {group.number}
                  </div>

                  <div className="technology-card-top">

                    <div className="technology-icon">
                      <Icon size={23} strokeWidth={1.8} />
                    </div>

                    <ArrowUpRight
                      className="technology-arrow"
                      size={19}
                    />

                  </div>


                  <h3>
                    {group.title}
                  </h3>

                  <p>
                    {group.description}
                  </p>


                  <div className="technology-tags">

                    {group.technologies.map((technology) => (
                      <span key={technology}>
                        {technology}
                      </span>
                    ))}

                  </div>


                  <div className="technology-card-footer">

                    <span>
                      Explore capability
                    </span>

                    <ArrowRight size={15} />

                  </div>

                </article>
              );

            })}

          </div>

        </div>

      </section>


      {/* =====================================================
          ENGINEERING APPROACH
      ===================================================== */}

      <section className="technology-approach">

        <div className="tech-container">

          <div className="approach-heading">

            <div className="tech-small-label">
              OUR APPROACH
            </div>

            <h2>
              Technology is more than
              <span>the tools we use.</span>
            </h2>

            <p>
              Strong technology starts with strong engineering decisions.
              Our approach focuses on building systems that remain reliable,
              secure and adaptable as your business grows.
            </p>

            <div className="approach-highlight">

              <Sparkles size={18} />

              <span>
                Engineering decisions designed around your business.
              </span>

            </div>

          </div>


          <div className="approach-grid">

            {technologyPrinciples.map((item) => {

              const Icon = item.icon;

              return (
                <div
                  className="approach-item"
                  key={item.number}
                >

                  <div className="approach-item-top">

                    <div className="approach-number">
                      {item.number}
                    </div>

                    <Icon size={20} />

                  </div>

                  <h3>
                    {item.title}
                  </h3>

                  <p>
                    {item.description}
                  </p>

                </div>
              );

            })}

          </div>

        </div>

      </section>


      {/* =====================================================
          ARCHITECTURE CAPABILITIES
      ===================================================== */}

      <section className="architecture-section">

        <div className="tech-container">

          <div className="architecture-header">

            <div className="tech-small-label">
              ENGINEERING CAPABILITIES
            </div>

            <h2>
              One technology partner.
              <span>Multiple capabilities.</span>
            </h2>

            <p>
              From the first architecture decision to production deployment,
              our engineering capabilities work together as one connected
              technology ecosystem.
            </p>

          </div>


          <div className="architecture-layout">

            <div className="architecture-main">

              <div className="architecture-main-grid"></div>

              <div className="architecture-main-center">

                <div className="architecture-center-icon">
                  <Layers3 size={26} />
                </div>

                <span>
                  ASCUBE INFOLABS
                </span>

                <strong>
                  Technology
                  <br />
                  Across Industries
                </strong>

                <small>
                  Engineering · AI · Cloud · Data
                </small>

              </div>

              <div className="architecture-line line-one"></div>
              <div className="architecture-line line-two"></div>
              <div className="architecture-line line-three"></div>
              <div className="architecture-line line-four"></div>

            </div>


            <div className="architecture-items">

              {architectureItems.map((item) => {

                const Icon = item.icon;

                return (
                  <div
                    className="architecture-item"
                    key={item.label}
                  >

                    <div className="architecture-item-icon">
                      <Icon size={19} />
                    </div>

                    <div>
                      <span>{item.label}</span>
                      <strong>{item.value}</strong>
                    </div>

                    <ArrowUpRight size={16} />

                  </div>
                );

              })}

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          CTA
      ===================================================== */}

      <section className="technology-cta">

        <div className="technology-cta-grid"></div>

        <div className="technology-cta-glow"></div>

        <div className="tech-container">

          <div className="technology-cta-content">

            <div className="tech-small-label">
              BUILD WITH US
            </div>

            <h2>
              Have a technology
              <span>challenge?</span>
            </h2>

            <p>
              Tell us what you're building. We'll help you identify the
              right architecture, technologies and engineering approach
              for your business.
            </p>

            <Link
              to="/contact"
              className="technology-cta-button"
            >
              Let's Build Something
              <ArrowUpRight size={18} />
            </Link>

          </div>

        </div>

      </section>

    </main>
  );
}