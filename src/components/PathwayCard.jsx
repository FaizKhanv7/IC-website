import { useId } from "react";
import { motion } from "framer-motion";
import {
  GraduationCap,
  Code2,
  BookOpen,
  Award,
  Cpu,
  GitBranch,
  Terminal,
  Gamepad2,
} from "lucide-react";

/* ─── Peripheral icons around the center ──────────────────── */
/* SVG canvas is 564 × 410, center at (282, 205) */
const NODES = [
  {
    id: "portfolio",
    icon: GitBranch,
    x: 108,
    y: 88,
    path: "M 270 205 V 103 Q 270 88 255 88 H 108",
    delay: 0.1,
  },
  {
    id: "apcsp",
    icon: BookOpen,
    x: 362,
    y: 68,
    path: "M 294 205 V 83 Q 294 68 309 68 H 362",
    delay: 0.2,
  },
  {
    id: "ist",
    icon: Terminal,
    x: 64,
    y: 205,
    path: "M 250 205 H 64",
    delay: 0.3,
  },
  {
    id: "apcsa",
    icon: Cpu,
    x: 500,
    y: 205,
    path: "M 314 205 H 500",
    delay: 0.4,
  },
  {
    id: "award",
    icon: Award,
    x: 108,
    y: 322,
    path: "M 270 205 V 307 Q 270 322 255 322 H 108",
    delay: 0.5,
  },
  {
    id: "pgas",
    icon: Gamepad2,
    x: 362,
    y: 342,
    path: "M 294 205 V 327 Q 294 342 309 342 H 362",
    delay: 0.6,
  },
  {
    id: "code",
    icon: Code2,
    x: 500,
    y: 322,
    path: "M 314 215 V 307 Q 314 322 329 322 H 500",
    delay: 0.7,
  },
];

/* ─── Animated SVG path with travelling dash ──────────────── */
function AnimatedLine({ d, gradId }) {
  return (
    <>
      {/* static base line */}
      <path d={d} stroke="#e2e8f0" strokeWidth="1" fill="none" />
      {/* travelling gradient dash */}
      <motion.path
        d={d}
        stroke={`url(#${gradId})`}
        strokeWidth="2"
        fill="none"
        strokeDasharray="40 160"
        initial={{ strokeDashoffset: 200 }}
        animate={{ strokeDashoffset: -200 }}
        transition={{ duration: 3.5, repeat: Infinity, ease: "linear" }}
      />
      <defs>
        <linearGradient id={gradId} gradientUnits="userSpaceOnUse">
          <stop offset="0%"   stopColor="transparent" />
          <stop offset="50%"  stopColor="#c5162f" stopOpacity="0.7" />
          <stop offset="100%" stopColor="transparent" />
        </linearGradient>
      </defs>
    </>
  );
}

/* ─── Main component ───────────────────────────────────────── */
export default function PathwayCard() {
  const uid = useId().replace(/:/g, "");

  return (
    <section className="pc-section">
      <div className="pc-card">

        {/* ── Visual area ── */}
        <div className="pc-visual">
          {/* dot-grid background */}
          <div className="pc-dots" aria-hidden="true" />
          {/* top + bottom fade masks */}
          <div className="pc-fade" aria-hidden="true" />

          {/* SVG lines */}
          <svg
            className="pc-svg"
            viewBox="0 0 564 410"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            {NODES.map((n) => (
              <AnimatedLine key={n.id} d={n.path} gradId={`${uid}-${n.id}`} />
            ))}
          </svg>

          {/* Center graduation cap */}
          <div className="pc-center-wrap">
            <div className="pc-center-inner">
              <GraduationCap size={32} strokeWidth={1.5} />
            </div>
            {/* pulsing ring */}
            <motion.div
              className="pc-pulse-ring"
              animate={{ scale: [1, 1.18, 1], opacity: [0.35, 0, 0.35] }}
              transition={{ duration: 3, repeat: Infinity }}
            />
          </div>

          {/* Peripheral icon nodes */}
          {NODES.map((n) => {
            const Icon = n.icon;
            return (
              <motion.div
                key={n.id}
                className="pc-node"
                style={{
                  left: `${(n.x / 564) * 100}%`,
                  top:  `${(n.y / 410) * 100}%`,
                }}
                initial={{ opacity: 0, scale: 0.7 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: n.delay, duration: 0.35 }}
              >
                <Icon size={18} strokeWidth={1.5} />
              </motion.div>
            );
          })}
        </div>

        {/* ── Text + features ── */}
        <div className="pc-body">
          <h2 className="pc-title">Built Into Your Graduation</h2>

          <div className="pc-features">
            <div className="pc-feature">
              <div className="pc-feature-icon">
                <GitBranch size={18} strokeWidth={1.5} />
              </div>
              <div>
                <strong>Practical Portfolio</strong>
                <p>
                  Graduate with a GitHub portfolio of real, deployed
                  applications — not just test scores.
                </p>
              </div>
            </div>

            <div className="pc-feature">
              <div className="pc-feature-icon">
                <Award size={18} strokeWidth={1.5} />
              </div>
              <div>
                <strong>AP College Credit</strong>
                <p>
                  AP CSP and AP CSA can earn up to 8 transferable college
                  credit hours — while still in high school.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
