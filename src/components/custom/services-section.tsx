
"use client";

import { Code, Layers, Zap, Monitor, Sparkles } from "lucide-react";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { motion, Variants } from "framer-motion";
import { Orbitron } from "next/font/google";

const orbitron = Orbitron({
  subsets: ["latin"],
  weight: ["900"],
});

// Variants
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 100, damping: 15, duration: 0.6 },
  },
};

const headerVariants: Variants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 100, duration: 0.8 },
  },
};

export function ServicesSection() {
  return (
    <motion.section
      className="relative py-20"
      id="services"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={containerVariants}
    >
      <motion.header className="text-center mb-12" variants={headerVariants}>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto uppercase">
          What I Offer — Creating impactful, performant, and modern web solutions.
        </p>
        <h2
          className={`text-4xl md:text-5xl font-extrabold text-foreground ${orbitron.className}`}
        >
          My Services
        </h2>
      </motion.header>

      <motion.ul
        className="grid grid-cols-1 grid-rows-none gap-4 md:grid-cols-12 md:grid-rows-3 lg:gap-4 xl:max-h-[34rem] xl:grid-rows-2"
        variants={containerVariants}
      >
        {services.map((service, i) => (
          <ServiceCard key={i} {...service} variants={itemVariants} />
        ))}
      </motion.ul>
    </motion.section>
  );
}

const services = [
  {
    area: "md:[grid-area:1/1/2/7] xl:[grid-area:1/1/2/5]",
    icon: <Code className="h-5 w-5 text-purple-500" />,
    title: "Frontend Engineering",
    description:
      "Scalable, maintainable apps built with React, Next.js, and Angular.",
  },
  {
    area: "md:[grid-area:1/7/2/13] xl:[grid-area:2/1/3/5]",
    icon: <Layers className="h-5 w-5 text-purple-500" />,
    title: "UI/UX Design Systems",
    description:
      "Modern, minimal interfaces with TailwindCSS, ShadCN, and accessibility in mind.",
  },
  {
    area: "md:[grid-area:2/1/3/7] xl:[grid-area:1/5/3/8]",
    icon: <Monitor className="h-5 w-5 text-purple-500" />,
    title: "Responsive & Mobile-First",
    description:
      "Optimized layouts for every device, ensuring pixel-perfect responsiveness.",
  },
  {
    area: "md:[grid-area:2/7/3/13] xl:[grid-area:1/8/2/13]",
    icon: <Zap className="h-5 w-5 text-purple-500" />,
    title: "Performance Optimization",
    description:
      "Enhancing LCP, CLS, and Core Web Vitals for faster, SEO-friendly apps.",
  },
  {
    area: "md:[grid-area:3/1/4/13] xl:[grid-area:2/8/3/13]",
    icon: <Sparkles className="h-5 w-5 text-purple-500" />,
    title: "Micro-interactions & Animations",
    description:
      "Smooth, eye-catching motion using Framer Motion for better UX.",
  },
];

interface ServiceCardProps {
  area: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  variants: Variants;
}

const ServiceCard = ({ area, icon, title, description, variants }: ServiceCardProps) => {
  return (
    <motion.li
      className={`min-h-[14rem] list-none ${area}`}
      variants={variants}
      whileHover={{
        scale: 1.03,
        transition: { type: "spring", stiffness: 200, damping: 15 },
      }}
    >
      <div className="relative h-full rounded-2xl border border-purple-500/20 bg-background/40 backdrop-blur-lg p-2 shadow-lg">
        <GlowingEffect
          blur={0}
          borderWidth={3}
          spread={80}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
        />
        <div className="relative flex h-full flex-col justify-between gap-6 rounded-xl p-6 md:p-6 dark:shadow-[0px_0px_27px_0px_#2D2D2D]">
          <div className="flex flex-col gap-3">
            <motion.div
              className="w-fit rounded-lg border border-purple-500/30 bg-purple-500/10 p-2"
              whileHover={{
                scale: 1.1,
                transition: { type: "spring", stiffness: 300 },
              }}
            >
              {icon}
            </motion.div>
            <h3 className="text-xl font-semibold text-foreground md:text-2xl">{title}</h3>
            <p className="text-sm text-muted-foreground md:text-base">{description}</p>
          </div>
        </div>
      </div>
    </motion.li>
  );
};
