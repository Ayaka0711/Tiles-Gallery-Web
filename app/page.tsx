// Home page - shows a banner, scrolling text, and 4 featured tiles

import Link from "next/link";
import tiles from "@/data/tiles.json";
import TileCard from "@/components/TileCard";

export default function HomePage() {
  // take the first 4 tiles as "featured"
  const featuredTiles = tiles.slice(0, 4);

  return (
    <div>
      {/* ===== BANNER SECTION ===== */}
      <section style={{ padding: "80px 0", textAlign: "center" }}>
        <div className="container">
          <span className="badge" style={{ marginBottom: "16px" }}>Premium Tile Gallery</span>

          <h1 style={{ fontSize: "48px", margin: "20px 0", lineHeight: "1.2" }}>
            Discover Your<br />
            <span style={{ color: "var(--gold)" }}>Perfect Aesthetic</span>
          </h1>

          <p style={{ color: "var(--muted)", maxWidth: "500px", margin: "0 auto 30px" }}>
            Browse our collection of {tiles.length} premium tiles - from ceramic to marble, modern to vintage.
          </p>

          <Link href="/all-tiles" className="btn btn-primary">Browse Now →</Link>
        </div>
      </section>

      {/* ===== SCROLLING MARQUEE TEXT ===== */}
      <div style={{
        borderTop: "1px solid var(--border)",
        borderBottom: "1px solid var(--border)",
        padding: "12px 0",
        overflow: "hidden",
        whiteSpace: "nowrap",
      }}>
        <div style={{
          display: "inline-block",
          animation: "scroll-left 20s linear infinite",
          color: "var(--muted)",
          fontSize: "13px",
        }}>
          New Arrivals: Moroccan Zellige Green &nbsp;|&nbsp; Weekly Feature: Modern Geometric Patterns &nbsp;|&nbsp; Join the Community &nbsp;|&nbsp; New Arrivals: Moroccan Zellige Green &nbsp;|&nbsp; Weekly Feature: Modern Geometric Patterns &nbsp;|&nbsp; Join the Community
        </div>
      </div>

      {/* CSS animation for marquee */}
      <style>{`
        @keyframes scroll-left {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>

      {/* ===== FEATURED TILES SECTION ===== */}
      <section className="container" style={{ padding: "60px 0" }}>
        <h2 style={{ fontSize: "28px", marginBottom: "24px" }}>Featured Tiles</h2>

        <div className="tile-grid">
          {featuredTiles.map(tile => (
            <TileCard key={tile.id} tile={tile} />
          ))}
        </div>
      </section>
    </div>
  );
}
