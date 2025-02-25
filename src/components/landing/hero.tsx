"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

export const Hero = () => {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"],
  });
  const opacity = useTransform(scrollYProgress, [0.5, 0.9], [0, 1]);
  const imageShiftToTop = useTransform(
    scrollYProgress,
    [0, 0.5, 0.8],
    [485, 485, -0]
  );
  const imageOpacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);
  const yLeft = useTransform(scrollYProgress, [0.5, 0.7], [300, 0]);
  const yRight = useTransform(scrollYProgress, [0.5, 0.7], [-300, 0]);
  return (
    <div className="flex flex-col items-center pt-24 w-full">
      <div className="flex flex-col items-center gap-2 w-fit text-center">
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
            style={{
              backgroundImage:
                "linear-gradient(355deg, rgb(168, 168, 168) 20.37%, rgb(183 132 223) 81.25%)",
            }}
          >
            The Modern Way to Build
          </h1>
          <h1
            className="bg-clip-text font-medium text-transparent text-4xl lg:text-6xl sm:text-left tracking-tighter"
            style={{
              backgroundImage:
                "linear-gradient(355deg, #A8A8A8 20.37%, #FFFFFF 81.25%)",
            }}
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
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="16"
              height="16"
              color="#c8a0dbf0"
              fill="none"
            >
              <path
                d="M20.4999 10.5V10C20.4999 6.22876 20.4999 4.34315 19.3284 3.17157C18.1568 2 16.2712 2 12.4999 2H11.5C7.72883 2 5.84323 2 4.67166 3.17156C3.50009 4.34312 3.50007 6.22872 3.50004 9.99993L3.5 14.5C3.49997 17.7874 3.49996 19.4312 4.40788 20.5375C4.57412 20.7401 4.75986 20.9258 4.96242 21.0921C6.06877 22 7.71249 22 10.9999 22"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M7.5 7H16.5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M7.5 12H13.5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M20.5 20L20.5 17C20.5 15.5706 19.1569 14 17.5 14C15.8431 14 14.5 15.5706 14.5 17L14.5 20.5C14.5 21.3284 15.1716 22 16 22C16.8284 22 17.5 21.3284 17.5 20.5V17"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Visit Docs
          </Link>
        </div>
      </div>
      <div className="relative w-full h-[200vh]" ref={containerRef}>
        <div className="top-0 sticky flex justify-center items-center w-full h-screen">
          <div className="flex justify-center items-start gap-8">
            <motion.div
              style={{ opacity, y: yLeft }}
              className="flex items-end h-[300px]"
            >
              <div
                className="flex flex-col justify-between p-4 rounded-2xl w-[300px] h-[200px]"
                style={{
                  backgroundImage:
                    "linear-gradient(355deg, rgb(166 131 131) 20.37%, #993150 81.25%)",
                }}
              >
                <div className="flex justify-between items-start w-full">
                  <h1 className="font-medium text-white text-lg">
                    One Library for all <br /> your UI needs.
                  </h1>
                  <Image
                    src="/icons/star.svg"
                    alt="star"
                    width={32}
                    height={32}
                    className="mt-0"
                  />
                </div>
                <button
                  className="flex items-center gap-1 p-2 px-3 border border-[#5c58673d] rounded-2xl w-fit font-medium text-white hover:text-gray-300 text-sm"
                  style={{
                    background:
                      "linear-gradient(rgb(21 21 21) 0%, rgba(34, 34, 35, 0.6) 68.75%)",
                  }}
                >
                  Build with V3CN
                </button>
              </div>
            </motion.div>
            <div className="relative h-fit overflow-hidden">
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
                </div>
              </div>
            </div>
            <motion.div
              style={{ opacity, y: yRight }}
              className="flex items-end h-[500px]"
            >
              <div
                className="flex flex-col justify-between p-4 rounded-2xl w-[300px] h-[200px]"
                style={{
                  backgroundImage:
                    "linear-gradient(355deg, rgb(166, 131, 131) 20.37%, rgb(124 49 153) 81.25%)",
                }}
              >
                <div className="flex justify-between items-start w-full">
                  <h1 className="font-medium text-white text-lg">
                    Seamless UI, Limitless Possibilities.
                  </h1>
                  <Image
                    src="/icons/star.svg"
                    alt="star"
                    width={32}
                    height={32}
                    className="mt-0"
                  />
                </div>
                <button
                  className="flex items-center gap-1 p-2 px-3 border border-[#5c58673d] rounded-2xl w-fit font-medium text-white hover:text-gray-300 text-sm"
                  style={{
                    background:
                      "linear-gradient(rgb(21 21 21) 0%, rgba(34, 34, 35, 0.6) 68.75%)",
                  }}
                >
                  Create Bueatiful UIs
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      <div className="h-screen" />
    </div>
  );
};
