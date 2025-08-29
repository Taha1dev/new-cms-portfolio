/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'
import AnimatedSection from "./animated-section";
import { Code2, Zap, Layout, Download, Sparkles } from "lucide-react";
import { useState } from "react";

interface Skill {
  name: string;
}

interface Feature {
  icon: React.ComponentType<any>;
  title: string;
  description: string;
}

interface AboutData {
  title: string;
  description: string;
  skills: Skill[];
  features: Feature[];
}

const aboutData: AboutData = {
  title: "Building Digital Masterpieces",
  description: "I craft seamless, innovative digital solutions by blending cutting-edge technology with intuitive design, turning bold ideas into reality.",
  skills: [
    { name: "React" },
    { name: "Next.js" },
    { name: "TypeScript" },
    { name: "Tailwind CSS" },
    { name: "Angular" },
  ],
  features: [
    {
      icon: Code2,
      title: "Clean Code",
      description: "Writing maintainable, scalable code with modern best practices and patterns."
    },
    {
      icon: Zap,
      title: "Performance",
      description: "Optimizing applications for speed, efficiency, and seamless user experience."
    },
    {
      icon: Layout,
      title: "UI/UX Focus",
      description: "Creating interfaces that are not only beautiful but intuitive and user-friendly."
    }
  ]
};

export default function About() {
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null);

  const handleDownloadResume = () => {
    // Replace with actual resume file path
    const resumeUrl = "/taha-mulla-resume.pdf";
    const link = document.createElement("a");
    link.href = resumeUrl;
    link.download = "taha-resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <AnimatedSection
      type="staggerChildren"
      duration={0.8}
      delay={0.2}
      staggerChildren={0.2}
    >
      <section id="about" className="py-24 bg-gradient-to-b from-background to-background/95">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 px-5 py-2 bg-main-600/10 rounded-full mb-8 border border-main-600/20">
              <Sparkles className="w-5 h-5 text-main-600" />
              <span className="text-base font-semibold text-foreground">About Me</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-foreground">
              Turning <span className="text-main-600">Vision</span> Into Reality
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              I&apos;m passionate about solving complex challenges with elegant, user-centric solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="relative h-full">
              <div className="absolute -inset-4 bg-main-600/15 blur-2xl rounded-2xl"></div>
              <div className="relative bg-card border border-border rounded-2xl p-8 shadow-lg">
                <h3 className="text-3xl font-bold mb-4 text-foreground">{aboutData.title}</h3>
                <p className="text-base text-muted-foreground mb-6">{aboutData.description}</p>
                <div className="flex flex-wrap gap-2 mb-8">
                  {aboutData.skills.map((skill, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 bg-main-600/10 text-foreground rounded-full text-sm font-medium border border-main-600/20 hover:bg-main-600 hover:text-white transition-all duration-300 transform hover:scale-105"
                    >
                      {skill.name}
                    </span>
                  ))}
                </div>
                <button
                  onClick={handleDownloadResume}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-main-600 text-white rounded-full font-semibold text-sm hover:bg-main-700 transition-all duration-300 transform hover:scale-105"
                >
                  <Download className="w-5 h-5" />
                  Download Resume
                </button>
              </div>
            </div>

            <div className="space-y-4 h-full">
              {aboutData.features.map((feature, index) => {
                const IconComponent = feature.icon;
                const isHovered = hoveredFeature === index;

                return (
                  <div
                    key={index}
                    className="flex items-start gap-4 p-6 rounded-xl bg-card border border-border hover:shadow-md transition-all duration-300"
                    onMouseEnter={() => setHoveredFeature(index)}
                    onMouseLeave={() => setHoveredFeature(null)}
                  >
                    <div className={`flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300 ${isHovered ? 'bg-main-600/10 border border-main-600' : 'bg-muted'}`}>
                      <IconComponent className={`w-5 h-5 ${isHovered ? 'text-main-600' : 'text-foreground'}`} />
                    </div>
                    <div>
                      <h4 className={`text-lg font-semibold mb-1 ${isHovered ? 'text-main-600' : 'text-foreground'}`}>
                        {feature.title}
                      </h4>
                      <p className="text-sm text-muted-foreground">{feature.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16">
            {[
              { value: '50+', label: 'Projects Completed' },
              { value: '3+', label: 'Years Experience' },
              { value: '100%', label: 'Client Satisfaction' },
              { value: '∞', label: 'Cups of Coffee' }
            ].map((stat, index) => (
              <div key={index} className="text-center p-6 rounded-xl bg-card border border-border hover:shadow-md transition-all duration-300">
                <div className="text-3xl font-bold text-main-600 mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </AnimatedSection>
  );
}