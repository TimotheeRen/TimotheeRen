"use client"

import { motion } from "motion/react";
import { TextAnimate } from "./ui/text-animate";

export default function Presentation() {
  return (
    <div id="presentation">
      <motion.h1 initial={{ opacity: 0, y: 20 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 0.5, ease: "easeInOut" }} viewport={{ once: true }} className="mt-48 mb-3 text-5xl font-bold">About <span className="text-primary">me</span></motion.h1>
      <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 0.5, ease: "easeInOut", delay: 0.05 }} viewport={{ once: true }} className="mb-4 text-lg text-muted-foreground">A quick presentation</motion.p>
      <TextAnimate className="text-xl px-10" animation="blurIn" duration={1} once={true}>
        Self-taught, with over 6 years of technical experience in computer science and 2 in the DevOps field. Proven skills in full-stack programming, Linux administration, networking, infrastructure as code, CI/CD pipeline management, security, virtualization, container orchestration, and monitoring through large-scale projects.
      </TextAnimate>
    </div>
  )
}

