/*
 * Course catalog for the CS pathway.
 *
 * NOTE: every number below is a PLACEHOLDER. Replace `stats` with the real
 * figures from the department before this goes live.
 *
 * IST and Cloud Computing are not AP courses, so they report a course-level
 * stat instead of an AP score.
 */

export const courses = [
  {
    slug: "ist",
    path: "/courses/ist",
    code: "IST",
    title: "Information Science & Technology",
    tagline: "The entry point to the pathway — no experience required.",
    isAP: false,
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
    description:
      "AP CSA is the pathway's most rigorous programming course, equivalent to a first-semester college CS class. Students work in Java to design classes, reason about inheritance and polymorphism, and implement the core data structures and algorithms the AP exam requires. Emphasis is on writing code that is correct, readable, and testable.",
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
    slug: "cloud-computing",
    path: "/courses/cloud-computing",
    code: "Cloud",
    title: "Cloud Computing",
    tagline: "Deploy and operate real software on real infrastructure.",
    isAP: false,
    description:
      "The pathway's capstone course moves students from writing code to shipping it. Students provision cloud resources, deploy applications, and learn how modern teams handle storage, security, and cost. The course maps to industry certification objectives, so students finish with credentials that carry weight outside the classroom.",
    topics: [
      "Cloud service and deployment models",
      "Virtual machines, containers, and storage",
      "Identity, access management, and security",
      "CI/CD and cost management",
    ],
    stats: {
      primaryLabel: "Certification Pass Rate",
      primaryValue: "—",
      projects: "—",
      enrolled: "—",
    },
  },
]

export function getCourse(slug) {
  return courses.find(function (c) { return c.slug === slug })
}
