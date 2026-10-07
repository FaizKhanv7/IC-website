import { Link } from "react-router-dom";
import { courses } from "../data/courses";
import { ArrowRight, Sparkles } from "lucide-react";

function Courses() {
  return (
    <main className="page page-medium">
      <div className="page-header-center">
        <p className="page-eyebrow">Forsyth Central Highschool &bull; Forsyth County</p>
        <h1 className="page-title">Computer Science Course Catalog</h1>
        <p className="page-lead">
          Four sequential courses engineered to take Forsyth Central students from digital
          literacy to College Board AP credit and industry cloud certification.
        </p>
      </div>

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
                  View Syllabus <ArrowRight size={16} />
                </span>
              </div>
            </Link>
          );
        })}
      </div>

      <section className="courses-bottom-cta">
        <div className="bottom-cta-inner">
          <div>
            <h3>Want to see what students build in these classes?</h3>
            <p>
              Check out our featured student projects carousel featuring games, web apps,
              and cloud services created by Bulldogs.
            </p>
          </div>
          <Link to="/projects" className="btn btn-primary">
            <Sparkles size={16} /> Student Projects Carousel
          </Link>
        </div>
      </section>
    </main>
  );
}

export default Courses;
