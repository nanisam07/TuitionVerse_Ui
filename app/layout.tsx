import "./globals.css"
import { inter, dancingscript } from "./fonts"
import Navbar from "@/components/navbar/navbar"


export const metadata = {
  title: "Tuitionverse – Find the Perfect Home Tutor in Dehradun",
  description:
    "Connecting students with verified, local home tutors for personalized learning in Dehradun.",
  keywords: [
    "home tutor in Dehradun",
    "private tutor",
    "Tuitionverse",
    "find tutors near me",
    "personalized learning",
  ],
  authors: [{ name: "Tuitionverse" }],
  creator: "Tuitionverse",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.className}${dancingscript.variable}`}>
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  )
}