"use client"


import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card"
import { Badge } from "../ui/badge"
import { Rocket, Building, Users, Award } from "lucide-react"
import { useState } from "react"
import { motion } from 'framer-motion'
export const TimelineSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

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
      year: "2022",
      title: "Junior Frontend Developer",
      company: "TechStart Inc.",
      description: "Joined first development team. Worked with React and modern build tools.",
      type: "work",
      icon: Building,
      achievements: ["React Proficiency", "Team Collaboration", "Agile Methodology"],
    },
    {
      year: "2023",
      title: "Frontend Developer",
      company: "Digital Solutions Co.",
      description: "Led frontend development for multiple client projects. Specialized in Angular and RxJS.",
      type: "work",
      icon: Users,
      achievements: ["Angular Expertise", "RxJS Mastery", "Client Management"],
    },
    {
      year: "2024",
      title: "Senior Frontend Developer",
      company: "Innovation Labs",
      description: "Currently building scalable web applications with Next.js and modern tooling.",
      type: "current",
      icon: Award,
      achievements: ["Next.js Expert", "Architecture Design", "Team Leadership"],
    },
  ]

  return (
    <section className="">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-12 sm:mb-16"
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-foreground">Career Timeline</h2>
        <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto px-4">
          My journey in frontend development, from first lines of code to leading complex projects.
        </p>
      </motion.div>

      <div className="relative">
        {/* Mobile Timeline */}
        <div className="md:hidden space-y-8">
          {timeline.map((item, index) => {
            const Icon = item.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative pl-8"
              >
                <div className="absolute left-0 top-0 w-4 h-4 bg-gradient-to-r from-primary to-main-600 rounded-full"></div>
                <div className="absolute left-2 top-4 w-0.5 h-full bg-gradient-to-b from-primary to-main-600"></div>

                <Card className="rounded-xl border-2 border-dashed border-border shadow-lg">
                  <CardContent className="p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Badge variant="secondary" className="rounded-full text-xs">
                        {item.year}
                      </Badge>
                      {item.type === "current" && (
                        <Badge className="rounded-full bg-main-600 text-white text-xs">Current</Badge>
                      )}
                      <Icon className="w-4 h-4 text-main-600" />
                    </div>
                    <h3 className="text-lg font-semibold mb-1">{item.title}</h3>
                    <p className="text-primary font-medium mb-2 text-sm">{item.company}</p>
                    <p className="text-muted-foreground text-sm mb-3">{item.description}</p>

                    <div className="border-t border-dashed border-border pt-3">
                      <p className="text-xs text-muted-foreground mb-2">Key Achievements:</p>
                      <div className="flex flex-wrap gap-1">
                        {item.achievements.map((achievement, achIndex) => (
                          <Badge key={achIndex} variant="outline" className="text-xs rounded-full">
                            {achievement}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>

        {/* Desktop Timeline */}
        <div className="hidden md:block">
          <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-primary to-main-600"></div>

          {timeline.map((item, index) => {
            const Icon = item.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`relative flex items-center mb-12 ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div className={`w-1/2 ${index % 2 === 0 ? "pr-8 text-right" : "pl-8 text-left"}`}>
                  <motion.div whileHover={{ scale: 1.02 }} transition={{ type: "spring", stiffness: 300 }}>
                    <Card
                      className={`rounded-xl border-2 border-dashed border-border shadow-lg transition-all duration-300 ${hoveredIndex === index ? "shadow-xl border-main-600/50 bg-card/90" : ""
                        }`}
                    >
                      <CardContent className="p-6">
                        <div className="flex items-center gap-2 mb-3">
                          <Badge variant="secondary" className="rounded-full text-xs">
                            {item.year}
                          </Badge>
                          {item.type === "current" && (
                            <Badge className="rounded-full bg-main-600 text-white text-xs">Current</Badge>
                          )}
                          <Icon className="w-4 h-4 text-main-600" />
                        </div>
                        <h3 className="text-xl font-semibold mb-1">{item.title}</h3>
                        <p className="text-primary font-medium mb-2">{item.company}</p>
                        <p className="text-muted-foreground text-sm mb-3">{item.description}</p>

                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{
                            opacity: hoveredIndex === index ? 1 : 0,
                            height: hoveredIndex === index ? "auto" : 0,
                          }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="border-t border-dashed border-border pt-3 mt-3">
                            <p className="text-xs text-muted-foreground mb-2">Key Achievements:</p>
                            <div className="flex flex-wrap gap-1">
                              {item.achievements.map((achievement, achIndex) => (
                                <Badge key={achIndex} variant="outline" className="text-xs rounded-full">
                                  {achievement}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        </motion.div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </div>

                <motion.div
                  className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-primary to-main-600 rounded-full border-4 border-background"
                  whileHover={{ scale: 1.5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                />
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}