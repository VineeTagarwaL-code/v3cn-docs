import { AlertTriangle } from "lucide-react";
import { Card } from "@/components/demo-ui/card/demo";
import { CardInstallationCode } from "@/components/demo-ui/card/installation";
import { CodeBlock } from "@/components/ui/code-block";
import { NavigationMenu } from "@/components/navigation-menu";
import { PropTable } from "@/components/ui/prop-table";
import { SectionWrapper } from "@/components/section-wrapper";
import { basicUsageRawCode } from "@/components/demo-ui/dock-navigation/code";
import { codeToHtml } from "shiki";
import Dock from "@/components/demo-ui/dock-navigation/demo";
import { DockInstallationCode } from "@/components/demo-ui/dock-navigation/installation";

// Define the PropDefinition type
type PropDefinition = {
  prop: string;
  type: string;
  default?: string;
  description: string;
};

const DockProps: PropDefinition[] = [
  {
    prop: "children",
    type: "React.ReactNode",
    default: "null",
    description: "Elements to be displayed inside the dock container.",
  },
  {
    prop: "dockClass",
    type: "string",
    default: "null",
    description: "Additional CSS classes for styling the dock container.",
  },
];

const DockItemProps: PropDefinition[] = [
  {
    prop: "children",
    type: "React.ReactNode",
    default: "null",
    description: "Elements inside the dock item.",
  },
  {
    prop: "label",
    type: "string",
    default: '""',
    description: "Tooltip text displayed on hover.",
  },
  {
    prop: "itemClass",
    type: "string",
    default: "null",
    description: "Additional CSS classes for styling the dock item.",
  },
];


export default async function DockPage() {
  const basicUsageCode = await codeToHtml(basicUsageRawCode, {
    lang: "tsx",
    theme: "min-dark",
  });

  return (
    <SectionWrapper>
      <div className="flex flex-col lg:flex-row gap-8">
        <main className="flex-1 space-y-12">
          <section>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
                Dock Navigation
            </h1>
            <p className="text-muted-foreground/90 leading-relaxed">
                The Dock Navigation component provides a visually appealing and
                interactive way to navigate through different sections of your
                application.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4" id="playground">
              Playground
            </h2>
            <div className="border border-gray-400 bg-gray-200 flex justify-center items-center dark:border-zinc-700 rounded-lg overflow-hidden h-[300px] dark:bg-gradient-to-br dark:from-zinc-900 dark:to-zinc-950">
              <Dock/>
            </div>
          </section>
          <hr className="border-t border-gray-200 dark:border-gray-700" />

          <section>
            <h2 className="text-2xl font-semibold mb-4" id="installation">
              Installation
            </h2>
            {/* <CardInstallationCode /> */}
            <DockInstallationCode />
          </section>

          <hr className="border-t border-gray-200 dark:border-gray-700" />

          <section>
            <div className="flex flex-col gap-4">
              <h2 className="ml-2 text-lg font-medium" id="props">
                Usage Examples
              </h2>
              <div className="space-y-4 md:p-4">
                <h3 className="ml-2 text-md font-medium">Default Usage</h3>
                <CodeBlock html={basicUsageCode} />
              </div>
              <div className="bg-yellow-50 dark:bg-yellow-950/50 border-l-4 border-yellow-500 p-4 rounded-r-lg">
                <div className="flex items-start gap-4">
                  <AlertTriangle className="w-6 h-6 text-yellow-500 shrink-0 mt-1" />
                  <div className="space-y-2">
                    <p className="font-medium text-yellow-800 dark:text-yellow-200">
                      When using compound components:
                    </p>
                    <p className="list-disc ml-4 text-sm text-yellow-700 dark:text-yellow-300 space-y-1">
                      Make sure that you have installed your modules first and
                      followed the introduction.
                    </p>
                  </div>
                </div>
              </div>
              <div className="grid gap-6">
                <PropTable title="<DockContainer />" props={DockProps} />
                <PropTable title="<DockItem />" props={DockItemProps} />
              </div>
            </div>
          </section>
        </main>

        <aside className="w-64 shrink-0">
          <div className="sticky top-24">
            <NavigationMenu />
          </div>
        </aside>
      </div>
    </SectionWrapper>
  );
}
