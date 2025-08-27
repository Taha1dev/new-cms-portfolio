
import About from "@/components/custom/about";
import RotatingFlower from "@/components/custom/chunks/rotatating-flower";
import { TimelineSection } from "@/components/custom/experience-section";
import { Footer } from "@/components/custom/footer";
import Hero from "@/components/custom/hero";
import { Navigation } from "@/components/custom/navigation";
import { ProjectsSection } from "@/components/custom/projects";
import { ServicesSection } from "@/components/custom/services-section";
import { SkillsSection } from "@/components/custom/skills-section";
import { MarqueeDemo, } from "@/components/custom/testimonials-section";
import TopBeam from "@/components/custom/top-beam";
import { GridBeams } from "@/components/magicui/grid-beams";
import { Button } from "@/components/ui/button";
import { Spotlight } from "@/components/ui/spotlight-new";
import ThemeToggleButton from "@/components/ui/theme-toggle-button";
import {
  Code,
  ArrowRight
} from 'lucide-react'
import { MeshGradient, DotOrbit } from '@paper-design/shaders-react';
import PulsingBorderShader from "@/components/custom/chunks/pulsing-border-shader";
import { SparklesPreview } from "@/components/custom/chunks/sparkles";
import ContactSection from "@/components/custom/contact";
import LampHero from "@/components/custom/chunks/lamp-ex";
import { ScrollBasedVelocity } from "@/components/custom/scroll-section";

{/* <div className="relative h-svh w-full border-b border-border pb-px overflow-hidden md:overflow-x-hidden">
  <div className="relative w-full h-full">
    <div className="mx-auto w-full px-6 xl:max-w-7xl flex h-full flex-col">
      <div
        className="absolute -inset-y-[25%] -right-24 flex w-[100vw] flex-col xl:-right-6 xl:w-[1200px]"
        style={{
          maskImage:
            'linear-gradient(to right, rgba(255, 255, 255, 0), rgb(255, 255, 255))',
          opacity: 1,
          transform: 'none',
        }}
      >
        <div className="flex flex-col w-full h-full blur">
          <div
            className="grow"
            style={{
              background:
                'conic-gradient(from 180deg at 99% 40% in lab, rgb(255, 255, 255) 18deg, #8b5cf6 36deg, rgba(17, 17, 17, 0) 90deg, rgba(17, 17, 17, 0) 342deg, rgb(255, 255, 255) 360deg)',
            }}
          ></div>
          <div
            className="grow"
            style={{
              background:
                'conic-gradient(from 0deg at 99% 60% in lab, rgb(255, 255, 255) 0deg, rgba(17, 17, 17, 0) 18deg, rgba(17, 17, 17, 0) 270deg, #8b5cf6 324deg, rgb(255, 255, 255) 342deg)',
            }}
          ></div>
        </div>
        <canvas
          className="absolute inset-0 h-full w-full"
          width="0"
          height="0"
          style={{ display: 'none' }}
        ></canvas>
      </div>
    </div>
  </div>
</div> */}
export default async function IndexPage() {
  return (
    <div className="min-h-screen w-full rounded-md antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <Spotlight />
      <Navigation />

      <div className="container mx-auto px-6 flex flex-col py-20 pt-24 relative">
        <Hero />
        <About />
        <TimelineSection />
        <SkillsSection />
        <ScrollBasedVelocity />
        <ServicesSection />
        <ProjectsSection />
        <div>
          {/* <SparklesPreview /> */}
          <MarqueeDemo />
        </div>
        <div className="relative">
          <div className="absolute h-20 w-full bg-background top-0 z-10"></div>
          <TopBeam />
        </div>
        <ContactSection />
        {/* <LampHero /> */}

      </div>
    </div>
  );
}