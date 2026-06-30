// This shows one tile as a card with image, title, price and a details button

import Link from "next/link";

// type for a tile object
type Tile = {
  id: string;
  title: string;
  image: string;
  category: string;
  price: number;
  inStock: boolean;
};

export default function TileCard({ tile }: { tile: Tile }) {
  return (
    <div className="card" style={{ overflow: "hidden" }}>

      {/* Image */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={tile.image}
        alt={tile.title}
        style={{ width: "100%", height: "160px", objectFit: "cover" }}
      />

      {/* Content */}
      <div style={{ padding: "14px" }}>
        <span className="badge" style={{ marginBottom: "8px" }}>{tile.category}</span>

        <h3 style={{ fontSize: "16px", margin: "8px 0" }}>{tile.title}</h3>

        {!tile.inStock && (
          <p style={{ color: "#ef4444", fontSize: "12px", marginBottom: "8px" }}>Out of Stock</p>
        )}

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "10px" }}>
          <span style={{ color: "var(--gold)", fontWeight: "bold" }}>${tile.price}</span>
          <Link href={`/tile/${tile.id}`} className="btn btn-outline">View Details</Link>
        </div>
      </div>
    </div>
  );
}
