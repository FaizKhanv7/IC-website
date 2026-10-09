import { useState } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import Logo from "/favicon.ico";
import { ChevronDown, Sparkles } from "lucide-react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [standardsDropdownOpen, setStandardsDropdownOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const closeAll = function () {
    setMenuOpen(false);
    setDropdownOpen(false);
    setStandardsDropdownOpen(false);
  };

  return (
    <header className="navbar-container">
      {/* Top micro banner for Forsyth County */}
      <div className="top-utility-bar">
        <div className="utility-inner">
          <span>Forsyth Central Highschool &bull; Forsyth County Schools</span>
          <span className="utility-tag">STEM Academy &bull; Bulldogs CS</span>
        </div>
      </div>

      <nav className="main-nav-bar">
        <div className="nav-inner">
          {/* Brand Logo & Title */}
          <Link to="/" className="brand-wrap" onClick={closeAll}>
            <img src={Logo} alt="Forsyth Central Logo" className="brand-logo" />
            <div className="brand-text-block">
              <span className="brand-title">FORSYTH CENTRAL</span>
              <span className="brand-sub">Computer Science Pathway</span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <div className={"nav-menu" + (menuOpen ? " nav-menu-open" : "")}>
            <NavLink
              to="/"
              className={function ({ isActive }) { return "nav-item-link" + (isActive ? " active" : ""); }}
              onClick={closeAll}
            >
              Home
            </NavLink>

            <NavLink
              to="/about"
              className={function ({ isActive }) { return "nav-item-link" + (isActive ? " active" : ""); }}
              onClick={closeAll}
            >
              About
            </NavLink>

            {/* Courses Dropdown */}
            <div
              className="nav-dropdown-item"
              onMouseEnter={function () { setDropdownOpen(true); setStandardsDropdownOpen(false); }}
              onMouseLeave={function () { setDropdownOpen(false); }}
            >
              <button
                type="button"
                className={"nav-item-link dropdown-toggle" + (dropdownOpen ? " active" : "")}
                aria-expanded={dropdownOpen}
                aria-haspopup="true"
                onClick={function () { setDropdownOpen(!dropdownOpen); setStandardsDropdownOpen(false); }}
              >
                Courses <ChevronDown size={14} className="dropdown-caret" />
              </button>

              <div className={"dropdown-menu" + (dropdownOpen ? " dropdown-menu-open" : "")}>
                <Link to="/courses" className="dropdown-menu-item view-all" onClick={closeAll}>
                  All Courses Overview &rarr;
                </Link>
                <div className="dropdown-divider" />
                <Link to="/courses/ist" className="dropdown-menu-item" onClick={closeAll}>
                  <span className="menu-code">IST</span> Information Science &amp; Technology
                </Link>
                <Link to="/courses/apcsp" className="dropdown-menu-item" onClick={closeAll}>
                  <span className="menu-code">AP CSP</span> AP Computer Science Principles
                </Link>
                <Link to="/courses/apcsa" className="dropdown-menu-item" onClick={closeAll}>
                  <span className="menu-code">AP CSA</span> AP Computer Science A (Java)
                </Link>
                <Link to="/courses/pgas" className="dropdown-menu-item" onClick={closeAll}>
                  <span className="menu-code">PGAS</span> Programming, Games, Apps, and Society
                </Link>
              </div>
            </div>

            <div
              className="nav-dropdown-item"
              onMouseEnter={function () { setStandardsDropdownOpen(true); setDropdownOpen(false); }}
              onMouseLeave={function () { setStandardsDropdownOpen(false); }}
            >
              <button
                type="button"
                className={"nav-item-link dropdown-toggle" + ((standardsDropdownOpen || location.pathname.startsWith("/standards")) ? " active" : "")}
                aria-expanded={standardsDropdownOpen}
                aria-haspopup="true"
                onClick={function () { setStandardsDropdownOpen(!standardsDropdownOpen); setDropdownOpen(false); }}
              >
                Standards <ChevronDown size={14} className="dropdown-caret" />
              </button>

              <div className={"dropdown-menu" + (standardsDropdownOpen ? " dropdown-menu-open" : "")}>
                {Array.from({ length: 6 }, function (_, index) {
                  const standardNumber = index + 1;
                  return (
                    <Link
                      key={standardNumber}
                      to={"/standards/" + standardNumber}
                      className="dropdown-menu-item"
                      onClick={closeAll}
                    >
                      Standard {standardNumber}
                    </Link>
                  );
                })}
              </div>
            </div>

            <NavLink
              to="/projects"
              className={function ({ isActive }) { return "nav-item-link highlight-pill" + (isActive ? " active" : ""); }}
              onClick={closeAll}
            >
              <Sparkles size={14} className="nav-sparkle" />
              Projects
            </NavLink>
          </div>

          {/* Action CTA */}
          <div className="nav-actions">
            <button
              type="button"
              className="btn btn-primary btn-sm login-nav-btn"
              onClick={function () { closeAll(); navigate("/login"); }}
            >
              Student Portal
            </button>

            {/* Hamburger Button for mobile */}
            <button
              type="button"
              className={"mobile-toggle" + (menuOpen ? " active" : "")}
              onClick={function () { setMenuOpen(!menuOpen); }}
              aria-label="Toggle navigation"
            >
              <span className="toggle-bar"></span>
              <span className="toggle-bar"></span>
              <span className="toggle-bar"></span>
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
