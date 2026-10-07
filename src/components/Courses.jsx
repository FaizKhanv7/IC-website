import csimg from "../assets/cs.jpg";
import { ArrowRight, Code2, Cpu, Cloud, Terminal } from "lucide-react";
import { Link } from "react-router-dom";

const courseList = [
  {
    code: "IST",
    badge: "Introductory",
    title: "Information Science & Technology",
    desc: "The entry point to the pathway — no coding experience required. Master digital literacy, hardware, and web development fundamentals.",
    image: csimg,
    href: "/courses/ist",
    icon: Terminal,
    topics: ["HTML5 & CSS3", "Intro JavaScript", "Hardware & Networks"]
  },
  {
    code: "AP CSP",
    badge: "AP College Board",
    title: "AP Computer Science Principles",
    desc: "Explore foundational concepts of computing, big data analysis, internet architecture, and build the College Board Create Task project.",
    image: csimg,
    href: "/courses/apcsp",
    icon: Code2,
    topics: ["Algorithms & Abstraction", "Data Viz", "Create Task Project"]
  },
  {
    code: "AP CSA",
    badge: "AP College Board",
    title: "AP Computer Science A",
    desc: "Rigorous Java software engineering, object-oriented design, recursion, and core data structures. College-level computer science.",
    image: csimg,
    href: "/courses/apcsa",
    icon: Cpu,
    topics: ["Java OOP", "Data Structures", "Algorithms & Search"]
  },
  {
    code: "CLOUD",
    badge: "Senior Capstone",
    title: "Cloud Computing",
    desc: "Move from writing code to shipping it. Provision real cloud infrastructure on AWS, containerize apps with Docker, and configure CI/CD.",
    image: csimg,
    href: "/courses/cloud-computing",
    icon: Cloud,
    topics: ["AWS Architecture", "Docker Containers", "CI/CD Pipelines"]
  }
];

function CourseCard({ course }) {
  const IconComp = course.icon;
  return (
    <Link className="modern-course-card" to={course.href}>
      <div className="modern-card-banner">
        <img src={course.image} alt={course.title} className="modern-card-bg-img" />
        <div className="card-badge-row">
          <span className="course-code-pill">{course.code}</span>
          <span className="course-level-pill">{course.badge}</span>
        </div>
      </div>

      <div className="modern-card-content">
        <div className="card-icon-title-row">
          <div className="card-micro-icon">
            <IconComp size={20} />
          </div>
          <h3 className="modern-course-title">{course.title}</h3>
        </div>

        <p className="modern-course-desc">{course.desc}</p>

        <div className="course-topics-pills">
          {course.topics.map(function (top) {
            return (
              <span key={top} className="topic-pill">
                {top}
              </span>
            );
          })}
        </div>

        <div className="modern-card-footer">
          <span className="learn-more-link">
            Explore Syllabus <ArrowRight size={14} className="arrow-icon" />
          </span>
        </div>
      </div>
    </Link>
  );
}

export default function Courses() {
  return (
    <section className="courses-section" id="courses">
      <div className="container">
        <div className="section-header-centered">
          <span className="page-eyebrow">Sequential Curriculum</span>
          <h2 className="section-title">The Four-Course Pathway</h2>
          <p className="section-subtitle">
            Designed to take high schoolers at Forsyth Central from complete beginners to
            industry-certified software builders.
          </p>
        </div>

        <div className="modern-course-grid">
          {courseList.map(function (c) {
            return <CourseCard key={c.code} course={c} />;
          })}
        </div>
      </div>
    </section>
  );
}
