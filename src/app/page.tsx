
import About from "@/components/custom/about";
import { TimelineSection } from "@/components/custom/experience-section";
import Hero from "@/components/custom/hero";
import { Navigation } from "@/components/custom/navigation";
import ProjectsSection  from "@/components/custom/projects";
import { ServicesSection } from "@/components/custom/services-section";
import { SkillsSection } from "@/components/custom/skills-section";
import { MarqueeDemo, } from "@/components/custom/testimonials-section";
import TopBeam from "@/components/custom/top-beam";
import { Spotlight } from "@/components/ui/spotlight-new";
import ContactSection from "@/components/custom/contact";
import { ScrollBasedVelocity } from "@/components/custom/scroll-section";
import Footer from "@/components/custom/footer";


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
      <Footer />
    </div>
  );
}