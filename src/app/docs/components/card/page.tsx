import { AlertTriangle } from "lucide-react";
import { Card } from "@/components/demo-ui/card/demo";
import { CardInstallationCode } from "@/components/demo-ui/card/installation";
import { CodeBlock } from "@/components/ui/code-block";
import { NavigationMenu } from "@/components/navigation-menu";
import { PropTable } from "@/components/ui/prop-table";
import { SectionWrapper } from "@/components/section-wrapper";
import { basicUsageRawCode } from "@/components/demo-ui/card/code";
import { codeToHtml } from "shiki";

// Define the PropDefinition type
type PropDefinition = {
  prop: string;
  type: string;
  default?: string;
  description: string;
};

const CardProps: PropDefinition[] = [
  {
    prop: "children",
    type: "React.ReactNode",
    default: "undefined",
    description: "The content to be displayed within the card container.",
  },
  {
    prop: "className",
    type: "string",
    default: "undefined",
    description:
      "Custom CSS classes to apply to the card container for styling.",
  },
  {
    prop: "containerClassName",
    type: "string",
    default: "undefined",
    description:
      "Custom CSS classes to apply to the outer container that manages the perspective effect.",
  },
];

export default async function CardPage() {
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
              Hovering Card
            </h1>
            <p className="text-muted-foreground/90 leading-relaxed">
              The hovering card provides an interactive 3D card effect that
              responds to mouse movements, creating an engaging user experience.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4" id="playground">
              Playground
            </h2>
            <div className="border border-gray-200 flex justify-center items-center dark:border-zinc-700 rounded-lg overflow-hidden h-[700px] dark:bg-gradient-to-br dark:from-zinc-900 dark:to-zinc-950">
              <Card />
            </div>
          </section>
          <hr className="border-t border-gray-200 dark:border-gray-700" />

          <section>
            <h2 className="text-2xl font-semibold mb-4" id="installation">
              Installation
            </h2>
            <CardInstallationCode />
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
                <PropTable title="<Card />" props={CardProps} />
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
