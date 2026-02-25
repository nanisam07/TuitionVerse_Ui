import Hero from "@/components/hero/hero"
import Pricing from "@/components/pricing/pricing"


export const metadata = {
  title: "Find Home Tutors in Dehradun | Tuitionverse",
  description:
    "Browse verified home tutors, compare ratings, and book personalized sessions in Dehradun.",
};

export default function Home() {
  return (
    <main className="flex flex-col gap-1 ">
      <Hero />
      <Pricing />
    </main>
  )
}