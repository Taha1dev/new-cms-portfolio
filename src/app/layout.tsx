import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ui/theme-provider";

const geistSans = Geist({
  subsets: ["latin"],
  weight: ["400", "700", "900"]
});


export const metadata: Metadata = {
  title: "Taha Al-Mulla Portfolio",
  description: "Welcome To My Portfolio",
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
          defaultTheme="system"
          enableSystem
        >
          {children}
        </ThemeProvider>
      </body>
    </html >
  );
}
