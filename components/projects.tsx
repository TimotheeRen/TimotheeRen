"use client"

import { IconX } from "@tabler/icons-react";
import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";
import { useState } from "react";
import { Button } from "./ui/button";
import { Section } from "lucide-react";

type Section = {
  title: string;
  description: string;
}

type Project = {
  image: string;
  title: string;
  description: string;
  details: string;
  github: string;
  doc: string | null;
  sections: Section[] | null;
};

const projects: Project[] = [
  {
    image: "/overview.png",
    title: "KubePods",
    description: "A Kubernetes-based desktop hosting platform",
    details: "KubePods is a desktop hosting platform using Kubernetes. It uses microservices communication with gRPC and follows modern microservices patterns such as database-per-service and an API Gateway. It uses FluxCD to be 100% GitOps (check the installation guides in the documentation). It relies on the 'Desktop' service to create Custom Resources that are then applied by a Kubernetes operator written in Rust, which generates the desktop resources. I decided to choose a trunk-based Git strategy to maximize my efficiency and reduce feature delivery time, as well as reducing GitHub Actions' CI/CD pipeline complexity. The infrastructure is monitored using kube-prometheus-stack. A custom middleware made in the API Gateway exposes metrics to Prometheus, which are then shown in a Grafana dashboard provisioned as code following the 'RED' principle. Finally, a staging environment is created using Terraform and Ansible to provision and configure 2 virtual machines with Terraform's libvirt provider and install and configure a Kubernetes cluster with Kubeadm.",
    github: "https://github.com/TimotheeRen/KubePods",
    doc: "https://kubepods.vercel.app/docs",
    sections: [
      {
        title: "The challenges",
        description: "The project had major constraints that I had to deal with when I started it. First, when it comes to the hardware part, I only had my computer to develop and host the project. However, it only has 8 GB of RAM, which meant I had to make sure to only use lightweight technologies (such as Rust) and avoid unnecessary horizontal scaling. It also pushed me toward trying FluxCD instead of ArgoCD as a GitOps solution, which I don't regret afterward (it feels much more Kubernetes-native to use). Another thing is that I had to use K3d, as I only had one node available for hosting and I didn't want to add virtualization, as it would take too many resources. I also decided to keep the default K3d CNI (Flannel), instead of replacing it with something like Calico, to save a few MB of RAM. That is a choice I would not have made in a real production environment, because my microservices communicate directly with the API Gateway, which is the only service that handles authentication (for resource consumption as well). It would allow another pod to send requests to one of the services, as network policies are not supported by Flannel."
      },
      {
        title: "The frontend",
        description: "The frontend uses React Router for reactive routing between pages and actions. Although it used to be based on Next.js, I quickly migrated it after a few months due to its really high resource usage (especially when it comes to RAM consumption). Now it only serves static content to users through the ingress using NGINX. That static content then makes requests directly to the backend, using the ingress again. Even though this migration only saved me around 50 MB in production, when it comes to the resource consumption of the development server running on my system, it went from 1.5 GB–2.0 GB to around 50 MB (and stopped heating up my processor)."
      },
      {
        title: "The backend services",
        description: "I decided to use Rust because of its low resource usage (and because its syntax is nice to work with). Surely, I didn't know that its LSP (rust-analyzer) would take up 1.3 GB. For the API Gateway, I used Axum to build an HTTP server because it was one of the fastest libraries in the world for doing so. I also chose Tonic for the 'Users' and 'Desktops' services to build gRPC servers and stay within the Tokio ecosystem to benefit from its integrations, while using a hexagonal architecture to organize those services neatly. For the operator, I chose kube-rs to make requests to the Kubernetes API and create an operator. To do so, I created a reconciliation loop with its controller component to call a reconcile() function whenever a change occurs in the watched resources (the 'Desktop' CRs), ensuring that a Deployment, a Service, and an Ingress (each one referencing the next) are always in the declared state. I also created a 'Desktop' CRD to represent users' desktops as logical units in the cluster."
      },
      {
        title: "The observability",
        description: "When it came to monitoring and observability, I chose to use Prometheus for metrics collection and storage, and Grafana to expose them (because they are the industry standard). To deploy them on the cluster, I chose to use the 'kube-prometheus-stack' Helm chart to save some time, as it sets up useful alerts and metrics for the cluster. I then provisioned it with a JSON file I wrote containing a dashboard following the RED principles (Rate, Errors, Duration). I decided to only use the API Gateway for metrics and log exposure because it is more representative of the requests entering and responses leaving the services. Finally, for logs, I chose to use Grafana Alloy for log collection and Grafana Loki for log ingestion (both using their official Helm charts)."
      }
    ]
  },
  {
    image: "/overview2.png",
    title: "Furnace",
    description: "An event-driven Kubernetes-based Minecraft server hosting solution",
    details: "Furnace is a Kubernetes Helm chart that provides a Minecraft server hosting service. It relies on Go microservices communicating through a Redis message broker. To create servers, it uses a Go service that creates 'Server' Custom Resources and a Go Kubernetes operator that creates the Kubernetes resources. Those resources are then monitored on a panel that shows the real-time server state and metrics (they are periodically scraped by a goroutine in the server and stored in Redis).",
    github: "https://github.com/TimotheeRen/Furnace",
    doc: "https://furnace-host.vercel.app/docs",
    sections: [
      {
        title: "The challenges",
        description: "As I initially wanted to build this project to try out Kubebuilder in Go and understand how a Kubernetes operator works under the hood, I wanted the project to be lightweight and free of unnecessary complexity, while remaining as flexible as a Helm chart that you can install with a single command. Therefore, I only added the components that I thought were essential to provide a scalable and secure experience."
      },
      {
        title: "The message broker",
        description: "The reason why I chose to use a message broker instead of a simple gRPC connection is for two reasons. First, if the communication between the API and the server were interrupted at the same moment the user wanted to create a server, it would not be provisioned and the user would have to wait until the connection worked again. Instead, I used a loop in the server that continuously checks for new orders placed in the message broker. If the connection is lost, the requested resources remain temporarily available in the message broker, waiting to be picked up by the server. Another reason is that the controller uses a goroutine to periodically scrape server deployment metrics and store them in Redis (which also acts as the message broker, reducing infrastructure complexity), allowing the API to directly access those metrics from the in-memory database, reducing request latency and making the dashboards feel more responsive by reducing their loading time."
      }
    ]
  },
  {
    image: "/homelab.png",
    title: "My Homelab (ongoing)",
    description: "My homelab, running on a Raspberry Pi 4.",
    details: "A simple yet well-designed homelab running on my Raspberry Pi 4. It uses Ansible for automatic configuration and deploys a Kubernetes cluster with K3d. It deploys various apps that I use daily, such as Donetick and Nextcloud, and uses FluxCD for GitOps. (It is still an ongoing project and will likely remain one for a long time!)",
    github: "https://github.com/TimotheeRen/homelab",
    doc: null,
    sections: null
  },
];

export default function Projects() {
  const containerVariant = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

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
        duration: 0.5,
      },
    },
  } as const;

  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <div id="projects">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        viewport={{ once: true }}
        className="mt-32 mb-3 text-4xl sm:text-5xl font-bold"
      >
        My <span className="text-primary">Projects</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.5,
          ease: "easeInOut",
          delay: 0.05,
        }}
        viewport={{ once: true }}
        className="mb-4 text-base sm:text-lg text-muted-foreground"
      >
        A selection of large scale projects I made
      </motion.p>

      <motion.div
        variants={containerVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="mt-4 flex w-full flex-col gap-3 px-4 sm:px-10"
      >
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            variants={cardVariant}
            className={`flex flex-col overflow-hidden rounded-3xl border shadow-sm cursor-pointer
              md:h-64
              ${index % 2 === 0
                ? "md:flex-row"
                : "md:flex-row-reverse"
              }`}
            onClick={() => setSelectedProject(project)}
          >
            <motion.div
              layoutId={`${project.title}-image`}
              className="relative m-2 h-48 w-auto overflow-hidden rounded-2xl bg-white sm:h-[260px] md:h-auto md:w-[400px]"
            >
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-contain"
              />
            </motion.div>

            <div
              className={`flex flex-1 flex-col justify-center p-5 sm:p-8
                ${index % 2 === 0
                  ? "md:text-left"
                  : "md:text-right"
                }`}
            >
              <motion.div layoutId={`${project.title}-content`}>
                <h2 className="mb-1 text-2xl sm:text-3xl font-semibold">
                  {project.title}
                </h2>

                <p className={`mb-5 max-w-full text-sm sm:text-base md:max-w-sm ${index % 2 === 0 ? "" : "md:ml-auto"}`}>
                  {project.description}
                </p>
              </motion.div>
              <p className="font-semibold text-primary">
                Click to see more
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="fixed inset-2 sm:inset-5 z-20 flex flex-col items-center justify-start gap-4 overflow-y-auto rounded-3xl border bg-background p-4 sm:p-10 shadow-sm"
          >
            <IconX
              size={22}
              className="fixed bottom-6 left-1/2 -translate-x-1/2 cursor-pointer sm:absolute sm:right-4 sm:top-4 sm:left-auto sm:translate-x-0"
              onClick={() => setSelectedProject(null)}
            />
            <motion.div
              layoutId={`${selectedProject.title}-image`}
              className="relative shrink-0 h-[35vh] w-full max-w-5xl overflow-hidden rounded-2xl bg-white sm:h-[60vh]"
            >
              <Image
                src={selectedProject.image}
                alt={selectedProject.title}
                fill
                className="object-contain"
              />
            </motion.div>

            <motion.div
              layoutId={`${selectedProject.title}-content`}
              className="w-full max-w-5xl flex flex-col items-center text-center"
            >
              <h2 className="mb-3 text-3xl sm:text-5xl font-bold">
                {selectedProject.title}
              </h2>

              <p className="max-w-full text-left">
                {selectedProject.details}
              </p>

              {selectedProject.sections && selectedProject.sections.map((section, index) => (
                <div key={index} className="mt-10">
                  <h2 className="mb-3 text-3xl sm:text-4xl font-bold">
                    {section.title}
                  </h2>

                  <p className="max-w-full text-left">
                    {section.description}
                  </p>
                </div>
              ))}

              <div className="mt-5">
                Check on GitHub: <a href={selectedProject.github} target="_blank"><Button variant="link">{selectedProject.github}</Button></a>
              </div>

              {selectedProject.doc && (
                <div>
                  Read the doc: <a href={selectedProject.doc} target="_blank"><Button variant="link">{selectedProject.doc}</Button></a>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
