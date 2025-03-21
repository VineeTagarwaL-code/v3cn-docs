/**
 * Compoenent to generate cool looking headings
 */

import { cn } from "@/lib/utils";

export const Heading = ({
  children,
  classname,
}: {
  children: React.ReactNode;
  classname?: string;
}) => {
  return (
    <h1
      className={cn(
        "font-bold  w-full flex justify-center items-center  bg-gradient-to-t from-neutral-800 to-purple-500 bg-clip-text text-transparent text-5xl md:text-7xl",
        classname
      )}
    >
      {children}
    </h1>
  );
};