"use client";

// My Profile page - shows logged-in user's info
// This is a PRIVATE page - if not logged in, user is sent to /login

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useAuth } from "@/context/AuthContext";

export default function MyProfilePage() {
  const router = useRouter();
  const { data, isPending } = useAuth();

  // If not logged in, redirect to login page
  useEffect(() => {
    if (!isPending && !data?.user) {
      router.push("/login");
    }
  }, [isPending, data, router]);

  // show loading spinner while checking login status
  if (isPending) {
    return (
      <div style={{ textAlign: "center", padding: "60px 0" }}>
        <div className="spinner"></div>
      </div>
    );
  }

  // if not logged in, show nothing (redirect happens above)
  if (!data?.user) {
    return null;
  }

  const user = data.user;

  return (
    <div className="container" style={{ padding: "40px 0", maxWidth: "500px" }}>

      <h1 style={{ fontSize: "28px", marginBottom: "24px" }}>My Profile</h1>

      <div className="card" style={{ padding: "24px", textAlign: "center" }}>

        {/* Profile picture */}
        {user.image ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={user.image}
            alt="Profile"
            style={{ width: "90px", height: "90px", borderRadius: "50%", objectFit: "cover", margin: "0 auto 16px" }}
          />
        ) : (
          <div style={{
            width: "90px", height: "90px", borderRadius: "50%",
            backgroundColor: "var(--gold)", color: "#000",
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: "32px", fontWeight: "bold",
            margin: "0 auto 16px",
          }}>
            {user.name?.[0]?.toUpperCase() || "U"}
          </div>
        )}

        {/* Name and email */}
        <h2 style={{ fontSize: "20px", marginBottom: "4px" }}>{user.name}</h2>
        <p style={{ color: "var(--muted)", marginBottom: "20px" }}>{user.email}</p>

        {/* Update profile button */}
        <Link href="/update-profile" className="btn btn-primary">
          Update Profile
        </Link>
      </div>
    </div>
  );
}
