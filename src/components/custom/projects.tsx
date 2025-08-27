'use client'
import { ExternalLink, Github } from "lucide-react"
import { Badge } from "../ui/badge"
import { Button } from "../ui/button"
import { motion } from 'framer-motion'
import { Card, CardContent } from "../ui/card"
import Image from "next/image"
export const ProjectsSection = () => {
  const projects = [
    {
      name: "E-Commerce Platform",
      description:
        "Modern e-commerce solution with advanced filtering, real-time inventory, and seamless checkout experience.",
      image: "https://avatar.vercel.sh/jenny",
      stack: ["React", "Next.js", "TypeScript", "Tailwind"],
      featured: true,
      github: "#",
      demo: "#",
    },
    {
      name: "SaaS Dashboard",
      description: "Comprehensive analytics dashboard with real-time data visualization and interactive charts.",
      image: "https://avatar.vercel.sh/james",
      stack: ["Angular", "RxJS", "D3.js", "Material UI"],
      featured: true,
      github: "#",
      demo: "#",
    },
    {
      name: "Mobile Banking App",
      description: "Secure mobile banking interface with biometric authentication and intuitive UX design.",
      image: "https://avatar.vercel.sh/jane",
      stack: ["React Native", "Redux", "Node.js", "MongoDB"],
      featured: false,
      github: "#",
      demo: "#",
    },
    {
      name: "AI Chat Interface",
      description: "Intelligent chat application with natural language processing and real-time responses.",
      image: "https://avatar.vercel.sh/john",
      stack: ["Vue.js", "WebSocket", "Python", "TensorFlow"],
      featured: false,
      github: "#",
      demo: "#",
    },
    {
      name: "E-Commerce Platform",
      description:
        "Modern e-commerce solution with advanced filtering, real-time inventory, and seamless checkout experience.",
      image: "https://avatar.vercel.sh/jenny",
      stack: ["React", "Next.js", "TypeScript", "Tailwind"],
      featured: true,
      github: "#",
      demo: "#",
    },
    {
      name: "SaaS Dashboard",
      description: "Comprehensive analytics dashboard with real-time data visualization and interactive charts.",
      image: "https://avatar.vercel.sh/james",
      stack: ["Angular", "RxJS", "D3.js", "Material UI"],
      featured: true,
      github: "#",
      demo: "#",
    },
  ]

  return (
    <section id="projects" className="py-20 px-4 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-12 sm:mb-16 relative"
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-foreground">
          Featured Projects
        </h2>
        <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto px-4">
          A showcase of my recent work and technical expertise
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
            className="group"
          >
            <Card className="rounded-xl border-2 border-dashed border-border overflow-hidden hover:shadow-lg transition-all duration-300">
              <div className="relative overflow-hidden">
                <Image
                  width={300}
                  height={160}
                  src={project.image || "/placeholder.svg"}
                  alt={project.name}
                  className="w-full h-40 sm:h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
                {project.featured && (
                  <Badge className="absolute top-2 sm:top-3 right-2 sm:right-3 bg-main-600 text-white rounded-full text-xs">
                    Featured
                  </Badge>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-3 sm:pb-4 gap-2">
                  <Button size="sm" variant="secondary" className="rounded-full text-xs">
                    <Github className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                    Code
                  </Button>
                  <Button size="sm" className="rounded-full text-xs">
                    <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                    Demo
                  </Button>
                </div>
              </div>
              <CardContent className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-2">{project.name}</h3>
                <p className="text-muted-foreground text-xs sm:text-sm mb-4 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-1 sm:gap-2">
                  {project.stack.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="secondary" className="rounded-full text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  )
}