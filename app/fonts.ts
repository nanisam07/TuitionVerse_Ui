import { Inter, Caveat,  Dancing_Script } from "next/font/google"

export const inter = Inter({
  subsets: ["latin"],
})

export const caveat = Caveat({
  subsets: ["latin"],
  weight: ["600", "700"],
})

export const dancingscript = Dancing_Script({
  subsets: ["latin"],
  weight: "500",
  variable: "--font-dancingscript",
})