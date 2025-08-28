"use client";

import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Facebook,
  Linkedin,
  ArrowUp
} from "lucide-react";
import Medium from "./chunks/medium";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [logoPath, setLogoPath] = useState<string>('/dark-logo.webp');
  const { theme } = useTheme();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const savedTheme = typeof window !== 'undefined' ? localStorage.getItem('theme') : null;
    const effectiveTheme = savedTheme || theme;

    setLogoPath(effectiveTheme === 'dark' ? '/dark-logo.webp' : '/light-logo.webp');
  }, [theme]);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 2000) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <>
      <footer className="w-full bg-background border-t border-muted">
        <div className="container mx-auto px-4 py-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 border border-muted rounded-lg overflow-hidden">

            <div className="flex flex-col space-y-4 p-6  md:-0 md:border-r border-muted">
              <Link href="/" className="flex items-center gap-2 font-semibold text-foreground">
                <Image src={logoPath} alt="Logo" width={150} height={40} />
              </Link>
              <p className="text-muted-foreground text-sm max-w-xs">
                Creating Experiences, Not Just Websites.
              </p>
              <div className="flex space-x-4 pt-2">
                <Link href="https://medium.com/@TahaDev" className="text-muted-foreground hover:text-foreground transition-colors p-2 rounded-md border border-muted hover:border-foreground">
                  <Medium className="w-5 h-5 text-muted-foreground group-hover:text-white transition-colors duration-300" />
                </Link>
                <Link href="https://www.linkedin.com/in/taha-al-mulla-17a76923a/" className="text-muted-foreground hover:text-foreground transition-colors p-2 rounded-md border border-muted hover:border-foreground">
                  <Linkedin size={18} className="w-5 h-5 text-muted-foreground group-hover:text-white transition-colors duration-300" />
                </Link>
              </div>
            </div>

            <div className="flex flex-col space-y-4 p-6  md:-0 border-muted">
              <h3 className="font-semibold text-foreground text-lg  border-muted pb-2">Contact</h3>
              <div className="text-sm text-muted-foreground space-y-2">
                <p className=" border-muted pb-2">Damascus, Syria</p>
                <p className=" border-muted pb-2">Rukn Al-Deen</p>
                <p className=" border-muted pb-2">taha.bus11@gmail.com</p>
                <p>+963 99172 9116</p>
              </div>
            </div>

          </div>

          <Separator className="my-8" />

          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground border border-muted rounded-md p-4">
            <div className="flex flex-col md:flex-row items-center gap-2">
              <span>&copy; {currentYear} MyWebsite. All rights reserved.</span>
              <span className="hidden md:inline-block">•</span>
              <Link href="LICENSE" className="hover:underline">
                Licensed under MIT
              </Link>
            </div>

          </div>
        </div>

        {/* Scroll to top button */}
        {isVisible && (
          <Button
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 rounded-full w-12 h-12 shadow-lg border border-muted"
            size="icon"
          >
            <ArrowUp size={20} />
          </Button>
        )}
      </footer>
    </>
  );
}