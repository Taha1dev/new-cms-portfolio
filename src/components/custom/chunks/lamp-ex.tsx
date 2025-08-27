"use client";

import { motion } from "framer-motion";

export default function Lamp({ text }: { text: string }) {
  return (
    <>
      <div className="flex flex-col items-center justify-center h-40 bg-background relative overflow-hidden top-16">
        <div className="absolute top-16 w-[200px] h-[200px] rounded-full 
                        bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] 
                        bg-main-500
                        blur-[40px] opacity-80 filter"></div>

        <div className="absolute top-20 w-[120px] h-[120px] rounded-full 
                        bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] 
                        bg-main-500 
                        blur-[30px] opacity-90 filter"></div>

        <div className="absolute bottom-[5.0rem] w-full h-full bg-background origin-center"></div>

        <motion.div
          className="absolute top-20 h-[3px] rounded-full bg-gradient-to-r from-transparent via-main-400 to-transparent origin-center filter"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ amount: 0.5, once: false }}
          style={{ width: "24rem" }}
        ></motion.div>
      </div>
      <div className="text-center relative z-10">
        <h1 className="text-4xl md:text-5xl font-semibold text-foreground leading-tight">
          {text}
        </h1>
      </div>
    </>
  );
}