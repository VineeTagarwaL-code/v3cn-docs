"use client";

import { Step, Steps } from "@/components/ui/steps";

import { CodeBlock } from "@/components/ui/code-block";
import { CodeSnippet } from "@/components/ui/code-snippet";
import { PackageManagerTabs } from "@/components/ui/package-manager-tabs";
import { motion } from "framer-motion";
import { useState } from "react";

interface TabOption {
  id: "cli" | "manual";
  label: string;
}

interface InstallationTabsProps {
  layoutIdPrefix: string;
  cliCommand: string;
  cnHtml: string;
  tailwindHtml: string;
  codeHtml: string;
  importCode: string;
}

export function InstallationTabs({
  layoutIdPrefix,
  cliCommand,
  codeHtml,
  cnHtml,
  tailwindHtml,
  importCode,
}: InstallationTabsProps) {
  const [selected, setSelected] = useState<TabOption["id"]>("cli");
  const [activeStep, setActiveStep] = useState(1);

  const options: TabOption[] = [
    { id: "cli", label: "CLI" },
    { id: "manual", label: "Manual" },
  ];

  return (
    <div className="space-y-4 px-2">
      {/* Tab buttons */}
      <div className="relative flex border-b border-gray-100 dark:border-zinc-700/50 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-px after:bg-gray-100 dark:after:bg-zinc-700/50">
        {options.map((option) => (
          <button
            key={option.id}
            onClick={() => {
              setSelected(option.id);
              setActiveStep(1);
            }}
            className={`relative pb-2 text-sm px-4 ${
              selected === option.id
                ? "text-foreground"
                : "text-muted-foreground hover:text-foreground/80 transition-all duration-300"
            }`}
          >
            {option.label}
            {selected === option.id && (
              <motion.div
                layoutId={`${layoutIdPrefix}-installation-tab`}
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-foreground z-10"
                initial={false}
                transition={{
                  type: "spring",
                  stiffness: 500,
                  damping: 30,
                }}
              />
            )}
          </button>
        ))}
      </div>

      {/* Tab content */}
      <div className="md:p-4">
        {selected === "cli" ? (
          <PackageManagerTabs
            command={cliCommand}
            variant="dlx"
            layoutId={`${layoutIdPrefix}-package-manager`}
          />
        ) : (
          <Steps>
            <Step
              step={1}
              title="Create a `cn.ts` File in the `utils` Folder"
              description="Add the following code to the newly created file."
              isCompleted={activeStep > 1}
              isActive={activeStep === 1}
              onClick={() => setActiveStep(1)}
            >
              <CodeBlock html={cnHtml} maxHeight={100} expandedHeight={200} />
            </Step>

            <Step
              step={2}
              title="Set Up `tailwind.config.ts`"
              description="Add this config to enable Tailwind and custom animations."
              isCompleted={activeStep > 2}
              isActive={activeStep === 2}
              onClick={() => setActiveStep(2)}
            >
              <CodeBlock html={tailwindHtml} maxHeight={300} expandedHeight={500} />
            </Step>
            <Step
              step={3}
              title="Add Component Code"
              description="Copy and paste the following code into your project"
              isCompleted={activeStep > 2}
              isActive={activeStep === 2}
              onClick={() => setActiveStep(2)}
            >
              <CodeBlock html={codeHtml} maxHeight={300} expandedHeight={500} />
            </Step>
            <Step
              step={4}
              title="Ready to Use"
              description="Import and use the Card component in your project:"
              isCompleted={activeStep > 4}
              isActive={activeStep === 4}
              onClick={() => setActiveStep(4)}
            >
              <CodeSnippet
                code={importCode}
                layoutId={`${layoutIdPrefix}-import-code`}
                className="mt-2"
              />
            </Step>
          </Steps>
        )}
      </div>
    </div>
  );
}
