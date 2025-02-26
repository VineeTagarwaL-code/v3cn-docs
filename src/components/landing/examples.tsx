import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

type Props = {};
export const Examples = (props: Props) => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.2 });

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div className="w-full">
      <div
        className="mx-auto px-5 py-10 border-[#4342423f] border-t max-w-[1300px]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 35% 25%, #ab40ff2e, #fff0 23%), radial-gradient(circle at 25% 35%, #ff000014, #fff0 18%)",
        }}
      >
        <div className="flex flex-col justify-center items-center gap-4 w-full">
          <div
            className="flex items-center gap-1 px-[20px] py-1 border border-[#5c58673d] rounded-[100px] w-fit text-base"
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
              About Us
            </span>
          </div>
          <h1 className="bg-clip-text bg-gradient-stop bg-gradient-to-br from-white via-30% via-white to-white/30 w-full lg:w-5/6 max-w-sm lg:max-w-xl h-[50px] md:h-[100px] font-medium text-transparent text-2xl sm:text-4xl lg:text-5xl text-center leading-none tracking-tighter">
            Your Gateway to Exclusive Interface Elements
          </h1>
          <p className="pb-6 max-w-sm md:max-w-md lg:max-w-lg xl:max-w-3xl text-white/70 text-sm md:text-base text-center text-balance leading-7">
            An exclusive UI library featuring one-of-a-kind components you won't
            find anywhere else. Designed for full customization, it empowers you
            to craft visually stunning and truly unique user interfaces
            effortlessly.
          </p>
        </div>
        <motion.div
          ref={containerRef}
          className="gap-8 grid grid-cols-2 mt-10"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div className="flex flex-col gap-6" variants={itemVariants}>
            <div className="group relative rounded-3xl h-[450px] overflow-hidden">
              <div className="group-hover:bg-transparent top-0 left-0 z-[10] absolute bg-[#00000039] w-full h-full transition-all duration-700 ease-in-out" />
              <Image
                src="/image/showcase-1.png"
                alt="showcase1"
                width={600}
                height={400}
                className="w-full h-full object-center object-cover group-hover:scale-[1.15] transition-transform duration-700 ease-in-out"
              />
            </div>
            <div>
              <h1 className="font-medium text-[28px] text-white leading-[38px]">
                Discord Presence
              </h1>
              <h1 className="font-medium text-[28px] text-white leading-[38px]">
                Live Discord Status Display
              </h1>
            </div>
          </motion.div>
          <motion.div className="flex flex-col gap-6" variants={itemVariants}>
            <div className="group relative rounded-3xl h-[550px] overflow-hidden">
              <div className="group-hover:bg-transparent top-0 left-0 z-[10] absolute bg-[#00000039] w-full h-full transition-all duration-700 ease-in-out" />
              <Image
                src="/image/showcase-2.png"
                alt="showcase2"
                width={600}
                height={400}
                className="w-full h-full object-cover group-hover:scale-[1.15] transition-transform duration-700 ease-in-out"
              />
            </div>
            <div>
              <h1 className="font-medium text-[28px] text-white leading-[38px]">
                Hovering Card
              </h1>
              <h1 className="font-medium text-[28px] text-white leading-[38px]">
                Interactive 3D Hover Card
              </h1>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};
