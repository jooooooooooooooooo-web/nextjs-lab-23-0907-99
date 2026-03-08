import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";

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
          <a href="/about" style={{ margin: "0 10px", textDecoration: "none", color: "#333" }}>About</a>
          <a href="/contact" style={{ margin: "0 10px", textDecoration: "none", color: "#333" }}>Contact</a>
        </nav>
        <main>{children}</main>
      </body>
    </html>
  );
}