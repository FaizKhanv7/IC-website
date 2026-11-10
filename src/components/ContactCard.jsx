import { CalendarClock, Mail, User } from "lucide-react";

/*
 * Details come from the 2026-27 syllabi. The syllabi list no classroom number
 * or office hours, so none are shown; add them here once confirmed.
 */
const CONTACT = {
  name: "Daphne John",
  role: "Teacher: AP CSP, AP CSA, and PGAS",
  email: "dajohn@forsyth.k12.ga.us",
  help: "Extra help is available during Dawg Time every week.",
};

export default function ContactCard() {
  const subject = encodeURIComponent("CS Pathway question");

  return (
    <section className="contact-card" aria-labelledby="contact-heading">
      <div className="contact-card-main">
        <p className="page-eyebrow">Get in touch</p>
        <h2 className="page-heading" id="contact-heading">Questions about the pathway?</h2>
        <p className="page-text">
          Students, parents, and counselors are welcome to email with questions about
          courses or scheduling.
        </p>
      </div>

      <ul className="contact-card-details">
        <li>
          <User size={18} aria-hidden="true" />
          <div>
            <strong>{CONTACT.name}</strong>
            <span>{CONTACT.role}</span>
          </div>
        </li>
        <li>
          <Mail size={18} aria-hidden="true" />
          <div>
            <strong>Email</strong>
            <a href={"mailto:" + CONTACT.email + "?subject=" + subject}>{CONTACT.email}</a>
          </div>
        </li>
        <li>
          <CalendarClock size={18} aria-hidden="true" />
          <div>
            <strong>Extra help</strong>
            <span>{CONTACT.help}</span>
          </div>
        </li>
      </ul>

      <a
        className="btn btn-primary"
        href={"mailto:" + CONTACT.email + "?subject=" + subject}
      >
        <Mail size={16} /> Email {CONTACT.name}
      </a>
    </section>
  );
}
