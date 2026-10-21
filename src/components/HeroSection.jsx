import { motion } from "framer-motion";
import { ArrowRight, BookOpen, GraduationCap, Lightbulb, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import img1 from "../assets/placeholder1.png";
import img2 from "../assets/placeholder2.png";
import img3 from "../assets/placeholder3.png";

const entranceVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.14 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45 } },
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.55, ease: "easeOut" } },
};

const stats = [
  { value: "4", label: "Sequential courses", icon: BookOpen },
  { value: "2", label: "College Board AP courses", icon: GraduationCap },
  { value: "100%", label: "Hands-on, project-based", icon: Lightbulb },
  { value: "PGAS", label: "Senior capstone", icon: Sparkles },
];

function HeroSection() {
  return (
    <section className="hero-section">
      <div className="hero-container">
        <motion.div
          className="hero-copy"
          variants={entranceVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1 className="hero-title" variants={itemVariants}>
            Shape the Future <span>Through Code</span>
          </motion.h1>
          <motion.p className="hero-subtitle" variants={itemVariants}>
            The FCHS Computer Science &amp; STEM Academy takes students from their first
            line of code through College Board AP coursework and into a senior capstone
            building programming, games, and apps. No prior experience required—just
            curiosity and drive.
          </motion.p>
          <motion.div className="hero-actions" variants={itemVariants}>
            <Link to="/courses" className="btn btn-primary btn-lg">
              Explore Courses <ArrowRight size={16} />
            </Link>
            <Link to="/about" className="btn btn-outline btn-lg">
              About the Pathway
            </Link>
          </motion.div>
          <motion.div className="hero-stats" variants={itemVariants}>
            {stats.map(function (stat) {
              const Icon = stat.icon;
              return (
                <div className="hero-stat" key={stat.label}>
                  <span className="hero-stat-icon"><Icon size={18} /></span>
                  <span className="hero-stat-copy">
                    <strong>{stat.value}</strong>
                    <span>{stat.label}</span>
                  </span>
                </div>
              );
            })}
          </motion.div>
        </motion.div>

        <motion.div
          className="hero-collage"
          variants={entranceVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div className="hero-image hero-image-main" variants={imageVariants}>
            <img src={img1} alt="Students learning computer science" />
          </motion.div>
          <motion.div className="hero-image hero-image-side" variants={imageVariants}>
            <img src={img2} alt="Students working together on a project" />
          </motion.div>
          <motion.div className="hero-image hero-image-bottom" variants={imageVariants}>
            <img src={img3} alt="A student presenting a computer science project" />
          </motion.div>
          <motion.div
            className="hero-collage-note"
            animate={{ y: [0, -7, 0] }}
            transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
          >
            <Sparkles size={16} />
            <span>Learn by building</span>
          </motion.div>
          <span className="hero-decor hero-decor-circle" />
          <span className="hero-decor hero-decor-square" />
        </motion.div>
      </div>
    </section>
  );
}

export default HeroSection;
