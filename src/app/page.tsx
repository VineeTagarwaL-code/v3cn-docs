'use client';

import { Feedback } from '@/components/feedback';
import { Hero } from '@/components/landing/hero';
import { LandingFooter } from '@/components/landing/landing-footer';
import { useLenis } from '@/hooks/use-lenis';

const feedbackTweets = ['1858101945048637799', '1855544798960353612', '1849823885962666336'];
export default function Home() {
  useLenis();
  return (
    <div className="relative bg-[#0C0E10]">
      <div
        className="top-0 left-0 z-[10] absolute w-full h-[200px] rotate-180"
        style={{
          maskImage: 'linear-gradient(transparent, black 85%)',
          backgroundColor: 'rgb(165 122 201 / 10%)',
        }}
      />
      <div
        style={{
          backgroundImage:
            'radial-gradient(circle at 60% 10%, #ff00002e, #fff0 11%), radial-gradient(circle at 70% 15%, #ab40ff2e, #faf3ff03 10%, #fff0)',
        }}
      >
        <Hero />
        <div className="mx-auto max-md:px-4 max-w-5xl">
          <Feedback tweetIds={feedbackTweets} />
        </div>
        <LandingFooter />
      </div>
    </div>
  );
}
