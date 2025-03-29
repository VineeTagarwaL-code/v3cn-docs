import "./globals.css";

import { Geist, Geist_Mono } from "next/font/google";

import type { Metadata } from "next";
import NextTopLoader from 'nextjs-toploader';
import { Providers } from "@/components/provider";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://v3cn.vineet.pro'),
  title: {
    default: "V3CN - Components like never before",
    template: "%s | V3CN"
  },
  description: "Beautiful, animated UI components and effects with love. Built with shadcn/ui and Motion. Create stunning web experiences with our collection of customizable components.",
  keywords: ['ui components', 'react components', 'animation components', 'motion effects', 'shadcn/ui', 'framer motion', 'web animations', 'react ui library', 'animated components', 'interactive ui', '3d effects', 'modern web design', 'ui library', 'react animations'],
  authors: [{ name: 'Vineet Agarwal' }],
  creator: 'Vineet Agarwal',
  publisher: 'Vineet Agarwal',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://v3cn.vineet.pro',
    siteName: 'V3CN',
    title: 'V3CN - Components like never before',
    description: 'Beautiful, animated UI components and effects with love. Built with shadcn/ui and Motion. Create stunning web experiences with our collection of customizable components.',
    images: [
      {
        url: 'image/og.png',
        width: 1200,
        height: 630,
        alt: 'V3CN - Components like never before',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'V3CN - Components like never before',
    description: 'Beautiful, animated UI components and effects with love. Built with shadcn/ui and Motion.',
    images: ['image/og.png'],
    creator: '@vineetagarwal',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://v3cn.vineet.pro',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-zinc-100 dark:bg-[#0C0E10] transition-theme`}>
        <NextTopLoader 
          color="#892aca"
          showSpinner={false}
          height={3}
          shadow="0 0 10px #892aca,0 0 5px #892aca"
        />
        <Providers>
          <main>{children}</main>
          <Script
            defer
            src="https://stats.vineet.pro/script.js"
            data-website-id="5aa79a6c-9caf-4649-a641-512c273fbe98"
          />
        </Providers>
      </body>
    </html>
  );
}
