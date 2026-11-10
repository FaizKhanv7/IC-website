import { useId } from "react";
import { motion } from "framer-motion";
import {
  GraduationCap,
  Globe,
  Terminal,
  Gamepad2,
  Code2,
  Layers,
  GitBranch,
  Award,
} from "lucide-react";

/*
 * 6 Core Pathway Skills — 3 on Left, 3 on Right layout
 * Canvas size: viewBox 0 0 880 520
 * Center Hub: (440, 260), width 164, height 82 (X: 358–522, Y: 219–301)
 *
 * Left Column: X: 60 to 276 (width 216, height 54)
 *   - Top-Left: Web Foundations (Y: 61, center Y: 88)
 *   - Middle-Left: Python & Logic (Y: 233, center Y: 260)
 *   - Bottom-Left: Game & App Dev (Y: 405, center Y: 432)
 *
 * Right Column: X: 604 to 820 (width 216, height 54)
 *   - Top-Right: Java & OOP (Y: 61, center Y: 88)
 *   - Middle-Right: Data Structures (Y: 233, center Y: 260)
 *   - Bottom-Right: Software Eng. (Y: 405, center Y: 432)
 */
const SKILLS = [
  // ── LEFT SIDE ──
  {
    id: "web",
    title: "Web Foundations",
    sub: "HTML5 · CSS3 · Modern JS",
    icon: Globe,
    cardX: 60,
    cardY: 61,
    // Leaves top of hub at (398, 219), goes up to Y: 88, rounds into card right edge at (276, 88)
    path: "M 398 219 V 108 Q 398 88 378 88 H 276",
  },
  {
    id: "python",
    title: "Python & Logic",
    sub: "Algorithms & Problem Solving",
    icon: Terminal,
    cardX: 60,
    cardY: 233,
    // Horizontal straight line from left of hub (358, 260) to right edge of card (276, 260)
    path: "M 358 260 H 276",
  },
  {
    id: "game",
    title: "Game & App Dev",
    sub: "Pygame & Senior Capstones",
    icon: Gamepad2,
    cardX: 60,
    cardY: 405,
    // Leaves bottom of hub at (398, 301), goes down to Y: 432, rounds into card right edge at (276, 432)
    path: "M 398 301 V 412 Q 398 432 378 432 H 276",
  },

  // ── RIGHT SIDE ──
  {
    id: "java",
    title: "Java & OOP",
    sub: "Classes, Objects & Design",
    icon: Code2,
    cardX: 604,
    cardY: 61,
    // Leaves top of hub at (482, 219), goes up to Y: 88, rounds into card left edge at (604, 88)
    path: "M 482 219 V 108 Q 482 88 502 88 H 604",
  },
  {
    id: "data-structs",
    title: "Data Structures",
    sub: "Arrays, Lists & Recursion",
    icon: Layers,
    cardX: 604,
    cardY: 233,
    // Horizontal straight line from right of hub (522, 260) to left edge of card (604, 260)
    path: "M 522 260 H 604",
  },
  {
    id: "software-eng",
    title: "Software Eng.",
    sub: "Git, Systems & Real Code",
    icon: GitBranch,
    cardX: 604,
    cardY: 405,
    // Leaves bottom of hub at (482, 301), goes down to Y: 432, rounds into card left edge at (604, 432)
    path: "M 482 301 V 412 Q 482 432 502 432 H 604",
  },
];

/* Animated traveling pulse along connecting trace */
function AnimatedTrace({ d }) {
  return (
    <>
      <path
        d={d}
        stroke="#e2e8f0"
        strokeWidth="1.6"
        strokeLinecap="round"
        fill="none"
      />
      <motion.path
        d={d}
        pathLength="100"
        stroke="#c5162f"
        strokeWidth="2.5"
        strokeLinecap="round"
        fill="none"
        strokeDasharray="22 78"
        initial={{ strokeDashoffset: 100 }}
        animate={{ strokeDashoffset: 0 }}
        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
      />
    </>
  );
}

export default function PathwayCard() {
  const uid = useId().replace(/:/g, "");

  return (
    <section className="pc-section" id="pathway-skills">
      <div className="pc-card">
        {/* Visual Circuit Canvas — 3 on Left, 3 on Right Balanced Circuit */}
        <div className="pc-visual">
          <div className="pc-dots" aria-hidden="true" />

          <svg
            className="pc-svg"
            viewBox="0 0 880 520"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <defs>
              <filter id={`shadow-${uid}`} x="-15%" y="-15%" width="130%" height="130%">
                <feDropShadow dx="0" dy="3" stdDeviation="5" floodColor="#0f172a" floodOpacity="0.07" />
              </filter>
            </defs>

            {/* Connecting Traces that meet nodes seamlessly with zero gap */}
            {SKILLS.map((s) => (
              <AnimatedTrace key={s.id} d={s.path} />
            ))}

            {/* 6 Skill Node Cards: 3 on Left, 3 on Right */}
            {SKILLS.map((s) => {
              const Icon = s.icon;
              return (
                <g key={s.id} className="pc-svg-node">
                  {/* Card Background */}
                  <rect
                    x={s.cardX}
                    y={s.cardY}
                    width="216"
                    height="54"
                    rx="14"
                    fill="#ffffff"
                    stroke="#e2e8f0"
                    strokeWidth="1.2"
                    filter={`url(#shadow-${uid})`}
                  />

                  {/* Icon Box */}
                  <rect
                    x={s.cardX + 11}
                    y={s.cardY + 10}
                    width="34"
                    height="34"
                    rx="10"
                    fill="#fef2f4"
                    stroke="#fecdd3"
                    strokeWidth="1"
                  />

                  {/* Icon */}
                  <foreignObject x={s.cardX + 11} y={s.cardY + 10} width="34" height="34">
                    <div
                      style={{
                        width: "100%",
                        height: "100%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "#c5162f",
                      }}
                    >
                      <Icon size={17} />
                    </div>
                  </foreignObject>

                  {/* Title */}
                  <text
                    x={s.cardX + 54}
                    y={s.cardY + 24}
                    fontSize="12.5"
                    fontWeight="750"
                    fill="#0f172a"
                    fontFamily="inherit"
                  >
                    {s.title}
                  </text>

                  {/* Subtitle */}
                  <text
                    x={s.cardX + 54}
                    y={s.cardY + 41}
                    fontSize="9.8"
                    fontWeight="500"
                    fill="#64748b"
                    fontFamily="inherit"
                  >
                    {s.sub}
                  </text>
                </g>
              );
            })}

            {/* Center Hub: FCHS CS PATHWAYS */}
            <g className="pc-center-hub-svg">
              <rect
                x="358"
                y="219"
                width="164"
                height="82"
                rx="22"
                fill="#ffffff"
                stroke="#fecdd3"
                strokeWidth="1.8"
                filter={`url(#shadow-${uid})`}
              />

              <foreignObject x="358" y="219" width="164" height="82">
                <div
                  style={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "3px",
                  }}
                >
                  <GraduationCap size={26} color="#c5162f" />
                  <span
                    style={{
                      fontSize: "14px",
                      fontWeight: 800,
                      color: "#0f172a",
                      letterSpacing: "0.2px",
                      lineHeight: 1.1,
                    }}
                  >
                    FCHS
                  </span>
                  <span
                    style={{
                      fontSize: "10px",
                      fontWeight: 800,
                      color: "#c5162f",
                      letterSpacing: "0.8px",
                      textTransform: "uppercase",
                      lineHeight: 1,
                    }}
                  >
                    CS PATHWAYS
                  </span>
                </div>
              </foreignObject>
            </g>
          </svg>
        </div>

        {/* Text & Features Below Circuit */}
        <div className="pc-body">
          <h2 className="pc-title">What You Leave With</h2>

          <div className="pc-features">
            <div className="pc-feature">
              <div className="pc-feature-icon">
                <GitBranch size={18} strokeWidth={1.5} />
              </div>
              <div>
                <strong>A Project Portfolio</strong>
                <p>
                  Students graduate with programs and projects of their own,
                  not just exam scores.
                </p>
              </div>
            </div>

            <div className="pc-feature">
              <div className="pc-feature-icon">
                <Award size={18} strokeWidth={1.5} />
              </div>
              <div>
                <strong>AP Exams</strong>
                <p>
                  Students can sit the AP CSP and AP CSA exams. Whether a score
                  earns college credit depends on the college.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
