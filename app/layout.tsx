import React from 'react';
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./lib/ThemeContext";
import { PortfolioProvider } from "./lib/PortfolioContext";
import { Navigation } from "./components/ui/Navigation";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Flexfolio - Drag & Drop Portfolio Builder",
  description: "A modern, drag-and-drop portfolio builder that helps developers, designers, and creators showcase their work with beautiful templates.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider>
          <PortfolioProvider>
            <Navigation />
            <main className="min-h-screen bg-background">
              {children}
            </main>
          </PortfolioProvider>
        </ThemeProvider>
      </body>
    </html>
  );
} 