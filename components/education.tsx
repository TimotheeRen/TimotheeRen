"use client"

import { IconBuilding, IconCalendar } from "@tabler/icons-react";
import { motion } from "motion/react";

const experiences = [
  {
    title: "Highschool",
    company: "Saint Charles Highschool Orleans",
    period: "Since 09/01/2024",
  },
  {
    title: "All AWS Educate badges",
    company: "AWS Educate",
    period: "2026",
    description:
      "https://www.credly.com/users/timothee-ren/badges/credly",
  },
  {
    title: "IT maintenance team Internship",
    company: "Amazon OR1",
    period: "In 2024 (1 week), and 2025 (2 weeks)",
  },
];


export default function Education() {
  return (
    <div id="education">
      <motion.h1 initial={{ opacity: 0, y: 20 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 0.5, ease: "easeInOut" }} viewport={{ once: true }} className="mt-32 mb-3 text-5xl font-bold">Educations and <span className="text-primary">Certifications</span></motion.h1>
      <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 0.5, ease: "easeInOut", delay: 0.05 }} viewport={{ once: true }} className="mb-4 text-lg text-muted-foreground">My educational background and certifications I passed</motion.p>
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 0.5, ease: "easeInOut", delay: 0.1 }} viewport={{ once: true }} className="mx-auto max-w-(--breakpoint-sm) px-6 py-6 md:pb-20">
        <div className="relative ml-3 text-left">
          <div className="absolute top-4 bottom-0 left-0 border-l-2" />

          {experiences.map(
            ({ company, description, period, title }, index) => (
              <div className="relative pb-12 pl-8 last:pb-0" key={index}>
                <div className="absolute top-3 left-px h-3 w-3 -translate-x-1/2 rounded-full border-2 border-primary bg-background" />

                <div className="space-y-3">
                  <div className="flex items-center gap-2.5">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-accent">
                      <IconBuilding />
                    </div>
                    <span className="font-medium text-base">{company}</span>
                  </div>
                  <div>
                    <h3 className="font-medium text-xl tracking-[-0.01em]">
                      {title}
                    </h3>
                    <div className="mt-2 flex items-center gap-2 text-sm">
                      <IconCalendar className="h-4 w-4" />
                      <span>{period}</span>
                    </div>
                  </div>
                  <a className="text-pretty text-muted-foreground text-sm sm:text-base" href={description} target="_blank">
                    {description}
                  </a>
                </div>
              </div>
            )
          )}
        </div>
      </motion.div>
    </div>
  )
}

