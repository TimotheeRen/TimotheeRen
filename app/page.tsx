import Hero from "@/components/hero";
import Navbar from "@/components/navbar";

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="w-full text-center pt-48">
        <Hero />
      </div>
    </div>
  )
}
