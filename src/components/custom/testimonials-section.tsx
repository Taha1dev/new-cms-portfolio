"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react"

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Product Manager",
      company: "TechStart Inc.",
      avatar: "/professional-man.png",
      rating: 5,
      text: "Working with this developer was an absolute pleasure. They delivered a pixel-perfect, responsive website that exceeded our expectations. The attention to detail and communication throughout the project was outstanding.",
      project: "E-commerce Platform",
    },
    {
      name: "Michael Chen",
      role: "CEO",
      company: "Digital Solutions",
      avatar: "/professional-man.png",
      rating: 5,
      text: "The quality of work and professionalism is top-notch. Our web application performance improved by 40% after the optimization work. I highly recommend their services for any frontend development needs.",
      project: "Performance Optimization",
    },
    {
      name: "Emily Rodriguez",
      role: "Marketing Director",
      company: "Creative Agency",
      avatar: "/professional-man.png",
      rating: 5,
      text: "They transformed our outdated website into a modern, user-friendly platform that our customers love. The project was completed on time and within budget. Excellent work!",
      project: "Website Redesign",
    },
    {
      name: "David Thompson",
      role: "Startup Founder",
      company: "InnovateLab",
      avatar: "/professional-man.png",
      rating: 5,
      text: "As a non-technical founder, I needed someone who could translate my vision into reality. They not only built exactly what I wanted but also provided valuable insights that improved the final product.",
      project: "MVP Development",
    },
    {
      name: "Lisa Park",
      role: "UX Designer",
      company: "Design Studio",
      avatar: "/professional-man.png",
      rating: 5,
      text: "Collaborating on this project was seamless. They perfectly implemented our designs and even suggested improvements that enhanced the user experience. A true professional!",
      project: "Design Implementation",
    },
  ]

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  // Auto-advance testimonials
  useEffect(() => {
    const interval = setInterval(nextTestimonial, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section id="testimonials" className="relative py-24 bg-background">
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-pink-500 to-transparent opacity-40"></div>
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-pink-400 to-transparent opacity-20 blur-sm"></div>

      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">Client Testimonials</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Don't just take my word for it. Here's what clients say about working with me.
          </p>
        </div>

        <div className="relative">
          <Card className="border border-border bg-card shadow-lg">
            <CardContent className="p-8 md:p-12">
              <div className="flex items-center justify-center mb-8">
                <Quote className="w-12 h-12 text-pink-500 opacity-50" />
              </div>

              <div className="text-center mb-8">
                <div className="flex justify-center mb-4">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>

                <blockquote className="text-xl md:text-2xl text-foreground leading-relaxed mb-8 font-medium">
                  "{testimonials[currentIndex].text}"
                </blockquote>

                <div className="flex items-center justify-center space-x-4">
                  <Avatar className="w-16 h-16">
                    <AvatarImage
                      src={testimonials[currentIndex].avatar || "/placeholder.svg"}
                      alt={testimonials[currentIndex].name}
                    />
                    <AvatarFallback className="bg-pink-600 text-white text-lg">
                      {testimonials[currentIndex].name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>

                  <div className="text-left">
                    <h4 className="font-semibold text-foreground text-lg">{testimonials[currentIndex].name}</h4>
                    <p className="text-muted-foreground">{testimonials[currentIndex].role}</p>
                    <p className="text-muted-foreground font-medium">{testimonials[currentIndex].company}</p>
                  </div>
                </div>

                <Badge
                  variant="secondary"
                  className="mt-4 bg-pink-100 text-pink-700 dark:bg-pink-900 dark:text-pink-300"
                >
                  {testimonials[currentIndex].project}
                </Badge>
              </div>
            </CardContent>
          </Card>

          {/* Navigation Buttons */}
          <div className="flex justify-center space-x-4 mt-8">
            <Button
              variant="outline"
              size="sm"
              onClick={prevTestimonial}
              className="border-border hover:bg-muted bg-transparent"
            >
              <ChevronLeft className="w-4 h-4" />
            </Button>

            <div className="flex space-x-2 items-center">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${index === currentIndex ? "bg-pink-500" : "bg-muted-foreground/30"
                    }`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="sm"
              onClick={nextTestimonial}
              className="border-border hover:bg-muted bg-transparent"
            >
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
          {[
            { number: "50+", label: "Projects Completed" },
            { number: "25+", label: "Happy Clients" },
            { number: "3+", label: "Years Experience" },
            { number: "100%", label: "Client Satisfaction" },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-pink-600 mb-2">{stat.number}</div>
              <div className="text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
