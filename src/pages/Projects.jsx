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
        <p className="page-eyebrow">Forsyth Central Highschool &bull; Forsyth County</p>
        <h1 className="page-title">Student Project Showcase</h1>
        <p className="page-lead">
          From first HTML/CSS interactive layouts to algorithmic Java engines and
          autonomous robots. Browse student-engineered work from across
          Forsyth Central Highschool's Computer Science pathway.
        </p>
      </div>

      {/* Pathway Highlights Ribbon */}
      <div className="project-stats-ribbon">
        <div className="stat-pill">
          <span className="stat-number">8+</span>
          <span className="stat-desc">Featured Capstones</span>
        </div>
        <div className="stat-pill">
          <span className="stat-number">4</span>
          <span className="stat-desc">Course Pathways</span>
        </div>
        <div className="stat-pill">
          <span className="stat-number">100%</span>
          <span className="stat-desc">Student Authored</span>
        </div>
        <div className="stat-pill">
          <span className="stat-number">Industry</span>
          <span className="stat-desc">Standard Tech Stacks</span>
        </div>
      </div>

      {/* Interactive Project Carousel */}
      <section className="page-section carousel-section">
        <div className="section-header-row">
          <div>
            <span className="section-tag">Interactive Carousel</span>
            <h2 className="section-heading">Featured Project Carousel</h2>
            <p className="section-subtext">
              Use the arrows, indicators, or course filters to explore highlighted capstone
              projects from Forsyth Central students.
            </p>
          </div>
        </div>

        <ProjectCarousel />
      </section>

      {/* Pathway Progression Matrix */}
      <section className="page-section pathway-milestones-section">
        <div className="section-header-row">
          <div>
            <span className="section-tag">Curriculum Matrix</span>
            <h2 className="section-heading">How Projects Evolve by Course</h2>
            <p className="section-subtext">
              Every course in the Forsyth Central sequence culminates in substantial,
              independent student work.
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
              Foundational web applications, personal portfolios, responsive layouts, and
              interactive scripts utilizing HTML, CSS, and introductory JavaScript.
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
              College Board Create Task projects, societal impact studies, data visualizations,
              and interactive simulations solving real community challenges.
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
              Rigorous object-oriented software, 2D game engines, algorithmic solvers, and
              data structure implementations built natively in Java.
            </p>
            <Link to="/courses/apcsa" className="step-link">
              Explore AP CSA Course <ArrowRight size={14} />
            </Link>
          </div>

          <div className="pathway-step-card">
            <div className="step-number">04</div>
            <div className="step-header">
              <span className="step-course-tag">Mechatronics</span>
              <h4>Robotics &amp; Mechatronics</h4>
            </div>
            <p className="step-desc">
              Senior projects combine mechanical design, electronics, sensors, and
              embedded software to create working robotic systems.
            </p>
            <Link to="/courses/mechatronics" className="step-link">
              Explore Mechatronics <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* Comprehensive Project Gallery Grid with Search */}
      <section className="page-section gallery-grid-section">
        <div className="section-header-row">
          <div>
            <span className="section-tag">Project Catalog</span>
            <h2 className="section-heading">Browse All Pathway Projects</h2>
            <p className="section-subtext">
              Search by technology, student project title, or filter by course.
            </p>
          </div>

          {/* Search bar */}
          <div className="gallery-search-wrap">
            <Search size={18} className="search-icon" />
            <input
              type="text"
              className="gallery-search-input"
              placeholder="Search projects, technologies (e.g. Java, Arduino, Python)..."
              value={searchTerm}
              onChange={function (e) { setSearchTerm(e.target.value); }}
            />
          </div>
        </div>

        {/* Filter buttons */}
        <div className="gallery-filters">
          {["ALL", "IST", "AP CSP", "AP CSA", "Mechatronics"].map(function (c) {
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

      {/* Call to action */}
      <section className="showcase-callout-banner">
        <div className="showcase-callout-content">
          <h3>Are you a Forsyth Central student interested in building projects like these?</h3>
          <p>
            The Computer Science pathway at Forsyth Central Highschool welcomes all incoming
            students with zero prerequisites. Enroll for the upcoming semester and start your
            portfolio.
          </p>
          <div className="callout-actions">
            <Link to="/courses" className="btn btn-primary">
              View Course Sequence
            </Link>
            <Link to="/about" className="btn btn-secondary">
              Contact CS Department
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
