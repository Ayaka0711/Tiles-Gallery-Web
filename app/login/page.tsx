"use client";

// Login page - lets user sign in with email/password or Google

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { signIn } from "@/lib/auth-client";
import toast from "react-hot-toast";

export default function LoginPage() {
  const router = useRouter();

  // form input values
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // called when the login form is submitted
  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();

    // check that fields are filled
    if (!email || !password) {
      toast.error("Please fill in both fields");
      return;
    }

    // try to log in using better-auth
    const result = await signIn.email({ email, password });

    if (result.error) {
      // show error message if login fails
      toast.error(result.error.message || "Login failed");
    } else {
      // login successful - go to home page
      toast.success("Logged in successfully!");
      router.push("/");
    }
  }

  // called when "Continue with Google" is clicked
  async function handleGoogleLogin() {
    await signIn.social({ provider: "google", callbackURL: "/" });
  }

  return (
    <div className="container" style={{ maxWidth: "400px", padding: "60px 0" }}>

      <h1 style={{ fontSize: "28px", marginBottom: "8px", textAlign: "center" }}>Login</h1>
      <p style={{ color: "var(--muted)", textAlign: "center", marginBottom: "30px" }}>
        Welcome back to TileVerse
      </p>

      <div className="card" style={{ padding: "24px" }}>

        {/* Login form */}
        <form onSubmit={handleLogin} style={{ display: "flex", flexDirection: "column", gap: "14px" }}>

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
            <label style={{ display: "block", marginBottom: "6px", fontSize: "13px" }}>Password</label>
            <input
              type="password"
              className="input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
            />
          </div>

          <button type="submit" className="btn btn-primary" style={{ width: "100%" }}>
            Login
          </button>
        </form>

        {/* Divider */}
        <p style={{ textAlign: "center", color: "var(--muted)", margin: "16px 0", fontSize: "13px" }}>OR</p>

        {/* Google login button */}
        <button onClick={handleGoogleLogin} className="btn btn-outline" style={{ width: "100%" }}>
          Continue with Google
        </button>
      </div>

      {/* Link to register page */}
      <p style={{ textAlign: "center", marginTop: "20px", color: "var(--muted)", fontSize: "14px" }}>
        Don&apos;t have an account?{" "}
        <Link href="/register" style={{ color: "var(--gold)" }}>Register</Link>
      </p>
    </div>
  );
}
