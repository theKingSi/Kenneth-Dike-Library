import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "UI Library - Discover Knowledge Beyond Limits",
  description:
    "Step into a world where tradition meets innovation. Our library is more than books—it's your gateway to endless possibilities.",
  keywords: ["library", "university", "books", "research", "education", "digital resources"],
  authors: [{ name: "UI Library" }],
  openGraph: {
    title: "UI Library - Discover Knowledge Beyond Limits",
    description:
      "Step into a world where tradition meets innovation. Our library is more than books—it's your gateway to endless possibilities.",
    type: "website",
    locale: "en_US",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
