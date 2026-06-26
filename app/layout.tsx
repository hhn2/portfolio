import "../styles/globals.css"
import type { Metadata, Viewport } from "next"
import { Inter, Inconsolata } from "@next/font/google"
import Navbar from "@/components/Navbar"
import CustomCursor from "@/components/CustomCursor"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
})

const inconsolata = Inconsolata({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Hannah Hwang — Computer Science",
  description:
    "Hannah Hwang — Computer Science student at the University of Waterloo. Software engineering, projects, and experience.",
  icons: { icon: "/appleprofile.png" },
}

export const viewport: Viewport = {
  themeColor: "#fafaf7",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${inconsolata.variable} bg-background`}
    >
      <body className="font-sans antialiased text-foreground">
        <CustomCursor />
        <Navbar />
        {children}
      </body>
    </html>
  )
}
