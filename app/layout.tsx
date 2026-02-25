import "./globals.css"
import { inter, dancingscript } from "./fonts"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.className}${dancingscript.variable}`}>
      <body>{children}</body>
    </html>
  )
}