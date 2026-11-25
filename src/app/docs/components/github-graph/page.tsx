import { AlertTriangle } from "lucide-react";
import { CodeBlock } from "@/components/ui/code-block";
import { DemoGithubGraph } from "@/components/demo-ui/github-graph/demo";
import { GithubGraphInstallationCode } from "@/components/demo-ui/github-graph/installation";
import { NavigationMenu } from "@/components/navigation-menu";
import { OpenInV0Button } from "@/components/open-v0";
import { PropTable } from "@/components/ui/prop-table";
import { SectionWrapper } from "@/components/section-wrapper";
import { basicUsageRawCode } from "@/components/demo-ui/github-graph/code";
import { codeToHtml } from "shiki";

// Define the PropDefinition type
type PropDefinition = {
  prop: string;
  type: string;
  default?: string;
  description: string;
};

const GithubGraphProps: PropDefinition[] = [
  {
    prop: "username",
    type: "string",
    default: ` " "required`,
    description:
      "GitHub username for which to fetch the contribution data.",
  },
  {
    prop: "blockMargin",
    type: "number",
    default: "'once'",
    description:
      "Margin between blocks in the contribution graph.",
  },
  {
    prop: "lightColorPalette",
    type: "string[]",
    default: '["#ebedf0", "#c6e48b", "#7bc96f", "#239a3b", "#196127"]',
    description: "Custom color scheme for the light theme.",
  },
  {
    prop: "darkColorPalette",
    type: "string[]",
    default: '["#1e1e2f", "#5a3e7a", "#7e5aa2", "#a87cc3", "#d9a9e6"]',
    description: "Custom color scheme for the dark theme.",
  },
];



export default async function GithubGraphPage() {
  const basicUsageCode = await codeToHtml(basicUsageRawCode, {
    lang: "tsx",
    theme: "min-dark",
  });


  return (
    <SectionWrapper>
      <div className="flex lg:flex-row flex-col gap-8">
        <main className="flex-1 space-y-12">
          <section>
            <h1 className="mb-4 font-bold text-3xl md:text-4xl">GithubGraph</h1>
            <p className="text-muted-foreground/90 leading-relaxed">
              The GithubGraph component is designed to display a Github
              contribution graph for a specified user. It uses the
              react-activity-calendar package to render the contribution graph.
            </p>
          </section>

          <section className="overflow-auto">
            <div className="w-full text-2xl font-semibold mb-4 flex justify-between items-center gap-2" id="playground">
              <span>Playground</span>
              <OpenInV0Button url="https://v3cn.vineet.pro/r/github-demo" />
            </div>
            <div className="flex justify-center items-center bg-gray-200 dark:bg-gradient-to-br dark:from-zinc-900 dark:to-zinc-950 border border-gray-400 dark:border-zinc-700 rounded-lg max-md:max-w-[93vw] h-[300px] sm:h-[400px] md:h-[500px] overflow-hidden max-md:overflow-x-scroll">

              <DemoGithubGraph
                username="VineeTagarwaL-code"
                blockMargin={2}
                darkColorPalette={["#1e1e2f", "#5a3e7a", "#7e5aa2", "#a87cc3", "#d9a9e6"]}
              />
            </div>
          </section>
          <hr className="border-gray-200 dark:border-gray-700 border-t" />

          <section>
            <h2 className="mb-4 font-semibold text-2xl" id="installation">
              Installation
            </h2>
            <GithubGraphInstallationCode />
          </section>

          <hr className="border-gray-200 dark:border-gray-700 border-t" />

          <section>
            <div className="flex flex-col gap-4">
              <h2 className="ml-2 font-medium text-lg" id="props">
                Usage Examples
              </h2>
              <div className="space-y-4 md:p-4">
                <h3 className="ml-2 font-medium text-md">Default Usage</h3>
                <CodeBlock html={basicUsageCode} />
              </div>
              <div className="bg-yellow-50 dark:bg-yellow-950/50 p-4 border-yellow-500 border-l-4 rounded-r-lg">
                <div className="flex items-start gap-4">
                  <AlertTriangle className="mt-1 w-6 h-6 text-yellow-500 shrink-0" />
                  <div className="space-y-2">
                    <p className="font-medium text-yellow-800 dark:text-yellow-200">
                      When using compound components:
                    </p>
                    <ul className="space-y-1 ml-4 text-yellow-700 dark:text-yellow-300 text-sm list-disc">
                      <li>
                        Make sure that you have installed the dependencies and
                        configured your project accordingly.
                      </li>
                      <li>
                        Note: The code for the self-hosted API used to fetch
                        contribution data is available <a href="https://github.com/VineeTagarwaL-code/go-github-api" className="font-semibold text-blue-600 underline">here.</a>                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="gap-6 grid">
                <PropTable title="<Github Graph />" props={GithubGraphProps} />
              </div>
            </div>
          </section>
        </main>

        <aside className="w-64 shrink-0">
          <div className="top-24 sticky">
            <NavigationMenu />
          </div>
        </aside>
      </div>
    </SectionWrapper>
  );
}

