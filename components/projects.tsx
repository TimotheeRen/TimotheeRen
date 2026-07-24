"use client"

import { IconX } from "@tabler/icons-react";
import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";
import { useState } from "react";

type Project = {
  image: string;
  title: string;
  description: string;
};

const projects = [
  {
    image: "/overview.png",
    title: "KubePods",
    description: "A Kubernetes based desktops hosting plateform"
  },
  {
    image: "/overview2.png",
    title: "Furnace",
    description: "A Kubernetes based Minecraft servers hosting solution"
  },
  {
    image: "/homelab.png",
    title: "My Homelab",
    description: "My homelab, running in a Raspberry Pi 4."
  },
];

export default function Projects() {
  const containerVariant = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      }
    }
  }

  const cardVariant = {
    hidden: {
      opacity: 0,
      y: 10,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        ease: "easeInOut",
        duration: 0.5
      }
    }
  } as const

  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <div id="projects">
      <motion.h1 initial={{ opacity: 0, y: 20 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 0.5, ease: "easeInOut" }} viewport={{ once: true }} className="mt-32 mb-3 text-5xl font-bold">My <span className="text-primary">Projects</span></motion.h1>
      <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 0.5, ease: "easeInOut", delay: 0.05 }} viewport={{ once: true }} className="mb-4 text-lg text-muted-foreground">A selection of large scale projects I made</motion.p>
      <motion.div
        variants={containerVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="px-10 mt-4 w-full gap-x-3 gap-y-3 flex flex-col"
      >
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            variants={cardVariant}
            className={`flex flex-col md:h-64 border shadow-sm rounded-3xl cursor-pointer
                  ${index % 2 === 0
                ? "md:flex-row"
                : "md:flex-row-reverse"
              }`}
            layoutId={project.title}
            onClick={() => setSelectedProject(project)}
          >
            <motion.div
              layoutId={`${project.title}-image`}
              className="relative m-2 h-[260px] w-full overflow-hidden rounded-2xl md:w-[400px] bg-white"
            >
              <Image
                src={project.image}
                alt="diagram"
                fill
                className="object-contain"
              />
            </motion.div>
            <div
              className={`flex flex-col justify-center p-8 ${index % 2 === 0
                ? "md:text-left"
                : "md:text-right"
                }`}
            >
              <motion.div layoutId={`${project.title}-content`}>
                <h1 className="text-3xl font-semibold mb-1">{project.title}</h1>
                <p className="mb-5 w-96">{project.description}</p>
              </motion.div>
              <p className="text-primary font-semibold">Click to see more</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            layoutId={selectedProject.title}
            className="fixed inset-5 z-20 flex flex-col items-center justify-center gap-6 rounded-3xl border bg-background p-10 shadow-sm"
          >
            <IconX size={20} className="absolute right-4 top-4 cursor-pointer" onClick={() => setSelectedProject(null)}
            />
            <motion.div
              layoutId={`${selectedProject.title}-image`}
              className="relative h-[60vh] w-full max-w-5xl overflow-hidden rounded-2xl bg-white"
            >
              <Image
                src={selectedProject.image}
                alt="diagram"
                fill
                className="object-contain"
              />
            </motion.div>

            <motion.div layoutId={`${selectedProject.title}-content`}>
              <h1 className="text-5xl font-bold mb-3">
                {selectedProject.title}
              </h1>
              <p className="w-96">{selectedProject.description}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

