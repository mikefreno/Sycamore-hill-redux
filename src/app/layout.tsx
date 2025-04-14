import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sycamore Hill Vineyard",
  description: "A New Jersey Family Vineyard",
  openGraph: {
    type: "website",
    url: "https://www.sycamorehillnj.com/",
    title: "Sycamore Hill Vineyard",
    description: "A New Jersey Family Vineyard",
    images: [
      {
        url: "https://www.sycamorehillnj.com/video-first-frame.jpg", // Absolute URL required
        width: 1280,
        height: 720,
        alt: "Hero Image",
      },
    ],
  },
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      {
        rel: "mask-icon",
        url: "/safari-pinned-tab.svg",
        color: "#84cc16",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="preload"
          as="image"
          href="/video-first-frame.jpg"
          type="image/jpeg"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased overflow-hidden"`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
