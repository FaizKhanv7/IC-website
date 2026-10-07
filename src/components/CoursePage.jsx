import { Link } from "react-router-dom";
import { getCourse } from "../data/courses";
import { ArrowLeft, Sparkles, ArrowRight } from "lucide-react";

function CoursePage({ slug }) {
  const course = getCourse(slug);

  if (!course) {
    return (
      <main className="page page-medium">
        <h1 className="page-title">Course Not Found</h1>
        <p className="page-text">
          We couldn't find that course. <Link to="/courses">Return to course catalog</Link>.
        </p>
      </main>
    );
  }

  const { primaryLabel, primaryValue, projects: projectCount, enrolled } = course.stats;

  return (
    <main className="page page-medium">
      <div className="course-breadcrumb">
        <Link to="/courses" className="breadcrumb-back">
          <ArrowLeft size={16} /> All Courses
        </Link>
        <span className="breadcrumb-divider">/</span>
        <span className="breadcrumb-current">{course.code}</span>
      </div>

      <div className="course-detail-header">
        <div className="course-pill-tag">
          {course.isAP ? "College Board Advanced Placement" : "Pathway Core Course"}
        </div>
        <h1 className="page-title">{course.title}</h1>
        <p className="page-lead">{course.tagline}</p>
      </div>

      {/* Headline numbers */}
      <div className="stat-row">
        <div className="stat-card">
          <span className="stat-value">{primaryValue}</span>
          <span className="stat-label">{primaryLabel}</span>
        </div>
        <div className="stat-card">
          <span className="stat-value">{projectCount}</span>
          <span className="stat-label">Projects Built Annually</span>
        </div>
        <div className="stat-card">
          <span className="stat-value">{enrolled}</span>
          <span className="stat-label">Bulldog Students Enrolled</span>
        </div>
      </div>

      {/* Description & Overview */}
      <section className="page-section course-section-card">
        <h2 className="page-heading">About This Course at Forsyth Central</h2>
        <p className="page-text">{course.description}</p>
      </section>

      {/* Syllabus Topics */}
      <section className="page-section course-section-card">
        <h2 className="page-heading">Key Units &amp; Competencies Covered</h2>
        <div className="topics-grid">
          {course.topics.map(function (topic, index) {
            return (
              <div key={topic} className="topic-card">
                <span className="topic-num">Unit 0{index + 1}</span>
                <span className="topic-title">{topic}</span>
              </div>
            );
          })}
        </div>
      </section>

      {/* Projects CTA banner */}
      <section className="course-projects-cta">
        <div className="cta-icon-side">
          <Sparkles size={32} />
        </div>
        <div className="cta-copy-side">
          <h3>See What Forsyth Central Students Build in {course.code}</h3>
          <p>
            Browse student-built robots and integrated mechanical, electronic, and
            software systems from this course in our interactive project carousel.
          </p>
          <Link to="/projects" className="btn btn-primary btn-sm">
            View Projects Carousel <ArrowRight size={14} />
          </Link>
        </div>
      </section>

      <div className="page-bottom-nav">
        <Link to="/courses" className="back-link">
          &larr; Back to all pathway courses
        </Link>
      </div>
    </main>
  );
}

export default CoursePage;
