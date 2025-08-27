/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import React, { useState, useRef, } from "react";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import { MapPin, Clock, Zap, ChevronRight } from 'lucide-react';

const World = dynamic(() => import("../../ui/globe").then((m) => m.World), {
  ssr: false,
});

export function FlexibleGlobe() {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef<any>(null);
  const accentColor = "#8b5cf6";


  const isDarkMode =
    typeof window !== "undefined" &&
    document.documentElement.classList.contains("dark");


  // Color palette suggestions:
  // Dark Mode: Deep navy + cyan highlights
  // Light Mode: Soft blue-gray + vivid cyan highlights

  const globeConfig = {
    pointSize: isHovered ? 2 : 1.5,
    globeColor: isDarkMode ? "#1e293b" : "#e2e8f0", // dark navy vs light slate
    showAtmosphere: true,
    atmosphereColor: isDarkMode ? "#38bdf8" : "#0ea5e9", // cyan glow
    atmosphereAltitude: isHovered ? 0.3 : 0.25,
    emissive: isDarkMode ? "#0f172a" : "#93c5fd", // deep blue vs light blue
    emissiveIntensity: isHovered ? 0.35 : 0.25,
    shininess: 1,
    polygonColor: isHovered
      ? (isDarkMode ? "#bae6fd" : "#38bdf8") // Hover bright
      : (isDarkMode ? "#60a5fa" : "#93c5fd"), // Base soft blue
    ambientLight: isDarkMode ? "#38bdf8" : "#0ea5e9",
    directionalLeftLight: "#ffffff",
    directionalTopLight: "#ffffff",
    pointLight: "#ffffff",
    arcTime: 1000,
    arcLength: 0.9,
    rings: 1,
    maxRings: 3,
    initialPosition: { lat: 33.5138, lng: 36.2765 }, // Syria
    autoRotate: true,
    autoRotateSpeed: isHovered ? 0.5 : 0.3,
  };



  const glowingPoints = [
    {
      order: 1,
      startLat: 33.5138,
      startLng: 36.2765,
      endLat: 33.5138,
      endLng: 36.2765,
      arcAlt: 0,
      color: "#0ea5e9",
    },
  ];



  return (
    <div
      ref={containerRef}
      className="relative flex flex-col items-center justify-center h-[40rem] w-full max-w-lg mx-auto bg-card border border-border rounded-2xl overflow-hidden group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        transform: isHovered ? 'translateY(-4px)' : 'translateY(0)',
        transition: 'all 0.3s ease',
        boxShadow: isHovered
          ? '0 25px 50px -12px rgba(139, 92, 246, 0.25)'
          : '0 10px 30px -10px rgba(0, 0, 0, 0.1)',
      }}
    >
      {/* Animated gradient background */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-1/2 w-1/2 rounded-full -z-10 transition-all duration-700"
        style={{
          background: isHovered
            ? `radial-gradient(circle, ${accentColor}30, transparent 70%)`
            : `radial-gradient(circle, ${accentColor}20, transparent 80%)`,
          filter: isHovered ? "blur(100px)" : "blur(80px)",
          transform: isHovered ? 'scale(1.2)' : 'scale(1)',
          opacity: isHovered ? 0.8 : 0.6,
        }}
      />

      {/* Mouse follow spotlight effect */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(139, 92, 246, 0.1), transparent 40%)`,
        }}
      />

      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="absolute top-10 z-20 flex flex-col items-center px-4"
      >
        <h2 className="text-card-foreground text-xl md:text-2xl font-bold text-center bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text">
          I&apos;m very flexible with time<br />zone communications
        </h2>
        <motion.div
          className="flex space-x-2 mt-4"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <button
            className="text-xs text-purple-100 rounded-full px-3 py-1.5 flex items-center gap-1.5 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/30"
            style={{ backgroundColor: accentColor }}
          >
            <Zap size={12} />
            SY <span className="text-purple-100/70">Syria</span>
            <ChevronRight size={12} className="transition-transform group-hover:translate-x-0.5" />
          </button>
        </motion.div>
      </motion.div>

      {/* Globe */}
      <div className="absolute top-1/4 -left-[7rem] w-[600px] h-[600px] z-10 scale-125 transition-transform duration-700 group-hover:scale-[1.35]">
        <World data={glowingPoints} globeConfig={globeConfig} />
      </div>

      {/* Location badge with enhanced hover */}
      <motion.div
        className="absolute bottom-6 left-6 z-20 flex items-center space-x-2 bg-background/80 backdrop-blur-sm p-2.5 rounded-xl border border-border/50 transition-all duration-300 hover:bg-background/95 hover:shadow-md hover:border-border/70"
        whileHover={{ x: 5 }}
      >
        <div className="p-1.5 rounded-full bg-primary/10">
          <MapPin size={16} className="text-primary" />
        </div>
        <div className="flex flex-col">
          <span className="text-xs text-muted-foreground flex items-center gap-1">
            <Clock size={10} />
            Remote
          </span>
          <span className="text-sm font-semibold text-card-foreground">Syria, GMT+3</span>
        </div>
      </motion.div>

      {/* Subtle hover indicator */}
      <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div className="flex items-center text-xs text-muted-foreground/70">
          <span>Hover effect</span>
          <div className="flex ml-1.5">
            {[1, 2, 3].map((i) => (
              <motion.div
                key={i}
                className="w-1 h-1 bg-primary/40 rounded-full mx-0.5"
                animate={{
                  scale: [1, 1.4, 1],
                }}
                transition={{
                  duration: 1.2,
                  repeat: Infinity,
                  delay: i * 0.2,
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}