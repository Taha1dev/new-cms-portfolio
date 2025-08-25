import AnimatedSection from "./animated-section";

export default function About() {
  return (
    <AnimatedSection
      type="staggerChildren"
      duration={0.8}
      delay={0.2}
      staggerChildren={0.2}
    >
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute -inset-8 bg-primary/10 blur-3xl rounded-full"></div>
              <div className="relative bg-card border border-border rounded-2xl p-8 backdrop-blur-sm">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                  Crafting Digital Excellence
                </h2>
                <p className="text-lg text-muted-foreground mb-6">
                  I specialize in transforming complex ideas into intuitive, beautiful digital experiences.
                  With expertise across the full frontend stack, I bridge the gap between design and technology.
                </p>
                <div className="flex flex-wrap gap-3">
                  <span className="px-4 py-2 bg-secondary text-secondary-foreground rounded-full text-sm border border-border">React</span>
                  <span className="px-4 py-2 bg-secondary text-secondary-foreground rounded-full text-sm border border-border">Next.js</span>
                  <span className="px-4 py-2 bg-secondary text-secondary-foreground rounded-full text-sm border border-border">TypeScript</span>
                  <span className="px-4 py-2 bg-secondary text-secondary-foreground rounded-full text-sm border border-border">Tailwind CSS</span>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-primary/10 border border-border flex items-center justify-center">
                  <svg className="w-7 h-7 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Clean Code</h3>
                  <p className="text-muted-foreground">Writing maintainable, scalable code with modern best practices and patterns.</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-primary/10 border border-border flex items-center justify-center">
                  <svg className="w-7 h-7 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Performance</h3>
                  <p className="text-muted-foreground">Optimizing applications for speed, efficiency, and seamless user experience.</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-primary/10 border border-border flex items-center justify-center">
                  <svg className="w-7 h-7 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">UI/UX Focus</h3>
                  <p className="text-muted-foreground">Creating interfaces that are not only beautiful but intuitive and user-friendly.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </AnimatedSection>

  )
}
