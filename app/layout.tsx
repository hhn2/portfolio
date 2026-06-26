import "../styles/globals.css"
import { Inter, Inconsolata, Space_Grotesk } from "@next/font/google"
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

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
})

export const metadata = {
  title: "Hannah Hwang — Computer Science",
  description:
    "Hannah Hwang — Computer Science student at the University of Waterloo. Software engineering, projects, and experience.",
  icons: { icon: "/appleprofile.png" },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${inconsolata.variable} ${spaceGrotesk.variable} bg-background`}
    >
      <head>
        <meta name="theme-color" content="#f7f9fb" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="font-sans antialiased text-foreground">
        <CustomCursor />
        <Navbar />
        {children}
      </body>
    </html>
  )
}
