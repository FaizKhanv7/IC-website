import { Link } from "react-router-dom";
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
        <p className="page-eyebrow">Forsyth Central Highschool &bull; Forsyth County, GA</p>
        <h1 className="page-title">About the Computer Science Pathway</h1>
        <p className="page-lead">
          A four-course sequence in the FCHS STEM Academy designed to take students from
          their first line of code to designing and building integrated robotic systems.
        </p>
      </div>

      <section className="page-section">
        <div className="about-grid">
          <div className="about-main-card">
            <h2 className="page-heading">What We Do</h2>
            <p className="page-text">
              The FCHS Computer Science Pathway is an integral part of the STEM Academy at
              <strong> Forsyth Central Highschool</strong> in <strong>Forsyth County</strong>.
              Students begin in 9th grade with Information Science &amp; Technology (IST),
              move through two College Board Advanced Placement courses (AP CSP and AP CSA),
              and finish with a hands-on Mechatronics capstone.
            </p>
            <p className="page-text">
              Each course builds progressively on the last. Rather than leaving high school
              with only textbook notes, our Bulldogs graduate with an authentic portfolio of
              published web apps, algorithmic Java software, and working robotic prototypes.
            </p>

            <div className="about-highlights-grid">
              <div className="about-highlight-box">
                <CheckCircle2 className="highlight-icon" size={20} />
                <div>
                  <strong>Zero Prerequisites Required</strong>
                  <p>Students start from scratch in 9th grade. All you need is curiosity.</p>
                </div>
              </div>
              <div className="about-highlight-box">
                <CheckCircle2 className="highlight-icon" size={20} />
                <div>
                  <strong>College Board AP Credit</strong>
                  <p>Opportunity to earn up to 8 college credit hours across AP CSP &amp; AP CSA.</p>
                </div>
              </div>
              <div className="about-highlight-box">
                <CheckCircle2 className="highlight-icon" size={20} />
                <div>
                  <strong>Hands-On Mechatronics Capstone</strong>
                  <p>Students combine mechanical design, electronics, and programming to build real systems.</p>
                </div>
              </div>
              <div className="about-highlight-box">
                <CheckCircle2 className="highlight-icon" size={20} />
                <div>
                  <strong>Real Community Impact</strong>
                  <p>Student projects serve local clubs, schools, and Forsyth County initiatives.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="about-sidebar-card">
            <h3 className="sidebar-card-title">School &amp; District Info</h3>

            <div className="info-item">
              <MapPin size={18} className="info-icon" />
              <div>
                <strong>Forsyth Central Highschool</strong>
                <p>131 Elm St, Cumming, GA 30040<br />Forsyth County Schools</p>
              </div>
            </div>

            <div className="info-item">
              <GraduationCap size={18} className="info-icon" />
              <div>
                <strong>STEM Academy &amp; CS Dept</strong>
                <p>Engineering &amp; Computer Science Wing</p>
              </div>
            </div>

            <div className="info-item">
              <Mail size={18} className="info-icon" />
              <div>
                <strong>Contact Email</strong>
                <p>stem@forsyth.k12.ga.us</p>
              </div>
            </div>

            <div className="info-item">
              <Clock size={18} className="info-icon" />
              <div>
                <strong>Pathway Duration</strong>
                <p>4 Semesters / 4 Sequential Credits</p>
              </div>
            </div>

            <Link to="/projects" className="btn btn-primary btn-block">
              <Sparkles size={16} /> View Student Projects
            </Link>
          </div>
        </div>
      </section>

      {/* Pathway Pillars */}
      <section className="page-section">
        <h2 className="page-heading">Pathway Curriculum Pillars</h2>
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
              Comprehensive Java programming, object-oriented design, recursion, sorting/searching,
              and standard data structures.
            </p>
            <Link to="/courses/apcsa" className="link-arrow">Course details &rarr;</Link>
          </div>

          <div className="about-pillar-box">
            <span className="pillar-step">Year 4</span>
            <h4>Mechatronics</h4>
            <p>
              Robotics, mechanical design, electronics, sensors, microcontrollers, and an
              integrated student-designed capstone.
            </p>
            <Link to="/courses/mechatronics" className="link-arrow">Course details &rarr;</Link>
          </div>
        </div>
      </section>

      {/* Get in touch section */}
      <section className="page-section contact-band">
        <h2 className="page-heading">Get in Touch</h2>
        <p className="page-text">
          Prospective students and Forsyth County families are welcome to reach out about
          pathway enrollment, course recommendations, or scheduling a visit to our STEM labs.
          Contact the Forsyth Central Highschool STEM Academy office or talk to your middle school
          guidance counselor during registration.
        </p>
        <div className="contact-action-row">
          <Link to="/courses" className="btn btn-primary">
            Explore All Courses
          </Link>
          <Link to="/login" className="btn btn-secondary">
            Student Portal
          </Link>
        </div>
      </section>
    </main>
  );
}

export default About;
