"use client";

import { motion, useScroll, useTransform } from "framer-motion";

import { Card } from "./card";
import Image from "next/image";
import { useRef } from "react";

export const ScrollableCards = () => {
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
    <div className="w-full relative" ref={containerRef}>
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
                gradient={
                  "linear-gradient(325deg, rgb(67 61 70) 23.37%, rgb(0 0 0) 60.25%)"
                }
                iconSrc="/icons/star.svg"
                bgPath="/image/noise.png"
              />
            </motion.div>
            <motion.div style={{ y: yBottom }} className="flex items-end">
              <Card
                title="Beautiful components, ready to use."
                buttonText="Explore Components"
                gradient={
                  "linear-gradient(325deg, rgb(186 186 186 / 57%) 23.37%, rgb(102 57 185) 60.25%)"
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
  );
}; 