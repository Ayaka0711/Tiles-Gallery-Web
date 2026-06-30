"use client";

// Register page - lets new users create an account

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { signUp, signIn } from "@/lib/auth-client";
import toast from "react-hot-toast";

export default function RegisterPage() {
  const router = useRouter();

  // form input values
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [photoUrl, setPhotoUrl] = useState("");
  const [password, setPassword] = useState("");

  // called when register form is submitted
  async function handleRegister(e: React.FormEvent) {
    e.preventDefault();

    // basic validation
    if (!name || !email || !password) {
      toast.error("Please fill in all required fields");
      return;
    }

    // try to create account using better-auth
    const result = await signUp.email({
      name,
      email,
      password,
      image: photoUrl, // photo url is optional
    });

    if (result.error) {
      toast.error(result.error.message || "Registration failed");
    } else {
      toast.success("Account created! Please login.");
      router.push("/login");
    }
  }

  // called when "Continue with Google" is clicked
  async function handleGoogleSignup() {
    await signIn.social({ provider: "google", callbackURL: "/" });
  }

  return (
    <div className="container" style={{ maxWidth: "400px", padding: "60px 0" }}>

      <h1 style={{ fontSize: "28px", marginBottom: "8px", textAlign: "center" }}>Register</h1>
      <p style={{ color: "var(--muted)", textAlign: "center", marginBottom: "30px" }}>
        Create your TileVerse account
      </p>

      <div className="card" style={{ padding: "24px" }}>

        {/* Register form */}
        <form onSubmit={handleRegister} style={{ display: "flex", flexDirection: "column", gap: "14px" }}>

          <div>
            <label style={{ display: "block", marginBottom: "6px", fontSize: "13px" }}>Name</label>
            <input
              type="text"
              className="input"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your name"
            />
          </div>

          <div>
            <label style={{ display: "block", marginBottom: "6px", fontSize: "13px" }}>Email</label>
            <input
              type="email"
              className="input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label style={{ display: "block", marginBottom: "6px", fontSize: "13px" }}>Photo URL (optional)</label>
            <input
              type="text"
              className="input"
              value={photoUrl}
              onChange={(e) => setPhotoUrl(e.target.value)}
              placeholder="https://example.com/photo.jpg"
            />
          </div>

          <div>
            <label style={{ display: "block", marginBottom: "6px", fontSize: "13px" }}>Password</label>
            <input
              type="password"
              className="input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="At least 8 characters"
            />
          </div>

          <button type="submit" className="btn btn-primary" style={{ width: "100%" }}>
            Register
          </button>
        </form>

        {/* Divider */}
        <p style={{ textAlign: "center", color: "var(--muted)", margin: "16px 0", fontSize: "13px" }}>OR</p>

        {/* Google signup button */}
        <button onClick={handleGoogleSignup} className="btn btn-outline" style={{ width: "100%" }}>
          Continue with Google
        </button>
      </div>

      {/* Link to login page */}
      <p style={{ textAlign: "center", marginTop: "20px", color: "var(--muted)", fontSize: "14px" }}>
        Already have an account?{" "}
        <Link href="/login" style={{ color: "var(--gold)" }}>Login</Link>
      </p>
    </div>
  );
}
