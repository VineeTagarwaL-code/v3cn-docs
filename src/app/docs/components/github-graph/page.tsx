import GithubCode from "@/components/demo-ui/github-graph/code-block";
import { GithubInstallation } from "@/components/demo-ui/github-graph/installation";
import { GithubGraph } from "@/components/Github";
import { NavigationMenu } from "@/components/navigation-menu";
import PropItem from "@/components/prop";
import { Variant } from "@/types/types";
import { AlertTriangle } from "lucide-react";
const propItemData: {
  name: string;
  type: string;
  description: string;
  default?: string;
}[] = [
  {
    name: "username",
    type: "string",
    description: "GitHub username for which to fetch the contribution data.",
  },
  {
    name: "blockMargin",
    type: "number	",
    description: "Margin between blocks in the contribution graph.",
  },
  {
    name: "colorPallete",
    type: "string[]",
    description: "Custom color scheme for the light theme.",
  },
];

export default async function GithubGraphPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col lg:flex-row gap-8">
        <main className="flex-1 space-y-12">
          {/* Title */}
          <section>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">GithubGraph</h1>
            <p className="text-muted-foreground/90 leading-relaxed">
              The GithubGraph component is designed to display a GitHub
              contribution graph for a specified user. It uses the
              react-activity-calendar package to render the contribution graph.
            </p>
          </section>

          {/* Playground */}
          <section>
            <h2 className="text-2xl font-semibold mb-4" id="playground">
              Playground
            </h2>
            <div className="border border-gray-200 flex justify-center items-center dark:border-zinc-700 rounded-lg overflow-hidden h-[500px] dark:bg-gradient-to-br dark:from-zinc-900 dark:to-zinc-950">
              <GithubGraph
                username="VineeTagarwaL-code"
                blockMargin={2}
                colorPallete={[
                  "#1e1e2f",
                  "#5a3e7a",
                  "#7e5aa2",
                  "#a87cc3",
                  "#d9a9e6",
                ]}
              />
            </div>
          </section>

          <hr className="border-t border-gray-200 dark:border-gray-700" />

          {/* Installation */}
          <section>
            <h2 className="text-2xl font-semibold mb-4" id="installation">
              Installation
            </h2>
            <GithubInstallation command={""} variant={Variant.add} />
          </section>

          <hr className="border-t border-gray-200 dark:border-gray-700" />

          {/* Usage Examples */}
          <section>
            <div className="flex flex-col gap-4">
              <h2 className="ml-2 text-lg font-medium" id="props">
                Usage Examples
              </h2>

              {/* Default Usage */}
              <div className="space-y-4 md:p-4">
                <h3 className="ml-2 text-md font-medium">Default Usage</h3>
                <GithubCode />
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
              <div className="flex justify-center border-t  border-gray-200 w-40 mx-auto" />
              <h2 className=" p-2 text-lg " id="props">
                Props
              </h2>
              <div className="flex flex-col gap-6 border rounded-lg    ">
                <h2 className="bg-zinc-800 py-2 px-2">
                  GithubGraph Component Properties
                </h2>
                <div className="ml-4">
                {propItemData.map((item, index) => (
                  <PropItem
                    key={index}
                    name={item.name}
                    type={item.type}
                    description={item.description}
                  />
                  
                ))}{" "}
                </div>
              </div>
            </div>
          </section>
        </main>

        {/* Right-side navigation */}
        <aside className="w-64 shrink-0">
          <div className="sticky top-24">
            <NavigationMenu />
          </div>
        </aside>
      </div>
    </div>
  );
}
