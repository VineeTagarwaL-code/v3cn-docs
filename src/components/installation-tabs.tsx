'use client';

import { Step, Steps } from '@/components/ui/steps';

import { CodeBlock } from '@/components/ui/code-block';
import { CodeSnippet } from '@/components/ui/code-snippet';
import { PackageManagerTabs } from '@/components/ui/package-manager-tabs';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { TDetails, TStep } from '@/types/types';

interface TabOption {
  id: 'cli' | 'manual';
  label: string;
}

interface InstallationTabsProps {
  layoutIdPrefix: string;
  cliCommand: string;
  importCode: string;
  shadcnCommand: string;
  details: TDetails;
}

/**
 * Renders installation tabs for a component, allowing users to choose between CLI and manual installation methods.
 *
 * @param {string} layoutIdPrefix - Prefix for the layout ID used in framer-motion animations.
 * @param {string} cliCommand - Command for installing the package via CLI.
 * @param {string} importCode - Code snippet for importing the component.
 * @param {string} shadcnCommand - Command for installing Shadcn dependencies.
 * @param {TDetails} details - Object containing installation steps and component details.
 */

export function InstallationTabs({
  layoutIdPrefix,
  cliCommand,
  importCode,
  shadcnCommand,
  details,
}: InstallationTabsProps) {
  const [selected, setSelected] = useState<TabOption['id']>('cli');
  const [activeStep, setActiveStep] = useState(1);

  const options: TabOption[] = [
    { id: 'cli', label: 'CLI' },
    { id: 'manual', label: 'Manual' },
  ];

  const lastStep = details.packageInstallationStep
    ? details.steps.length + 2
    : details.steps.length + 1;

  return (
    <div className="space-y-4 px-2">
      {/* Tab buttons */}
      <div className="relative flex border-b border-gray-100 dark:border-zinc-700/50 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-px after:bg-gray-100 dark:after:bg-zinc-700/50">
        {options.map(option => (
          <button
            key={option.id}
            onClick={() => {
              setSelected(option.id);
              setActiveStep(1);
            }}
            className={`relative pb-2 text-sm px-4 ${
              selected === option.id
                ? 'text-foreground'
                : 'text-muted-foreground hover:text-foreground/80 transition-all duration-300'
            }`}
          >
            {option.label}
            {selected === option.id && (
              <motion.div
                layoutId={`${layoutIdPrefix}-installation-tab`}
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-foreground z-10"
                initial={false}
                transition={{
                  type: 'spring',
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
        {selected === 'cli' ? (
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-4">
              <h3 className="text-2xl  text-muted-foreground font-light">V3CN</h3>
              <PackageManagerTabs
                command={cliCommand}
                variant="dlx"
                layoutId={`${layoutIdPrefix}-package-manager`}
              />
            </div>

            <div className="flex flex-col gap-4 text-muted-foreground">
              <h3 className="text-2xl font-light">Shadcn</h3>
              <PackageManagerTabs
                command={shadcnCommand}
                variant="dlx"
                layoutId={`${layoutIdPrefix}-package-manager-shadcn`}
              />
            </div>
          </div>
        ) : (
          <Steps>
            {details.packageInstallationStep && (
              <Step
                step={1}
                title="Install Dependencies"
                description="Install the required dependencies"
                isCompleted={activeStep > 1}
                isActive={activeStep === 1}
                onClick={() => setActiveStep(1)}
              >
                <PackageManagerTabs
                  command={details.packageInstallationStep.command}
                  variant="add"
                  layoutId={`${layoutIdPrefix}-package-manager`}
                />
              </Step>
            )}
            {details?.steps.map((eachStep: TStep, index: number) => {
              const step: number = details.packageInstallationStep ? index + 2 : index + 1;
              return (
                <Step
                  key={step}
                  step={step}
                  title={eachStep.title}
                  description={eachStep.description}
                  isCompleted={activeStep > step}
                  isActive={activeStep === step}
                  onClick={() => setActiveStep(step)}
                >
                  <CodeBlock
                    html={eachStep.html}
                    maxHeight={eachStep.maxHeight ?? 100}
                    expandedHeight={eachStep.expandedHeight ?? 300}
                  />
                </Step>
              );
            })}

            <Step
              step={lastStep}
              title="Ready to Use"
              description={`You can now use the ${details.component} component in your project`}
              isCompleted={activeStep > lastStep}
              isActive={activeStep === lastStep}
              onClick={() => setActiveStep(lastStep)}
            >
              <div className="text-sm text-muted-foreground">
                Import and use the {details.component} component in your project:
                <CodeSnippet
                  code={importCode}
                  layoutId={`${layoutIdPrefix}-import-code`}
                  className="mt-2"
                />
              </div>
            </Step>
          </Steps>
        )}
      </div>
    </div>
  );
}
