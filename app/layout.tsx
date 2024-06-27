import "./globals.css"
import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Linear - Plan and build products",
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
      <head>
        <meta
          name="viewport"
          content="width=device-width, height=device-height, initial-scale=1"
        />
      </head>
      <body>
        <div>
          <Header />
          <main className="pt-navigation-height">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
