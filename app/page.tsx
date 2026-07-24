import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import Presentation from "@/components/presentation";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="w-full text-center pt-32">
        <Hero />
        <Presentation />
      </div>
    </>
  )
}
