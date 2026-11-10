import { Link } from "react-router-dom";
import PdfViewer from "../components/PdfViewer";
import {
  ChevronLeft,
  ChevronRight,
  FileText,
  CalendarRange,
  Users,
  ClipboardList,
} from "lucide-react";

const SYLLABI = [
  {
    id: "apcsp",
    label: "AP CSP",
    title: "AP Computer Science Principles",
    file: "/syllabi/FCS%2026-27%20APCSP%20Syllabus.pdf",
  },
  {
    id: "apcsa",
    label: "AP CSA",
    title: "AP Computer Science A",
    file: "/syllabi/FCS%2026-27%20APCSA%20Syllabus.pdf",
  },
  {
    id: "pgas",
    label: "PGAS",
    title: "Programming, Games, Apps, and Society",
    file: "/syllabi/FCS%2026-27%20PGAS%20Syllabus.pdf",
  },
];

const PACING_GUIDES = [
  {
    id: "apcsp",
    label: "AP CSP",
    title: "AP Computer Science Principles",
    file: "/pacing/APCSP%202026-27%20Pacing%20Guide.pdf",
  },
];

const SECTIONS = [
  {
    icon: FileText,
    title: "Course Syllabi",
    description:
      "Course overviews, expectations, grading policies, and required materials for each Computer Science Pathway course.",
    documents: SYLLABI,
  },
  {
    icon: CalendarRange,
    title: "Course Pacing Guide",
    description:
      "Week-by-week pacing for each course, showing how units, assessments, and projects are sequenced across the year.",
    documents: PACING_GUIDES,
    note: "Pacing guides for the other courses are coming soon.",
  },
  {
    icon: Users,
    title: "FBLA Student Activity",
    description:
      "FBLA chapter activities, competitive events, and leadership opportunities available to pathway students.",
  },
  {
    icon: ClipboardList,
    title: "Long Term Project Proposal",
    description:
      "Guidelines and proposal requirements for the long term project students complete as part of the pathway.",
  },
];

function Standard1() {
  return (
    <main className="page page-narrow">
      <div className="standard-breadcrumb">
        <Link to="/" className="breadcrumb-back">
          <ChevronLeft size={14} /> Home
        </Link>
        <span className="breadcrumb-divider">/</span>
        <span className="breadcrumb-current">Standards</span>
        <span className="breadcrumb-divider">/</span>
        <span className="breadcrumb-current">Standard 1</span>
      </div>

      <div className="standard-hero">
        <span className="standard-number-badge">Standard 1</span>
        <h1 className="standard-page-title">Standard 1</h1>
        <p className="standard-page-subtitle">
          Syllabi, pacing guides, FBLA activities, and long term project
          materials that support Standard 1.
        </p>
      </div>

      <div className="standard-section-list">
        {SECTIONS.map((section, index) => {
          const Icon = section.icon;
          return (
            <section className="standard-section-card" key={section.title}>
              <div className="standard-section-icon">
                <Icon size={20} strokeWidth={1.8} />
              </div>
              <div className="standard-section-body">
                <span className="standard-section-number">
                  Section {index + 1}
                </span>
                <h2 className="standard-section-heading">{section.title}</h2>
                <p className="standard-section-text">{section.description}</p>
                {section.documents ? (
                  <>
                    <PdfViewer documents={section.documents} />
                    {section.note && (
                      <p className="standard-section-placeholder">{section.note}</p>
                    )}
                  </>
                ) : (
                  <p className="standard-section-placeholder">
                    Materials for this section are coming soon.
                  </p>
                )}
              </div>
            </section>
          );
        })}
      </div>

      <div className="standard-page-nav">
        <div />
        <Link to="/standards/2" className="standard-nav-link next">
          Standard 2 <ChevronRight size={16} />
        </Link>
      </div>
    </main>
  );
}

export default Standard1;
