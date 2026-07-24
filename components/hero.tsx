"use client"

import { Button } from "@/components/ui/button";
import { IconMail } from '@tabler/icons-react';
import { Ripple } from "./ui/ripple";
import { motion } from "motion/react";
import { useState } from "react";
import { toast } from "./ui/toast";

export default function Hero() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText("timothee.ren@proton.me");
      setCopied(true);
      toast.add({ type: "success", description: "timothee.ren@proton.me" })

      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch (err) {
      console.error("Failed to copy email:", err);
    }
  };

  return (
    <div>
      <Ripple mainCircleOpacity={0.2} className="-z-10" />
      <motion.h1 animate={{ y: -20, opacity: 1 }} transition={{ duration: 0.75, type: "spring", stiffness: 100 }} className="text-7xl font-extrabold mb-6 opacity-0">
        DevOps learner, <span className="text-primary">building</span> and <span className="text-primary">maintaning</span> systems
      </motion.h1>
      <motion.p animate={{ y: -20, opacity: 1 }} transition={{ duration: 0.75, type: "spring", stiffness: 100, delay: 0.1 }} className="text-lg mb-8 text-muted-foreground opacity-0">From CI/CD pipelines to containerized production environments and monitoring</motion.p>
      <div className="flex gap-3 justify-center">
        <motion.div animate={{ y: -20, opacity: 1 }} transition={{ duration: 0.75, type: "spring", stiffness: 100, delay: 0.2 }} initial={{ opacity: 0 }}>
          <Button className="shadow-sm hover:scale-105 p-6 flex gap-3" onClick={copyEmail}>
            {copied ? "Copied email!" : "Get in touch"}
            <IconMail />
          </Button>
        </motion.div>
        <motion.div animate={{ y: -20, opacity: 1 }} transition={{ duration: 0.75, type: "spring", stiffness: 100, delay: 0.3 }} initial={{ opacity: 0 }}>
          <a href="#presentation"><Button variant="outline" className="hover:bg-accent-foreground shadow-sm p-6">Who I am</Button></a>
        </motion.div>
      </div>
    </div>
  )
}
