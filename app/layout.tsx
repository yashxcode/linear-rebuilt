import "./globals.css"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Linear - Rebuilt",
  description:
    "Linear is a purpose-built tool for planning and building products. The system for modern product development. Streamline issues, projects, and product roadmaps.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
