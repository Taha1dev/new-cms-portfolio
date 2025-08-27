"use client";
import { SparklesCore } from "@/components/ui/sparkles";
import React from "react";

export function SparklesPreview() {
  return (
    <div className="w-full bg-background flex flex-col items-center justify-center overflow-hidden rounded-md">
      <div className="relative">
        <h1 className="font-bold text-center text-foreground relative z-20 text-3xl sm:text-4xl md:text-5xl">
          Testimonials
        </h1>

        <div className="absolute -bottom-4 left-0 right-0 flex justify-center">
          <div className="relative w-full max-w-[16rem] sm:max-w-[20rem] md:max-w-[24rem] lg:max-w-[28rem] xl:max-w-[32rem]">
            <div className="absolute top-0 bg-gradient-to-r from-transparent via-main-600 to-transparent h-[2px] w-full blur-sm" />
            <div className="absolute top-0 bg-gradient-to-r from-transparent via-main-600 to-transparent h-px w-full" />
          </div>
        </div>
      </div>

      <div className="w-1/3 h-8 relative mt-8">
        <SparklesCore
          background="transparent"
          minSize={0.4}
          maxSize={1}
          particleDensity={1200}
          className="w-full h-full"
          particleColor="#000"
        />
        <div className="absolute inset-0 w-full h-full bg-background [mask-image:radial-gradient(ellipse_at_center,_transparent_10%,_white_70%)]"></div>
      </div>
    </div>
  );
}