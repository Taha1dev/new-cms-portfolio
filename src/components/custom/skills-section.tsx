"use client"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import MagicText from "./chunks/magic-text"
import RotatingFlower from "./chunks/rotatating-flower"
import Image from "next/image"
import AnimatedSection from "./animated-section"

export function SkillsSection() {

  const technologies = [
    { id: 15, name: 'React', path: '/icons/react.svg' },
    { id: 12, name: 'Next.js', path: '/icons/nextjs.svg' },
    { id: 1, name: 'Angular', path: '/icons/angular.svg' },
    { id: 2, name: 'Axios', path: '/icons/axios.svg' },
    { id: 3, name: 'Biome', path: '/icons/biome.svg' },
    { id: 4, name: 'Bootstrap', path: '/icons/bootstrap.svg' },
    { id: 5, name: 'Expo', path: '/icons/expo.svg' },
    { id: 6, name: 'Framer', path: '/icons/framer.svg' },
    { id: 7, name: 'Git', path: '/icons/git.svg' },
    { id: 8, name: 'GitHub', path: '/icons/github.svg' },
    { id: 9, name: 'GitLab', path: '/icons/gitlab.svg' },
    { id: 10, name: 'JavaScript', path: '/icons/javascript.svg' },
    { id: 11, name: 'Material UI', path: '/icons/material-ui.svg' },
    { id: 13, name: 'PandaCSS', path: '/icons/pandacss.svg' },
    { id: 14, name: 'Prime', path: '/icons/prime.svg' },
    { id: 16, name: 'Redux', path: '/icons/redux.svg' },
    { id: 17, name: 'SCSS', path: '/icons/scss.svg' },
    { id: 18, name: 'shadcn/ui', path: '/icons/shadcn.svg' },
    { id: 19, name: 'TailwindCSS', path: '/icons/tailwindcss.svg' },
    { id: 20, name: 'TypeScript', path: '/icons/typescript.svg' },
    { id: 21, name: 'Vercel', path: '/icons/vercel.svg' },
    { id: 22, name: 'Webpack', path: '/icons/webpack.svg' },
    { id: 23, name: 'Zod', path: '/icons/zod.svg' },
  ];


  return (
    <section id="skills" className="relative py-24 ">
      <RotatingFlower />
      <div className="max-w-6xl z-10 mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-lg text-foreground max-w-2xl mx-auto uppercase">
            Skills & Expertise
          </p>
          <div className="flex gap-2 items-center justify-center">
            <h2 className="text-4xl font-bold text-foreground mb-4">The Secret</h2> <MagicText text="Sauce" classN="text-4xl mb-4" />
          </div>
        </div>
        <AnimatedSection
          type={"fadeInDown"}
          duration={0.8}
          delay={0.2}
          staggerChildren={0.2}
        >
          <div className="flex justify-center items-center flex-wrap gap-3">
            {technologies.map((tech, i) => (
              <Badge
                key={tech.id}
                variant="secondary"
                className="bg-muted text-muted-foreground flex items-center gap-2 px-3 py-2 rounded-lg shadow-sm hover:bg-muted/80 transition-colors cursor-default border border-border"
              >
                <div className="flex items-center gap-2">
                  <Image
                    src={tech.path}
                    alt={`${tech.name} icon`}
                    width={24}
                    height={24}
                    className="object-contain w-6 h-6 saturate-200"
                  />
                  <span className="text-sm font-medium text-foreground">{tech.name}</span>
                </div>
              </Badge>
            ))}
          </div>
        </AnimatedSection>

      </div>
    </section >
  )
}
