import "./globals.css"
import type { Metadata } from "next"
import { Container } from "@/components/container"
import { Header } from "@/components/header"

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
          <footer>
            <Container>Footer</Container>
          </footer>
        </div>
      </body>
    </html>
  )
}
