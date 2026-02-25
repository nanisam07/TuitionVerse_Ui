import Hero from "@/components/hero/hero"
import Pricing from "@/components/pricing/pricing"

export default function Home() {
  return (
    <main className="flex flex-col gap-1 ">
      <Hero />
      <Pricing />
    </main>
  )
}