"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { Code, Github, Linkedin, Twitter, Mail, Heart, ArrowUp } from "lucide-react"

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const footerLinks = {
    services: [
      { name: "Frontend Development", href: "#services" },
      { name: "Full-Stack Solutions", href: "#services" },
      { name: "UI/UX Design", href: "#services" },
      { name: "Performance Optimization", href: "#services" },
    ],
    company: [
      { name: "About", href: "#about" },
      { name: "Experience", href: "#experience" },
      { name: "Skills", href: "#skills" },
      { name: "Testimonials", href: "#testimonials" },
    ],
    resources: [
      { name: "Blog", href: "#" },
      { name: "Case Studies", href: "#" },
      { name: "Portfolio", href: "#" },
      { name: "Contact", href: "#contact" },
    ],
  }

  const socialLinks = [
    { icon: Github, href: "https://github.com", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
    { icon: Mail, href: "mailto:hello@portfolio.dev", label: "Email" },
  ]

  return (
    <footer className="relative bg-background border-t border-border">
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-2 bg-gradient-to-r from-transparent via-pink-500 to-transparent rounded-t-full opacity-60"></div>
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-transparent via-pink-400 to-transparent rounded-t-full opacity-40 blur-sm"></div>

      <div className="max-w-6xl mx-auto px-6 pt-16 pb-8">
        {/* Newsletter Section */}
        <div className="bg-gradient-to-r from-pink-50 to-pink-100 dark:from-pink-950/20 dark:to-pink-900/20 rounded-2xl p-8 mb-16 border border-pink-200/50 dark:border-pink-800/30">
          <div className="text-center max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">Stay Updated</h3>
            <p className="text-muted-foreground mb-6">
              Get the latest updates on web development trends, tips, and project showcases delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input placeholder="Enter your email" className="flex-1 border-border focus:border-pink-500" />
              <Button className="bg-pink-600 hover:bg-pink-700 text-white px-6">Subscribe</Button>
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-pink-500 to-pink-600 rounded-xl flex items-center justify-center">
                <Code className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-foreground">Portfolio</span>
            </div>
            <p className="text-muted-foreground mb-6 max-w-sm">
              Crafting exceptional web experiences with modern technologies and clean, maintainable code. Let's build
              something amazing together.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <Button
                  key={index}
                  variant="outline"
                  size="sm"
                  className="w-10 h-10 p-0 border-border hover:bg-pink-600 hover:text-white hover:border-pink-600 bg-transparent"
                  asChild
                >
                  <a href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.label}>
                    <social.icon className="w-4 h-4" />
                  </a>
                </Button>
              ))}
            </div>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-muted-foreground hover:text-pink-600 transition-colors text-sm">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-muted-foreground hover:text-pink-600 transition-colors text-sm">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Resources</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-muted-foreground hover:text-pink-600 transition-colors text-sm">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Separator className="mb-8" />

        {/* Bottom Footer */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="flex items-center space-x-1 text-sm text-muted-foreground">
            <span>© 2024 Portfolio. Made with</span>
            <Heart className="w-4 h-4 text-pink-500 fill-current" />
            <span>and lots of coffee.</span>
          </div>

          <div className="flex items-center space-x-6">
            <a href="#" className="text-sm text-muted-foreground hover:text-pink-600 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-pink-600 transition-colors">
              Terms of Service
            </a>
            <Button
              variant="outline"
              size="sm"
              onClick={scrollToTop}
              className="border-border hover:bg-pink-600 hover:text-white hover:border-pink-600 bg-transparent"
            >
              <ArrowUp className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </footer>
  )
}
