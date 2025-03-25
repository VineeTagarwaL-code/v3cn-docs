'use client';

import { Background } from './Background';
import { Feedback } from '../feedback';
import { HeroContent } from './HeroContent';
import { LandingFooter } from './landing-footer';
import { LogoBadge } from './LogoBadge';
import { ScrollableCards } from './ScrollableCards';

const feedbackTweets = ['1858101945048637799', '1855544798960353612', '1849823885962666336'];
export default function HeroSection() {
  return (
    <div className="relative min-h-full w-full flex items-center justify-center bg-gradient-to-b from-background to-background/95 overflow-hidden">
      {/* Background elements */}
      <Background />

      {/* Logo badge */}
      <LogoBadge />

      {/* Main content */}
      <div className="relative z-10 w-full max-w-[90%] md:max-w-5xl mx-auto px-2 md:px-4 py-12 md:py-20">
        <HeroContent />
        <ScrollableCards />
        {/* <Feedback tweetIds={feedbackTweets} /> */}
        <LandingFooter />
      </div>
    </div>
  );
}
