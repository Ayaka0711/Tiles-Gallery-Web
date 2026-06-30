"use client";

// This page shows ALL tiles and has a search bar at the top

import { useEffect, useState } from "react";
import TileCard from "@/components/TileCard";

// type for a tile
type Tile = {
  id: string;
  title: string;
  image: string;
  category: string;
  price: number;
  inStock: boolean;
  tags: string[];
};

export default function AllTilesPage() {
  const [tiles, setTiles] = useState<Tile[]>([]); // all tiles from API
  const [search, setSearch] = useState("");        // text typed in search box
  const [loading, setLoading] = useState(true);

  // when page loads, fetch tiles from our API
  useEffect(() => {
    fetch("/api/tiles")
      .then(res => res.json())
      .then(data => {
        setTiles(data);
        setLoading(false);
      });
  }, []);

  // filter tiles based on search text (title or category)
  const filteredTiles = tiles.filter(tile => {
    const text = search.toLowerCase();
    return (
      tile.title.toLowerCase().includes(text) ||
      tile.category.toLowerCase().includes(text)
    );
  });

  return (
    <div className="container" style={{ padding: "40px 0" }}>

      <h1 style={{ fontSize: "32px", marginBottom: "20px" }}>All Tiles</h1>

      {/* Search input */}
      <input
        type="text"
        placeholder="Search tiles by title or category..."
        className="input"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{ marginBottom: "30px", maxWidth: "400px" }}
      />

      {/* Show loading spinner while fetching */}
      {loading && (
        <div style={{ textAlign: "center", padding: "40px 0" }}>
          <div className="spinner"></div>
          <p style={{ marginTop: "10px", color: "var(--muted)" }}>Loading tiles...</p>
        </div>
      )}

      {/* Show "no results" if nothing matches */}
      {!loading && filteredTiles.length === 0 && (
        <p style={{ color: "var(--muted)" }}>No tiles found.</p>
      )}

      {/* Show tiles grid */}
      {!loading && filteredTiles.length > 0 && (
        <div className="tile-grid">
          {filteredTiles.map(tile => (
            <TileCard key={tile.id} tile={tile} />
          ))}
        </div>
      )}
    </div>
  );
}
