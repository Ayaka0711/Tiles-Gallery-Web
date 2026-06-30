// This page shows when someone visits a page that doesn't exist

import Link from "next/link";

export default function NotFound() {
  return (
    <div className="container" style={{ padding: "100px 0", textAlign: "center" }}>
      <h1 style={{ fontSize: "60px", color: "var(--gold)" }}>404</h1>
      <p style={{ color: "var(--muted)", margin: "16px 0 24px" }}>
        Sorry, this page doesn&apos;t exist.
      </p>
      <Link href="/" className="btn btn-primary">Go to Home</Link>
    </div>
  );
}
