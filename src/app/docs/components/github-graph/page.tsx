import { basicUsageRawCode } from "@/components/demo-ui/discord/code";
import { GithubGraphInstallationCode } from "@/components/demo-ui/github-graph/installation";
import { DemoGithubGraph } from "@/components/demo-ui/github-graph/demo";
import { NavigationMenu } from "@/components/navigation-menu";
import { CodeBlock } from "@/components/ui/code-block";
import { PropTable } from "@/components/ui/prop-table";
import { AlertTriangle } from "lucide-react";
import { codeToHtml } from "shiki";

// Define the PropDefinition type
type PropDefinition = {
  prop: string;
  type: string;
  default?: string;
  description: string;
};

const infoCardProps: PropDefinition[] = [
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
    prop: "colorPalette",
    type: "string[]",
    default: '["#ebedf0", "#c6e48b", "#7bc96f", "#239a3b", "#196127"]',
    description: "Custom color scheme for the light theme.",
  },
];



export default async function GithubGraphPage() {
  const basicUsageCode = await codeToHtml(basicUsageRawCode, {
    lang: "tsx",
    theme: "min-dark",
  });


  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col lg:flex-row gap-8">
        <main className="flex-1 space-y-12">
          <section>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">GithubGraph</h1>
            <p className="text-muted-foreground/90 leading-relaxed">
              The GithubGraph component is designed to display a GitHub
              contribution graph for a specified user. It uses the
              react-activity-calendar package to render the contribution graph.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4" id="playground">
              Playground
            </h2>
            <div className="border border-gray-200 flex justify-center items-center dark:border-zinc-700 rounded-lg overflow-hidden h-[500px] dark:bg-gradient-to-br dark:from-zinc-900 dark:to-zinc-950">
              <DemoGithubGraph
                username="VineeTagarwaL-code"
                blockMargin={2}
                colorPallete={["#1e1e2f", "#5a3e7a", "#7e5aa2", "#a87cc3", "#d9a9e6"]}
              />
            </div>
          </section>
          <hr className="border-t border-gray-200 dark:border-gray-700" />

          <section>
            <h2 className="text-2xl font-semibold mb-4" id="installation">
              Installation
            </h2>
            <GithubGraphInstallationCode/>
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
                    <ul className="list-disc ml-4 text-sm text-yellow-700 dark:text-yellow-300 space-y-1">
                      <li>
                        Make sure that you have installed the dependencies and
                        configured your project accordingly.
                      </li>
                      <li>
                        Note: The code for the self-hosted API used to fetch
                        contribution data is available here.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="grid gap-6">
                <PropTable title="<Github Graph />" props={infoCardProps} />
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
    </div>
  );
}
