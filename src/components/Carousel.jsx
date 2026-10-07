import img1 from "../assets/placeholder1.png";
import img2 from "../assets/placeholder2.png";
import img3 from "../assets/placeholder3.png";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight, ArrowRight, Sparkles } from "lucide-react";

const slideData = [
  {
    image: img1,
    tag: "Forsyth Central Highschool • Forsyth County",
    title: "Shape the Future Through Code",
    subtitle:
      "Join the FCHS Computer Science & STEM Academy. Learn programming, solve authentic problems, and build software that matters.",
    primaryCta: { label: "Explore Courses", to: "/courses" },
    secondaryCta: { label: "Student Projects", to: "/projects" }
  },
  {
    image: img2,
    tag: "College Board AP & Industry Rigor",
    title: "From Foundations to Advanced Algorithms",
    subtitle:
      "Master web technologies in IST, explore data science in AP CSP, and engineer Java applications in AP Computer Science A.",
    primaryCta: { label: "Course Catalog", to: "/courses" },
    secondaryCta: { label: "About the Pathway", to: "/about" }
  },
  {
    image: img3,
    tag: "Robotics, Electronics & Design",
    title: "Build Intelligent Machines",
    subtitle:
      "In Mechatronics, students combine mechanical design, electronics, sensors, and embedded software to build interactive systems.",
    primaryCta: { label: "View Capstone Projects", to: "/projects" },
    secondaryCta: { label: "Student Login", to: "/login" }
  }
];

function Carousel() {
  const [index, setIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(function () {
    if (isHovered) return;

    const timer = setInterval(function () {
      setIndex(function (prev) {
        return (prev + 1) % slideData.length;
      });
    }, 6000);

    return function () {
      clearInterval(timer);
    };
  }, [isHovered]);

  const handlePrev = function () {
    setIndex(function (prev) {
      return prev === 0 ? slideData.length - 1 : prev - 1;
    });
  };

  const handleNext = function () {
    setIndex(function (prev) {
      return (prev + 1) % slideData.length;
    });
  };


  return (
    <div
      className="hero-carousel"
      onMouseEnter={function () { setIsHovered(true); }}
      onMouseLeave={function () { setIsHovered(false); }}
      aria-label="Hero Showcase Carousel"
    >
      {/* Background slide tracks */}
      <div className="hero-track-container">
        {slideData.map(function (slide, i) {
          const isActive = index === i;
          return (
            <div
              key={i}
              className={"hero-slide" + (isActive ? " hero-slide-active" : "")}
              style={{
                backgroundImage: "linear-gradient(rgba(15, 23, 42, 0.65), rgba(15, 23, 42, 0.85)), url(" + slide.image + ")"
              }}
            >
              <div className="hero-content">
                <span className="hero-badge">
                  <Sparkles size={14} className="hero-badge-icon" />
                  {slide.tag}
                </span>
                <h1 className="hero-title">{slide.title}</h1>
                <p className="hero-subtitle">{slide.subtitle}</p>
                <div className="hero-actions">
                  <Link to={slide.primaryCta.to} className="btn btn-primary btn-lg">
                    {slide.primaryCta.label} <ArrowRight size={16} />
                  </Link>
                  <Link to={slide.secondaryCta.to} className="btn btn-outline-light btn-lg">
                    {slide.secondaryCta.label}
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Manual Arrow Controls */}
      <button
        type="button"
        className="hero-arrow hero-arrow-prev"
        onClick={handlePrev}
        aria-label="Previous Slide"
      >
        <ChevronLeft size={28} />
      </button>
      <button
        type="button"
        className="hero-arrow hero-arrow-next"
        onClick={handleNext}
        aria-label="Next Slide"
      >
        <ChevronRight size={28} />
      </button>

      {/* Slide Indicators / Dots */}
      <div className="hero-indicators">
        {slideData.map(function (_, i) {
          const active = index === i;
          return (
            <button
              key={i}
              className={"hero-dot" + (active ? " hero-dot-active" : "")}
              onClick={function () { setIndex(i); }}
              aria-label={"Slide " + (i + 1)}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Carousel;
