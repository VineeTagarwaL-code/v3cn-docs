"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { Card, gradientStyles } from "./card";

export const Hero = () => {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"],
  });

  const imageShiftToTop = useTransform(
    scrollYProgress,
    [0, 0.5, 0.7],
    [485, 485, 0]
  );
  const image2ShiftToTop = useTransform(
    scrollYProgress,
    [0, 0.7, 0.9],
    [485, 485, 0]
  );
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
      <motion.div
        style={{
          opacity,
        }}
        className="flex flex-col items-center gap-2 w-fit text-center"
      >
        <div
          className="flex items-center gap-1 px-[10px] py-1 border border-[#5c58673d] rounded-[100px] text-xs"
          style={{
            background:
              "linear-gradient(180deg, rgba(25, 25, 27, 0.4) 19.09%, #19191B 100%)",
          }}
        >
          <span
            className="bg-clip-text text-transparent"
            style={{
              backgroundImage:
                "linear-gradient(90deg, #5a606c, #fff 50%, #5a606c)",
            }}
          >
            V3CN
          </span>
          <div className="bg-purple-400 p-[2px] rounded-full animate-pulse">
            <div className="bg-purple-500 rounded-full size-[5px]" />
          </div>
        </div>
        <div className="flex flex-col items-center mb-1 md:mb-3">
          <h1
            className="bg-clip-text font-medium text-transparent text-4xl lg:text-6xl sm:text-left leading-none tracking-tighter"
            style={{ backgroundImage: gradientStyles.backgroundGradient }}
          >
            The Modern Way to Build
          </h1>
          <h1
            className="bg-clip-text font-medium text-transparent text-4xl lg:text-6xl sm:text-left tracking-tighter"
            style={{ backgroundImage: gradientStyles.backgroundGradient }}
          >
            Beautiful & Scalable UIs
          </h1>
        </div>
        <p className="w-4/5 md:w-2/3 text-[#999999] text-sm text-center">
          A modern UI library crafted for speed, flexibility, and seamless
          design. Create beautiful, responsive components with ease.
        </p>
        <div className="flex justify-center items-center gap-4 mt-2">
          <Link
            href="/docs"
            className="flex justify-center items-center gap-1 py-[6px] pr-2 pl-[10px] rounded-2xl text-black text-base"
            style={{
              background:
                "linear-gradient(355deg, #c8a0dbf0 20.37%, rgb(242, 241, 241) 81.25%), linear-gradient(0deg, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0))",
            }}
          >
            Get Started
            <Image
              src="/icons/arrow-black.svg"
              alt="arrow"
              width={20}
              height={20}
            />
          </Link>
          <Link
            href="/docs"
            className="flex justify-center items-center gap-1 bg-clip-text px-3 py-2 rounded-xl text-transparent text-base"
            style={{
              backgroundImage:
                "linear-gradient(355deg, rgb(201 151 224 / 94%) 20.37%, rgb(242 241 241) 81.25%), linear-gradient(0deg, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0))",
            }}
          >
            <Image src="/icons/docs.svg" alt="star" width={20} height={20} />
            Visit Docs
          </Link>
        </div>
      </motion.div>
      <div className="relative w-full h-[200vh]" ref={containerRef}>
        <div className="top-0 sticky flex justify-center items-center w-full h-screen">
          <motion.div
            style={{
              scale: circleScale,
              opacity: circleOpacity,
            }}
            className="top-1/2 left-1/2 absolute blur-[3px] border border-[#892aca] rounded-full size-10 -translate-x-1/2 -translate-y-1/2 circle transform"
          />
          <motion.div
            style={{
              scale: circleScale2,
              opacity: circleOpacity2,
            }}
            className="top-1/2 left-1/2 absolute blur-[3px] border border-[#892aca] rounded-full size-10 -translate-x-1/2 -translate-y-1/2 circle transform"
          />
          <motion.div
            style={{
              scale: circleScale3,
              opacity: circleOpacity3,
            }}
            className="top-1/2 left-1/2 absolute blur-[3px] border border-[#892aca] rounded-full size-10 -translate-x-1/2 -translate-y-1/2 circle transform"
          />
          <div className="flex justify-center items-start gap-8">
            <div className="flex flex-col gap-8 mt-10">
              <motion.div style={{ y: yTop }} className="flex items-end">
                <Card
                  title="One Library for all your UI needs."
                  buttonText="Build with V3CN"
                  gradient={gradientStyles.cardGradient}
                  iconSrc="/icons/star.svg"
                />
              </motion.div>
              <motion.div style={{ y: yBottom }} className="flex items-end">
                <Card
                  title="One Library for all your UI needs."
                  buttonText="Build with V3CN"
                  gradient={
                    "linear-gradient(355deg, rgb(131 166 144) 20.37%, #31998a 81.25%)"
                  }
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
                    className="top-[0 left-0 absolute w-auto h-[485px]"
                  />
                  <motion.div
                    style={{
                      y: imageShiftToTop,
                      opacity: imageOpacity,
                    }}
                    className="top-0 left-0 z-[10] absolute w-auto h-[485px]"
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
            <div className="flex flex-col gap-8 mt-10">
              <motion.div style={{ y: yTop }} className="flex items-end">
                <Card
                  title="Seamless UI, Limitless Possibilities."
                  buttonText="Create Beautiful UIs"
                  gradient="linear-gradient(355deg, rgb(166, 131, 131) 20.37%, rgb(124 49 153) 81.25%)"
                  iconSrc="/icons/star.svg"
                />
              </motion.div>
              <motion.div style={{ y: yBottom }} className="flex items-end">
                <Card
                  title="Seamless UI, Limitless Possibilities."
                  buttonText="Create Beautiful UIs"
                  gradient="linear-gradient(355deg, rgb(166 161 131) 20.37%, rgb(128 153 49) 81.25%)"
                  iconSrc="/icons/star.svg"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
