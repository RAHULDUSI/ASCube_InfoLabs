import {
  ArrowLeft,
  ArrowUpRight,
  CheckCircle2,
} from "lucide-react";

import { Link, useParams } from "react-router-dom";

import caseStudies from "../../data/caseStudies";

import "./CaseStudyDetails.css";


export default function CaseStudyDetails() {

  const { slug } = useParams();

  /*
   * Find the case study using the exact URL slug.
   */
  const study = caseStudies.find(
    (item) => item.slug === slug
  );


  /* =====================================================
     NOT FOUND
  ===================================================== */

  if (!study) {

    return (
      <main className="case-details-page">

        <section className="case-details-not-found">

          <div className="case-details-container">

            <span>
              CASE STUDY
            </span>

            <h1>
              Case study not found
            </h1>

            <p>
              The case study you're looking for doesn't exist.
            </p>

            <Link
              to="/case-studies"
              className="case-details-back"
            >
              <ArrowLeft size={17} />
              Back to Case Studies
            </Link>

          </div>

        </section>

      </main>
    );
  }


  /* =====================================================
     PAGE
  ===================================================== */

  return (

    <main className="case-details-page">

      {/* =================================================
          HERO
      ================================================= */}

      <section className="case-details-hero">

        <div className="case-details-container">

          <Link
            to="/case-studies"
            className="case-details-back-top"
          >
            <ArrowLeft size={16} />
            Back to Case Studies
          </Link>


          <div className="case-details-hero-content">

            <div className="case-details-meta">

              <span>
                {study.sector}
              </span>

              <div className="case-details-meta-line"></div>

              <small>
                CASE STUDY
              </small>

            </div>


            <h1>
              {study.title}
            </h1>


            <p>
              {study.description}
            </p>


            <div className="case-details-tags">

              {study.tags.map((tag) => (

                <span key={tag}>
                  {tag}
                </span>

              ))}

            </div>

          </div>

        </div>

      </section>


      {/* =================================================
          HERO IMAGE
      ================================================= */}

      <section className="case-details-image-section">

        <div className="case-details-container">

          <div className="case-details-main-image">

            <img
              src={study.image}
              alt={study.title}
            />

          </div>

        </div>

      </section>


      {/* =================================================
          OVERVIEW
      ================================================= */}

      <section className="case-details-overview">

        <div className="case-details-container">

          <div className="case-details-overview-grid">

            <div className="case-details-sticky-title">

              <span>
                THE CHALLENGE
              </span>

              <h2>
                Understanding
                <br />
                the problem.
              </h2>

            </div>


            <div className="case-details-overview-content">

              <p>
                {study.challenge}
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* =================================================
          SOLUTION
      ================================================= */}

      <section className="case-details-solution">

        <div className="case-details-container">

          <div className="case-details-solution-grid">

            <div>

              <span className="case-details-section-label">
                OUR APPROACH
              </span>

              <h2>
                Designing a solution
                <br />
                around the business.
              </h2>

            </div>


            <div>

              <p className="case-details-solution-description">
                {study.solution}
              </p>

            </div>

          </div>


          {/* HIGHLIGHTS */}

          <div className="case-details-highlights">

            {study.highlights.map((highlight) => (

              <div
                className="case-details-highlight"
                key={highlight}
              >

                <CheckCircle2 size={19} />

                <span>
                  {highlight}
                </span>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* =================================================
          TECHNOLOGY
      ================================================= */}

      <section className="case-details-tech">

        <div className="case-details-container">

          <div className="case-details-tech-grid">

            <div>

              <span className="case-details-section-label">
                TECHNOLOGY
              </span>

              <h2>
                Built for scale,
                <br />
                reliability and growth.
              </h2>

            </div>


            <div className="case-details-tech-list">

              {study.technologies.map((technology) => (

                <div
                  className="case-details-tech-item"
                  key={technology}
                >

                  <span>
                    {technology}
                  </span>

                  <ArrowUpRight size={15} />

                </div>

              ))}

            </div>

          </div>

        </div>

      </section>


      {/* =================================================
          OUTCOME
      ================================================= */}

      <section className="case-details-outcome">

        <div className="case-details-container">

          <div className="case-details-outcome-box">

            <span>
              THE OUTCOME
            </span>

            <h2>
              Technology that
              <br />
              creates meaningful impact.
            </h2>

            <p>
              {study.outcome}
            </p>

          </div>

        </div>

      </section>


      {/* =================================================
          NEXT CTA
      ================================================= */}

      <section className="case-details-next">

        <div className="case-details-container">

          <div className="case-details-next-inner">

            <div>

              <span>
                START YOUR NEXT PROJECT
              </span>

              <h2>
                Have a challenge
                <br />
                worth solving?
              </h2>

            </div>


            <Link
              to="/contact"
              className="case-details-contact-button"
            >
              Let's Talk
              <ArrowUpRight size={18} />
            </Link>

          </div>

        </div>

      </section>

    </main>
  );
}