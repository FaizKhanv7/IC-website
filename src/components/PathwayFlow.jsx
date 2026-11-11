import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";
import { courses } from "../data/courses";

/*
 * Rock-solid continuous orbital progress:
 * - Uses wall-clock timestamp offsets so the timer never drifts or freezes
 * - Immediately checks milestone quadrant transitions directly on every tick
 * - When user hovers or pauses, cleanly records accumulated progress and resumes seamlessly
 */

const FULL_LOOP_MS = 14000; // Smooth 14-second full orbit (3.5s per course)
const SWIPE_PX = 50;
const RADIUS = 36; // percent of the ring box

function stepLabel(course, index) {
  if (!course) return "";
  if (index === 0) return "Start here";
  if (index === courses.length - 1) return "Capstone";
  return course.isAP ? "AP exam course" : "Core course";
}

// Node i of n, clockwise, first node at the top.
function nodePos(i, n) {
  const a = (i / n) * 2 * Math.PI - Math.PI / 2;
  return { x: 50 + RADIUS * Math.cos(a), y: 50 + RADIUS * Math.sin(a) };
}

export default function PathwayFlow() {
  const [index, setIndex] = useState(0);
  const [playing, setPlaying] = useState(true);
  const [progress, setProgress] = useState(0); // 0 to 1
  const drag = useRef({ x: null, swiped: false });

  // Refs for bulletproof animation timing
  const progressRef = useRef(0);
  const playingRef = useRef(playing);
  const startTimestampRef = useRef(null);
  const animFrameRef = useRef(null);

  const total = courses.length;

  useEffect(() => {
    playingRef.current = playing;
  }, [playing]);

  // Jump to specific step directly with safe positive modulo
  const jumpTo = (i) => {
    const nextIdx = ((i % total) + total) % total;
    setIndex(nextIdx);
    const targetProgress = nextIdx / total;
    progressRef.current = targetProgress;
    setProgress(targetProgress);
    startTimestampRef.current = performance.now() - targetProgress * FULL_LOOP_MS;
  };

  // Continuous animation loop using absolute wall-clock time
  // The rAF chain is NEVER broken — always reschedule first, then decide whether to update
  useEffect(() => {
    // Start the loop from wherever progress currently is
    startTimestampRef.current = performance.now() - progressRef.current * FULL_LOOP_MS;

    const tick = (now) => {
      // Always reschedule FIRST — this keeps the chain alive regardless of pause/play state
      animFrameRef.current = requestAnimationFrame(tick);

      if (!playingRef.current) {
        // Keep startTimestamp synced so resuming picks up exactly where it left off
        startTimestampRef.current = now - progressRef.current * FULL_LOOP_MS;
        return;
      }

      const elapsed = (now - startTimestampRef.current) % FULL_LOOP_MS;
      const currentFrac = elapsed / FULL_LOOP_MS;

      progressRef.current = currentFrac;
      setProgress(currentFrac);

      // Determine quadrant milestone (0=IST, 1=AP CSP, 2=AP CSA, 3=PGAS)
      const currentMilestone = Math.floor(currentFrac * total) % total;
      setIndex((prev) => (prev !== currentMilestone ? currentMilestone : prev));
    };

    animFrameRef.current = requestAnimationFrame(tick);

    return () => {
      if (animFrameRef.current) {
        cancelAnimationFrame(animFrameRef.current);
        animFrameRef.current = null;
      }
    };
  // Only run once on mount — playing changes are handled via playingRef
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [total]);

  function onPointerDown(e) {
    drag.current = { x: e.clientX, swiped: false };
  }

  function onPointerUp(e) {
    const start = drag.current.x;
    if (start !== null) {
      const dx = e.clientX - start;
      if (Math.abs(dx) > SWIPE_PX) {
        drag.current.swiped = true;
        jumpTo(index + (dx < 0 ? 1 : -1));
      }
    }
    drag.current.x = null;
  }

  function onKeyDown(e) {
    if (e.key === "ArrowRight" || e.key === "ArrowDown") {
      e.preventDefault();
      jumpTo(index + 1);
    }
    if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
      e.preventDefault();
      jumpTo(index - 1);
    }
  }

  const circ = 2 * Math.PI * RADIUS;
  const strokeDashoffset = circ * (1 - progress);
  const active = courses[index] || courses[0];

  return (
    <section
      className="pf"
      aria-roledescription="carousel"
      aria-label="Computer science course pathway"
      onKeyDown={onKeyDown}
      onPointerDown={onPointerDown}
      onPointerUp={onPointerUp}
      onPointerCancel={() => {
        drag.current.x = null;
      }}
      onClickCapture={(e) => {
        if (drag.current.swiped) {
          e.preventDefault();
          e.stopPropagation();
          drag.current.swiped = false;
        }
      }}
    >
      <div className="pf-frame">
        <div className="pf-inner">
          <div className="pf-stage">
            {/* Left step index rail */}
            <ol className="pf-rail" aria-label="Pathway steps">
              {courses.map((c, i) => (
                <li key={c.slug}>
                  <button
                    type="button"
                    className={"pf-rail-item" + (i === index ? " is-active" : "")}
                    aria-current={i === index ? "step" : undefined}
                    onClick={() => jumpTo(i)}
                  >
                    <span className="pf-rail-num">0{i + 1}</span>
                    {c.code}
                  </button>
                </li>
              ))}
            </ol>

            {/* Orbit: Continuous loop traveling from node to node */}
            <div className="pf-orbit">
              <svg className="pf-rings" viewBox="0 0 100 100" aria-hidden="true">
                <circle className="pf-ring" cx="50" cy="50" r={RADIUS} />
                <circle className="pf-ring pf-ring-outer" cx="50" cy="50" r={RADIUS + 9} />

                {/* Slower, never-stuck orbital line traveling smoothly around the circumference */}
                <circle
                  className="pf-timer-orbital"
                  cx="50"
                  cy="50"
                  r={RADIUS}
                  strokeDasharray={circ}
                  strokeDashoffset={strokeDashoffset}
                  style={{
                    fill: "none",
                    stroke: "var(--brand)",
                    strokeWidth: 1.8,
                    strokeLinecap: "round",
                    transform: "rotate(-90deg)",
                    transformOrigin: "50% 50%",
                  }}
                />
              </svg>

              {/* Center Hub Counter */}
              <div className="pf-hub" aria-hidden="true">
                <span className="pf-hub-pulse" />
                <span className="pf-hub-pulse pf-hub-pulse-2" />
                <span className="pf-hub-core" key={index}>
                  <strong>{index + 1}</strong>
                  <em>of {total}</em>
                </span>
              </div>

              {/* Course Nodes on the ring: clicking jumps immediately */}
              {courses.map((c, i) => {
                const p = nodePos(i, total);
                const state = i === index ? "active" : i < index ? "done" : "todo";
                const next = i === (index + 1) % total;
                return (
                  <button
                    key={c.slug}
                    type="button"
                    className={"pf-node pf-node-" + state + (next ? " pf-node-next" : "")}
                    style={{ left: `${p.x}%`, top: `${p.y}%` }}
                    aria-label={`Step ${i + 1}: ${c.title}`}
                    aria-current={i === index ? "step" : undefined}
                    onClick={() => jumpTo(i)}
                  >
                    <span className="pf-node-num">{i + 1}</span>
                    <span className="pf-node-code">{c.code}</span>
                  </button>
                );
              })}
            </div>

            {/* Description Card: Pops out instantly whenever the line reaches that step */}
            <div className="pf-detail" aria-live="polite">
              <article className="pf-card" key={index}>
                <p className="pf-eyebrow">
                  Step {index + 1} of {total} &middot; {stepLabel(active, index)}
                </p>
                <h3 className="pf-title">{active.title}</h3>
                <p className="pf-tagline">{active.tagline}</p>
                <ul className="pf-topics">
                  {active.topics.map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>
                <Link to={active.path} className="pf-cta">
                  View {active.code} <ArrowRight size={14} />
                </Link>
              </article>
            </div>
          </div>

          {/* Bottom Dock Navigation */}
          <div className="pf-dock">
            <button
              type="button"
              className="pf-dock-btn"
              aria-label="Previous step"
              onClick={() => jumpTo(index - 1)}
            >
              <ChevronLeft size={16} /> Prev
            </button>

            <button
              type="button"
              className="pf-dock-btn pf-dock-mid"
              aria-label={playing ? "Pause automatic sequence" : "Play automatic sequence"}
              onClick={() => setPlaying(!playing)}
            >
              {playing ? <Pause size={14} /> : <Play size={14} />}
              <span>{playing ? "Auto-play on" : "Auto-play paused"}</span>
            </button>

            <button
              type="button"
              className="pf-dock-btn"
              aria-label="Next step"
              onClick={() => jumpTo(index + 1)}
            >
              Next <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
