"use client";

import { motion } from "framer-motion";
import { ExternalLink, Lock, Github } from "lucide-react";
import { cn } from "@/lib/utils";
import { Card, CardContent } from "../ui/card";
import { Badge } from "../ui/badge";
import { DotPattern } from "../magicui/dot-pattern";
import Link from "next/link";
import { Button } from "../ui/button";

type ProjectStatus = "development" | "production" | "practice";

interface Project {
  title: string;
  description: string;
  tech: string[];
  status: ProjectStatus;
  liveUrl?: string;
  repoUrl?: string;
  repoPublic: boolean;
}

const statusConfig: Record<
  ProjectStatus,
  { label: string; color: string; dot: string; pingColor: string }
> = {
  development: {
    label: "In Development",
    color: "border-amber-500/30 bg-amber-500/10 text-amber-400",
    dot: "bg-amber-500",
    pingColor: "bg-amber-400",
  },
  production: {
    label: "Live",
    color: "border-emerald-500/30 bg-emerald-500/10 text-emerald-400",
    dot: "bg-emerald-500",
    pingColor: "bg-emerald-400",
  },
  practice: {
    label: "Practice",
    color: "border-sky-500/30 bg-sky-500/10 text-sky-400",
    dot: "bg-sky-500",
    pingColor: "bg-sky-400",
  },
};

const projects: Project[] = [
  {
    title: "E-Visa Platform",
    description: "Government visa application platform with OCR, dynamic forms, and a complaint system.",
    tech: ["Angular", "RxJS", "Angular Material", "Tailwind", "REST APIs", "OCR"],
    status: "production",
    liveUrl: "http://evisa.sy/",
    repoPublic: false,
  },
  {
    title: "Electronic Citizen Service Center",
    description: "Enables citizens and expatriates to complete government services and transactions online.",
    tech: ["Angular", "NgRx", "Angular Material", "Tailwind", "REST APIs"],
    status: "production",
    liveUrl: "http://ecsc.gov.sy/",
    repoPublic: false,
  },
  {
    title: "Complaints Panel System",
    description: "Role-based complaint management system with secure access controls and an escalation flow.",
    tech: ["Angular", "RBAC", "RxJS", "Tailwind", "Git"],
    status: "production",
    repoPublic: false,
  },
  {
    title: "ProjTech Portfolio",
    description: "Company portfolio website built with Next.js, showcasing projects and services.",
    tech: ["Next.js", "Tailwind", "shadcn/ui", "Framer Motion"],
    status: "production",
    liveUrl: "https://projtech.de/",
    repoPublic: true,
    repoUrl: "https://github.com/Taha1dev/projtech",
  },
  {
    title: "Sevillia Bookstore",
    description: "An online bookstore e-commerce platform with integrated payment solutions.",
    tech: ["Next.js", "Stripe", "Formik", "Tailwind", "i18next"],
    status: "production",
    liveUrl: "https://sevilla-verlag.de/",
    repoPublic: false,
  },
  {
    title: "Nike Landing Page",
    description: "UI practice project focusing on modern design principles and responsive layouts.",
    tech: ["React", "Tailwindcss", "Responsive Design"],
    status: "practice",
    liveUrl: "https://nike-landing-page-three-pi.vercel.app",
    repoPublic: true,
    repoUrl: "https://github.com/Taha1dev/nike-landing-page",
  },
  {
    title: "Córdoba E-School",
    description: "E-school registration system featuring dynamic, multi-step application forms.",
    tech: ["Next.js", "Jotai", "Redux Toolkit", "Yup"],
    status: "production",
    liveUrl: "https://cordoba-arabic.de/",
    repoPublic: false,
  },
  {
    title: "Triple Media Platform",
    description: "A media pre-production platform designed with custom workflows for creative teams.",
    tech: ["Next.js", "Tailwind", "Custom Workflow", "State Management"],
    status: "development",
    liveUrl: "https://triple-platform.vercel.app/",
    repoPublic: false,
  },
  {
    title: "HooBank Landing Page",
    description: "UI practice project focusing on modern design principles and responsive layouts.",
    tech: ["React", "Tailwind", "Responsive Design"],
    status: "practice",
    liveUrl: "https://hoobank-seven-tau.vercel.app/",
    repoPublic: true,
    repoUrl: "https://github.com/Taha1dev/hoobank",
  },
  {
    title: "Japanese Food Landing",
    description: "A visually appealing landing page for a Japanese restaurant, focusing on animations.",
    tech: ["HTML", "CSS", "JavaScript", "GSAP"],
    status: "practice",
    liveUrl: "https://japanees-food-html-css.vercel.app/",
    repoPublic: true,
    repoUrl: "https://github.com/Taha1dev/japanees-food-html_css",
  },
];


export default function ProjectsSection() {
  return (
    <section id="projects" className="py-24 sm:py-32 relative">
      <div
        className="absolute inset-0 -z-10 bg-[radial-gradient(circle_farthest-side_at_50%_50%,rgba(0,0,0,0.03)_0%,transparent_100%)] dark:bg-[radial-gradient(circle_farthest-side_at_50%_50%,rgba(255,255,255,0.05)_0%,transparent_100%)]"
        aria-hidden="true"
      />
      <DotPattern
        className={cn(
          "[mask-image:radial-gradient(300px_circle_at_center,white,transparent)] dark:[mask-image:radial-gradient(300px_circle_at_center,black,transparent)]"
        )}
      />
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl mx-auto text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-foreground">
            My Creative Portfolio
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            A collection of projects where I&apos;ve turned complex problems into elegant solutions.
          </p>
        </motion.div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, idx) => {
            const status = statusConfig[project.status];
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group relative"
              >
                <Card className="relative h-full rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border bg-card/80 backdrop-blur-sm overflow-hidden">
                  {/* <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" /> */}
                  <CardContent className="p-6 flex flex-col h-full relative z-10">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-xl font-semibold text-card-foreground group-hover:text-primary transition-colors duration-300">
                        {project.title}
                      </h3>

                      <span
                        className={cn(
                          "flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium border bg-muted text-muted-foreground",
                          status.color
                        )}
                      >
                        <span className="relative flex h-2 w-2">
                          {status && (
                            <span
                              className={cn(
                                "animate-ping absolute inline-flex h-full w-full rounded-full opacity-75",
                                status.pingColor
                              )}
                            />
                          )}
                          <span
                            className={cn(
                              "relative inline-flex rounded-full h-2 w-2",
                              status.dot
                            )}
                          />
                        </span>
                        {status.label}
                      </span>
                    </div>

                    {/* Description */}
                    <p className="text-muted-foreground text-sm mb-5 leading-relaxed flex-grow">
                      {project.description}
                    </p>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.slice(0, 4).map((t, i) => (
                        <Badge
                          key={i}
                          variant="secondary"
                          className="rounded-md text-xs font-normal bg-secondary text-secondary-foreground"
                        >
                          {t}
                        </Badge>
                      ))}
                      {project.tech.length > 4 && (
                        <Badge
                          variant="outline"
                          className="rounded-md text-xs text-muted-foreground"
                        >
                          +{project.tech.length - 4} more
                        </Badge>
                      )}
                    </div>

                    {/* Footer */}
                    <div className="flex items-center justify-between pt-4 mt-auto border-t border-border">
                      <div className="flex items-center gap-4">
                        {project.liveUrl && (
                          <Link
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1.5 text-sm text-foreground hover:text-primary transition-colors duration-300 hover:underline"
                          >
                            <ExternalLink className="w-4 h-4" /> Live Demo
                          </Link>
                        )}
                      </div>

                      <div>
                        {project.repoPublic ? (
                          <Button
                            asChild
                            variant="ghost"
                            size="sm"
                            className="flex items-center gap-1.5 text-xs"
                          >
                            <Link
                              href={project.repoUrl || "#"}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <Github className="w-3.5 h-3.5" /> View Code
                            </Link>
                          </Button>
                        ) : (
                          <span className="flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-full bg-muted text-muted-foreground cursor-not-allowed">
                            <Lock className="w-3.5 h-3.5" /> Private
                          </span>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
