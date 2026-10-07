import { Link } from "react-router-dom";
import Logo from "/favicon.ico";

const socials = [
  { label: "Forsyth Central High", href: "https://www.forsyth.k12.ga.us/fchs" },
  { label: "Forsyth County Schools", href: "https://www.forsyth.k12.ga.us/" },
  { label: "STEM Academy", href: "https://www.forsyth.k12.ga.us/fchs" },
  { label: "GitHub Education", href: "https://github.com/" }
];

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-brand-section">
          <Link to="/" className="footer-brand">
            <img src={Logo} alt="Forsyth Central Logo" className="footer-logo" />
            <div>
              <span className="footer-brand-name">FORSYTH CENTRAL HIGH SCHOOL</span>
              <span className="footer-brand-sub">Computer Science &bull; Forsyth County, GA</span>
            </div>
          </Link>
          <p className="footer-mission">
            Empowering students with industry-standard computing fundamentals, College Board AP
            excellence, and creative software, game, and application development.
          </p>
        </div>

        <div className="footer-links-group">
          <div className="footer-col">
            <h4 className="footer-col-title">Pathway Courses</h4>
            <Link to="/courses/ist">IST (Introductory)</Link>
            <Link to="/courses/apcsp">AP Computer Science Principles</Link>
            <Link to="/courses/apcsa">AP Computer Science A</Link>
            <Link to="/courses/pgas">Programming, Games, Apps, and Society</Link>
          </div>

          <div className="footer-col">
            <h4 className="footer-col-title">Showcase &amp; District</h4>
            <Link to="/projects">Student Projects Carousel</Link>
            <Link to="/about">About STEM Academy</Link>
            <Link to="/login">Student Portal</Link>
            <a href="https://www.forsyth.k12.ga.us/" target="_blank" rel="noreferrer">
              Forsyth County Schools
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom-bar">
        <p className="footer-copyright">
          &copy; {new Date().getFullYear()} Forsyth Central Highschool Computer Science Pathway.
          Part of Forsyth County Schools, Georgia. All rights reserved.
        </p>
        <div className="footer-social-row">
          {socials.map(function (s) {
            return (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                className="footer-social-link"
              >
                {s.label}
              </a>
            );
          })}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
