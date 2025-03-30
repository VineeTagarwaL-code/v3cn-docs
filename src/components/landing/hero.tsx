'use client';

import { FileText, Star } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

import { Button } from '../ui/button';
import { Card } from './card';
import Image from 'next/image';
import Link from 'next/link';
import { LogoBadge } from './LogoBadge';

export const Hero = () => {
  const containerRef = useRef(null);
  const [stars, setStars] = useState('0');

  useEffect(() => {
    const fetchStars = async () => {
      try {
        const response = await fetch('https://api.github.com/repos/VineeTagarwaL-code/v3cn-docs');

        if (!response.ok) {
          throw new Error(`GitHub API returned ${response.status}`);
        }

        const data = await response.json();
        const stars = data.stargazers_count;

        // Format the number of stars
        const formattedStars = formatNumber(stars);
        setStars(formattedStars);
      } catch (error) {
        console.error('Error fetching stars:', error);
      }
    };

    fetchStars();
  }, []);

  // Helper function to format the number
  const formatNumber = (num: number) => {
    if (num >= 1_000_000) {
      return `${(num / 1_000_000).toFixed(1)}M`; // Convert to millions (e.g., 1.2M)
    } else if (num >= 1_000) {
      return `${(num / 1_000).toFixed(1)}k`; // Convert to thousands (e.g., 1.5k)
    } else {
      return num.toString(); // Return as is for numbers less than 1000
    }
  };

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end end'],
  });

  const imageShiftToTop = useTransform(scrollYProgress, [0, 0.5, 0.7], [485, 485, 0]);
  const image2ShiftToTop = useTransform(scrollYProgress, [0, 0.7, 0.9], [485, 485, 0]);
  const imageOpacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);
  const yTop = useTransform(scrollYProgress, [0.5, 0.6], [700, 0]);
  const circleScale = useTransform(scrollYProgress, [0.5, 0.7], [1, 30]);
  const circleScale2 = useTransform(scrollYProgress, [0.7, 0.8], [1, 30]);
  const circleScale3 = useTransform(scrollYProgress, [0.8, 0.9], [1, 30]);
  const circleOpacity = useTransform(scrollYProgress, [0.7, 0.8], [1, 0]);
  const circleOpacity2 = useTransform(scrollYProgress, [0.8, 0.9], [1, 0]);
  const circleOpacity3 = useTransform(scrollYProgress, [0.9, 1], [1, 0.5]);
  const opacity = useTransform(scrollYProgress, [0.3, 0.5], [1, 0]);
  const yBottom = useTransform(scrollYProgress, [0.7, 0.9], [700, 0]);
  return (
    <div className="flex flex-col items-center pt-24 w-full">
      <div className="space-y-4 md:space-y-6">
        <LogoBadge />
        <h1 className="mt-3 font-bold text-center tracking-tight">
          <span className="block bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 pb-1 md:pb-2 text-transparent text-2xl md:text-6xl lg:text-7xl">
            Make your website stand out
          </span>
          <span className="block text-2xl md:text-6xl lg:text-7xl">Beautiful & Unique UIs</span>
        </h1>

        <p className="mx-auto max-w-2xl px-3 text-muted-foreground text-base sm:text-lg md:text-xl text-center">
          A collection of unique components that make your website stand out. Crafted for speed,
          flexibility, and seamless design.
        </p>

        <div className="flex sm:flex-row flex-col justify-center items-center gap-3 md:gap-4 mt-6 md:mt-8">
          <Link href="/docs/installation">
            <Button
              size="lg"
              variant="outline"
              className="bg-gradient-to-r from-purple-500 hover:from-purple-600 to-pink-500 hover:to-pink-600 px-5 py-2 md:py-3 border-purple-500/20 min-w-[180px] h-11 md:h-12 text-sm md:text-base"
            >
              <FileText className="mr-2 w-4 h-4" />
              Browse Components
            </Button>
          </Link>
          <Link href="https://github.com/vineetagarwal-code/v3cn-docs">
            <Button
              size="lg"
              variant="outline"
              className="hover:from-purple-600 hover:to-pink-600 px-7 py-2 md:py-3 border-purple-500/20 min-w-[180px] h-11 md:h-12 text-sm md:text-base"
            >
              <Star className="mr-2 w-4 h-4" />
              {stars} Stars on GitHub
            </Button>
          </Link>
        </div>
      </div>
      <div className="relative w-full h-[200vh]" ref={containerRef}>
        <div className="top-0 sticky flex justify-center items-center w-full h-screen">
          <motion.div
            style={{
              scale: circleScale,
              opacity: circleOpacity,
            }}
            className="hidden top-1/2 left-1/2 absolute lg:flex blur-[3px] border border-[#892aca] rounded-full size-10 -translate-x-1/2 -translate-y-1/2 circle transform"
          />
          <motion.div
            style={{
              scale: circleScale2,
              opacity: circleOpacity2,
            }}
            className="hidden top-1/2 left-1/2 absolute lg:flex blur-[3px] border border-[#892aca] rounded-full size-10 -translate-x-1/2 -translate-y-1/2 circle transform"
          />
          <motion.div
            style={{
              scale: circleScale3,
              opacity: circleOpacity3,
            }}
            className="hidden top-1/2 left-1/2 absolute lg:flex blur-[3px] border border-[#892aca] rounded-full size-10 -translate-x-1/2 -translate-y-1/2 circle transform"
          />
          <div className="flex justify-center items-start gap-8">
            <div className="hidden lg:flex flex-col gap-8 mt-10">
              <motion.div style={{ y: yTop }} className="flex items-end">
                <Card
                  title="One Library for all your UI needs."
                  buttonText="Build with V3CN"
                  gradient={'linear-gradient(325deg, rgb(67 61 70) 23.37%, rgb(0 0 0) 60.25%)'}
                  iconSrc="/icons/star.svg"
                  bgPath="/image/noise.png"
                />
              </motion.div>
              <motion.div style={{ y: yBottom }} className="flex items-end">
                <Card
                  title="Beautiful components, ready to use."
                  buttonText="Explore Components"
                  gradient={
                    'linear-gradient(325deg, rgb(186 186 186 / 57%) 23.37%, rgb(102 57 185) 60.25%)'
                  }
                  bgPath="/image/purple.png"
                  iconSrc="/icons/star.svg"
                />
              </motion.div>
            </div>
            <div className="relative rounded-[52px] h-fit overflow-hidden">
              <Image
                src="/image/phone.png"
                alt="hero"
                width={600}
                height={400}
                className="w-auto h-[600px]"
              />
              <div className="top-[50px] left-[15px] absolute w-full h-[485px] overflow-hidden">
                <div className="relative w-full h-full">
                  <Image
                    src="/image/mockup.jpeg"
                    alt="mockup"
                    width={600}
                    height={400}
                    className="top-[0 left-0 absolute w-auto h-[488px]"
                  />
                  <motion.div
                    style={{
                      y: imageShiftToTop,
                      opacity: imageOpacity,
                    }}
                    className="top-0 left-[-3px] z-[10] absolute w-auto h-[480px]"
                  >
                    <Image
                      src="/image/mockup-2.png"
                      alt="mockup-2"
                      width={600}
                      height={400}
                      className="w-auto h-full"
                    />
                  </motion.div>
                  <motion.div
                    style={{
                      y: image2ShiftToTop,
                      opacity: imageOpacity,
                    }}
                    className="top-0 left-0 z-[10] absolute w-auto h-[485px]"
                  >
                    <Image
                      src="/image/mockup-3.png"
                      alt="mockup-3"
                      width={600}
                      height={400}
                      className="w-auto h-full"
                    />
                  </motion.div>
                </div>
              </div>
            </div>
            <div className="hidden lg:flex flex-col gap-8 mt-10">
              <motion.div style={{ y: yTop }} className="flex items-end">
                <Card
                  title="A Curated Library of Unique Components."
                  buttonText="Discover Components"
                  gradient="linear-gradient(325deg, rgb(242 242 242 / 50%) 9.37%, #942446)"
                  iconSrc="/icons/star.svg"
                  bgPath="/image/orange.png"
                />
              </motion.div>
              <motion.div style={{ y: yBottom }} className="flex items-end">
                <Card
                  title="Build Stunning Interfaces with Ease."
                  buttonText="Start Creating"
                  gradient="linear-gradient(325deg, rgb(67 61 70) 23.37%, rgb(0 0 0) 60.25%)"
                  iconSrc="/icons/star.svg"
                  bgPath="/image/noise.png"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
