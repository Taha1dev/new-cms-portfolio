'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import MagicText from './chunks/magic-text';
import AnimatedSection from './animated-section';

export default function Hero() {

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <AnimatedSection
      type="fadeInLeft"
      duration={0.8}
      delay={0.2}
      staggerChildren={0.2}
    >
      <main className="container mx-auto flex flex-col items-center text-center justify-center gap-8 px-6 antialiased ">
        <section className="space-y-6 max-w-3xl">

          <span
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full
            border bg-main-100 dark:bg-main-500/15 backdrop-blur-sm
            text-main-700 font-medium text-sm
            shadow-md shadow-main-200/50 dark:shadow-main-500/10 
            hover:shadow-lg hover:shadow-main-300/30 dark:hover:shadow-main-500/20
            transition-all duration-300
            border-main-300 dark:border-main-700/40
            group cursor-pointer"
          >
            <div className="relative flex h-3 w-3 items-center justify-center">
              <div className="absolute h-3 w-3 animate-ping rounded-full bg-main-500/60 dark:bg-main-400/80"></div>
              <div className="h-2 w-2 rounded-full bg-main-600 dark:bg-main-400"></div>
            </div>
            <span className="text-main-800 dark:text-main-300 group-hover:text-main-900 dark:group-hover:text-main-200 transition-colors">
              Available for new opportunities!
            </span>
          </span>

          <h1 className="text-4xl lg:text-6xl font-extrabold leading-tight">
            I Help founders turn ideas into seamless{' '}
            <MagicText text="Digital Experiences" />
          </h1>

          <div className="flex items-center justify-center gap-3 text-lg text-[var(--muted-foreground)]">
            <span>Hello I&apos;m Taha Al-Mulla</span>
            <div className="relative h-12 w-12 rounded-full overflow-hidden">
              <Image
                src="/profile.jpg"
                alt="Taha"
                fill
                className="object-cover"
              />
            </div>
            <span>
              a Frontend Engineer focused on React, Next.js, and Angular
            </span>
          </div>

          <div className="flex gap-4 justify-center relative">
            <Button size="lg" className="w-fit relative" onClick={() => scrollToSection('projects')}>
              View Projects
            </Button>
            <Button size="lg" variant="outline" className="w-fit relative" onClick={() => scrollToSection('contact')}>
              Contact
            </Button>
          </div>
        </section>
      </main>
    </AnimatedSection>
  );
}
