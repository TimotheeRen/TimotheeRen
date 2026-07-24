import { AnimatedThemeToggler } from "./ui/animated-theme-toggler";

export default function Navbar() {
  return (
    <header className="top-0 left-0 right-0 flex items-center justify-between w-full pt-5 px-6">
      <span className="font-semibold">Timothee Ren</span>

      <nav className="fixed left-1/2 -translate-x-1/2 flex gap-8 bg-background/20 rounded-full border px-6 py-2 backdrop-blur-md">
        <button className="cursor-pointer">Presentation</button>
        <button className="cursor-pointer">Skills</button>
        <button className="cursor-pointer">Projects</button>
        <button className="cursor-pointer">Education</button>
        <button className="cursor-pointer">Contact</button>
      </nav>

      <AnimatedThemeToggler className="cursor-pointer" />
    </header>
  );
}
