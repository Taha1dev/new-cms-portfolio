"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight, Code, Palette, Smartphone, Globe, Zap, Shield } from "lucide-react"

export function ServicesSection() {
  const services = [
    {
      icon: Code,
      title: "Frontend Development",
      description: "Building responsive, performant web applications using modern frameworks and best practices.",
      features: ["React/Next.js", "TypeScript", "Responsive Design", "Performance Optimization"],
      price: "From $2,500",
      popular: false,
    },
    {
      icon: Globe,
      title: "Full-Stack Solutions",
      description: "Complete web applications with backend integration, databases, and deployment strategies.",
      features: ["API Development", "Database Design", "Authentication", "Cloud Deployment"],
      price: "From $4,500",
      popular: true,
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Creating intuitive user interfaces with modern design principles and user-centered approach.",
      features: ["Wireframing", "Prototyping", "Design Systems", "User Testing"],
      price: "From $1,800",
      popular: false,
    },
    {
      icon: Smartphone,
      title: "Mobile-First Design",
      description: "Ensuring your application works flawlessly across all devices and screen sizes.",
      features: ["Responsive Layouts", "Touch Optimization", "Progressive Web Apps", "Cross-browser Testing"],
      price: "From $2,000",
      popular: false,
    },
    {
      icon: Zap,
      title: "Performance Optimization",
      description: "Improving website speed, SEO, and overall user experience through technical enhancements.",
      features: ["Core Web Vitals", "SEO Optimization", "Bundle Optimization", "Caching Strategies"],
      price: "From $1,500",
      popular: false,
    },
    {
      icon: Shield,
      title: "Maintenance & Support",
      description: "Ongoing support, updates, and maintenance to keep your application running smoothly.",
      features: ["Bug Fixes", "Security Updates", "Feature Enhancements", "24/7 Support"],
      price: "From $800/month",
      popular: false,
    },
  ]

  return (
    <section id="services" className="relative py-24 bg-muted/30">
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-pink-500 to-transparent opacity-40"></div>
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-pink-400 to-transparent opacity-20 blur-sm"></div>

      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">Services & Solutions</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive web development services tailored to bring your digital vision to life
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className={`relative border bg-card hover:shadow-xl transition-all duration-300 group ${service.popular
                  ? "border-pink-500/50 shadow-lg shadow-pink-500/10"
                  : "border-border hover:border-pink-500/30"
                }`}
            >
              {service.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-pink-600 text-white px-3 py-1">Most Popular</Badge>
                </div>
              )}

              <CardHeader className="text-center pb-4">
                <div
                  className={`w-16 h-16 mx-auto mb-4 rounded-2xl flex items-center justify-center transition-colors ${service.popular
                      ? "bg-pink-600 text-white"
                      : "bg-muted text-muted-foreground group-hover:bg-pink-600 group-hover:text-white"
                    }`}
                >
                  <service.icon className="w-8 h-8" />
                </div>
                <CardTitle className="text-xl text-foreground">{service.title}</CardTitle>
                <CardDescription className="text-muted-foreground">{service.description}</CardDescription>
              </CardHeader>

              <CardContent className="space-y-6">
                <div className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-pink-500 rounded-full"></div>
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-4 border-t border-border">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-bold text-foreground">{service.price}</span>
                  </div>

                  <Button
                    className={`w-full group ${service.popular
                        ? "bg-pink-600 hover:bg-pink-700 text-white"
                        : "bg-muted hover:bg-pink-600 hover:text-white text-foreground"
                      }`}
                  >
                    Get Started
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-0.5 transition-transform" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <Card className="border border-border bg-card max-w-2xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-foreground mb-4">Custom Solutions</h3>
              <p className="text-muted-foreground mb-6">
                Need something specific? I create tailored solutions that perfectly match your unique requirements and
                business goals.
              </p>
              <Button size="lg" className="bg-pink-600 hover:bg-pink-700 text-white">
                Discuss Your Project
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
