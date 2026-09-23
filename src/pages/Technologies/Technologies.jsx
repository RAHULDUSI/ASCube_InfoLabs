import {
  ArrowUpRight,
  Brain,
  Cloud,
  Code2,
  Database,
  GitBranch,
  Layers3,
  Smartphone,
  Sparkles,
} from "lucide-react";

import { Link } from "react-router-dom";

import "./Technologies.css";

const technologyGroups = [
  {
    icon: Code2,
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
    title: "Architecture First",
    description:
      "We design the technical foundation before implementation begins, ensuring every system is built with scalability and maintainability in mind.",
  },
  {
    number: "02",
    title: "Engineering Excellence",
    description:
      "Clean code, modular architecture, testing and secure development practices remain central to every solution.",
  },
  {
    number: "03",
    title: "Cloud Ready",
    description:
      "Solutions are designed to operate efficiently across modern cloud and distributed environments.",
  },
  {
    number: "04",
    title: "Built to Evolve",
    description:
      "Technology should adapt with your business. We build systems that can continuously evolve without unnecessary technical debt.",
  },
];

export default function Technologies() {
  return (
    <main className="technologies-page">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="tech-hero">

        <div className="tech-hero-glow tech-glow-one"></div>
        <div className="tech-hero-glow tech-glow-two"></div>

        <div className="tech-container">

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

              <Link to="/contact" className="tech-primary-btn">
                Start a Project
                <ArrowUpRight size={17} />
              </Link>

              <Link to="/services" className="tech-secondary-btn">
                Explore Services
              </Link>

            </div>

          </div>

          <div className="tech-hero-visual">

            <div className="tech-orbit orbit-one"></div>
            <div className="tech-orbit orbit-two"></div>
            <div className="tech-orbit orbit-three"></div>

            <div className="tech-core">
              <Sparkles size={30} />
              <span>ASCUBE</span>
              <strong>TECH</strong>
            </div>

            <div className="tech-floating-card tech-card-one">
              <Code2 size={19} />
              <div>
                <strong>Engineering</strong>
                <span>Modern software</span>
              </div>
            </div>

            <div className="tech-floating-card tech-card-two">
              <Brain size={19} />
              <div>
                <strong>Intelligence</strong>
                <span>AI & Automation</span>
              </div>
            </div>

            <div className="tech-floating-card tech-card-three">
              <Cloud size={19} />
              <div>
                <strong>Cloud</strong>
                <span>Built to scale</span>
              </div>
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

          </div>

        </div>

      </section>


      {/* =====================================================
          TECHNOLOGY GROUPS
      ===================================================== */}

      <section className="technology-stack-section">

        <div className="tech-container">

          <div className="technology-grid">

            {technologyGroups.map((group) => {

              const Icon = group.icon;

              return (
                <article
                  className="technology-card"
                  key={group.title}
                >

                  <div className="technology-card-top">

                    <div className="technology-icon">
                      <Icon size={23} />
                    </div>

                    <ArrowUpRight
                      className="technology-arrow"
                      size={19}
                    />

                  </div>

                  <h3>{group.title}</h3>

                  <p>{group.description}</p>

                  <div className="technology-tags">

                    {group.technologies.map((technology) => (
                      <span key={technology}>
                        {technology}
                      </span>
                    ))}

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

          </div>


          <div className="approach-grid">

            {technologyPrinciples.map((item) => (
              <div
                className="approach-item"
                key={item.number}
              >

                <div className="approach-number">
                  {item.number}
                </div>

                <div>
                  <h3>{item.title}</h3>

                  <p>{item.description}</p>
                </div>

              </div>
            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          CTA
      ===================================================== */}

      <section className="technology-cta">

        <div className="technology-cta-bg"></div>

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