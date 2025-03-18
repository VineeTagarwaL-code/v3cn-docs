import { InstallationTabs } from "@/components/demo-ui/card/installation-tabs";
import { codeToHtml } from "shiki";

const installationCode = `
"use client";
import { cn } from "../utils/cn";
import React, {
  createContext,
  useState,
  useContext,
  useRef,
  useEffect,
} from "react";

const MouseEnterContext = createContext<
  [boolean, React.Dispatch<React.SetStateAction<boolean>>] | undefined
>(undefined);

const CardContainer = ({
  children,
  className,
  containerClassName,
}: {
  children?: React.ReactNode;
  className?: string;
  containerClassName?: string;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMouseEntered, setIsMouseEntered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const { left, top, width, height } =
      containerRef.current.getBoundingClientRect();
    const x = (e.clientX - left - width / 2) / 25;
    const y = (e.clientY - top - height / 2) / 25;
    containerRef.current.style.transform = \`rotateY($\{x}deg) rotateX($\{y}deg)\`;
  };

  const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
    setIsMouseEntered(true);
    if (!containerRef.current) return;
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    setIsMouseEntered(false);
    containerRef.current.style.transform = "rotateY(0deg) rotateX(0deg)";
  };
  return (
    <MouseEnterContext.Provider value={[isMouseEntered, setIsMouseEntered]}>
      <div
        className={cn("flex items-center justify-center", containerClassName)}
        style={{
          perspective: "1000px",
        }}
      >
        <div
          ref={containerRef}
          onMouseEnter={handleMouseEnter}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className={cn(
            "flex items-center justify-center relative transition-all duration-200 ease-linear",
            className
          )}
          style={{
            transformStyle: "preserve-3d",
          }}
        >
          {children}
        </div>
      </div>
    </MouseEnterContext.Provider>
  );
};

export const CardItem = ({
  children,
  className,
  translateX = 0,
  translateY = 0,
  translateZ = 0,
  rotateX = 0,
  rotateY = 0,
  rotateZ = 0,
  ...rest
}: {
  as?: React.ElementType;
  children: React.ReactNode;
  className?: string;
  translateX?: number | string;
  translateY?: number | string;
  translateZ?: number | string;
  rotateX?: number | string;
  rotateY?: number | string;
  rotateZ?: number | string;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isMouseEntered] = useMouseEnter();

  useEffect(() => {
    handleAnimations();
  }, [isMouseEntered]);

  const handleAnimations = () => {
    if (!ref.current) return;
    if (isMouseEntered) {
      ref.current.style.transform = \`translateX($\{translateX}px) translateY($\{translateY}px) translateZ($\{translateZ}px) rotateX($\{rotateX}deg) rotateY($\{rotateY}deg) rotateZ($\{rotateZ}deg)\`;
    } else {
      ref.current.style.transform =
        "translateX(0px) translateY(0px) translateZ(0px) rotateX(0deg) rotateY(0deg) rotateZ(0deg)";
    }
  };

  return (
    <div
      ref={ref}
      className={cn("w-fit transition duration-200 ease-linear", className)}
      {...rest}
    >
      {children}
    </div>
  );
};

// Create a hook to use the context
export const useMouseEnter = () => {
  const context = useContext(MouseEnterContext);
  if (context === undefined) {
    throw new Error("useMouseEnter must be used within a MouseEnterProvider");
  }
  return context;
};

/**
 * @description CardItem component
 */
const Card = () => {
  return (
    <div className="flex justify-center items-center h-fit py-7  w-full px-2 ">
      <div className="relative cursor-pointer animate-float  md:block mr-8">
        <CardContainer className=" cursor-pointer">
          <div className="px-8 py-7 max-w-[400px] border-solid gap-5 bg-black flex flex-col justify-start item-center border-2  rounded-2xl">
            <CardItem>
              <img
                src={"/V.png"}
                alt={"platform"}
                width={400}
                height={400}
                className="rounded-[3rem]"
              />
            </CardItem>

            <div className="px-4 flex flex-col justify-center items-start gap-5">
              <h1 className="text-4xl  text-white font-bold">V3cn</h1>

              <h4 className="text-lg text-white">
                Here you will get components which you wont get anywhere.
              </h4>

              <p className="text-purple-400">Made by Vineet</p>
            </div>
          </div>
        </CardContainer>
      </div>
    </div>
  );
};

export { Card };

`;

const cnCode=`import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
 
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(...inputs));
}`;

const tailwindConfigCode=`/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using \`src\` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        smooth: {
          "0%": { transform: "translateY(-5px)" },
 
          "50%": { transform: "translateY(5px)" },
 
          "100%": { transform: "translateY(-5px)" },
        },
      },
      animation: {
        float: "smooth 3s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};`;

    

export async function CardInstallationCode() {
  const html = await codeToHtml(installationCode, {
    lang: "bash",
    theme: "min-dark",
  });

  const cnHtml = await codeToHtml(cnCode, {
    lang: "bash",
    theme: "min-dark",
  });

  const tailwindHtml = await codeToHtml(tailwindConfigCode, {
    lang: "bash",
    theme: "min-dark",
  });   
  return (
    <InstallationTabs
      codeHtml={html}
      cnHtml={cnHtml}
      tailwindHtml={tailwindHtml}
      layoutIdPrefix="card"
      cliCommand="v3cn add card"
      importCode="import { Card  } from '@/components/card';"
    />
  );
}
