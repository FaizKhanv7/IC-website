import { useEffect, useRef, useState } from "react";
import { Download, ExternalLink } from "lucide-react";

/*
 * Renders PDFs with pdf.js instead of an <iframe>. Phone browsers do not show
 * PDFs inside iframes (Android Chrome shows nothing, iOS Safari shows page 1
 * only), so this draws each page to a canvas that scales to the screen.
 * pdf.js is loaded on first use so it does not slow down the rest of the site.
 */

let pdfjsPromise = null;

function loadPdfjs() {
  if (!pdfjsPromise) {
    pdfjsPromise = Promise.all([
      import("pdfjs-dist/legacy/build/pdf.mjs"),
      import("pdfjs-dist/legacy/build/pdf.worker.min.mjs?url"),
    ]).then(function (mods) {
      mods[0].GlobalWorkerOptions.workerSrc = mods[1].default;
      return mods[0];
    });
  }
  return pdfjsPromise;
}

function PdfPages({ file, title }) {
  const hostRef = useRef(null);
  const [width, setWidth] = useState(0);
  const [status, setStatus] = useState("loading");

  // Track the container width so pages re-render crisply after rotation or resize.
  useEffect(function () {
    const el = hostRef.current;
    if (!el) return undefined;
    let timer = null;
    setWidth(Math.round(el.clientWidth));
    const observer = new ResizeObserver(function (entries) {
      clearTimeout(timer);
      timer = setTimeout(function () {
        setWidth(Math.round(entries[0].contentRect.width));
      }, 150);
    });
    observer.observe(el);
    return function () {
      clearTimeout(timer);
      observer.disconnect();
    };
  }, []);

  useEffect(function () {
    if (!width) return undefined;
    const host = hostRef.current;
    let cancelled = false;
    let loadingTask = null;
    const tasks = [];

    async function render() {
      try {
        const pdfjs = await loadPdfjs();
        loadingTask = pdfjs.getDocument({ url: file });
        const pdf = await loadingTask.promise;
        const dpr = Math.min(window.devicePixelRatio || 1, 2);
        const canvases = [];

        for (let n = 1; n <= pdf.numPages; n++) {
          const page = await pdf.getPage(n);
          if (cancelled) return;
          const base = page.getViewport({ scale: 1 });
          const viewport = page.getViewport({ scale: (width / base.width) * dpr });
          const canvas = document.createElement("canvas");
          canvas.width = Math.floor(viewport.width);
          canvas.height = Math.floor(viewport.height);
          canvas.className = "pdf-canvas";
          canvas.setAttribute("aria-label", title + ", page " + n + " of " + pdf.numPages);
          const task = page.render({ canvas, viewport });
          tasks.push(task);
          await task.promise;
          canvases.push(canvas);
        }

        if (cancelled) return;
        host.replaceChildren.apply(host, canvases);
        setStatus("ready");
      } catch (err) {
        if (!cancelled && !(err && err.name === "RenderingCancelledException")) {
          console.error("PDF preview failed:", err);
          setStatus("error");
        }
      }
    }

    render();

    return function () {
      cancelled = true;
      tasks.forEach(function (t) {
        try { t.cancel(); } catch { /* already finished */ }
      });
      if (loadingTask) {
        Promise.resolve(loadingTask.destroy()).catch(function () {});
      }
    };
  }, [file, title, width]);

  return (
    <div className="pdf-pages" role="document" aria-label={title}>
      <div ref={hostRef} className="pdf-canvas-host" />
      {status === "loading" && <p className="pdf-status">Loading PDF…</p>}
      {status === "error" && (
        <p className="pdf-status">
          The preview could not be loaded.{" "}
          <a href={file} target="_blank" rel="noreferrer">Open the PDF in a new tab</a>.
        </p>
      )}
    </div>
  );
}

/* documents: [{ id, label, title, file }]. Tabs appear when there is more than one. */
export default function PdfViewer({ documents }) {
  const [activeId, setActiveId] = useState(documents[0].id);
  const active =
    documents.find(function (d) { return d.id === activeId; }) || documents[0];

  return (
    <div className="pdf-viewer">
      {documents.length > 1 && (
        <div className="pdf-tabs" role="tablist">
          {documents.map(function (d) {
            return (
              <button
                key={d.id}
                type="button"
                role="tab"
                aria-selected={d.id === active.id}
                className={"pdf-tab" + (d.id === active.id ? " pdf-tab-active" : "")}
                onClick={function () { setActiveId(d.id); }}
              >
                {d.label}
              </button>
            );
          })}
        </div>
      )}
      <PdfPages key={active.id} file={active.file} title={active.title} />
      <div className="pdf-actions">
        <a
          className="btn btn-secondary btn-sm"
          href={active.file}
          target="_blank"
          rel="noreferrer"
        >
          <ExternalLink size={14} /> View {active.label} PDF
        </a>
        <a className="btn btn-secondary btn-sm" href={active.file} download>
          <Download size={14} /> Download
        </a>
      </div>
    </div>
  );
}
