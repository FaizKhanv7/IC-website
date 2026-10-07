import { Link } from "react-router-dom"

function NotFound() {
    return (
        <main className="page page-narrow">
            <h1 className="page-title">Page not found</h1>
            <p className="page-lead">
                That page doesn't exist. It may have moved, or the link may be out of
                date.
            </p>
            <Link to="/" className="back-link">&larr; Back to home</Link>
        </main>
    )
}

export default NotFound
