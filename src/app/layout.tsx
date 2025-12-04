import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { cn } from "@/lib/utils";
import { SpeedInsights } from "@vercel/speed-insights/next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "EDUS Classes",
  description: "Student Signup Portal",
  icons: {
    icon: "/Untitled-design1-1.png",
    shortcut: "/Untitled-design1-1.png",
    apple: "/Untitled-design1-1.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(inter.className, "min-h-screen bg-gray-50 antialiased")}>
        <Header />
        {children}
        <Footer />
        <SpeedInsights />
      </body>
    </html>
  );
}
