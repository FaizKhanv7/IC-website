import { Link } from "react-router-dom";
import { getCourse } from "../data/courses";
import PdfViewer from "./PdfViewer";
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

  // Stats are hidden until real figures replace the "—" placeholders in data/courses.js.
  const stats = [
    { value: primaryValue, label: primaryLabel },
    { value: projectCount, label: "Projects Built Annually" },
    { value: enrolled, label: "Students Enrolled" },
  ].filter(function (s) { return s.value && s.value !== "—"; });

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

      {stats.length > 0 && (
        <div className="stat-row">
          {stats.map(function (s) {
            return (
              <div className="stat-card" key={s.label}>
                <span className="stat-value">{s.value}</span>
                <span className="stat-label">{s.label}</span>
              </div>
            );
          })}
        </div>
      )}

      <section className="page-section course-section-card">
        <h2 className="page-heading">About This Course</h2>
        <p className="page-text">{course.description}</p>
      </section>

      <section className="page-section course-section-card">
        <h2 className="page-heading">Topics</h2>
        <div className="topics-grid">
          {course.topics.map(function (topic, index) {
            return (
              <div key={topic} className="topic-card">
                <span className="topic-num">0{index + 1}</span>
                <span className="topic-title">{topic}</span>
              </div>
            );
          })}
        </div>
      </section>

      {/* Course syllabus PDF */}
      <section className="page-section course-section-card course-syllabus-section">
        <h2 className="page-heading">Course Syllabus</h2>
        {course.syllabus ? (
          <>
            <p className="page-text">
              View the {course.code} syllabus for the 2026–27 school year below, or{" "}
              <a href={course.syllabus} target="_blank" rel="noreferrer">
                open the PDF in a new tab
              </a>.
            </p>
            <PdfViewer
              documents={[
                {
                  id: course.slug,
                  label: course.code,
                  title: course.code + " 2026–27 course syllabus",
                  file: course.syllabus,
                },
              ]}
            />
          </>
        ) : (
          <p className="page-text">
            The {course.code} syllabus is not available yet.
          </p>
        )}
      </section>

      {/* Projects CTA banner */}
      <section className="course-projects-cta">
        <div className="cta-icon-side">
          <Sparkles size={32} />
        </div>
        <div className="cta-copy-side">
          <h3>Student Projects</h3>
          <p>
            See what students have built across the pathway.
          </p>
          <Link to="/projects" className="btn btn-primary btn-sm">
            View Projects <ArrowRight size={14} />
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
