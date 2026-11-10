import { Link } from "react-router-dom";

function EnrollCTA() {
  return (
    <section className="ncta-section">
      <div className="ncta-inner">
        <h2 className="ncta-title">Start Your Coding Journey</h2>
        <p className="ncta-desc">
          Join the next generation of engineers and problem-solvers at Forsyth Central.
          Course registration for the upcoming semester is open to all incoming freshmen
          and upperclassmen &mdash; no experience required.
        </p>
        <Link to="/courses" className="ncta-btn">
          Explore Courses
        </Link>
      </div>
    </section>
  );
}

export default EnrollCTA;
