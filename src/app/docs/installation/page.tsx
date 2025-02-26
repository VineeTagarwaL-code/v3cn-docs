import { Button } from "@/components/ui/button";
import { InstallTab } from "@/components/install-tab";
import Link from "next/link";
import { Metadata } from "next";
import { Variant } from "@/types/types";

export const metadata: Metadata = {
  title: "Installation",
  description:
    "V3CN is a modern React component library that helps you build the best UI for your web applications.",
  keywords: [
    "React",
    "Next.js",
    "Shadcn UI",
    "NextUI",
    "UI Library",
    "Components",
    "TypeScript",
    "Component Library",
    "Motion",
    "Framer Motion",
  ],
  authors: [
    { name: "Vineet agarwal", url: "https://github.com/vineetagarwal-code" },
  ],
};

export default function Home() {
  return (
    <section className="space-y-4">
      <div className="flex gap-6 justify-start items-start flex-col mb-10 ">
        <h1 className="text-4xl tracking-wide">Installation</h1>
        <span className="text-xl dark:text-gray-300">
          To start using our components follow the steps below
        </span>
      </div>

      {/* Install all necessary modules */}
      <div>
        <h1 className="text-xl tracking-wide">Prerequisites</h1>
        <div className="rounded-lg border bg-card md:max-w-[60%] my-4">
          <div className="flex items-center justify-between p-6 pb-3">
            <div className="space-y-1">
              <h3 className="font-medium leading-none">Packages</h3>
              <p className="text-sm text-muted-foreground">
                Install all necessary modules before using our utility.
              </p>
            </div>
          </div>
          <div className="p-6 pt-3">
            <InstallTab
              command=""
              variant={Variant.install}
              className="[&_button]:h-8 [&_pre]:!py-3"
            />
          </div>
        </div>
        <div className="rounded-lg border bg-card md:max-w-[60%] my-4">
          <div className="flex items-center justify-between p-6 pb-3">
            <div className="space-y-1">
              <h3 className="font-medium leading-none">Framer Motion</h3>
              <p className="text-sm text-muted-foreground">
                Install Framer Motion for animations.
              </p>
            </div>
          </div>
          <div className="p-6 pt-3">
            <InstallTab
              command="framer-motion"
              variant={Variant.install}
              className="[&_button]:h-8 [&_pre]:!py-3"
            />
          </div>
        </div>
      </div>

      {/* Next steps */}
      <div>
        <h1 className="text-xl tracking-wide">Next Step</h1>
        <div className="rounded-lg border bg-card md:max-w-[60%] my-4">
          <div className="flex items-center justify-between p-6 pb-3">
            <div className="space-y-1">
              <h3 className="font-medium leading-none">V3CN CLI</h3>
              <p className="text-sm text-muted-foreground">
                Integrate all our custom components with ease.
              </p>
            </div>
            <div>
              <Link href="/docs/cli">
                <Button
                  variant="default"
                  size="sm"
                  className="flex items-center"
                >
                  Get Started
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
