import { useState, useRef } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "/favicon.ico";
import {
  ChevronDown,
  Sparkles,
  BookOpen,
  Terminal,
  Code2,
  Cpu,
  Gamepad2,
  LayoutGrid,
  Menu,
  X,
} from "lucide-react";

/* ── Nav data ─────────────────────────────────────────────── */
const COURSES_ITEMS = [
  { code: "All", label: "All Courses Overview", to: "/courses", icon: LayoutGrid, desc: "Browse the full four-course pathway" },
  { code: "IST", label: "Information Science & Technology", to: "/courses/ist", icon: Terminal, desc: "The entry point — no experience required" },
  { code: "AP CSP", label: "AP Computer Science Principles", to: "/courses/apcsp", icon: Code2, desc: "Algorithms, data, and the Create Task" },
  { code: "AP CSA", label: "AP Computer Science A", to: "/courses/apcsa", icon: Cpu, desc: "Java, OOP, and data structures" },
  { code: "PGAS", label: "Programming, Games, Apps & Society", to: "/courses/pgas", icon: Gamepad2, desc: "Senior capstone — build real software" },
];

const STANDARDS_ITEMS = Array.from({ length: 6 }, function (_, i) {
  return { num: i + 1, label: "Standard " + (i + 1), to: "/standards/" + (i + 1) };
});

/* ── Animation variants ───────────────────────────────────── */
const dropdownVariants = {
  hidden: { opacity: 0, y: 8, scale: 0.97 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.18, ease: [0.16, 1, 0.3, 1] } },
  exit: { opacity: 0, y: 6, scale: 0.97, transition: { duration: 0.13, ease: "easeIn" } },
};

/* ── Main Component ───────────────────────────────────────── */
function Navbar() {
  const [openMenu, setOpenMenu] = useState(null); // "courses" | "standards" | null
  const [hoverId, setHoverId] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();

  const closeAll = function () {
    setOpenMenu(null);
    setMobileOpen(false);
  };

  /* Simple nav items (no dropdown) */
  const simpleItems = [
    { id: "home", label: "Home", to: "/" },
    { id: "about", label: "About", to: "/about" },
    { id: "projects", label: "Projects", to: "/projects", sparkle: true },
  ];

  return (
    <header className="pnav-shell">
      {/* ── Pill nav bar ────────────────────────────────────── */}
      <div className="pnav-outer">
        <nav className="pnav-pill">

          {/* Brand */}
          <Link to="/" className="pnav-brand" onClick={closeAll}>
            <img src={Logo} alt="Forsyth Central" className="pnav-logo" />
            <div className="pnav-brand-text">
              <span className="pnav-brand-name">FORSYTH CENTRAL</span>
              <span className="pnav-brand-sub">CS Pathway</span>
            </div>
          </Link>

          {/* Divider */}
          <div className="pnav-divider" />

          {/* Desktop link list */}
          <ul className="pnav-links">

            {/* Home */}
            <li
              onMouseEnter={function () { setHoverId("home"); setOpenMenu(null); }}
              onMouseLeave={function () { setHoverId(null); }}
            >
              <NavLink
                to="/"
                end
                className={function ({ isActive }) { return "pnav-link" + (isActive ? " pnav-link-active" : ""); }}
                onClick={closeAll}
              >
                {(hoverId === "home") && (
                  <motion.span layoutId="pill-hover" className="pnav-hover-bg" style={{ borderRadius: 99 }} />
                )}
                <span className="pnav-link-label">Home</span>
              </NavLink>
            </li>

            {/* About */}
            <li
              onMouseEnter={function () { setHoverId("about"); setOpenMenu(null); }}
              onMouseLeave={function () { setHoverId(null); }}
            >
              <NavLink
                to="/about"
                className={function ({ isActive }) { return "pnav-link" + (isActive ? " pnav-link-active" : ""); }}
                onClick={closeAll}
              >
                {(hoverId === "about") && (
                  <motion.span layoutId="pill-hover" className="pnav-hover-bg" style={{ borderRadius: 99 }} />
                )}
                <span className="pnav-link-label">About</span>
              </NavLink>
            </li>

            {/* Courses dropdown */}
            <li
              className="pnav-dd-wrap"
              onMouseEnter={function () { setHoverId("courses"); setOpenMenu("courses"); }}
              onMouseLeave={function () { setHoverId(null); setOpenMenu(null); }}
            >
              <button
                type="button"
                className={"pnav-link pnav-dd-btn" + (openMenu === "courses" ? " pnav-link-active" : "")}
                onClick={function () { setOpenMenu(openMenu === "courses" ? null : "courses"); }}
              >
                {(hoverId === "courses" || openMenu === "courses") && (
                  <motion.span layoutId="pill-hover" className="pnav-hover-bg" style={{ borderRadius: 99 }} />
                )}
                <span className="pnav-link-label">
                  Courses
                  <ChevronDown size={13} className={"pnav-caret" + (openMenu === "courses" ? " pnav-caret-open" : "")} />
                </span>
              </button>

              <AnimatePresence>
                {openMenu === "courses" && (
                  <motion.div
                    className="pnav-dropdown pnav-courses-dd"
                    variants={dropdownVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                  >
                    {COURSES_ITEMS.map(function (item) {
                      const Icon = item.icon;
                      return (
                        <Link
                          key={item.code}
                          to={item.to}
                          className="pnav-dd-item"
                          onClick={closeAll}
                        >
                          <div className="pnav-dd-icon">
                            <Icon size={16} />
                          </div>
                          <div className="pnav-dd-text">
                            <span className="pnav-dd-label">
                              {item.code !== "All" && <span className="pnav-dd-code">{item.code}</span>}
                              {item.label}
                            </span>
                            <span className="pnav-dd-desc">{item.desc}</span>
                          </div>
                        </Link>
                      );
                    })}
                  </motion.div>
                )}
              </AnimatePresence>
            </li>

            {/* Standards dropdown */}
            <li
              className="pnav-dd-wrap"
              onMouseEnter={function () { setHoverId("standards"); setOpenMenu("standards"); }}
              onMouseLeave={function () { setHoverId(null); setOpenMenu(null); }}
            >
              <button
                type="button"
                className={"pnav-link pnav-dd-btn" + (openMenu === "standards" ? " pnav-link-active" : "")}
                onClick={function () { setOpenMenu(openMenu === "standards" ? null : "standards"); }}
              >
                {(hoverId === "standards" || openMenu === "standards") && (
                  <motion.span layoutId="pill-hover" className="pnav-hover-bg" style={{ borderRadius: 99 }} />
                )}
                <span className="pnav-link-label">
                  <BookOpen size={13} className="pnav-icon-inline" />
                  Standards
                  <ChevronDown size={13} className={"pnav-caret" + (openMenu === "standards" ? " pnav-caret-open" : "")} />
                </span>
              </button>

              <AnimatePresence>
                {openMenu === "standards" && (
                  <motion.div
                    className="pnav-dropdown pnav-standards-dd"
                    variants={dropdownVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                  >
                    <p className="pnav-dd-group-label">Course Standards</p>
                    <div className="pnav-standards-grid">
                      {STANDARDS_ITEMS.map(function (s) {
                        return (
                          <Link
                            key={s.num}
                            to={s.to}
                            className="pnav-standard-item"
                            onClick={closeAll}
                          >
                            <span className="pnav-std-num">{s.num}</span>
                            <span className="pnav-std-label">{s.label}</span>
                          </Link>
                        );
                      })}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </li>

            {/* Projects (sparkle pill) */}
            <li
              onMouseEnter={function () { setHoverId("projects"); setOpenMenu(null); }}
              onMouseLeave={function () { setHoverId(null); }}
            >
              <NavLink
                to="/projects"
                className={function ({ isActive }) { return "pnav-link pnav-projects-pill" + (isActive ? " pnav-projects-active" : ""); }}
                onClick={closeAll}
              >
                <Sparkles size={13} className="pnav-sparkle" />
                <span className="pnav-link-label">Projects</span>
              </NavLink>
            </li>

          </ul>

          {/* Student Portal CTA */}
          <button
            type="button"
            className="pnav-portal-btn"
            onClick={function () { closeAll(); navigate("/login"); }}
          >
            Student Portal
          </button>

          {/* Mobile hamburger */}
          <button
            type="button"
            className="pnav-mobile-btn"
            onClick={function () { setMobileOpen(!mobileOpen); }}
            aria-label="Toggle navigation"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>

        </nav>
      </div>

      {/* ── Mobile drawer ───────────────────────────────────── */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="pnav-mobile-drawer"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0, transition: { duration: 0.18 } }}
            exit={{ opacity: 0, y: -8, transition: { duration: 0.13 } }}
          >
            <Link to="/" className="pnav-mob-link" onClick={closeAll}>Home</Link>
            <Link to="/about" className="pnav-mob-link" onClick={closeAll}>About</Link>

            <div className="pnav-mob-section">
              <span className="pnav-mob-section-label">Courses</span>
              {COURSES_ITEMS.map(function (item) {
                return (
                  <Link key={item.code} to={item.to} className="pnav-mob-sub-link" onClick={closeAll}>
                    {item.code !== "All" && <span className="pnav-mob-code">{item.code}</span>}
                    {item.label}
                  </Link>
                );
              })}
            </div>

            <div className="pnav-mob-section">
              <span className="pnav-mob-section-label">Standards</span>
              <div className="pnav-mob-standards-grid">
                {STANDARDS_ITEMS.map(function (s) {
                  return (
                    <Link key={s.num} to={s.to} className="pnav-mob-std-item" onClick={closeAll}>
                      <span className="pnav-std-num">{s.num}</span>
                      {s.label}
                    </Link>
                  );
                })}
              </div>
            </div>

            <Link to="/projects" className="pnav-mob-link" onClick={closeAll}>
              <Sparkles size={14} /> Projects
            </Link>

            <button
              type="button"
              className="btn btn-primary btn-block"
              onClick={function () { closeAll(); navigate("/login"); }}
            >
              Student Portal
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Navbar;
