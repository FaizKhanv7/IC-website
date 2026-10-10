import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";

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
          This is Standard 1. Content for this standard will be added soon.
        </p>
      </div>

      <div className="standard-placeholder-body">
        <div className="standard-placeholder-card">
          <div className="standard-placeholder-icon">1</div>
          <h2 className="standard-placeholder-heading">Standard 1</h2>
          <p className="standard-placeholder-text">
            Detailed content, objectives, and resources for Standard 1 are coming soon.
            Check back for updates from the FCHS Computer Science Pathway.
          </p>
        </div>
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
