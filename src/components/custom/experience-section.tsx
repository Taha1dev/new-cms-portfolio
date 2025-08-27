"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card"
import { Badge } from "../ui/badge"
import { Rocket, Building, Users, Award, PersonStanding, Code2, Globe } from "lucide-react"
import { useState } from "react"
import { motion } from 'framer-motion'

export const TimelineSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const [focusedIndex, setFocusedIndex] = useState<number | null>(null)

  const timeline = [
    {
      year: "2021",
      title: "Started Frontend Journey",
      company: "Self-taught",
      description: "Began learning HTML, CSS, and JavaScript. Built first portfolio website.",
      type: "start",
      icon: Rocket,
      achievements: ["First Portfolio", "HTML/CSS/JS Mastery", "Git & GitHub"],
    },
    {
      year: "2023",
      title: "Junior Frontend Developer",
      company: "Voali",
      description: "Joined first development team. Worked with Html, CSS and Boostrap,start learning nextjs and modern build tools.",
      type: "work",
      icon: Users,
      achievements: ["Responsive Design", "Team Collaboration", "Time Management"],
    },
    {
      year: "2023 - Present",
      title: "Angular Developer",
      company: "Injaz Tech",
      description: "Develop and maintain multiple government enterprise-level applications using the Angular framework and modern CSS libraries. Also contributed to CMS development using Next.js.",
      type: "current",
      icon: Code2,
      achievements: ["Enterprise Projects", "Angular & RxJS", "Next.js CMS", "Angular Material"],
    },
    {
      year: "2024 - Present",
      title: "Freelance Frontend Lead",
      company: "Self-Employed",
      description: "Lead frontend development for international clients, overseeing projects from UI/UX design conception to final implementation.",
      type: "freelance",
      icon: Globe,
      achievements: ["International Clients", "Full Project Lifecycle", "React Ecosystem"],
    },
  ];

  return (
    <section
      className="py-20 mb-10"
      aria-labelledby="timeline-heading"
      id="experience"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.header
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 id="timeline-heading" className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Career Timeline
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto">
            My journey in frontend development, from first lines of code to leading complex projects.
          </p>
        </motion.header>

        <div className="relative">
          <ol className="md:hidden space-y-8">
            {timeline.map((item, index) => {
              const Icon = item.icon
              return (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true, margin: "-50px" }}
                  className="relative pl-8"
                >
                  <div className="absolute left-0 top-0 w-4 h-4 bg-gradient-to-r from-primary to-main-600 rounded-full z-10"
                    aria-hidden="true">
                  </div>
                  <div className="absolute left-2 top-4 w-0.5 h-full bg-gradient-to-b from-primary to-main-600"
                    aria-hidden="true">
                  </div>

                  <Card
                    className="rounded-xl border-2 border-dashed border-border shadow-lg hover:shadow-xl transition-shadow duration-300"
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                    onFocus={() => setFocusedIndex(index)}
                    onBlur={() => setFocusedIndex(null)}
                    tabIndex={0}
                    aria-label={`Timeline item: ${item.year}, ${item.title} at ${item.company}`}
                  >
                    <CardContent className="p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <Badge variant="secondary" className="rounded-full text-xs">
                          {item.year}
                        </Badge>
                        {item.type === "current" && (
                          <Badge className="rounded-full bg-main-600 text-white text-xs">Current</Badge>
                        )}
                        <Icon className="w-4 h-4 text-main-600" aria-hidden="true" />
                      </div>
                      <h3 className="text-lg font-semibold mb-1">{item.title}</h3>
                      <p className="text-primary font-medium mb-2 text-sm">{item.company}</p>
                      <p className="text-muted-foreground text-sm mb-3">{item.description}</p>

                      <div className="border-t border-dashed border-border pt-3">
                        <p className="text-xs text-muted-foreground mb-2">Key Achievements:</p>
                        <ul className="flex flex-wrap gap-1" aria-label="Achievements">
                          {item.achievements.map((achievement, achIndex) => (
                            <li key={achIndex}>
                              <Badge variant="outline" className="text-xs rounded-full">
                                {achievement}
                              </Badge>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                </motion.li>
              )
            })}
          </ol>

          {/* Desktop Timeline */}
          <ol className="hidden md:block">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-primary to-main-600"
              aria-hidden="true">
            </div>

            {timeline.map((item, index) => {
              const Icon = item.icon
              return (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true, margin: "-100px" }}
                  className={`relative flex items-center mb-12 ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}
                >
                  <div className={`w-1/2 ${index % 2 === 0 ? "pr-8 text-right" : "pl-8 text-left"}`}>
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <Card
                        className={`rounded-xl border-2 border-dashed border-border shadow-lg transition-all duration-300 ${hoveredIndex === index || focusedIndex === index ? "shadow-xl border-main-600/50 bg-card/90" : ""
                          }`}
                        onMouseEnter={() => setHoveredIndex(index)}
                        onMouseLeave={() => setHoveredIndex(null)}
                        onFocus={() => setFocusedIndex(index)}
                        onBlur={() => setFocusedIndex(null)}
                        tabIndex={0}
                        aria-label={`Timeline item: ${item.year}, ${item.title} at ${item.company}`}
                      >
                        <CardHeader className="pb-3">
                          <div className="flex items-center gap-2 mb-1">
                            <Badge variant="secondary" className="rounded-full text-xs">
                              {item.year}
                            </Badge>
                            {item.type === "current" && (
                              <Badge className="rounded-full bg-main-600 text-white text-xs">Current</Badge>
                            )}
                            <Icon className="w-4 h-4 text-main-600" aria-hidden="true" />
                          </div>
                          <CardTitle className="text-xl mb-1 text-start">{item.title}</CardTitle>
                          <CardDescription className="text-primary font-medium text-start">
                            {item.company}
                          </CardDescription>
                        </CardHeader>
                        <CardContent>
                          <p className="text-muted-foreground text-sm mb-3 text-start">{item.description}</p>

                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{
                              opacity: hoveredIndex === index || focusedIndex === index ? 1 : 0,
                              height: hoveredIndex === index || focusedIndex === index ? "auto" : 0,
                            }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden"
                            aria-hidden={!(hoveredIndex === index || focusedIndex === index)}
                          >
                            <div className="border-t border-dashed border-border pt-3 mt-3">
                              <p className="text-xs text-muted-foreground mb-2 text-start">Key Achievements:</p>
                              <ul className="flex flex-wrap gap-1" aria-label="Achievements">
                                {item.achievements.map((achievement, achIndex) => (
                                  <li key={achIndex}>
                                    <Badge variant="outline" className="text-xs rounded-full">
                                      {achievement}
                                    </Badge>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </motion.div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  </div>

                  <motion.div
                    className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-primary to-main-600 rounded-full border-4 border-background z-10"
                    whileHover={{ scale: 1.5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    aria-hidden="true"
                  />
                </motion.li>
              )
            })}
          </ol>
        </div>
      </div>
    </section>
  )
}