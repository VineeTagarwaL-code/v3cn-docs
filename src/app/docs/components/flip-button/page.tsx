import { ButtonInstallationCode } from "@/components/demo-ui/flip-button/installation";
import { CodeBlock } from "@/components/ui/code-block";
import { NavigationMenu } from "@/components/navigation-menu";
import { OpenInV0Button } from "@/components/open-v0";
import { PropTable } from "@/components/ui/prop-table";
import { SectionWrapper } from "@/components/section-wrapper";
import { basicUsageRawCode, buttonVariationsRawCode } from "@/components/demo-ui/flip-button/code";
import { codeToHtml } from "shiki";
import { FlipButtonDemo, FlipButtonVariations } from "@/components/demo-ui/flip-button/demo";

type PropDefinition = {
  prop: string;
  type: string;
  default?: string;
  description: string;
};

const FlipButtonProps: PropDefinition[] = [
  {
    prop: "children",
    type: "React.ReactNode",
    default: "undefined",
    description: "The content to be displayed inside the button before flipping.",
  },
  {
    prop: "className",
    type: "string",
    default: "undefined",
    description:
      "Additional CSS classes to customize the button's appearance.",
  },
  {
    prop: "fromTop",
    type: "boolean",
    default: "false",
    description:
      "Controls the flip direction. If true, the button flips from top to bottom.",
  },
  {
    prop: "flippedText",
    type: "string",
    default: "undefined",
    description:
      "The text displayed after the button flips. If not provided, it defaults to the same as children.",
  },
  {
    prop: "flippedBgColor",
    type: "string",
    default: "white",
    description:
      "The background color of the flipped side of the button.",
  },
  {
    prop: "flippedTextColor",
    type: "string",
    default: "black",
    description:
      "The color of the text displayed on the flipped side of the button.",
  },
];

export default async function CardPage() {
  const basicUsageCode = await codeToHtml(basicUsageRawCode, {
    lang: "tsx",
    theme: "min-dark",
  });

  const buttonVariationsCode = await codeToHtml(buttonVariationsRawCode,{
    lang: "tsx",
    theme: "min-dark"
  })

  return (
    <SectionWrapper>
      <div className="flex flex-col lg:flex-row gap-8">
        <main className="flex-1 space-y-12">
          <section>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Flip Button
            </h1>
            <p className="text-muted-foreground/90 leading-relaxed">
            The FlipButton is a stylish, animated button that creates a smooth flip effect on hover. It is highly customizable, allowing control over the flip direction, background color, text color, and custom flip text.
            </p>
          </section>

          <section>
            <div className="w-full text-2xl font-semibold mb-4 flex justify-between items-center gap-2" id="playground">
             <span>Playground</span>
              <OpenInV0Button url="https://v3cn.vineet.pro/r/flip-button-demo" />
            </div>
            <div className="border border-gray-400 bg-gray-200 flex justify-center items-center dark:border-zinc-700 rounded-lg overflow-hidden h-[300px] dark:bg-gradient-to-br dark:from-zinc-900 dark:to-zinc-950">
              <FlipButtonDemo />
            </div>
          </section>
          <hr className="border-t border-gray-200 dark:border-gray-700" />

          <section>
            <h2 className="text-2xl font-semibold mb-4" id="installation">
              Installation
            </h2>
            <ButtonInstallationCode />
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
              <div className="space-y-4 md:p-4">
                <h3 className="ml-2 text-md font-medium">Examples using the provided props</h3>
                <div className="border border-gray-400 bg-gray-200 flex justify-center items-center dark:border-zinc-700 rounded-lg overflow-hidden h-[300px] dark:bg-gradient-to-br dark:from-zinc-900 dark:to-zinc-950">
                  <FlipButtonVariations />
                </div>
                <div className="space-y-4 md:p-4">
                <h3 className="ml-2 text-md font-medium">Code</h3>
                  <CodeBlock html={buttonVariationsCode} />
                </div>
              </div>
              </div>
              <h3 className="text-3xl m-4" >
                Props
              </h3>
              <div className="grid gap-6">
                <PropTable title="<FlipButton />" props={FlipButtonProps} />
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
