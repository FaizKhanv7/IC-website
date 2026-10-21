import {
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";

/* ── Placeholder project items ────────────────────────────── */
const PROJECTS = [
  { label: "CyberQuest 2D Dungeon",      course: "AP CSA", image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=900&q=80&auto=format&fit=crop" },
  { label: "EcoTrack Watershed",          course: "AP CSP", image: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=900&q=80&auto=format&fit=crop" },
  { label: "Central Campus Guide",        course: "IST",    image: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=900&q=80&auto=format&fit=crop" },
  { label: "Bulldog Autonomous Rover",    course: "PGAS",   image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=900&q=80&auto=format&fit=crop" },
  { label: "Forsyth Weather Dashboard",  course: "AP CSP", image: "https://images.unsplash.com/photo-1504608524841-42584120d1cc?w=900&q=80&auto=format&fit=crop" },
  { label: "Java Sorting Visualizer",     course: "AP CSA", image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=900&q=80&auto=format&fit=crop" },
  { label: "Pixel Art Game Engine",       course: "PGAS",   image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=900&q=80&auto=format&fit=crop" },
  { label: "Club Directory App",          course: "IST",    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=900&q=80&auto=format&fit=crop" },
  { label: "Binary Tree Explorer",        course: "AP CSA", image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=900&q=80&auto=format&fit=crop" },
  { label: "Network Packet Simulator",    course: "AP CSP", image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=900&q=80&auto=format&fit=crop" },
  { label: "Drone Path Planner",          course: "PGAS",   image: "https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=900&q=80&auto=format&fit=crop" },
  { label: "HTML5 Portfolio Builder",     course: "IST",    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=900&q=80&auto=format&fit=crop" },
];

const ITEM_COUNT = PROJECTS.length;
const MIN_ROT    = 0;
const MAX_ROT    = ITEM_COUNT - 1;

/* clamp rotation to [MIN, MAX] — no wrapping */
function clamp(val, min, max) {
  return Math.max(min, Math.min(max, val));
}

/* linear offset for non-wrapping layout */
function linearOffset(index, rotation) {
  return index - rotation;
}

export default function ProjectsWheel() {
  const [rotation, setRotation]         = useState(0);
  const [selectedIdx, setSelectedIdx]   = useState(0);
  const [isDragging, setIsDragging]     = useState(false);

  const rotationRef     = useRef(0);
  const selectedRef     = useRef(0);
  const velocityRef     = useRef(0);
  const draggingRef     = useRef(false);
  const dragOriginRef   = useRef({ y: 0, rotation: 0 });
  const prevDragRot     = useRef(0);
  const frameRef        = useRef(null);
  const stageRef        = useRef(null);
  const sectionRef      = useRef(null);
  const engagedRef      = useRef(false); // true = wheel is captured by the carousel

  /* commit — clamps to bounds */
  const commit = useCallback((next) => {
    const clamped = clamp(next, MIN_ROT, MAX_ROT);
    rotationRef.current = clamped;
    setRotation(clamped);
    const ni = Math.round(clamped);
    if (ni !== selectedRef.current) {
      selectedRef.current = ni;
      setSelectedIdx(ni);
    }
  }, []);

  /* animation loop */
  const runAnim = useCallback(() => {
    if (frameRef.current !== null) return;
    const tick = () => {
      let keep = false;
      if (!draggingRef.current && Math.abs(velocityRef.current) > 0.001) {
        const next = clamp(rotationRef.current + velocityRef.current, MIN_ROT, MAX_ROT);
        commit(next);
        /* kill velocity when we hit a boundary */
        if (next === MIN_ROT || next === MAX_ROT) {
          velocityRef.current = 0;
        } else {
          velocityRef.current *= 0.88;
        }
        keep = true;
      } else if (!draggingRef.current) {
        velocityRef.current = 0;
        const target = Math.round(rotationRef.current);
        const delta  = target - rotationRef.current;
        if (Math.abs(delta) > 0.001) {
          commit(rotationRef.current + delta * 0.22);
          keep = true;
        } else {
          commit(target);
        }
      }
      frameRef.current = keep ? requestAnimationFrame(tick) : null;
    };
    frameRef.current = requestAnimationFrame(tick);
  }, [commit]);

  useEffect(() => () => {
    if (frameRef.current !== null) cancelAnimationFrame(frameRef.current);
  }, []);

  /*
   * Engagement logic:
   * We watch the section with an IntersectionObserver (threshold 0.6 — more
   * than half visible). When it enters that threshold we lock scroll to the
   * carousel. When it leaves we release.
   *
   * Inside the wheel handler:
   *   - Not engaged yet          → pass through (page scrolls normally)
   *   - Engaged + at bottom & ↓ → disengage, pass through
   *   - Engaged + at top    & ↑ → disengage, pass through
   *   - Engaged otherwise       → capture & spin
   */
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          engagedRef.current = true;
        } else {
          engagedRef.current = false;
        }
      },
      { threshold: 0.6 }
    );
    observer.observe(section);

    /*
     * When the user scrolls the page (outside the carousel capture), check
     * if the section has come back into view and re-engage.
     */
    const onPageScroll = () => {
      const rect = section.getBoundingClientRect();
      const vh   = window.innerHeight;
      // re-engage when section occupies at least 60% of the viewport
      const visiblePx  = Math.min(rect.bottom, vh) - Math.max(rect.top, 0);
      const visiblePct = visiblePx / vh;
      if (visiblePct >= 0.6) {
        engagedRef.current = true;
      }
    };
    window.addEventListener("scroll", onPageScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onPageScroll);
    };
  }, []);

  /*
   * Wheel scroll — bounded:
   * When at the top (rotation === 0) and scrolling UP  → pass through to page.
   * When at the bottom (rotation === MAX) and scrolling DOWN → pass through to page.
   * Otherwise capture the event and spin the wheel.
   */
  useEffect(() => {
    const el = stageRef.current;
    if (!el) return;

    const onWheel = (e) => {
      if (e.ctrlKey || e.metaKey) return;

      const goingDown = e.deltaY > 0;
      const atBottom  = rotationRef.current >= MAX_ROT - 0.05;
      const atTop     = rotationRef.current <= MIN_ROT + 0.05;

      /* Not engaged — let the page scroll naturally */
      if (!engagedRef.current) return;

      /* At a boundary in the scroll direction — disengage and pass through */
      if ((goingDown && atBottom) || (!goingDown && atTop)) {
        engagedRef.current = false;
        return;
      }

      /* Engaged and within bounds — capture and spin */
      e.preventDefault();
      const delta = e.deltaY * 0.008;
      commit(rotationRef.current + delta);
      velocityRef.current = delta * 0.2;
      runAnim();
    };

    el.addEventListener("wheel", onWheel, { passive: false });
    return () => el.removeEventListener("wheel", onWheel);
  }, [commit, runAnim]);

  /* pointer drag */
  const onPointerDown = (e) => {
    if (!e.isPrimary || e.button !== 0) return;
    draggingRef.current = true;
    setIsDragging(true);
    velocityRef.current = 0;
    dragOriginRef.current = { y: e.clientY, rotation: rotationRef.current };
    prevDragRot.current = rotationRef.current;
    e.currentTarget.setPointerCapture(e.pointerId);
  };

  const onPointerMove = (e) => {
    if (!draggingRef.current) return;
    const dist = e.clientY - dragOriginRef.current.y;
    const next = dragOriginRef.current.rotation - dist * 0.018;
    velocityRef.current = next - prevDragRot.current;
    prevDragRot.current = next;
    commit(next);
  };

  const onPointerEnd = (e) => {
    if (!draggingRef.current) return;
    draggingRef.current = false;
    setIsDragging(false);
    if (e.currentTarget.hasPointerCapture(e.pointerId))
      e.currentTarget.releasePointerCapture(e.pointerId);
    runAnim();
  };

  /* keyboard */
  const onKeyDown = (e) => {
    if (e.key === "ArrowDown" || e.key === "ArrowRight") {
      e.preventDefault();
      velocityRef.current = 0;
      commit(rotationRef.current + 1);
      runAnim();
    }
    if (e.key === "ArrowUp" || e.key === "ArrowLeft") {
      e.preventDefault();
      velocityRef.current = 0;
      commit(rotationRef.current - 1);
      runAnim();
    }
  };

  const safeIdx  = Math.round(clamp(selectedIdx, 0, ITEM_COUNT - 1));
  const selected = PROJECTS[safeIdx];

  const RADIUS    = 300;
  const SPACING   = 13;
  const VISIBLE   = 7;
  const APEX      = 42;
  const EDGE_FADE = 28;
  const mask = `linear-gradient(to bottom, transparent 0%, black ${EDGE_FADE}%, black ${100 - EDGE_FADE}%, transparent 100%)`;

  return (
    <section ref={sectionRef} className="pw-section">
      <div className="pw-header">
        <p className="page-eyebrow">Student Innovation</p>
        <h2 className="pw-title">Explore Projects Our Students Made</h2>
      </div>

      <div className="pw-layout">
        {/* ── Photo panel ── */}
        <div className="pw-photo-wrap">
          <AnimatePresence mode="sync" initial={false}>
            <motion.img
              key={safeIdx}
              src={selected.image}
              alt={selected.label}
              className="pw-photo"
              initial={{ opacity: 0, scale: 1.04 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.45 }}
              draggable={false}
            />
          </AnimatePresence>
          <div className="pw-photo-badge">{selected.course}</div>
        </div>

        {/* ── Wheel list ── */}
        <div
          ref={stageRef}
          className={"pw-wheel" + (isDragging ? " pw-wheel-grabbing" : "")}
          tabIndex={0}
          role="listbox"
          aria-label="Project wheel"
          style={{ maskImage: mask, WebkitMaskImage: mask }}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={onPointerEnd}
          onPointerCancel={onPointerEnd}
          onKeyDown={onKeyDown}
        >
          <span className="pw-marker" style={{ left: `calc(${APEX}% - 28px)` }} />

          {PROJECTS.map((item, index) => {
            const off = linearOffset(index, rotation);
            if (Math.abs(off) > VISIBLE + 1) return null;

            const angle    = off * SPACING;
            const rad      = (angle * Math.PI) / 180;
            const x        = -RADIUS * (1 - Math.cos(rad));
            const y        = RADIUS * Math.sin(rad);
            const dist     = Math.min(Math.abs(off) / VISIBLE, 1);
            const opacity  = Math.cos((dist * Math.PI) / 2);
            const scale    = 1 - Math.min(Math.abs(off) * 0.04, 0.45);
            const isActive = Math.abs(off) < 0.5;

            return (
              <div
                key={index}
                role="option"
                aria-selected={isActive}
                className={"pw-item" + (isActive ? " pw-item-active" : "")}
                style={{
                  left: `${APEX}%`,
                  opacity,
                  transform: `translate(${x}px, ${y}px) translateY(-50%) rotate(${angle}deg) scale(${scale})`,
                }}
              >
                {item.label}
              </div>
            );
          })}
        </div>
      </div>

      {/* CTA */}
      <div className="pw-cta-row">
        <Link to="/projects" className="pw-cta-btn">
          View All Projects
        </Link>
      </div>
    </section>
  );
}
