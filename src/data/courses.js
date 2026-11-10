/*
 * Course catalog for the CS pathway.
 *
 * The `stats` values are "—" until the department supplies real figures.
 * CoursePage hides any stat that is still "—".
 *
 * IST and PGAS are not AP courses, so they report a course-level
 * stat instead of an AP score.
 */

export const courses = [
  {
    slug: "ist",
    path: "/courses/ist",
    code: "IST",
    title: "Information Science & Technology",
    tagline: "The first course in the pathway. No experience required.",
    isAP: false,
    syllabus: null,
    description:
      "IST is the first course in the pathway and assumes no prior programming experience. Students learn how computers represent and move information, then put that theory to work building their first webpages, spreadsheets, and small programs. The course focuses on digital literacy, problem decomposition, and the habits — version control, documentation, testing — that the later courses depend on.",
    topics: [
      "Computer hardware and networking basics",
      "HTML, CSS, and introductory JavaScript",
      "Data organization and spreadsheets",
      "Digital citizenship and cybersecurity fundamentals",
    ],
    stats: {
      primaryLabel: "Course Average",
      primaryValue: "—",
      projects: "—",
      enrolled: "—",
    },
  },
  {
    slug: "apcsp",
    path: "/courses/apcsp",
    code: "AP CSP",
    title: "AP Computer Science Principles",
    tagline: "Broad foundations in computing, plus a College Board exam.",
    isAP: true,
    syllabus: "/syllabi/FCS%2026-27%20APCSP%20Syllabus.pdf",
    description:
      "AP CSP is a survey of computing as a discipline. Rather than focusing on a single language, students study how algorithms, data, and the internet actually work, and examine the social impact of the systems they build. Coursework centers on the Create Performance Task — an independent program students design, build, and document for College Board submission.",
    topics: [
      "Algorithms and abstraction",
      "Data representation and analysis",
      "How the internet works",
      "The Create Performance Task",
    ],
    stats: {
      primaryLabel: "Average AP Score",
      primaryValue: "—",
      projects: "—",
      enrolled: "—",
    },
  },
  {
    slug: "apcsa",
    path: "/courses/apcsa",
    code: "AP CSA",
    title: "AP Computer Science A",
    tagline: "Java, object-oriented design, and data structures.",
    isAP: true,
    syllabus: "/syllabi/FCS%2026-27%20APCSA%20Syllabus.pdf",
    description:
      "AP CSA is the pathway's Java programming course, built around the College Board's AP Computer Science A curriculum. Students design classes, work with inheritance and polymorphism, and implement the data structures and algorithms the AP exam covers.",
    topics: [
      "Java syntax and object-oriented design",
      "Arrays, ArrayLists, and 2D arrays",
      "Recursion, searching, and sorting",
      "Inheritance and polymorphism",
    ],
    stats: {
      primaryLabel: "Average AP Score",
      primaryValue: "—",
      projects: "—",
      enrolled: "—",
    },
  },
  {
    slug: "pgas",
    path: "/courses/pgas",
    code: "PGAS",
    title: "Programming, Games, Apps, and Society",
    tagline: "Build games and apps, and study how technology affects society.",
    isAP: false,
    syllabus: "/syllabi/FCS%2026-27%20PGAS%20Syllabus.pdf",
    description:
      "PGAS is the pathway's senior capstone. Students design and build games and apps, and study how technology affects society.",
    topics: [
      "Game development",
      "Mobile and web application development",
      "Technology and society",
      "Capstone project",
    ],
    stats: {
      primaryLabel: "Course Average",
      primaryValue: "—",
      projects: "—",
      enrolled: "—",
    },
  },
]

export function getCourse(slug) {
  return courses.find(function (c) { return c.slug === slug })
}
