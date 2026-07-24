"use client"

import { motion } from "motion/react";
import { AnimatedThemeToggler } from "./ui/animated-theme-toggler";

export default function Navbar() {
  return (
    <header className="top-0 left-0 right-0 flex items-center justify-between w-full pt-5 px-6">
      <motion.span initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.75, type: "spring", stiffness: 100, delay: 0.7 }} className="font-semibold">Timothee Ren</motion.span>

      <motion.nav initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.75, type: "spring", stiffness: 100, delay: 0.5 }} className="fixed left-1/2 -translate-x-1/2 flex gap-8 bg-background/20 rounded-full border px-6 py-2 backdrop-blur-md">
        <button className="cursor-pointer">Presentation</button>
        <button className="cursor-pointer">Skills</button>
        <button className="cursor-pointer">Projects</button>
        <button className="cursor-pointer">Education</button>
        <button className="cursor-pointer">Contact</button>
      </motion.nav>

      <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.75, type: "spring", stiffness: 100, delay: 0.7 }}>
        <AnimatedThemeToggler className="cursor-pointer" />
      </motion.div>
    </header>
  );
}
