// Simple footer shown at the bottom of every page

import Link from "next/link";

export default function Footer() {
  return (
    <footer style={{ borderTop: "1px solid var(--border)", marginTop: "60px", padding: "30px 0" }}>
      <div className="container" style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: "20px" }}>

        {/* left - brand */}
        <div>
          <p style={{ fontWeight: "bold", marginBottom: "8px" }}>
            Tile<span style={{ color: "var(--gold)" }}>Verse</span>
          </p>
          <p style={{ color: "var(--muted)", fontSize: "13px" }}>
            Premium tiles for every space.
          </p>
        </div>

        {/* middle - links */}
        <div>
          <p style={{ color: "var(--gold)", fontSize: "12px", marginBottom: "8px" }}>LINKS</p>
          <Link href="/" style={{ display: "block", color: "var(--muted)", fontSize: "13px", marginBottom: "4px" }}>Home</Link>
          <Link href="/all-tiles" style={{ display: "block", color: "var(--muted)", fontSize: "13px" }}>All Tiles</Link>
        </div>

        {/* right - contact */}
        <div>
          <p style={{ color: "var(--gold)", fontSize: "12px", marginBottom: "8px" }}>CONTACT US</p>
          <p style={{ color: "var(--muted)", fontSize: "13px" }}>hello@tileverse.com</p>
          <p style={{ color: "var(--muted)", fontSize: "13px" }}>Dhaka, Bangladesh</p>
        </div>
      </div>

      <p style={{ textAlign: "center", color: "var(--muted)", fontSize: "12px", marginTop: "30px" }}>
        © 2025 TileVerse
      </p>
    </footer>
  );
}
