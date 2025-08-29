import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ui/theme-provider";
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"
const geistSans = Geist({
  subsets: ["latin"],
  weight: ["400", "700", "900"]
});


export const metadata: Metadata = {
  title: "Taha Al-Mulla | Frontend Developer",
  description:
    "Frontend Developer specialized in building fast, accessible, and responsive web applications using React, Next.js, and modern web technologies.",
  keywords: [
    "Taha Al-Mulla",
    "Taha Mulla",
    "Frontend Developer",
    "React Developer",
    "Next.js Engineer",
    "Web Developer",
    "UI/UX",
    "Performance Optimization",
    "Freelancer",
    "Software Engineer",
  ],
  authors: [{ name: "Taha Al-Mulla", url: "https://tahamulla.me" }],
  creator: "Taha Al-Mulla",
  publisher: "Taha Al-Mulla",
  metadataBase: new URL("https://tahamulla.me"),


  openGraph: {
    title: "Taha Al-Mulla | Frontend Developer",
    description:
      "Crafting high-performance, modern, and user-focused web applications. Expertise in React, Next.js, and scalable frontend architecture.",
    url: "https://tahamulla.me",
    siteName: "Taha Al-Mulla Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Taha Al-Mulla - Frontend Developer",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },

  alternates: {
    canonical: "https://tahamulla.me",
  },

  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.className} antialiased relative selection:bg-purple-600/20 selection:text-purple-400`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
        >
          <Analytics />
          <SpeedInsights />
          {children}
        </ThemeProvider>
      </body>


    </html >
  );
}
