import { Link } from "react-router-dom";
import Carousel from "../components/Carousel";
import Courses from "../components/Courses";
import EnrollCTA from "../components/EnrollCTA";
import {
  Code2,
  Gamepad2,
  Sparkles,
  ArrowRight,
  GraduationCap
} from "lucide-react";

function Home() {
  return (
    <>
      <Carousel />

      {/* Intro section */}
      <section className="intro">
        <div className="intro-container">
          <div className="intro-tag-wrapper">
            <span className="badge-county">Forsyth County Schools</span>
            <span className="badge-stem">STEM Academy Pathway</span>
          </div>

          <h1 className="landing-text">
            Computer Science at Forsyth Central Highschool
          </h1>
          <p className="landing-sub">
            Located in Forsyth County, Georgia, the FCHS Computer Science &amp; STEM
            Academy runs a rigorous four-course career pathway. We take students from
            their very first line of code through College Board AP coursework and into
            a senior capstone in mechatronics and robotics. No prior experience required — just curiosity
            and drive.
          </p>

          {/* Quick Metrics */}
          <div className="pathway-stats-strip">
            <div className="pathway-stat-item">
              <span className="stat-big">4</span>
              <span className="stat-sub">Sequential Courses</span>
            </div>
            <div className="pathway-stat-item">
              <span className="stat-big">2</span>
              <span className="stat-sub">College Board AP Courses</span>
            </div>
            <div className="pathway-stat-item">
              <span className="stat-big">100%</span>
              <span className="stat-sub">Hands-On Project Based</span>
            </div>
            <div className="pathway-stat-item">
              <span className="stat-big">Robotics</span>
              <span className="stat-sub">Senior Capstone</span>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <Courses />

      {/* Featured Projects Highlight Banner */}
      <section className="featured-projects-banner">
        <div className="featured-projects-container">
          <div className="featured-projects-copy">
            <span className="page-eyebrow">Student Innovation</span>
            <h2 className="banner-heading">Explore Real Student Projects</h2>
            <p className="banner-subtext">
              Every course ends with an authentic, student-built application. From
              interactive campus guides and environmental data trackers to autonomous
              robots and sensor-driven systems — check out our interactive showcase.
            </p>
            <div className="banner-actions">
              <Link to="/projects" className="btn btn-primary">
                <Sparkles size={16} /> View Projects Carousel <ArrowRight size={16} />
              </Link>
            </div>
          </div>

          <div className="featured-projects-preview-grid">
            <div className="preview-mini-card">
              <div className="preview-badge ap-csa">AP CSA</div>
              <h4>CyberQuest 2D Dungeon</h4>
              <p>Object-oriented Java game with A* pathfinding and recursive maps.</p>
            </div>
            <div className="preview-mini-card">
              <div className="preview-badge mechatronics">Mechatronics</div>
              <h4>Bulldog Autonomous Rover</h4>
              <p>Sensor-guided robot for obstacle detection and autonomous navigation.</p>
            </div>
            <div className="preview-mini-card">
              <div className="preview-badge ap-csp">AP CSP</div>
              <h4>EcoTrack Watershed</h4>
              <p>Forsyth County water sensor metrics and data visualization.</p>
            </div>
            <div className="preview-mini-card">
              <div className="preview-badge ist">IST</div>
              <h4>Central Campus Guide</h4>
              <p>Interactive floorplan and club directory for incoming freshmen.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose FCHS CS Section */}
      <section className="pathway-pillars-section">
        <div className="pillars-container">
          <div className="pillars-header">
            <span className="page-eyebrow">The Bulldog Advantage</span>
            <h2 className="section-title-center">Why Study Computer Science at Forsyth Central?</h2>
            <p className="section-desc-center">
              Our pathway bridges high school coursework with high-demand collegiate and
              industry engineering expectations.
            </p>
          </div>

          <div className="pillars-grid">
            <div className="pillar-card">
              <div className="pillar-icon-wrap">
                <Code2 size={24} />
              </div>
              <h3 className="pillar-title">Practical Portfolio</h3>
              <p className="pillar-text">
                Students graduate with a GitHub portfolio of deployed applications, not just
                multiple-choice test scores.
              </p>
            </div>

            <div className="pillar-card">
              <div className="pillar-icon-wrap">
                <GraduationCap size={24} />
              </div>
              <h3 className="pillar-title">Dual AP Acceleration</h3>
              <p className="pillar-text">
                Earn university credits with AP Computer Science Principles and AP
                Computer Science A before graduating high school.
              </p>
            </div>

            <div className="pillar-card">
              <div className="pillar-icon-wrap">
                <Gamepad2 size={24} />
              </div>
              <h3 className="pillar-title">Mechatronics Capstone</h3>
              <p className="pillar-text">
                Students combine mechanical design, electronics, and embedded programming
                to build robots and intelligent systems.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Band */}
      <EnrollCTA />
    </>
  );
}

export default Home;
