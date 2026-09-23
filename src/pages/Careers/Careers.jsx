import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ArrowUpRight,
  BriefcaseBusiness,
  Check,
  ChevronDown,
  Code2,
  Globe2,
  Layers3,
  MapPin,
  Rocket,
  Sparkles,
  Users,
  Zap,
} from "lucide-react";

import "./Careers.css";

const jobs = [
  {
    id: 1,
    title: "Frontend Engineer",
    department: "Engineering",
    location: "Hyderabad / Remote",
    type: "Full-time",
    experience: "1–3 years",
    description:
      "Build polished, scalable web experiences using modern frontend technologies and component-driven architecture.",
    skills: ["React", "TypeScript", "JavaScript", "CSS"],
  },
  {
    id: 2,
    title: "Backend Engineer",
    department: "Engineering",
    location: "Hyderabad / Remote",
    type: "Full-time",
    experience: "1–3 years",
    description:
      "Design APIs, services and backend systems that are reliable, secure and ready to scale with growing businesses.",
    skills: ["Node.js", "Express", "SQL", "REST APIs"],
  },
  {
    id: 3,
    title: "AI Engineer",
    department: "AI & Data",
    location: "Hyderabad / Remote",
    type: "Full-time",
    experience: "1–3 years",
    description:
      "Build practical AI systems, intelligent workflows and LLM-powered applications that solve real business problems.",
    skills: ["Python", "LLMs", "LangChain", "AI"],
  },
  {
    id: 4,
    title: "Full Stack Developer",
    department: "Engineering",
    location: "Hyderabad",
    type: "Full-time",
    experience: "2–4 years",
    description:
      "Work across frontend and backend systems to turn product requirements into reliable digital experiences.",
    skills: ["React", "Node.js", "SQL", "APIs"],
  },
  {
    id: 5,
    title: "UI/UX Designer",
    department: "Design",
    location: "Hyderabad / Remote",
    type: "Full-time",
    experience: "1–3 years",
    description:
      "Shape intuitive digital experiences by combining user research, visual design and thoughtful interaction systems.",
    skills: ["Figma", "UI Design", "UX", "Design Systems"],
  },
  {
    id: 6,
    title: "Cloud & DevOps Engineer",
    department: "Cloud & Infrastructure",
    location: "Hyderabad",
    type: "Full-time",
    experience: "2–4 years",
    description:
      "Build deployment pipelines, cloud infrastructure and reliable engineering environments for modern applications.",
    skills: ["Azure", "Docker", "CI/CD", "Cloud"],
  },
];

const departments = [
  "All Roles",
  "Engineering",
  "AI & Data",
  "Design",
  "Cloud & Infrastructure",
];

const values = [
  {
    number: "01",
    icon: Sparkles,
    title: "Build with purpose",
    description:
      "We focus on solving meaningful problems rather than simply shipping more software.",
  },
  {
    number: "02",
    icon: Users,
    title: "Grow together",
    description:
      "Great products come from teams that share knowledge, challenge ideas and help each other improve.",
  },
  {
    number: "03",
    icon: Rocket,
    title: "Move with ownership",
    description:
      "We give people the space to take responsibility, make decisions and turn ideas into outcomes.",
  },
  {
    number: "04",
    icon: Zap,
    title: "Keep learning",
    description:
      "Technology changes quickly. We believe curiosity and continuous learning are part of the job.",
  },
];

const benefits = [
  {
    icon: Code2,
    title: "Modern engineering",
    text: "Work with current technologies, scalable architectures and real-world engineering challenges.",
  },
  {
    icon: Layers3,
    title: "Meaningful projects",
    text: "Build products and platforms that solve genuine problems for businesses and their customers.",
  },
  {
    icon: Globe2,
    title: "Collaborative environment",
    text: "Work alongside people across engineering, AI, design, product and business.",
  },
  {
    icon: BriefcaseBusiness,
    title: "Room to grow",
    text: "Take ownership, expand your skills and grow into the responsibilities you want to pursue.",
  },
];

const hiringSteps = [
  {
    number: "01",
    title: "Apply",
    description:
      "Tell us about yourself, your experience and the kind of problems you enjoy solving.",
  },
  {
    number: "02",
    title: "Connect",
    description:
      "A conversation with our team helps us understand your experience, interests and expectations.",
  },
  {
    number: "03",
    title: "Show your thinking",
    description:
      "Depending on the role, you may work through a technical, design or problem-solving exercise.",
  },
  {
    number: "04",
    title: "Meet the team",
    description:
      "Get to know the people you may work with and explore how you could contribute at ASCube.",
  },
  {
    number: "05",
    title: "Build what's next",
    description:
      "If there is a strong mutual fit, we move forward and start building together.",
  },
];

export default function Careers() {
  const [activeDepartment, setActiveDepartment] = useState("All Roles");
  const [openJob, setOpenJob] = useState(null);

  const filteredJobs = useMemo(() => {
    if (activeDepartment === "All Roles") {
      return jobs;
    }

    return jobs.filter(
      (job) => job.department === activeDepartment
    );
  }, [activeDepartment]);

  return (
    <main className="careers-page">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="careers-hero">

        <div className="careers-hero-grid"></div>

        <div className="careers-hero-glow careers-glow-one"></div>
        <div className="careers-hero-glow careers-glow-two"></div>

        <div className="careers-container careers-hero-container">

          <div className="careers-hero-content">

            <div className="careers-eyebrow">
              <span></span>
              CAREERS AT ASCUBE INFOLABS
            </div>

            <h1>
              Build technology
              <br />
              that <span>moves business.</span>
            </h1>

            <p>
              Join a team of engineers, designers, AI specialists and
              technology thinkers building digital products that solve
              real business challenges.
            </p>

            <div className="careers-hero-actions">

              <a
                href="#open-roles"
                className="careers-primary-button"
              >
                Explore Open Roles
                <ArrowRight size={17} />
              </a>

              <a
                href="#life-at-ascube"
                className="careers-secondary-button"
              >
                Life at ASCube
                <ArrowUpRight size={16} />
              </a>

            </div>

            <div className="careers-hero-meta">

              <div>
                <strong>Engineering</strong>
                <span>Software • AI • Cloud</span>
              </div>

              <div>
                <strong>People</strong>
                <span>Curious • Collaborative • Driven</span>
              </div>

              <div>
                <strong>Impact</strong>
                <span>Build • Learn • Deliver</span>
              </div>

            </div>

          </div>


          {/* HERO VISUAL */}

          <div className="careers-hero-visual">

            <div className="careers-orbit careers-orbit-one"></div>
            <div className="careers-orbit careers-orbit-two"></div>
            <div className="careers-orbit careers-orbit-three"></div>

            <div className="careers-core">

              <div className="careers-core-icon">
                <Sparkles size={28} />
              </div>

              <span>ASCUBE</span>

              <strong>
                BUILD
                <br />
                WHAT'S NEXT
              </strong>

              <small>
                Engineering • Intelligence • Growth
              </small>

            </div>


            <div className="careers-floating-card careers-floating-top">

              <div className="careers-floating-icon">
                <Code2 size={18} />
              </div>

              <div>
                <strong>Engineering</strong>
                <span>Build with purpose</span>
              </div>

            </div>


            <div className="careers-floating-card careers-floating-bottom">

              <div className="careers-floating-icon">
                <Users size={18} />
              </div>

              <div>
                <strong>One team</strong>
                <span>Learn • Collaborate • Grow</span>
              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          INTRO
      ===================================================== */}

      <section
        className="careers-intro"
        id="life-at-ascube"
      >

        <div className="careers-container">

          <div className="careers-section-label">
            WHY ASCUBE
          </div>

          <div className="careers-intro-grid">

            <h2>
              Your work should
              <br />
              <span>create momentum.</span>
            </h2>

            <div className="careers-intro-copy">

              <p>
                At ASCube InfoLabs, technology is not just a deliverable.
                It is a way to help businesses operate better, serve
                customers smarter and create new possibilities.
              </p>

              <p>
                We are building a culture where people can work on
                challenging problems, learn continuously and take real
                ownership of what they create.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          VALUES
      ===================================================== */}

      <section className="careers-values-section">

        <div className="careers-container">

          <div className="careers-section-heading">

            <div>
              <span className="careers-section-label">
                HOW WE WORK
              </span>

              <h2>
                A culture built around
                <br />
                <span>people who build.</span>
              </h2>
            </div>

            <p>
              We want people to do their best work without losing the
              curiosity and ownership that made them want to build in
              the first place.
            </p>

          </div>


          <div className="careers-values-grid">

            {values.map((value) => {

              const Icon = value.icon;

              return (
                <article
                  className="career-value-card"
                  key={value.number}
                >

                  <div className="career-value-top">

                    <span>{value.number}</span>

                    <div className="career-value-icon">
                      <Icon size={21} />
                    </div>

                  </div>

                  <div className="career-value-line"></div>

                  <h3>{value.title}</h3>

                  <p>{value.description}</p>

                </article>
              );

            })}

          </div>

        </div>

      </section>


      {/* =====================================================
          BENEFITS
      ===================================================== */}

      <section className="careers-benefits-section">

        <div className="careers-container">

          <div className="careers-benefits-header">

            <div>

              <span className="careers-section-label">
                THE EXPERIENCE
              </span>

              <h2>
                More than a job.
                <br />
                <span>A place to build.</span>
              </h2>

            </div>

            <p>
              We want your experience at ASCube to give you opportunities
              to work on meaningful technology while continuously
              developing your craft.
            </p>

          </div>


          <div className="careers-benefits-grid">

            {benefits.map((benefit) => {

              const Icon = benefit.icon;

              return (
                <article
                  className="career-benefit-card"
                  key={benefit.title}
                >

                  <div className="career-benefit-icon">
                    <Icon size={22} />
                  </div>

                  <h3>{benefit.title}</h3>

                  <p>{benefit.text}</p>

                  <ArrowUpRight
                    className="career-benefit-arrow"
                    size={18}
                  />

                </article>
              );

            })}

          </div>

        </div>

      </section>


      {/* =====================================================
          OPEN POSITIONS
      ===================================================== */}

      <section
        className="careers-openings-section"
        id="open-roles"
      >

        <div className="careers-container">

          <div className="careers-openings-heading">

            <div>

              <span className="careers-section-label">
                OPPORTUNITIES
              </span>

              <h2>
                Find your next
                <br />
                <span>challenge.</span>
              </h2>

            </div>

            <p>
              Explore current opportunities across engineering, AI,
              design and cloud. Find a role where your skills can
              create meaningful impact.
            </p>

          </div>


          {/* FILTERS */}

          <div className="careers-filters">

            {departments.map((department) => (

              <button
                key={department}
                className={
                  activeDepartment === department
                    ? "career-filter active"
                    : "career-filter"
                }
                onClick={() => {
                  setActiveDepartment(department);
                  setOpenJob(null);
                }}
              >
                {department}
              </button>

            ))}

          </div>


          {/* JOB LIST */}

          <div className="career-jobs">

            {filteredJobs.map((job, index) => (

              <article
                className={`career-job-card ${
                  openJob === job.id ? "job-open" : ""
                }`}
                key={job.id}
              >

                <button
                  className="career-job-main"
                  onClick={() =>
                    setOpenJob(
                      openJob === job.id ? null : job.id
                    )
                  }
                >

                  <div className="career-job-index">
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  <div className="career-job-info">

                    <span className="career-job-department">
                      {job.department}
                    </span>

                    <h3>{job.title}</h3>

                    <div className="career-job-meta">

                      <span>
                        <MapPin size={14} />
                        {job.location}
                      </span>

                      <span>
                        <BriefcaseBusiness size={14} />
                        {job.type}
                      </span>

                      <span>
                        {job.experience}
                      </span>

                    </div>

                  </div>

                  <div className="career-job-toggle">
                    <ChevronDown size={20} />
                  </div>

                </button>


                {openJob === job.id && (

                  <div className="career-job-details">

                    <div className="career-job-description">

                      <p>
                        {job.description}
                      </p>

                      <div className="career-job-skills">

                        {job.skills.map((skill) => (

                          <span key={skill}>
                            {skill}
                          </span>

                        ))}

                      </div>

                    </div>

                    <Link
                      to="/contact"
                      className="career-apply-button"
                    >
                      Apply for this role
                      <ArrowUpRight size={16} />
                    </Link>

                  </div>

                )}

              </article>

            ))}

          </div>


          <div className="careers-openings-note">

            <div>
              <span className="careers-note-dot"></span>
              Don't see your role?
            </div>

            <p>
              We are always interested in meeting talented people.
              Send us your profile through the contact page and tell
              us what you would like to build.
            </p>

            <Link to="/contact">
              Introduce yourself
              <ArrowUpRight size={15} />
            </Link>

          </div>

        </div>

      </section>


      {/* =====================================================
          HIRING PROCESS
      ===================================================== */}

      <section className="careers-process-section">

        <div className="careers-container">

          <div className="careers-process-heading">

            <span className="careers-section-label">
              OUR PROCESS
            </span>

            <h2>
              Simple, thoughtful,
              <br />
              <span>human.</span>
            </h2>

            <p>
              We want the hiring process to give you a clear picture of
              the role, the team and the kind of work you will be doing.
            </p>

          </div>


          <div className="careers-process-list">

            {hiringSteps.map((step) => (

              <div
                className="career-process-step"
                key={step.number}
              >

                <span className="career-process-number">
                  {step.number}
                </span>

                <div className="career-process-content">

                  <h3>{step.title}</h3>

                  <p>{step.description}</p>

                </div>

                <Check
                  className="career-process-check"
                  size={18}
                />

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          FINAL CTA
      ===================================================== */}

      <section className="careers-final-section">

        <div className="careers-final-glow"></div>

        <div className="careers-container">

          <div className="careers-final-card">

            <div className="careers-final-content">

              <span className="careers-final-label">
                READY TO BUILD?
              </span>

              <h2>
                Bring your ideas.
                <br />
                <span>We'll build the future.</span>
              </h2>

              <p>
                Whether you are looking for your next role or simply want
                to start a conversation, we would love to hear from you.
              </p>

              <Link
                to="/contact"
                className="careers-final-button"
              >
                Start a conversation
                <ArrowUpRight size={17} />
              </Link>

            </div>


            <div className="careers-final-visual">

              <div className="final-orbit final-orbit-one"></div>
              <div className="final-orbit final-orbit-two"></div>

              <div className="final-center">

                <Sparkles size={25} />

                <strong>ASCUBE</strong>

                <span>
                  Build • Learn • Grow
                </span>

              </div>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
}