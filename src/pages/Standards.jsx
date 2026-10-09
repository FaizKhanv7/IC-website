import { FileText } from "lucide-react";

function Standards({ standardNumber }) {
  return (
    <main className="page page-medium">
      <header className="page-header-center">
        <p className="page-eyebrow">Computer Science Pathway</p>
        <h1 className="page-title">Standard {standardNumber}</h1>
        <p className="page-lead">
          Reference document for Standard {standardNumber}.
        </p>
      </header>

      <section className="page-section" aria-label={"Standard " + standardNumber + " document"}>
        <article className="standards-document">
          <FileText className="standards-document-icon" size={22} aria-hidden="true" />
          <div className="standards-document-content">
            <h2>Standard {standardNumber} document</h2>
            <p>The document for Standard {standardNumber} will be added here.</p>
          </div>
          <span className="standards-document-status">Coming soon</span>
        </article>
      </section>
    </main>
  );
}

export default Standards;
