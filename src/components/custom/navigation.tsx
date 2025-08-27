"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Code, User, Briefcase, Mail, Star, Settings } from "lucide-react"
import ThemeToggleButton from "../ui/theme-toggle-button"
import Image from "next/image"
import { useTheme } from "next-themes"
import Link from "next/link"
export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [logoPath, setLogoPath] = useState<string>('/dark-logo.webp')
  const { theme } = useTheme()

  useEffect(() => {
    const savedTheme = typeof window !== 'undefined' ? localStorage.getItem('theme') : null
    const effectiveTheme = savedTheme || theme

    setLogoPath(effectiveTheme === 'dark' ? '/dark-logo.webp' : '/light-logo.webp')
  }, [theme])
  const navItems = [
    { name: "About", href: "#about", icon: User },
    { name: "Skills", href: "#skills", icon: Code },
    { name: "Services", href: "#services", icon: Settings },
    { name: "Experience", href: "#experience", icon: Briefcase },
    { name: "Testimonials", href: "#testimonials", icon: Star },
    { name: "Contact", href: "#contact", icon: Mail },
  ]

  return (
    <nav className="fixed top-4 left-0 right-0 z-50 flex justify-center">
      <div
        className="flex items-center justify-between w-[90%] md:w-[80%] rounded-full
                bg-card/75 backdrop-blur-xl border border-border/60
                shadow-lg px-6 py-3"
      >
        <Link href={''} className="flex items-center gap-2">
          <Image src={logoPath} className="w-12" alt="Logo" width={2334} height={1231} />
        </Link>

        <div className="hidden md:flex items-center gap-2">
          {navItems.map((item) => (
            <Button
              key={item.name}
              variant="ghost"
              size="sm"
              className=" px-4 hover:bg-primary/10 transition"
              asChild
            >
              <a href={item.href} className="flex items-center gap-2">
                <item.icon className="w-4 h-4" />
                <span>{item.name}</span>
              </a>
            </Button>
          ))}
          <ThemeToggleButton />
        </div>


        <Button
          variant="ghost"
          size="sm"
          className="md:hidden rounded-full"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </Button>
      </div>

      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-[var(--background)]/70 backdrop-blur-xl
                    flex flex-col items-center justify-center space-y-6
                    animate-in fade-in duration-200"
        >
          {navItems.map((item) => (
            <Button
              key={item.name}
              variant="ghost"
              size="lg"
              className="text-xl hover:bg-primary/10 w-3/4"
              asChild
              onClick={() => setIsOpen(false)}
            >
              <a href={item.href} className="flex items-center gap-3 justify-center">
                <item.icon className="w-6 h-6" />
                <span>{item.name}</span>
              </a>
            </Button>
          ))}

          <div className="mt-4">
            <ThemeToggleButton />
          </div>

          <Button
            variant="outline"
            size="lg"
            className="absolute top-6 right-6 rounded-full"
            onClick={() => setIsOpen(false)}
          >
            <X className="w-6 h-6" />
          </Button>
        </div>
      )}
    </nav>
  )
}
