import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Optimal AI — AI-Powered Business Automation",
  description:
    "We build intelligent automation systems that save you time, reduce errors, and scale your business. n8n workflows, AI chatbots, lead generation, and more.",
  keywords: [
    "AI automation",
    "n8n",
    "business automation",
    "chatbots",
    "lead generation",
    "CRM automation",
  ],
  openGraph: {
    title: "Optimal AI — AI-Powered Business Automation",
    description:
      "Intelligent automation systems that save you time and scale your business.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
