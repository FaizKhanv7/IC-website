import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { faqs } from "../data/faq";

export default function Faq() {
  const [open, setOpen] = useState(null);

  return (
    <section className="faq" aria-labelledby="faq-heading">
      <p className="page-eyebrow">Questions</p>
      <h2 className="page-heading" id="faq-heading">Frequently Asked Questions</h2>

      <div className="faq-list">
        {faqs.map(function (item, i) {
          const isOpen = open === i;
          return (
            <div key={item.q} className={"faq-item" + (isOpen ? " faq-open" : "")}>
              <h3 className="faq-q">
                <button
                  type="button"
                  id={"faq-btn-" + i}
                  className="faq-btn"
                  aria-expanded={isOpen}
                  aria-controls={"faq-panel-" + i}
                  onClick={function () { setOpen(isOpen ? null : i); }}
                >
                  <span>{item.q}</span>
                  <ChevronDown size={18} className="faq-chevron" aria-hidden="true" />
                </button>
              </h3>
              <div
                id={"faq-panel-" + i}
                role="region"
                aria-labelledby={"faq-btn-" + i}
                className="faq-panel"
              >
                <div className="faq-panel-inner">
                  <p>{item.a}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
