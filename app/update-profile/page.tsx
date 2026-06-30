"use client";

// Update Profile page - lets logged-in user change their name and photo
// This is a PRIVATE page - if not logged in, user is sent to /login

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import { authClient } from "@/lib/auth-client";
import toast from "react-hot-toast";

export default function UpdateProfilePage() {
  const router = useRouter();
  const { data, isPending } = useAuth();

  // form input values
  const [name, setName] = useState("");
  const [image, setImage] = useState("");

  // If not logged in, redirect to login page
  useEffect(() => {
    if (!isPending && !data?.user) {
      router.push("/login");
    }
  }, [isPending, data, router]);

  // When user data loads, fill the form with current values
  useEffect(() => {
    if (data?.user) {
      setName(data.user.name || "");
      setImage(data.user.image || "");
    }
  }, [data]);

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

  // called when form is submitted
  async function handleUpdate(e: React.FormEvent) {
    e.preventDefault();

    // use better-auth to update the user info
    const result = await authClient.updateUser({
      name: name,
      image: image,
    });

    if (result.error) {
      toast.error(result.error.message || "Update failed");
    } else {
      toast.success("Profile updated!");
      router.push("/my-profile");
    }
  }

  return (
    <div className="container" style={{ padding: "40px 0", maxWidth: "450px" }}>

      <h1 style={{ fontSize: "28px", marginBottom: "24px" }}>Update Information</h1>

      <div className="card" style={{ padding: "24px" }}>
        <form onSubmit={handleUpdate} style={{ display: "flex", flexDirection: "column", gap: "14px" }}>

          {/* Name field */}
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

          {/* Image URL field */}
          <div>
            <label style={{ display: "block", marginBottom: "6px", fontSize: "13px" }}>Photo URL</label>
            <input
              type="text"
              className="input"
              value={image}
              onChange={(e) => setImage(e.target.value)}
              placeholder="https://example.com/photo.jpg"
            />
          </div>

          <button type="submit" className="btn btn-primary" style={{ width: "100%" }}>
            Update Information
          </button>
        </form>
      </div>
    </div>
  );
}
