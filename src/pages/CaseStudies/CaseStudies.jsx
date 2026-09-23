import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

import caseStudies from "../../data/caseStudies";

import "./CaseStudies.css";

export default function CaseStudies() {
  return (
    <main className="case-studies-page">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="case-studies-hero">

        <div className="case-studies-container">

          <div className="case-studies-eyebrow">
            <span className="eyebrow-dot"></span>
            SELECTED WORK
          </div>

          <div className="case-studies-hero-grid">

            <div>

              <h1>
                Technology built
                <br />
                around <span>real outcomes.</span>
              </h1>

            </div>

            <div className="case-studies-hero-copy">

              <p>
                Explore how we help organizations solve complex
                technology challenges through intelligent,
                scalable and business-focused digital solutions.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          CASE STUDIES
      ===================================================== */}

      <section className="case-studies-list">

        <div className="case-studies-container">

          <div className="case-studies-section-heading">

            <div>
              <span>CASE STUDIES</span>

              <h2>
                Selected solutions across industries.
              </h2>
            </div>

            <p>
              Each engagement is designed around the unique
              challenges, workflows and growth objectives of
              the organization.
            </p>

          </div>


          <div className="case-studies-grid">

            {caseStudies.map((study, index) => (

              <article
                className="case-study-card"
                key={study.id}
              >

                {/* IMAGE */}

                <Link
                  to={`/case-studies/${study.slug}`}
                  className="case-study-image-link"
                >

                  <div className="case-study-image">

                    <img
                      src={study.image}
                      alt={study.title}
                    />

                    <div className="case-study-image-overlay">
                      <span>
                        View Case
                        <ArrowUpRight size={17} />
                      </span>
                    </div>

                    <div className="case-study-number">
                      {String(index + 1).padStart(2, "0")}
                    </div>

                  </div>

                </Link>


                {/* CONTENT */}

                <div className="case-study-content">

                  <div className="case-study-sector">
                    {study.sector}
                  </div>

                  <h3>
                    {study.title}
                  </h3>

                  <p>
                    {study.shortDescription}
                  </p>


                  <div className="case-study-tags">

                    {study.tags.map((tag) => (
                      <span key={tag}>
                        {tag}
                      </span>
                    ))}

                  </div>


                  <Link
                    to={`/case-studies/${study.slug}`}
                    className="case-study-link"
                  >
                    Explore Case
                    <ArrowUpRight size={17} />
                  </Link>

                </div>

              </article>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          CTA
      ===================================================== */}

      <section className="case-studies-cta">

        <div className="case-studies-container">

          <div className="case-studies-cta-box">

            <div>

              <span>
                HAVE A CHALLENGE?
              </span>

              <h2>
                Let's build something
                <br />
                meaningful together.
              </h2>

            </div>

            <Link
              to="/contact"
              className="case-studies-cta-button"
            >
              Start a Conversation
              <ArrowUpRight size={18} />
            </Link>

          </div>

        </div>

      </section>

    </main>
  );
}