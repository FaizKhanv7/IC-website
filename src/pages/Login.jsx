import { useState } from "react";
import { Link } from "react-router-dom";
import { Lock, Mail, ShieldCheck, ArrowRight, Info } from "lucide-react";

function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleChange = function (e) {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError("");
  };

  const handleSubmit = function (e) {
    e.preventDefault();
    if (!form.email || !form.password) {
      setError("Please enter both your Forsyth County school email and password.");
      return;
    }
    setError("");
    setSuccess(true);
  };

  return (
    <main className="page page-narrow">
      <div className="login-card-container">
        <div className="login-card-header">
          <div className="login-shield-badge">
            <ShieldCheck size={28} />
          </div>
          <p className="page-eyebrow">Forsyth Central Highschool &bull; Forsyth County</p>
          <h1 className="page-title">Student &amp; Faculty Portal</h1>
          <p className="page-lead">
            Sign in with your Forsyth County Schools account to view course materials,
            submit lab repositories, and track your pathway milestone credentials.
          </p>
        </div>

        {success ? (
          <div className="login-success-box">
            <ShieldCheck size={48} className="success-icon" />
            <h3>Authenticated Successfully</h3>
            <p>Welcome back! Redirecting you to the Forsyth Central CS student dashboard...</p>
            <Link to="/courses" className="btn btn-primary">
              Continue to Courses <ArrowRight size={16} />
            </Link>
          </div>
        ) : (
          <form className="login-form" onSubmit={handleSubmit}>
            <div className="form-field">
              <label htmlFor="email">Forsyth County School Email</label>
              <div className="input-with-icon">
                <Mail size={18} className="field-icon" />
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="student@forsyth.k12.ga.us"
                  autoComplete="username"
                  required
                />
              </div>
            </div>

            <div className="form-field">
              <label htmlFor="password">District Account Password</label>
              <div className="input-with-icon">
                <Lock size={18} className="field-icon" />
                <input
                  id="password"
                  name="password"
                  type="password"
                  value={form.password}
                  onChange={handleChange}
                  placeholder="••••••••••••"
                  autoComplete="current-password"
                  required
                />
              </div>
            </div>

            {error && <p className="form-error" role="alert">{error}</p>}

            <button type="submit" className="btn btn-primary btn-block">
              Sign In to CS Portal
            </button>

            <div className="portal-hint-box">
              <Info size={16} className="hint-icon" />
              <span>
                Use your official Forsyth County Schools credentials (ClassLink / MyFCS).
              </span>
            </div>
          </form>
        )}

        <div className="login-support-footer">
          <p>
            Need help accessing your pathway coursework? Reach out to your CS instructor in
            Room 412 or contact the Forsyth Central STEM Academy front desk.
          </p>
        </div>
      </div>
    </main>
  );
}

export default Login;
