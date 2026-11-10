import { Link } from "react-router-dom";
import ContactCard from "../components/ContactCard";
import {
  GraduationCap,
  Sparkles,
  CheckCircle2,
  Mail,
  MapPin,
  Clock
} from "lucide-react";

function About() {
  return (
    <main className="page page-medium">
      <div className="page-header-center">
        <p className="page-eyebrow">Forsyth Central High School &bull; Forsyth County, GA</p>
        <h1 className="page-title">About the Computer Science Pathway</h1>
        <p className="page-lead">
          A four-course sequence in the FCHS STEM Academy. Students go from their first line
          of code to a senior capstone building games and apps.
        </p>
      </div>

      <section className="page-section">
        <div className="about-grid">
          <div className="about-main-card">
            <h2 className="page-heading">What We Do</h2>
            <p className="page-text">
              The Computer Science Pathway is part of the STEM Academy at
              <strong> Forsyth Central High School</strong> in <strong>Forsyth County</strong>.
              Students begin in 9th grade with Information Science &amp; Technology (IST),
              take two College Board Advanced Placement courses (AP CSP and AP CSA),
              and finish with a capstone in Programming, Games, Apps, and Society (PGAS).
            </p>
            <p className="page-text">
              Each course builds on the one before it. By the end, students have a set of
              their own projects: web pages, Java programs, and a capstone.
            </p>

            <div className="about-highlights-grid">
              <div className="about-highlight-box">
                <CheckCircle2 className="highlight-icon" size={20} />
                <div>
                  <strong>No Prerequisites</strong>
                  <p>IST assumes no programming experience.</p>
                </div>
              </div>
              <div className="about-highlight-box">
                <CheckCircle2 className="highlight-icon" size={20} />
                <div>
                  <strong>Two AP Courses</strong>
                  <p>
                    AP CSP and AP CSA prepare students for the College Board exams. College
                    credit depends on the exam score and the college's policy.
                  </p>
                </div>
              </div>
              <div className="about-highlight-box">
                <CheckCircle2 className="highlight-icon" size={20} />
                <div>
                  <strong>Senior Capstone</strong>
                  <p>In PGAS, students build games and apps and study how technology affects society.</p>
                </div>
              </div>
              <div className="about-highlight-box">
                <CheckCircle2 className="highlight-icon" size={20} />
                <div>
                  <strong>Student Projects</strong>
                  <p>Browse work from students in each of the four courses.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="about-sidebar-card">
            <h3 className="sidebar-card-title">School &amp; District Info</h3>

            <div className="info-item">
              <MapPin size={18} className="info-icon" />
              <div>
                <strong>Forsyth Central High School</strong>
                <p>131 Almon C. Hill Drive, Cumming, GA 30040<br />Forsyth County Schools</p>
              </div>
            </div>

            <div className="info-item">
              <GraduationCap size={18} className="info-icon" />
              <div>
                <strong>STEM Academy &amp; CS Dept</strong>
              </div>
            </div>

            <div className="info-item">
              <Mail size={18} className="info-icon" />
              <div>
                <strong>Contact Email</strong>
                <p><a href="mailto:dajohn@forsyth.k12.ga.us">dajohn@forsyth.k12.ga.us</a></p>
              </div>
            </div>

            <div className="info-item">
              <Clock size={18} className="info-icon" />
              <div>
                <strong>Pathway Length</strong>
                <p>Four courses, one per year</p>
              </div>
            </div>

            <Link to="/projects" className="btn btn-primary btn-block">
              <Sparkles size={16} /> View Student Projects
            </Link>
          </div>
        </div>
      </section>

      <section className="page-section">
        <h2 className="page-heading">The Four Courses</h2>
        <div className="about-pillars-grid">
          <div className="about-pillar-box">
            <span className="pillar-step">Year 1</span>
            <h4>IST: Information Science &amp; Technology</h4>
            <p>
              Hardware fundamentals, networking basics, HTML5/CSS3, introductory JavaScript,
              and digital citizenship.
            </p>
            <Link to="/courses/ist" className="link-arrow">Course details &rarr;</Link>
          </div>

          <div className="about-pillar-box">
            <span className="pillar-step">Year 2</span>
            <h4>AP Computer Science Principles</h4>
            <p>
              Algorithmic logic, data representation, internet protocols, societal impacts,
              and the College Board Create Performance Task.
            </p>
            <Link to="/courses/apcsp" className="link-arrow">Course details &rarr;</Link>
          </div>

          <div className="about-pillar-box">
            <span className="pillar-step">Year 3</span>
            <h4>AP Computer Science A</h4>
            <p>
              Java programming, object-oriented design, recursion, searching and sorting,
              and core data structures.
            </p>
            <Link to="/courses/apcsa" className="link-arrow">Course details &rarr;</Link>
          </div>

          <div className="about-pillar-box">
            <span className="pillar-step">Year 4</span>
            <h4>Programming, Games, Apps, and Society</h4>
            <p>
              Game development, mobile and web apps, technology and society, and a
              capstone project.
            </p>
            <Link to="/courses/pgas" className="link-arrow">Course details &rarr;</Link>
          </div>
        </div>
      </section>

      <ContactCard />
    </main>
  );
}

export default About;
