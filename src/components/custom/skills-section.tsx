"use client"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import MagicText from "./chunks/magic-text"
import RotatingFlower from "./chunks/rotatating-flower"
import Image from "next/image"
import AnimatedSection from "./animated-section"

export function SkillsSection() {


  const technologiesBySpecialization = [
    // Core Languages
    { id: 10, name: 'JavaScript', path: '/icons/javascript.svg' },
    { id: 20, name: 'TypeScript', path: '/icons/typescript.svg' },

    // Major UI Frameworks & Libraries
    { id: 15, name: 'React', path: '/icons/react.svg' },
    { id: 1, name: 'Angular', path: '/icons/angular.svg' },
    { id: 16, name: 'Redux', path: '/icons/redux.svg' },
    { id: 24, name: 'RxJs', path: '/icons/rxjs.svg' },

    // React Ecosystem & Full-Stack Frameworks
    { id: 12, name: 'Next.js', path: '/icons/nextjs.svg' },
    { id: 2, name: 'Axios', path: '/icons/axios.svg' },
    { id: 23, name: 'Zod', path: '/icons/zod.svg' },
    { id: 5, name: 'Expo', path: '/icons/expo.svg' },

    // Styling & CSS Frameworks
    { id: 19, name: 'TailwindCSS', path: '/icons/tailwindcss.svg' },
    { id: 17, name: 'SCSS', path: '/icons/scss.svg' },
    { id: 4, name: 'Bootstrap', path: '/icons/bootstrap.svg' },
    { id: 11, name: 'Material UI', path: '/icons/material-ui.svg' },
    { id: 14, name: 'Prime UI', path: '/icons/prime.svg' },
    { id: 13, name: 'PandaCSS', path: '/icons/pandacss.svg' },
    { id: 6, name: 'Framer', path: '/icons/framer.svg' },

    // Component & Design Systems
    { id: 18, name: 'shadcn/ui', path: '/icons/shadcn.svg' },
    { id: 29, name: 'Radix Ui', path: '/icons/radix-ui.svg' },

    // Build Tools & Bundlers
    { id: 22, name: 'Webpack', path: '/icons/webpack.svg' },
    { id: 31, name: 'Vite', path: '/icons/vitejs.svg' },

    // Development Tools
    { id: 3, name: 'Biome', path: '/icons/biome.svg' },
    { id: 28, name: 'Figma', path: '/icons/figma.svg' },

    // Version Control & Collaboration
    { id: 7, name: 'Git', path: '/icons/git.svg' },
    { id: 8, name: 'GitHub', path: '/icons/github.svg' },
    { id: 9, name: 'GitLab', path: '/icons/gitlab.svg' },

    // Deployment & Infrastructure
    { id: 21, name: 'Vercel', path: '/icons/vercel.svg' },
    { id: 26, name: 'i18nex Localization', path: '/icons/i18next.svg' },
  ];

  return (
    <section id="skills" className="relative py-20 ">
      <RotatingFlower />
      <div className="max-w-6xl z-10 mx-auto px-6">
        <div className="text-center py-4 relative z-20">
          <p className="text-lg text-white dark:text-foreground max-w-2xl mx-auto uppercase">
            Skills & Expertise
          </p>
          <div className="flex items-center justify-center flex-wrap">
            <h2 className="text-4xl font-bold text-foreground mb-2">The Secret &nbsp;</h2>
            <MagicText text="Sauce" classN="text-4xl mb-2" />
          </div>
        </div>
        <AnimatedSection
          type={"fadeInDown"}
          duration={0.5}
          delay={0.1}
        >
          <div className="flex justify-center items-center flex-wrap gap-3">
            {technologiesBySpecialization.map((tech, i) => (
              <Badge
                key={tech.id}
                variant="secondary"
                className="bg-muted text-muted-foreground flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-muted/70 transition-colors cursor-default border border-border"
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
