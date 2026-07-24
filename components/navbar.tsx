"use client"

import { motion } from "motion/react";
import { AnimatedThemeToggler } from "./ui/animated-theme-toggler";
import { useTheme } from "next-themes";

export default function Navbar() {
  const { resolvedTheme, setTheme } = useTheme();
  if (!resolvedTheme) return null;

  return (
    <header className="top-0 left-0 right-0 flex items-center justify-between w-full pt-5 px-6 z-10">
      <motion.span initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.75, type: "spring", stiffness: 100, delay: 0.7 }} className="font-semibold">Timothee Ren</motion.span>

      <motion.nav initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.75, type: "spring", stiffness: 100, delay: 0.5 }} className="z-10 fixed left-1/2 -translate-x-1/2 hidden md:flex gap-8 bg-background/20 rounded-full border px-6 py-2 backdrop-blur-md">
        <a href="#presentation"><button className="cursor-pointer">Presentation</button></a>
        <a href="#skills"><button className="cursor-pointer">Skills</button></a>
        <a href="#projects"><button className="cursor-pointer">Projects</button></a>
        <a href="#education"><button className="cursor-pointer">Education</button></a>
        <a href="#contact"><button className="cursor-pointer">Contact</button></a>
      </motion.nav>

      <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.75, type: "spring", stiffness: 100, delay: 0.7 }}>
        <AnimatedThemeToggler className="cursor-pointer" theme={resolvedTheme as "light" | "dark"}
          onThemeChange={setTheme}
        />
      </motion.div>
    </header>
  );
}
