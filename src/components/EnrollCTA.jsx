import { useState } from "react";
import { CheckCircle2, ArrowRight } from "lucide-react";

/*
 * Enrollment call to action for Forsyth Central Highschool CS Pathway.
 */
function EnrollCTA() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = function (e) {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
    setEmail("");
  };

  return (
    <section className="cta-band">
      <div className="cta-inner">
        <div className="cta-copy">
          <span className="cta-kicker">Forsyth Central Bulldogs STEM Academy</span>
          <h2 className="cta-title">Start Your Coding Journey at Forsyth Central</h2>
          <p className="cta-text">
            Join the next generation of engineers and problem-solvers in Forsyth County.
            Course registration for the upcoming semester is open to all incoming freshmen and
            upperclassmen.
          </p>
        </div>

        <div className="cta-action">
          {submitted ? (
            <div className="cta-confirm-box" role="status">
              <CheckCircle2 size={24} className="confirm-icon" />
              <div>
                <strong>Thank you!</strong>
                <p>We've sent pathway registration information to your inbox.</p>
              </div>
            </div>
          ) : (
            <form className="cta-form" onSubmit={handleSubmit}>
              <label className="sr-only" htmlFor="cta-email">
                Student or Parent Email
              </label>
              <input
                id="cta-email"
                type="email"
                className="cta-input"
                placeholder="student@forsyth.k12.ga.us"
                value={email}
                onChange={function (e) { setEmail(e.target.value); }}
                required
              />
              <button type="submit" className="btn btn-light">
                REQUEST INFO <ArrowRight size={14} />
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

export default EnrollCTA;
