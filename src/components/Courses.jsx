import apcsaImage from "../assets/APCSA.png";
import apcspImage from "../assets/APCSP.png";
import istImage from "../assets/IST.png";
import pgasImage from "../assets/PGAS.png";
import { ArrowRight, Code2, Cpu, Gamepad2, Terminal } from "lucide-react";
import { Link } from "react-router-dom";

const courseList = [
  {
    code: "IST",
    badge: "Year 1 · Introductory",
    title: "Information Science & Technology",
    desc: "The entry point — no coding experience required. Master digital literacy, hardware, and web fundamentals.",
    image: istImage,
    href: "/courses/ist",
    icon: Terminal,
    accent: "#2563eb",
  },
  {
    code: "AP CSP",
    badge: "Year 2 · AP College Board",
    title: "AP Computer Science Principles",
    desc: "Explore algorithms, big data, internet architecture, and build the College Board Create Task project.",
    image: apcspImage,
    href: "/courses/apcsp",
    icon: Code2,
    accent: "#059669",
  },
  {
    code: "AP CSA",
    badge: "Year 3 · AP College Board",
    title: "AP Computer Science A",
    desc: "Rigorous Java engineering, object-oriented design, recursion, and core data structures.",
    image: apcsaImage,
    href: "/courses/apcsa",
    icon: Cpu,
    accent: "#7c3aed",
  },
  {
    code: "PGAS",
    badge: "Year 4 · Senior Capstone",
    title: "Programming, Games, Apps & Society",
    desc: "Build software, games, and apps while exploring technology's real-world impact on society.",
    image: pgasImage,
    href: "/courses/pgas",
    icon: Gamepad2,
    accent: "#c5162f",
  },
];

function CourseCard({ course }) {
  const Icon = course.icon;
  return (
    <Link to={course.href} className="cc-card" style={{ "--accent": course.accent }}>
      {/* Full-bleed background image */}
      <img src={course.image} alt={course.title} className="cc-bg-img" />

      {/* Dark gradient overlay */}
      <div className="cc-overlay" />

      {/* Content */}
      <div className="cc-body">
        {/* Top — icon chip + code badge, always visible */}
        <div className="cc-top">
          <div className="cc-icon-chip">
            <Icon size={18} />
          </div>
          <span className="cc-code-badge">{course.code}</span>
        </div>

        {/* Middle — title + badge, slides up on hover */}
        <div className="cc-middle">
          <p className="cc-badge">{course.badge}</p>
          <h3 className="cc-title">{course.title}</h3>
          <p className="cc-desc">{course.desc}</p>
        </div>

        {/* Bottom — revealed on hover */}
        <div className="cc-bottom">
          <span className="cc-cta">
            Explore Course <ArrowRight size={14} />
          </span>
        </div>
      </div>
    </Link>
  );
}

export default function Courses() {
  return (
    <section className="cc-section" id="courses">
      <div className="cc-header">
        <p className="page-eyebrow">Sequential Curriculum</p>
        <h2 className="cc-heading">The Four-Course Pathway</h2>
        <p className="cc-subheading">
          From first line of code to senior capstone — four courses built to take
          Forsyth Central students into any technical field.
        </p>
      </div>
      <div className="cc-grid">
        {courseList.map(function (c) {
          return <CourseCard key={c.code} course={c} />;
        })}
      </div>
    </section>
  );
}
