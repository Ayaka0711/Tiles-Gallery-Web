"use client";

// This page shows full details of one tile.
// It is a PRIVATE page - only logged-in users can see it.

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import { useAuth } from "@/context/AuthContext";

// type for a tile
type Tile = {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
  price: number;
  dimensions: string;
  material: string;
  inStock: boolean;
  tags: string[];
  creator: string;
};

export default function TileDetailsPage() {
  const params = useParams();
  const router = useRouter();
  const { data, isPending } = useAuth(); // check if user is logged in

  const [tile, setTile] = useState<Tile | null>(null);
  const [loading, setLoading] = useState(true);

  // STEP 1: check if user is logged in. If not, send to login page.
  useEffect(() => {
    if (!isPending && !data?.user) {
      router.push("/login");
    }
  }, [isPending, data, router]);

  // STEP 2: fetch the tile data and find the one matching the URL id
  useEffect(() => {
    fetch("/api/tiles")
      .then(res => res.json())
      .then((allTiles: Tile[]) => {
        const found = allTiles.find(t => t.id === params.id);
        setTile(found || null);
        setLoading(false);
      });
  }, [params.id]);

  // Show loading spinner while checking login or fetching data
  if (isPending || loading) {
    return (
      <div style={{ textAlign: "center", padding: "60px 0" }}>
        <div className="spinner"></div>
      </div>
    );
  }

  // If not logged in, show nothing (redirect already happening)
  if (!data?.user) {
    return null;
  }

  // If tile not found
  if (!tile) {
    return (
      <div className="container" style={{ padding: "60px 0", textAlign: "center" }}>
        <h2>Tile not found</h2>
        <Link href="/all-tiles" className="btn btn-primary" style={{ marginTop: "16px" }}>
          Back to Gallery
        </Link>
      </div>
    );
  }

  // Show tile details
  return (
    <div className="container" style={{ padding: "40px 0" }}>

      {/* Breadcrumb */}
      <p style={{ color: "var(--muted)", fontSize: "13px", marginBottom: "20px" }}>
        <Link href="/" style={{ color: "var(--muted)" }}>Home</Link> {" / "}
        <Link href="/all-tiles" style={{ color: "var(--muted)" }}>All Tiles</Link> {" / "}
        <span style={{ color: "var(--gold)" }}>{tile.title}</span>
      </p>

      {/* Two-column layout: image left, details right */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "30px" }}>

        {/* Left - Image */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={tile.image}
          alt={tile.title}
          style={{ width: "100%", borderRadius: "12px", objectFit: "cover" }}
        />

        {/* Right - Details */}
        <div>
          <span className="badge">{tile.category}</span>

          <h1 style={{ fontSize: "28px", margin: "12px 0" }}>{tile.title}</h1>

          <p style={{ color: "var(--muted)", marginBottom: "6px" }}>
            By <span style={{ color: "var(--gold)" }}>{tile.creator}</span>
          </p>

          <p style={{ color: "var(--muted)", lineHeight: "1.6", margin: "16px 0" }}>
            {tile.description}
          </p>

          {/* Price */}
          <p style={{ fontSize: "24px", color: "var(--gold)", fontWeight: "bold", marginBottom: "16px" }}>
            ${tile.price}
          </p>

          {/* Specs */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px", marginBottom: "16px" }}>
            <div className="card" style={{ padding: "10px" }}>
              <p style={{ color: "var(--muted)", fontSize: "12px" }}>Material</p>
              <p>{tile.material}</p>
            </div>
            <div className="card" style={{ padding: "10px" }}>
              <p style={{ color: "var(--muted)", fontSize: "12px" }}>Dimensions</p>
              <p>{tile.dimensions}</p>
            </div>
            <div className="card" style={{ padding: "10px" }}>
              <p style={{ color: "var(--muted)", fontSize: "12px" }}>Stock</p>
              <p>{tile.inStock ? "In Stock" : "Out of Stock"}</p>
            </div>
          </div>

          {/* Tags */}
          <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", marginBottom: "20px" }}>
            {tile.tags.map(tag => (
              <span key={tag} className="badge">{tag}</span>
            ))}
          </div>

          <Link href="/all-tiles" className="btn btn-outline">← Back to Gallery</Link>
        </div>
      </div>
    </div>
  );
}
