"use client"

import { useState, useEffect } from "react"
import { ArrowRight, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"
// import { Badge } from "@/components/ui/badge"
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { Card, gradientStyles } from "./card";
import { Badge } from "../ui/badge";

export default function HeroSection() {
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
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="relative min-h-[100vh] w-full flex items-center justify-center bg-gradient-to-b from-background to-background/95 overflow-hidden ">
    {/* Background elements */}
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute top-1/4 -left-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -right-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />

      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGZpbGw9IiMzMzMiIGQ9Ik0wIDBoNjB2NjBIMHoiLz48cGF0aCBkPSJNNjAgMzBBMzAgMzAgMCAxIDEgMCAzMGEzMCAzMCAwIDAgMSA2MCAweiIgc3Ryb2tlPSIjNDQ0IiBzdHJva2Utd2lkdGg9Ii4yNSIvPjwvZz48L3N2Zz4=')] opacity-[0.02]" />
    </div>

    {/* Logo badge */}
    <div className="absolute top-8 left-1/2 transform -translate-x-1/2 z-10">
      <Badge variant="outline" className="px-3 py-1 border border-purple-300/20 bg-background/80 backdrop-blur-sm">
        <span className="text-purple-300 font-semibold mr-1">V3CN</span>
        <span className="h-2 w-2 rounded-full bg-purple-400 inline-block animate-pulse" />
      </Badge>
    </div>

    {/* Main content */}
    <div className="relative z-10 max-w-5xl mx-auto px-4 py-20 text-center">
      <div className="space-y-6">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
          <span className="block bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent pb-2">
            The Modern Way to Build
          </span>
          <span className="block text-white">Beautiful & Scalable UIs</span>
        </h1>

        <p className="max-w-2xl mx-auto text-muted-foreground text-lg md:text-xl">
          A modern UI library crafted for speed, flexibility, and seamless design. Create beautiful, responsive
          components with ease.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
          <Button
            size="lg"
            className="group bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white border-0"
          >
            Get Started
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
          <Button size="lg" variant="outline" className="border-purple-500/20 hover:bg-purple-500/10">
            <FileText className="mr-2 h-4 w-4" />
            Visit Docs
          </Button>
        </div>
      </div>
 <div className=" w-full relative  " ref={containerRef}>
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
    </div>
  </div>
)
}
