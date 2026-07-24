import Contact from "@/components/contact";
import Education from "@/components/education";
import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import Presentation from "@/components/presentation";
import Projects from "@/components/projects";
import Skills from "@/components/skills";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="w-full text-center pt-32">
        <Hero />
        <Presentation />
        <Skills />
        <Projects />
        <Education />
        <Contact />
      </div>
    </>
  )
}
