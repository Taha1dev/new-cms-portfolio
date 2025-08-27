/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'
import AnimatedSection from "./animated-section";
import { Code2, Zap, Layout, ChevronRight, Sparkles } from "lucide-react";
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

// Data stored in arrays for dynamic rendering
const aboutData: AboutData = {
  title: "Crafting Digital Excellence",
  description: "I specialize in transforming complex ideas into intuitive, beautiful digital experiences. With expertise across the full frontend stack, I bridge the gap between design and technology.",
  skills: [
    { name: "React" },
    { name: "Next.js" },
    { name: "TypeScript" },
    { name: "Tailwind CSS" },
    { name: "Node.js" },
    { name: "GraphQL" }
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

  return (
    <AnimatedSection
      type="staggerChildren"
      duration={0.8}
      delay={0.2}
      staggerChildren={0.2}
    >
      <section id="about" className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-muted rounded-full mb-6">
              <Sparkles className="w-4 h-4 text-main-600" />
              <span className="text-sm font-medium text-foreground">About Me</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
              Transforming <span className="text-main-600">Ideas</span> Into Digital Reality
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Passionate about creating elegant solutions to complex problems
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute -inset-8 bg-main-600/10 blur-3xl rounded-full"></div>
              <div className="relative bg-card border border-border rounded-2xl p-8">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
                  {aboutData.title}
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  {aboutData.description}
                </p>
                <div className="flex flex-wrap gap-3">
                  {aboutData.skills.map((skill, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 bg-secondary text-secondary-foreground rounded-full text-sm border border-border flex items-center gap-1 transition-all duration-300 hover:bg-main-600 hover:text-white hover:scale-105"
                    >
                      <ChevronRight className="w-4 h-4" />
                      {skill.name}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-6">
              {aboutData.features.map((feature, index) => {
                const IconComponent = feature.icon;
                const isHovered = hoveredFeature === index;

                return (
                  <div
                    key={index}
                    className="flex items-start gap-6 p-6 rounded-xl transition-all duration-300 border border-border bg-card hover:border-main-600/30"
                    onMouseEnter={() => setHoveredFeature(index)}
                    onMouseLeave={() => setHoveredFeature(null)}
                  >
                    <div className={`flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 ${isHovered ? 'border border-main-600' : 'bg-muted'}`}>
                      <IconComponent className={`w-5 h-5 transition-all duration-300 ${isHovered ? 'text-main-600' : 'text-foreground'}`} />
                    </div>
                    <div>
                      <h3 className={`text-lg font-semibold mb-2 transition-all duration-300 ${isHovered ? 'text-main-600' : 'text-foreground'}`}>
                        {feature.title}
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-10">
            {[
              { value: '50+', label: 'Projects Completed' },
              { value: '3+', label: 'Years Experience' },
              { value: '100%', label: 'Client Satisfaction' },
              { value: '∞', label: 'Cups of Coffee' }
            ].map((stat, index) => (
              <div key={index} className="text-center p-6 rounded-xl bg-card border border-border hover:border-main-600/30 transition-all duration-300">
                <div className="text-2xl md:text-3xl font-bold text-foreground mb-2">{stat.value}</div>
                <div className="text-muted-foreground text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </AnimatedSection>
  );
}