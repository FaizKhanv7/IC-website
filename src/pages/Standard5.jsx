import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";

function Standard5() {
  return (
    <main className="page page-narrow">
      <div className="standard-breadcrumb">
        <Link to="/" className="breadcrumb-back">
          <ChevronLeft size={14} /> Home
        </Link>
        <span className="breadcrumb-divider">/</span>
        <span className="breadcrumb-current">Standards</span>
        <span className="breadcrumb-divider">/</span>
        <span className="breadcrumb-current">Standard 5</span>
      </div>

      <div className="standard-hero">
        <span className="standard-number-badge">Standard 5</span>
        <h1 className="standard-page-title">Standard 5</h1>
        <p className="standard-page-subtitle">
          This is Standard 5. Content for this standard will be added soon.
        </p>
      </div>

      <div className="standard-placeholder-body">
        <div className="standard-placeholder-card">
          <div className="standard-placeholder-icon">5</div>
          <h2 className="standard-placeholder-heading">Standard 5</h2>
          <p className="standard-placeholder-text">
            Detailed content, objectives, and resources for Standard 5 are coming soon.
            Check back for updates from the FCHS Computer Science Pathway.
          </p>
        </div>
      </div>

      <div className="standard-page-nav">
        <Link to="/standards/4" className="standard-nav-link prev">
          <ChevronLeft size={16} /> Standard 4
        </Link>
        <Link to="/standards/6" className="standard-nav-link next">
          Standard 6 <ChevronRight size={16} />
        </Link>
      </div>
    </main>
  );
}

export default Standard5;
