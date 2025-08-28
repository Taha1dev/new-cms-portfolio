/* eslint-disable @next/next/no-img-element */
"use client";

import { cn } from "@/lib/utils";
import { Marquee } from "@/components/magicui/marquee";
import { motion } from "framer-motion";
// import Image from "next/image";

const reviews = [
  {
    name: "Majd Salman",
    username: "General Manager - Injaz Tech",
    body: "Taha is highly motivated, always learning, and constantly improving his skills. His initiatives bring real value.",
    img: "/testimonials/4.webp",
  },
  {
    name: "Maysaa Al Ahmar",
    username: "Founder & CEO - Voila",
    body: "I highly recommend Taha for his strong work ethic, commitment, and passion for continuous growth.",
    img: "/testimonials/5.webp",
  },
  {
    name: "Lama Youzghatli",
    username: "Full Stack Developer - Voila",
    body: "Your dedication and technical growth are truly impressive and will lead to a successful career.",
    img: "/testimonials/7.webp",
  },
  {
    name: "Ayham Al-jasem",
    username: "Software Supervisor - Injaz Tech", // Shortened
    body: "Delivered beyond expectations with quality and speed. Great job!",
    img: "/testimonials/1.webp",
  },
  {
    name: "Imad Totnji",
    username: "Technical Manager - Injaz Tech",
    body: "Taha is a rare talent—hardworking, adaptable, and constantly learning to deliver exceptional results.",
    img: "/testimonials/3.webp",
  },
  {
    name: "AbuBaker Hawarneih",
    username: "CTO - Projtech",
    body: "Taha's designs are modern, creative, and perfectly aligned with business needs. Great work every time!",
    img: "/testimonials/2.webp",
  },
  {
    name: "Shadi Musharraf",
    username: "Media Producer",
    body: "Taha's professionalism and technical expertise stand out—an absolute pleasure to work with.",
    img: "/testimonials/8.webp",
  },
  {
    name: "Waseem Madi",
    username: "Senior Technical Instructor",
    body: "Your ambition and passion for tech will take you far. Keep pushing forward—you have great potential.",
    img: "/testimonials/6.webp",
  },
];


const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  img,
  name,
  username,
  body,
}: {
  img: string;
  name: string;
  username: string;
  body: string;
}) => {
  return (
    <figure
      className={cn(
        "relative h-full w-64 cursor-pointer overflow-hidden rounded-xl border p-4 transition-colors duration-300",
        // light
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <img className="rounded-full" width="32" height="32" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-semibold dark:text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium text-muted-foreground">{username}</p>
        </div>
      </div>
      <blockquote className="mt-3 text-sm leading-snug">{body}</blockquote>
    </figure>
  );
};

export function MarqueeDemo() {
  return (
    <section
      id="testimonials"
      className="relative flex w-full flex-col items-center justify-center overflow-hidden py-20"
    >
      {/* Header */}
      <motion.div
        className="mb-10 text-center max-w-2xl"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <p className="text-sm font-semibold tracking-wide text-muted-foreground uppercase mb-2">
          Testimonials
        </p>
        <h2 className="text-3xl md:text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-primary to-main-500 animate-gradient-x">
          What People Say About Working With Me
        </h2>

      </motion.div>

      {/* Marquee Rows */}
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>

      {/* Gradient Fades */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
    </section>
  );
}
