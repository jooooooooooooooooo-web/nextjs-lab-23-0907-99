import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { useCart } from "../lib/cart-context";
import cartsummary from "../components/cart-summary";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Next App For CSPE2300 By Jopfel Gafate",
  description: "NextJS project for assignment",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <nav style={{ backgroundColor: "#f0f0f0", padding: "10px", textAlign: "center" }}>
          <Link href="/" style={{ margin: "0 10px", textDecoration: "none", color: "#333" }}>Home</Link>
          <Link href="/posts" style={{ margin: "0 10px", textDecoration: "none", color: "#333" }}>Posts</Link>
          <Link href="/contact" style={{ margin: "0 10px", textDecoration: "none", color: "#333" }}>Contact</Link>
        </nav>
        <main style={{flex:1}}>{children}</main>
        <footer style={{ backgroundColor: "#f0f0f0", padding: "10px", textAlign: "center", color: "black" }}>
        <p>© {new Date().getFullYear()} All rights reserved</p>
        </footer>
      </body>
    </html>
  );
}