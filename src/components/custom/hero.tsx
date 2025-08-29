'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import MagicText from './chunks/magic-text';
import AnimatedSection from './animated-section';
import { scrollToSection } from '@/utils';

export default function Hero() {


  return (
    <AnimatedSection
      type="fadeInLeft"
      duration={0.8}
      delay={0.2}
      staggerChildren={0.2}
    >
      <main className="container mx-auto flex flex-col items-center text-center justify-center gap-8 px-6 antialiased ">
        <section className="space-y-6 max-w-3xl">

          <span onClick={() => scrollToSection('projects')}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full
            border-[1.5px] bg-purple-100 dark:bg-purple-700/15 backdrop-blur-sm
            text-purple-700 font-medium text-sm
            shadow-md shadow-purple-200/50 dark:shadow-purple-500/10 
            hover:shadow-lg hover:shadow-purple-300/30 dark:hover:shadow-purple-500/20
            transition-all duration-300
            border-purple-300 dark:border-purple-700
            group cursor-pointer"
          >
            <div className="relative flex h-3 w-3 items-center justify-center">
              <div className="absolute h-3 w-3 animate-ping rounded-full bg-purple-500/60 dark:bg-purple-400/80"></div>
              <div className="h-2 w-2 rounded-full bg-purple-600 dark:bg-purple-400"></div>
            </div>
            <span className="text-purple-800 dark:text-purple-700 font-bold group-hover:text-purple-900 dark:group-hover:text-purple-200 transition-colors">
              Available for new opportunities!
            </span>
          </span>

          <h1 className="text-4xl lg:text-6xl font-extrabold leading-tight">
            I Help founders turn ideas into seamless{' '}
            <MagicText text="Digital Experiences" />
          </h1>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 text-lg text-muted-foreground text-center sm:text-left">
            <span>Hello I&apos;m Taha Al-Mulla</span>

            <div className="relative h-12 w-12 rounded-full overflow-hidden shrink-0">
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
