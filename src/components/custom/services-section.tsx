// "use client"

// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
// import { Badge } from "@/components/ui/badge"
// import { Button } from "@/components/ui/button"
// import { ArrowRight, Code, Palette, Smartphone, Globe, Zap, Shield } from "lucide-react"

// export function ServicesSection() {
//   const services = [
//     {
//       icon: Code,
//       title: "Frontend Development",
//       description: "Building responsive, performant web applications using modern frameworks and best practices.",
//       features: ["React/Next.js", "TypeScript", "Responsive Design", "Performance Optimization"],
//       price: "From $2,500",
//       popular: false,
//     },
//     {
//       icon: Globe,
//       title: "Full-Stack Solutions",
//       description: "Complete web applications with backend integration, databases, and deployment strategies.",
//       features: ["API Development", "Database Design", "Authentication", "Cloud Deployment"],
//       price: "From $4,500",
//       popular: true,
//     },
//     {
//       icon: Palette,
//       title: "UI/UX Design",
//       description: "Creating intuitive user interfaces with modern design principles and user-centered approach.",
//       features: ["Wireframing", "Prototyping", "Design Systems", "User Testing"],
//       price: "From $1,800",
//       popular: false,
//     },
//     {
//       icon: Smartphone,
//       title: "Mobile-First Design",
//       description: "Ensuring your application works flawlessly across all devices and screen sizes.",
//       features: ["Responsive Layouts", "Touch Optimization", "Progressive Web Apps", "Cross-browser Testing"],
//       price: "From $2,000",
//       popular: false,
//     },
//     {
//       icon: Zap,
//       title: "Performance Optimization",
//       description: "Improving website speed, SEO, and overall user experience through technical enhancements.",
//       features: ["Core Web Vitals", "SEO Optimization", "Bundle Optimization", "Caching Strategies"],
//       price: "From $1,500",
//       popular: false,
//     },
//     {
//       icon: Shield,
//       title: "Maintenance & Support",
//       description: "Ongoing support, updates, and maintenance to keep your application running smoothly.",
//       features: ["Bug Fixes", "Security Updates", "Feature Enhancements", "24/7 Support"],
//       price: "From $800/month",
//       popular: false,
//     },
//   ]

//   return (
//     <section id="services" className="relative py-24 bg-muted/30">
//       <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-pink-500 to-transparent opacity-40"></div>
//       <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-pink-400 to-transparent opacity-20 blur-sm"></div>

//       <div className="max-w-6xl mx-auto px-6">
//         <div className="text-center mb-16">
//           <h2 className="text-4xl font-bold text-foreground mb-4">Services & Solutions</h2>
//           <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
//             Comprehensive web development services tailored to bring your digital vision to life
//           </p>
//         </div>

//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {services.map((service, index) => (
//             <Card
//               key={index}
//               className={`relative border bg-card hover:shadow-xl transition-all duration-300 group ${service.popular
//                   ? "border-pink-500/50 shadow-lg shadow-pink-500/10"
//                   : "border-border hover:border-pink-500/30"
//                 }`}
//             >
//               {service.popular && (
//                 <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
//                   <Badge className="bg-pink-600 text-white px-3 py-1">Most Popular</Badge>
//                 </div>
//               )}

//               <CardHeader className="text-center pb-4">
//                 <div
//                   className={`w-16 h-16 mx-auto mb-4 rounded-2xl flex items-center justify-center transition-colors ${service.popular
//                       ? "bg-pink-600 text-white"
//                       : "bg-muted text-muted-foreground group-hover:bg-pink-600 group-hover:text-white"
//                     }`}
//                 >
//                   <service.icon className="w-8 h-8" />
//                 </div>
//                 <CardTitle className="text-xl text-foreground">{service.title}</CardTitle>
//                 <CardDescription className="text-muted-foreground">{service.description}</CardDescription>
//               </CardHeader>

//               <CardContent className="space-y-6">
//                 <div className="space-y-2">
//                   {service.features.map((feature, featureIndex) => (
//                     <div key={featureIndex} className="flex items-center space-x-2">
//                       <div className="w-1.5 h-1.5 bg-pink-500 rounded-full"></div>
//                       <span className="text-sm text-muted-foreground">{feature}</span>
//                     </div>
//                   ))}
//                 </div>

//                 <div className="pt-4 border-t border-border">
//                   <div className="flex items-center justify-between mb-4">
//                     <span className="text-2xl font-bold text-foreground">{service.price}</span>
//                   </div>

//                   <Button
//                     className={`w-full group ${service.popular
//                         ? "bg-pink-600 hover:bg-pink-700 text-white"
//                         : "bg-muted hover:bg-pink-600 hover:text-white text-foreground"
//                       }`}
//                   >
//                     Get Started
//                     <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-0.5 transition-transform" />
//                   </Button>
//                 </div>
//               </CardContent>
//             </Card>
//           ))}
//         </div>

//         <div className="text-center mt-16">
//           <Card className="border border-border bg-card max-w-2xl mx-auto">
//             <CardContent className="p-8">
//               <h3 className="text-2xl font-bold text-foreground mb-4">Custom Solutions</h3>
//               <p className="text-muted-foreground mb-6">
//                 Need something specific? I create tailored solutions that perfectly match your unique requirements and
//                 business goals.
//               </p>
//               <Button size="lg" className="bg-pink-600 hover:bg-pink-700 text-white">
//                 Discuss Your Project
//                 <ArrowRight className="w-4 h-4 ml-2" />
//               </Button>
//             </CardContent>
//           </Card>
//         </div>
//       </div>
//     </section>
//   )
// }
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
