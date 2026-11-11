import { Link } from "react-router-dom";
import { courses } from "../data/courses";
import { ArrowRight, Sparkles } from "lucide-react";
import PathwayFlow from "../components/PathwayFlow";
import Faq from "../components/Faq";
import ContactCard from "../components/ContactCard";

function Courses() {
  return (
    <main className="page page-medium">
      <div className="page-header-center">
        <p className="page-eyebrow">Forsyth Central High School &bull; Forsyth County</p>
        <h1 className="page-title">Computer Science Course Catalog</h1>
        <p className="page-lead">
          Four courses, taken in order: IST, AP CSP, AP CSA, and the PGAS senior capstone.
        </p>
      </div>

      <section className="pf-section" aria-labelledby="pf-heading">
        <h2 className="pf-section-title" id="pf-heading">Plan your path</h2>
        <p className="pf-section-sub">
          Incoming 9th graders start with IST. Pick a step, or let the slideshow walk
          you through the sequence.
        </p>
        <PathwayFlow />
      </section>

      <div className="course-list-sequence">
        {courses.map(function (c, index) {
          return (
            <Link key={c.slug} to={c.path} className="sequence-course-card">
              <div className="sequence-step-indicator">
                <span className="step-count">0{index + 1}</span>
                <span className="step-tag">{c.isAP ? "AP Exam" : "Core"}</span>
              </div>

              <div className="sequence-body">
                <div className="sequence-title-row">
                  <span className="sequence-code">{c.code}</span>
                  <h2 className="sequence-title">{c.title}</h2>
                </div>
                <p className="sequence-tagline">{c.tagline}</p>

                <div className="sequence-topics-row">
                  {c.topics.slice(0, 3).map(function (t) {
                    return (
                      <span key={t} className="sequence-topic-pill">
                        {t}
                      </span>
                    );
                  })}
                </div>
              </div>

              <div className="sequence-action">
                <span className="learn-more-btn">
                  Course details <ArrowRight size={16} />
                </span>
              </div>
            </Link>
          );
        })}
      </div>

      <section className="courses-bottom-cta">
        <div className="bottom-cta-inner">
          <div>
            <h3>See what students build in these classes</h3>
            <p>
              Games, web apps, and other software made by students in the pathway.
            </p>
          </div>
          <Link to="/projects" className="btn btn-primary">
            <Sparkles size={16} /> Student Projects
          </Link>
        </div>
      </section>

      <Faq />
      <ContactCard />
    </main>
  );
}

export default Courses;
