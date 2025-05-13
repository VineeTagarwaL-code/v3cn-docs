import React from "react";

interface FlipButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  fromTop?: boolean;
  flipBgColor?: string;
  flipTextColor?: string;
  flippedText?: string;
}

const FlipButton = React.forwardRef<HTMLButtonElement, FlipButtonProps>(
  (
    {
      children,
      fromTop,
      flipBgColor = "white",
      flipTextColor = "black",
      flippedText,
      className,
      ...props
    },
    ref,
  ) => {
    const displayedFlipTextContent = flippedText || children;
    return (
      <button
        ref={ref}
        className={`relative inline-flex items-center justify-center rounded-full bg-black px-7 py-3 overflow-hidden cursor-pointer group h-12 ${className}`}
        {...props}
      >
        <span
          className={`absolute inset-0 rounded-full bg-white transition-transform duration-300 ease-in-out z-0 ${
            fromTop
              ? "-translate-y-full group-hover:-translate-y-0"
              : "translate-y-full group-hover:translate-y-0"
          } `}
          style={{ backgroundColor: flipBgColor }}
        />
        <div className="grid z-10">
          <span
            style={{
              gridArea: "1 / 1 / 1 / 1",
              visibility: "hidden",
              whiteSpace: "nowrap",
            }}
            aria-hidden="true"
          >
            {children}
          </span>
          <span
            style={{
              gridArea: "1 / 1 / 1 / 1",
              visibility: "hidden",
              whiteSpace: "nowrap",
            }}
            aria-hidden="true"
          >
            {displayedFlipTextContent}
          </span>
          <span
            className="relative flex items-center justify-center overflow-hidden"
            style={{ gridArea: "1 / 1 / 1 / 1" }}
          >
            <span
              className={`block transition-transform duration-700 whitespace-nowrap ${
                fromTop
                  ? "group-hover:translate-y-full"
                  : "group-hover:-translate-y-full"
              }`}
            >
              {children}
            </span>
            <span
              className={`absolute block whitespace-nowrap duration-700 text-black ${
                fromTop ? "-top-full" : "top-full"
              } transition-transform ${
                fromTop
                  ? "group-hover:translate-y-[100%]"
                  : "group-hover:translate-y-[-100%]"
              } left-1/2 transform -translate-x-1/2`}
              style={{ color: flipTextColor }}
            >
              {displayedFlipTextContent}
            </span>
          </span>
        </div>
      </button>
    );
  },
);

function FlipButtonDemo() {
    return (
        <FlipButton className="text-white">
            Get One
        </FlipButton>
    )
}

function FlipButtonVariations() {
    return (
      <div className="flex flex-col items-center justify-center space-y-7">
        <FlipButton fromTop className="text-white">
          Browse
        </FlipButton>
        <FlipButton
          flipBgColor="pink"
          className="text-white bg-linear-to-r from-purple-500 via-indigo-500 to-blue-500"
          flipTextColor="black"
        >
          Get one
        </FlipButton>
        <FlipButton
          flippedText="Browse Products"
          className="text-white  bg-[linear-gradient(60deg,_rgb(247,_149,_51),_rgb(243,_112,_85),_rgb(239,_78,_123),_rgb(161,_102,_171),_rgb(80,_115,_184),_rgb(16,_152,_173),_rgb(7,_179,_155),_rgb(111,_186,_130))]"
        >
          See More
        </FlipButton>
      </div>
    );
  }
  

export { FlipButtonDemo, FlipButtonVariations }