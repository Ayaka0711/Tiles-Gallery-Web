import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import { AuthProvider } from "@/context/AuthContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "TileVerse",
  description: "A gallery of premium tiles",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {/* AuthProvider lets every page know if user is logged in */}
        <AuthProvider>
          <Navbar />
          <main style={{ minHeight: "70vh" }}>{children}</main>
          <Footer />
        </AuthProvider>

        {/* Toaster shows popup messages like "Login successful!" */}
        <Toaster position="top-right" />
      </body>
    </html>
  );
}
