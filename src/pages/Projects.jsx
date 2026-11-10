import { useState } from "react";
import { Link } from "react-router-dom";
import ProjectCarousel from "../components/ProjectCarousel";
import { projects } from "../data/projects";
import {
  Search,
  ArrowRight
} from "lucide-react";

export default function Projects() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCourseFilter, setActiveCourseFilter] = useState("ALL");

  const filteredGridProjects = projects.filter(function (p) {
    const matchesCourse =
      activeCourseFilter === "ALL" ||
      p.course.toLowerCase() === activeCourseFilter.toLowerCase();
    const matchesSearch =
      p.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.tags.some(function (t) { return t.toLowerCase().includes(searchTerm.toLowerCase()); });
    return matchesCourse && matchesSearch;
  });

  return (
    <main className="page page-wide">
      {/* Page Header */}
      <div className="page-header-center">
        <p className="page-eyebrow">Forsyth Central High School &bull; Forsyth County</p>
        <h1 className="page-title">Student Project Showcase</h1>
        <p className="page-lead">
          Work from students in the Forsyth Central High School computer science pathway,
          from web pages in IST to Java programs in AP CSA and capstone projects in PGAS.
        </p>
      </div>

      <div className="project-stats-ribbon">
        <div className="stat-pill">
          <span className="stat-number">{projects.length}</span>
          <span className="stat-desc">Featured Projects</span>
        </div>
        <div className="stat-pill">
          <span className="stat-number">4</span>
          <span className="stat-desc">Courses</span>
        </div>
      </div>

      <section className="page-section carousel-section">
        <div className="section-header-row">
          <div>
            <h2 className="section-heading">Featured Projects</h2>
            <p className="section-subtext">
              Use the arrows or the course filters to browse.
            </p>
          </div>
        </div>

        <ProjectCarousel />
      </section>

      <section className="page-section pathway-milestones-section">
        <div className="section-header-row">
          <div>
            <h2 className="section-heading">Projects by Course</h2>
            <p className="section-subtext">
              What students build in each course.
            </p>
          </div>
        </div>

        <div className="pathway-grid">
          <div className="pathway-step-card">
            <div className="step-number">01</div>
            <div className="step-header">
              <span className="step-course-tag">IST</span>
              <h4>Web & Digital Media</h4>
            </div>
            <p className="step-desc">
              Web pages and small interactive projects in HTML, CSS, and introductory
              JavaScript.
            </p>
            <Link to="/courses/ist" className="step-link">
              Explore IST Course <ArrowRight size={14} />
            </Link>
          </div>

          <div className="pathway-step-card">
            <div className="step-number">02</div>
            <div className="step-header">
              <span className="step-course-tag">AP CSP</span>
              <h4>Create Task & Data Apps</h4>
            </div>
            <p className="step-desc">
              Create Performance Task programs, including data-driven apps and simulations.
            </p>
            <Link to="/courses/apcsp" className="step-link">
              Explore AP CSP Course <ArrowRight size={14} />
            </Link>
          </div>

          <div className="pathway-step-card">
            <div className="step-number">03</div>
            <div className="step-header">
              <span className="step-course-tag">AP CSA</span>
              <h4>Object-Oriented Java</h4>
            </div>
            <p className="step-desc">
              Java programs built around classes and data structures, such as games and
              algorithm solvers.
            </p>
            <Link to="/courses/apcsa" className="step-link">
              Explore AP CSA Course <ArrowRight size={14} />
            </Link>
          </div>

          <div className="pathway-step-card">
            <div className="step-number">04</div>
            <div className="step-header">
              <span className="step-course-tag">PGAS</span>
              <h4>Programming, Games, Apps &amp; Society</h4>
            </div>
            <p className="step-desc">
              Senior capstone projects in game and app development.
            </p>
            <Link to="/courses/pgas" className="step-link">
              Explore PGAS <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      <section className="page-section gallery-grid-section">
        <div className="section-header-row">
          <div>
            <h2 className="section-heading">All Projects</h2>
            <p className="section-subtext">
              Search by title or technology, or filter by course.
            </p>
          </div>

          {/* Search bar */}
          <div className="gallery-search-wrap">
            <Search size={18} className="search-icon" />
            <input
              type="text"
              className="gallery-search-input"
              placeholder="Search projects or technologies (e.g. Java, Python)"
              value={searchTerm}
              onChange={function (e) { setSearchTerm(e.target.value); }}
            />
          </div>
        </div>

        {/* Filter buttons */}
        <div className="gallery-filters">
          {["ALL", "IST", "AP CSP", "AP CSA", "PGAS"].map(function (c) {
            return (
              <button
                key={c}
                type="button"
                className={"gallery-filter-btn" + (activeCourseFilter === c ? " active" : "")}
                onClick={function () { setActiveCourseFilter(c); }}
              >
                {c === "ALL" ? "All Projects" : c}
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <div className="project-cards-grid">
          {filteredGridProjects.map(function (proj) {
            return (
              <div key={proj.id} className="project-grid-card">
                <div
                  className="card-top-accent"
                  style={{ background: proj.gradient }}
                >
                  <span className="card-course-badge">{proj.course}</span>
                  <span className="card-grade-badge">{proj.gradeLevel}</span>
                </div>
                <div className="card-content">
                  <h3 className="card-title">{proj.title}</h3>
                  <p className="card-tagline">{proj.tagline}</p>
                  <p className="card-desc">{proj.description}</p>

                  <div className="card-tags">
                    {proj.tags.slice(0, 4).map(function (t) {
                      return <span key={t} className="card-tech-tag">{t}</span>;
                    })}
                  </div>

                  <div className="card-footer-info">
                    <span className="card-team">{proj.studentTeam}</span>
                    <span className="card-highlight">{proj.stats.highlight}</span>
                  </div>
                </div>
              </div>
            );
          })}

          {filteredGridProjects.length === 0 && (
            <div className="no-projects-found">
              <p>No projects match your search criteria. Try a different query or reset filters.</p>
              <button
                type="button"
                className="btn btn-secondary btn-sm"
                onClick={function () { setSearchTerm(""); setActiveCourseFilter("ALL"); }}
              >
                Reset Search
              </button>
            </div>
          )}
        </div>
      </section>

      <section className="showcase-callout-banner">
        <div className="showcase-callout-content">
          <h3>Want to build projects like these?</h3>
          <p>
            IST has no prerequisites. Look through the course sequence to plan your schedule.
          </p>
          <div className="callout-actions">
            <Link to="/courses" className="btn btn-primary">
              View Courses
            </Link>
            <Link to="/about" className="btn btn-secondary">
              About the Pathway
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
