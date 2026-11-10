import apcsaImage from "../assets/APCSA.webp";
import apcspImage from "../assets/APCSP.webp";
import istImage from "../assets/IST.webp";
import pgasImage from "../assets/PGAS.webp";
import { ArrowRight, Code2, Cpu, Gamepad2, Terminal } from "lucide-react";
import { Link } from "react-router-dom";

const courseList = [
  {
    code: "IST",
    badge: "Year 1 · Introductory",
    title: "Information Science & Technology",
    desc: "No coding experience required. Digital literacy, hardware, and web basics.",
    image: istImage,
    href: "/courses/ist",
    icon: Terminal,
    accent: "#2563eb",
  },
  {
    code: "AP CSP",
    badge: "Year 2 · AP College Board",
    title: "AP Computer Science Principles",
    desc: "Algorithms, data, how the internet works, and the Create Performance Task.",
    image: apcspImage,
    href: "/courses/apcsp",
    icon: Code2,
    accent: "#059669",
  },
  {
    code: "AP CSA",
    badge: "Year 3 · AP College Board",
    title: "AP Computer Science A",
    desc: "Java, object-oriented design, recursion, and core data structures.",
    image: apcsaImage,
    href: "/courses/apcsa",
    icon: Cpu,
    accent: "#7c3aed",
  },
  {
    code: "PGAS",
    badge: "Year 4 · Senior Capstone",
    title: "Programming, Games, Apps & Society",
    desc: "Build games and apps, and study how technology affects society.",
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
      <img src={course.image} alt={course.title} className="cc-bg-img" width="800" height="1200" loading="lazy" decoding="async" />

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
        <p className="page-eyebrow">The Pathway</p>
        <h2 className="cc-heading">Four Courses, One Sequence</h2>
        <p className="cc-subheading">
          Taken in order, from a first line of code to a senior capstone.
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
