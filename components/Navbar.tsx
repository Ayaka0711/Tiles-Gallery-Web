"use client";

// Top navigation bar - shows on every page

import Link from "next/link";
import { useAuth } from "@/context/AuthContext";
import { signOut } from "@/lib/auth-client";

export default function Navbar() {
  // get current user from our auth context
  const { data } = useAuth();
  const user = data?.user;

  // function to log out
  async function handleLogout() {
    await signOut();
    window.location.href = "/"; // go back to home and refresh
  }

  return (
    <nav style={{
      borderBottom: "1px solid var(--border)",
      padding: "16px 0",
      position: "sticky",
      top: 0,
      backgroundColor: "var(--bg)",
      zIndex: 50,
    }}>
      <div className="container" style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>

        {/* Logo - left side */}
        <Link href="/" style={{ textDecoration: "none", color: "var(--text)", fontSize: "20px", fontWeight: "bold" }}>
          Tiles<span style={{ color: "var(--gold)" }}>Gallery</span>
        </Link>

        {/* Links - center */}
        <div style={{ display: "flex", gap: "20px" }}>
          <Link href="/" style={{ color: "var(--muted)", textDecoration: "none" }}>Home</Link>
          <Link href="/all-tiles" style={{ color: "var(--muted)", textDecoration: "none" }}>All Tiles</Link>
          <Link href="/my-profile" style={{ color: "var(--muted)", textDecoration: "none" }}>My Profile</Link>
        </div>

        {/* Right side - login/logout */}
        <div>
          {user ? (
            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <span style={{ fontSize: "14px" }}>{user.name}</span>
              <button onClick={handleLogout} className="btn btn-outline">Logout</button>
            </div>
          ) : (
            <Link href="/login" className="btn btn-primary">Login</Link>
          )}
        </div>
      </div>
    </nav>
  );
}
