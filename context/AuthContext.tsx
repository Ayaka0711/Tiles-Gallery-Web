"use client";

// This file shares "who is logged in" with every page in our app.
// We just wrap better-auth's useSession hook.

import { createContext, useContext } from "react";
import { useSession } from "@/lib/auth-client";

// create an empty context first
const AuthContext = createContext<ReturnType<typeof useSession> | null>(null);

// This wraps the whole app (used in layout.tsx)
export function AuthProvider({ children }: { children: React.ReactNode }) {
  const session = useSession();
  return <AuthContext.Provider value={session}>{children}</AuthContext.Provider>;
}

// Any page can call this to get { data, isPending }
export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used inside AuthProvider");
  return context;
}
