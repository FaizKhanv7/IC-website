import { useState, useEffect, useRef } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Play,
  Pause,
  Award,
  Sparkles,
  Code2,
  Layers,
  Compass,
  BarChart3,
  Gamepad2,
  Bot,
  Cpu,
  HeartHandshake,
  Music,
  ShieldCheck,
  X
} from "lucide-react";
import { projects } from "../data/projects";

const iconMap = {
  Compass: Compass,
  BarChart3: BarChart3,
  Gamepad2: Gamepad2,
  Bot: Bot,
  Cpu: Cpu,
  HeartHandshake: HeartHandshake,
  Music: Music,
  ShieldCheck: ShieldCheck
};

const filterTabs = [
  { label: "All Projects", value: "ALL" },
  { label: "IST", value: "IST" },
  { label: "AP CSP", value: "AP CSP" },
  { label: "AP CSA", value: "AP CSA" },
  { label: "PGAS", value: "PGAS" }
];

export default function ProjectCarousel() {
  const [selectedCourse, setSelectedCourse] = useState("ALL");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [modalProject, setModalProject] = useState(null);
  const touchStartX = useRef(null);

  // Filtered list of projects
  const filteredProjects = selectedCourse === "ALL"
    ? projects
    : projects.filter(function (p) {
        return p.course.toLowerCase() === selectedCourse.toLowerCase();
      });

  const handleSelectCourse = function (courseVal) {
    setSelectedCourse(courseVal);
    setCurrentIndex(0);
  };

  // Autoplay timer
  useEffect(function () {
    if (isPaused || filteredProjects.length <= 1) return;

    const timer = setInterval(function () {
      setCurrentIndex(function (prev) {
        return (prev + 1) % filteredProjects.length;
      });
    }, 5500);

    return function () {
      clearInterval(timer);
    };
  }, [isPaused, filteredProjects.length]);

  const handlePrev = function () {
    setCurrentIndex(function (prev) {
      return prev === 0 ? filteredProjects.length - 1 : prev - 1;
    });
  };

  const handleNext = function () {
    setCurrentIndex(function (prev) {
      return (prev + 1) % filteredProjects.length;
    });
  };

  // Keyboard navigation
  const handleKeyDown = function (e) {
    if (e.key === "ArrowLeft") handlePrev();
    if (e.key === "ArrowRight") handleNext();
  };

  // Touch handlers for mobile swipe
  const handleTouchStart = function (e) {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = function (e) {
    if (touchStartX.current === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX;
    if (diff > 50) handleNext();
    if (diff < -50) handlePrev();
    touchStartX.current = null;
  };

  const currentProject = filteredProjects[currentIndex] || filteredProjects[0];
  const IconComponent = currentProject ? (iconMap[currentProject.iconName] || Code2) : Code2;

  return (
    <div
      className="project-carousel-wrapper"
      onMouseEnter={function () { setIsPaused(true); }}
      onMouseLeave={function () { setIsPaused(false); }}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      aria-roledescription="carousel"
      aria-label="Forsyth Central Highschool Student Projects Carousel"
    >
      {/* Category filter tabs */}
      <div className="carousel-filter-bar">
        {filterTabs.map(function (tab) {
          const count = tab.value === "ALL"
            ? projects.length
            : projects.filter(function (p) { return p.course.toLowerCase() === tab.value.toLowerCase(); }).length;
          const isActive = selectedCourse === tab.value;
          return (
            <button
              key={tab.value}
              className={"filter-pill" + (isActive ? " filter-pill-active" : "")}
              onClick={function () { handleSelectCourse(tab.value); }}
              type="button"
            >
              {tab.label} <span className="pill-count">({count})</span>
            </button>
          );
        })}
      </div>

      {/* Main Carousel Card Container */}
      <div
        className="project-carousel-stage"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {currentProject && (
          <div className="project-slide-card" key={currentProject.id}>
            {/* Visual Header / Banner */}
            <div
              className="project-slide-banner"
              style={{ background: currentProject.gradient }}
            >
              <div className="project-banner-decor">
                <IconComponent className="banner-icon-watermark" size={160} />
              </div>

              <div className="project-banner-content">
                <div className="project-badge-row">
                  <span className="badge-course">{currentProject.courseFull}</span>
                  <span className="badge-grade">{currentProject.gradeLevel}</span>
                  <span className="badge-year">{currentProject.year}</span>
                </div>

                <div className="project-banner-title-wrap">
                  <div className="banner-icon-chip">
                    <IconComponent size={28} />
                  </div>
                  <div>
                    <h3 className="project-banner-title">{currentProject.title}</h3>
                    <p className="project-banner-tagline">{currentProject.tagline}</p>
                  </div>
                </div>

                {/* Highlight metric stat */}
                <div className="project-metric-pill">
                  <Award size={16} className="metric-icon" />
                  <span className="metric-text">{currentProject.stats.highlight}</span>
                </div>
              </div>
            </div>

            {/* Slide Body */}
            <div className="project-slide-body">
              <div className="project-slide-info">
                <h4 className="project-body-heading">Project Overview</h4>
                <p className="project-body-desc">{currentProject.description}</p>

                <h4 className="project-body-heading">Key Innovations & Features</h4>
                <ul className="project-feature-list">
                  {currentProject.features.map(function (feat, idx) {
                    return (
                      <li key={idx} className="project-feature-item">
                        <Sparkles size={14} className="feature-bullet" />
                        <span>{feat}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>

              <div className="project-slide-sidebar">
                <div className="sidebar-box">
                  <span className="sidebar-label">Student Creators</span>
                  <span className="sidebar-value">{currentProject.studentTeam}</span>
                </div>

                <div className="sidebar-box">
                  <span className="sidebar-label">Primary Metric</span>
                  <span className="sidebar-value stat-highlight">{currentProject.stats.metric}</span>
                </div>

                <div className="sidebar-box">
                  <span className="sidebar-label">Technologies Used</span>
                  <div className="tech-tag-cloud">
                    {currentProject.tags.map(function (tag) {
                      return (
                        <span key={tag} className="tech-tag">
                          {tag}
                        </span>
                      );
                    })}
                  </div>
                </div>

                <button
                  type="button"
                  className="btn btn-primary btn-block project-detail-btn"
                  onClick={function () { setModalProject(currentProject); }}
                >
                  <Layers size={16} /> View Full Project Dossier
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Carousel Prev / Next Arrow Controls */}
        <button
          className="carousel-nav-btn btn-prev"
          onClick={handlePrev}
          aria-label="Previous Project"
          type="button"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          className="carousel-nav-btn btn-next"
          onClick={handleNext}
          aria-label="Next Project"
          type="button"
        >
          <ChevronRight size={24} />
        </button>
      </div>

      {/* Carousel Footer Toolbar */}
      <div className="carousel-controls-toolbar">
        <div className="carousel-pagination-info">
          <span className="slide-counter">
            Project <strong>{currentIndex + 1}</strong> of <strong>{filteredProjects.length}</strong>
          </span>
          <button
            type="button"
            className="carousel-pause-toggle"
            onClick={function () { setIsPaused(!isPaused); }}
            title={isPaused ? "Play Autoplay" : "Pause Autoplay"}
            aria-label={isPaused ? "Resume autoplay" : "Pause autoplay"}
          >
            {isPaused ? <Play size={14} /> : <Pause size={14} />}
            <span>{isPaused ? "Paused" : "Auto-playing"}</span>
          </button>
        </div>

        {/* Navigation Dots */}
        <div className="carousel-dot-strip">
          {filteredProjects.map(function (proj, idx) {
            const isActive = currentIndex === idx;
            return (
              <button
                key={proj.id}
                type="button"
                className={"carousel-nav-dot" + (isActive ? " carousel-nav-dot-active" : "")}
                onClick={function () { setCurrentIndex(idx); }}
                aria-label={"Jump to project " + (idx + 1) + ": " + proj.title}
                title={proj.title}
              />
            );
          })}
        </div>
      </div>

      {/* Project Details Modal */}
      {modalProject && (
        <div className="project-modal-backdrop" onClick={function () { setModalProject(null); }}>
          <div
            className="project-modal-dialog"
            onClick={function (e) { e.stopPropagation(); }}
            role="dialog"
            aria-modal="true"
          >
            <div
              className="modal-header-banner"
              style={{ background: modalProject.gradient }}
            >
              <div>
                <span className="modal-course-badge">{modalProject.courseFull} ({modalProject.gradeLevel})</span>
                <h2 className="modal-title">{modalProject.title}</h2>
                <p className="modal-sub">{modalProject.tagline}</p>
              </div>
              <button
                type="button"
                className="modal-close-btn"
                onClick={function () { setModalProject(null); }}
                aria-label="Close details"
              >
                <X size={20} />
              </button>
            </div>

            <div className="modal-body">
              <div className="modal-section">
                <h3>About This Project</h3>
                <p>{modalProject.description}</p>
              </div>

              <div className="modal-section">
                <h3>Architecture & Core Capabilities</h3>
                <ul className="modal-feature-list">
                  {modalProject.features.map(function (f, i) {
                    return <li key={i}>{f}</li>;
                  })}
                </ul>
              </div>

              <div className="modal-grid-stats">
                <div className="modal-stat-box">
                  <span className="modal-stat-label">Development Team</span>
                  <span className="modal-stat-val">{modalProject.studentTeam}</span>
                </div>
                <div className="modal-stat-box">
                  <span className="modal-stat-label">Academic Year</span>
                  <span className="modal-stat-val">{modalProject.year}</span>
                </div>
                <div className="modal-stat-box">
                  <span className="modal-stat-label">Showcase Achievement</span>
                  <span className="modal-stat-val">{modalProject.stats.highlight}</span>
                </div>
              </div>

              <div className="modal-section">
                <h3>Technologies & Tools</h3>
                <div className="tech-tag-cloud">
                  {modalProject.tags.map(function (t) {
                    return <span key={t} className="tech-tag">{t}</span>;
                  })}
                </div>
              </div>

              <div className="modal-footer-cta">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={function () { setModalProject(null); }}
                >
                  Close Dossier
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
