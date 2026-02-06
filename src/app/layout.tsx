import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "LensCraft | Professional Photography Portfolio",
  description: "Award-winning photography portfolio showcasing stunning visual storytelling. Specializing in portraits, landscapes, and events.",
  keywords: ["photography", "portfolio", "professional photographer", "visual art", "portraits", "landscape photography"],
  authors: [{ name: "Alex Morgan" }],
  openGraph: {
    title: "LensCraft | Professional Photography Portfolio",
    description: "Award-winning photography portfolio showcasing stunning visual storytelling.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} ${playfair.variable} antialiased`}
        style={{ fontFamily: "var(--font-inter), system-ui, sans-serif" }}
      >
        <SmoothScroll>
          <Navbar />
          {children}
          <Footer />
        </SmoothScroll>
        <div className="grain" />
      </body>
    </html>
  );
}
