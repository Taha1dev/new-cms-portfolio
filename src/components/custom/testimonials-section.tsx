/* eslint-disable @next/next/no-img-element */
"use client";

import { cn } from "@/lib/utils";
import { Marquee } from "@/components/magicui/marquee";
import { motion } from "framer-motion";

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
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
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
      className="relative flex w-full flex-col items-center justify-center overflow-hidden py-20 "
    >
      {/* <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_farthest-side_at_50%_50%,rgba(0,0,0,0.03)_0%,transparent_100%)] dark:bg-[radial-gradient(circle_farthest-side_at_50%_50%,rgba(255,255,255,0.05)_0%,transparent_100%)]" /> */}

      <motion.div
        className="mb-12 text-center max-w-3xl px-4"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        <div className="inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold tracking-wide text-muted-foreground mb-6 bg-card backdrop-blur-sm">
          {/* <span className="mr-2 h-2 w-2 rounded-full bg-purple-500 animate-ping" /> */}
          <span className="relative flex h-2 w-2 mr-2">
            <span
              className="animate-ping absolute inset-0 inline-flex h-full w-full rounded-full opacity-90 bg-purple-500"
            />
            <span
              className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"
            />
          </span>
          TESTIMONIALS
        </div>

        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground mb-4">
          What People Say{" "}
          <span className="relative whitespace-nowrap text-primary">
            About My Work
            <svg
              aria-hidden="true"
              viewBox="0 0 418 42"
              className="absolute -bottom-1 left-0 h-[0.4em] w-full"
              preserveAspectRatio="none"
            >
              <defs>
                <linearGradient id="underline-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="rgb(244, 63, 94)" /> {/* rose-500 */}
                  <stop offset="50%" stopColor="rgb(168, 85, 247)" /> {/* purple-500 */}
                  <stop offset="100%" stopColor="rgb(45, 212, 191)" /> {/* cyan-400 */}
                </linearGradient>
              </defs>
              <path
                d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z"
                fill="url(#underline-gradient)"
              />
            </svg>
          </span>
        </h2>

        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Don&apos;t just take my word for it – hear from clients and colleagues I&apos;ve collaborated with on various projects.
        </p>
      </motion.div>

      <div className="w-full">
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
      </div>

      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
    </section>
  );
}

