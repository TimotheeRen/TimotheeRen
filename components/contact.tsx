"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { motion } from "motion/react";
import { toast } from "./ui/toast";

export default function Contact() {
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
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeInOut", delay: 0.1 }}
      viewport={{ once: true }}
      className="px-0 py-16 sm:px-6"
    >
      <div className="relative mx-auto flex w-full max-w-5xl flex-col items-center justify-center rounded-3xl bg-foreground py-16 text-background dark:bg-foreground/7 dark:text-foreground">
        <h2 className="mt-10 text-5xl font-medium tracking-tighter">
          Get in touch
        </h2>

        <p className="mx-auto mt-6 max-w-xl text-center text-xl/normal text-muted-foreground">
          Join me by email if you have any request or question
        </p>

        <Button onClick={copyEmail} className="mt-8">
          {copied ? "Copied!" : "Copy email"}
        </Button>
      </div>
    </motion.div>
  );
}
