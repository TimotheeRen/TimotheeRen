"use client"

import { motion } from "motion/react";
import { CardAction, CardContent, CardHeader, CardTitle } from "./ui/card";
import { MagicCard } from "./ui/magic-card";
import { IconBlocks, IconBox, IconCode, IconGraph, IconPipeline, IconServer } from "@tabler/icons-react";

const skills = [
  {
    icon: IconCode,
    title: "Programming",
    description: [
      "Rust",
      "Go",
      "Java",
      "Typescript",
      "Axum (Rust)",
      "Tonic (Rust)",
      "Spring Boot (Java)",
      "NextJS (Typescript)",
    ]
  },
  {
    icon: IconServer,
    title: "Linux OS",
    description: [
      "Arch Linux",
      "Ubuntu Debian",
      "Fedora",
      "NixOS",
    ]
  },
  {
    icon: IconBlocks,
    title: "Infrastructure as Code",
    description: [
      "Terraform",
      "Ansible",
    ]
  },
  {
    icon: IconPipeline,
    title: "CI/CD",
    description: [
      "Github Actions",
      "Jenkins",
    ]
  },
  {
    icon: IconBox,
    title: "Container management",
    description: [
      "Docker",
      "Kuberenetes",
      "FluxCD",
      "ArgoCD",
    ]
  },
  {
    icon: IconGraph,
    title: "Monitoring",
    description: [
      "Prometheus",
      "Grafana",
    ]
  },
];

export default function Skills() {
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

  return (
    <div id="skills">
      <motion.h1 initial={{ opacity: 0, y: 20 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 0.5, ease: "easeInOut" }} viewport={{ once: true }} className="mt-32 mb-3 text-5xl font-bold">My <span className="text-primary">Skills</span></motion.h1>
      <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 0.5, ease: "easeInOut", delay: 0.05 }} viewport={{ once: true }} className="mb-4 text-lg text-muted-foreground">My DevOps and programming skills</motion.p>
      <motion.div
        variants={containerVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="px-10 mt-4 grid w-full gap-x-3 gap-y-3 md:grid-cols-2 lg:grid-cols-3"
      >
        {skills.map((skill) => (
          <motion.div variants={cardVariant} viewport={{ once: true }}>
            <MagicCard
              className="flex flex-col overflow-hidden pb-5 pt-3 text-left rounded-3xl shadow-sm p-5 h-64"
              key={skill.title}
              glowOpacity={0.1}
              mode="orb"
            >
              <CardHeader>
                <CardTitle>{skill.title}</CardTitle>
                <CardAction><skill.icon /></CardAction>
              </CardHeader>
              <CardContent>
                <ul>
                  {skill.description.map((s) => (
                    <li key={s} className="flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-primary" />
                      <span>{s}</span>
                    </li>
                  ))
                  }
                </ul>
              </CardContent>
            </MagicCard>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}

