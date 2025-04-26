import { AlertTriangle } from "lucide-react";
import { CodeBlock } from "@/components/ui/code-block";
import { ActionButton } from "@/components/demo-ui/actionbutton/demo";
import { ActionButtonInstallationCode } from "@/components/demo-ui/actionbutton/installation";
import { NavigationMenu } from "@/components/navigation-menu";
import PropItem from "@/components/prop";
import { PropTable } from "@/components/ui/prop-table";
import { SectionWrapper } from "@/components/section-wrapper";
import { basicUsageRawCode } from "@/components/demo-ui/actionbutton/code";
import { codeToHtml } from "shiki/bundle/full";
import { discordnextConfigCode } from "@/components/demo-ui/discord/installation";

// Define the PropDefinition type
type PropDefinition = {
  prop: string;
  type: string;
  default?: string;
  description: string;
};

const DiscordPresenceProps: PropDefinition[] = [
  {
    prop: "userId",
    type: "string",
    description: "The unique identifier for the Discord user.",
  },
  {
    prop: "userName",
    type: "string	",
    description: "The display name of the Discord user.",
  },
  {
    prop: "activityDescriptionClass",
    type: "string",
    description: "CSS class for styling the activity description.",
  },
  {
    prop: "activityImageClassName",
    type: "string",
    description: "CSS class for styling the activity image.",
  },
  {
    prop: "activityDetailClass",
    type: "string",
    description: "CSS class for styling the activity details.",
  }, {
    prop: "progressBarClassName",
    type: "string",
    description: "CSS class for styling the progress bar (used for Spotify playback).",
  },
  {
    prop: "localTimeClass",
    type: "string",
    description: "CSS class for styling the local time display.",
  },
];

  
export default async function DiscordPresencePage() {
  const basicUsageCode = await codeToHtml(basicUsageRawCode, {
    lang: "tsx",
    theme: "min-dark",
  });

  const nextConfigCode = await codeToHtml(discordnextConfigCode, {
    lang: "tsx",
    theme: "min-dark",
  });
  return (
    <SectionWrapper>
      <div className="flex flex-col lg:flex-row gap-8">
        <main className="flex-1 space-y-12 overflow-x-auto">
          {/* Title */}
          <section>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
              Action Button
            </h1>
            <p className="text-muted-foreground/90 leading-relaxed">
              This is a simple action button component that can be used to trigger actions or navigate to different pages. It is designed to be flexible and customizable, allowing you to easily integrate it into your application.
            </p>
          </section>

          {/* Playground */}
          <section>
            <h2 className="text-xl sm:text-2xl font-semibold mb-4" id="playground">
              Playground
            </h2>
            <div className="border border-gray-400 bg-gray-200 flex justify-center items-center dark:border-zinc-700 rounded-lg overflow-hidden h-[300px] sm:h-[400px] md:h-[500px] dark:bg-gradient-to-br dark:from-zinc-900 dark:to-zinc-950">
                <ActionButton
                    text="Start 14-Day Trial"
                    size="default"
                    bgColor="default"
                    textColor="default"
                />
            </div>
          </section>

          <hr className="border-t border-gray-200 dark:border-gray-700" />

          {/* Installation */}
          <section>
            <h2 className="text-xl sm:text-2xl font-semibold mb-4" id="installation">
              Installation
            </h2>
            <div className="overflow-x-auto">
              <ActionButtonInstallationCode/>
            </div>
            <div className="overflow-x-auto">   
            <div className="bg-yellow-50 dark:bg-yellow-950/50 p-4 border-yellow-500 border-l-4 rounded-r-lg my-6">
                <div className="flex items-start gap-4">
                  <AlertTriangle className="mt-1 w-6 h-6 text-yellow-500 shrink-0" />
                  <div className="space-y-2">
                    <p className="font-medium text-yellow-800 dark:text-yellow-200">
                     Update your next config file
                    </p>
                  
                  </div>
                </div>
              </div>
            <CodeBlock html={nextConfigCode} maxHeight={300} expandedHeight={500} />
            </div>
          </section>

          <hr className="border-t border-gray-200 dark:border-gray-700" />

          {/* Usage Examples */}
          <section>
            <div className="flex flex-col gap-4">
              <h2 className="ml-2 text-lg font-medium" id="props">
                Usage Examples
              </h2>

              {/* Default Usage */}
              <div className="space-y-4 md:p-4 overflow-x-auto">
                <h3 className="ml-2 text-md font-medium">Default Usage</h3>
                <CodeBlock html={basicUsageCode} />
              </div>
              <div className="bg-yellow-50 dark:bg-yellow-950/50 border-l-4 border-yellow-500 p-4 rounded-r-lg">
                <div className="flex flex-col sm:flex-row items-start gap-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 50 640 512"
                    width="40"
                    height="20"
                    className="flex-shrink-0"
                  >
                    <path
                      fill="white"
                      d="M524.5 69.8a1.5 1.5 0 0 0 -.8-.7A485.1 485.1 0 0 0 404.1 32a1.8 1.8 0 0 0 -1.9 .9 337.5 337.5 0 0 0 -14.9 30.6 447.8 447.8 0 0 0 -134.4 0 309.5 309.5 0 0 0 -15.1-30.6 1.9 1.9 0 0 0 -1.9-.9A483.7 483.7 0 0 0 116.1 69.1a1.7 1.7 0 0 0 -.8 .7C39.1 183.7 18.2 294.7 28.4 404.4a2 2 0 0 0 .8 1.4A487.7 487.7 0 0 0 176 479.9a1.9 1.9 0 0 0 2.1-.7A348.2 348.2 0 0 0 208.1 430.4a1.9 1.9 0 0 0 -1-2.6 321.2 321.2 0 0 1 -45.9-21.9 1.9 1.9 0 0 1 -.2-3.1c3.1-2.3 6.2-4.7 9.1-7.1a1.8 1.8 0 0 1 1.9-.3c96.2 43.9 200.4 43.9 295.5 0a1.8 1.8 0 0 1 1.9 .2c2.9 2.4 6 4.9 9.1 7.2a1.9 1.9 0 0 1 -.2 3.1 301.4 301.4 0 0 1 -45.9 21.8 1.9 1.9 0 0 0 -1 2.6 391.1 391.1 0 0 0 30 48.8 1.9 1.9 0 0 0 2.1 .7A486 486 0 0 0 610.7 405.7a1.9 1.9 0 0 0 .8-1.4C623.7 277.6 590.9 167.5 524.5 69.8zM222.5 337.6c-29 0-52.8-26.6-52.8-59.2S193.1 219.1 222.5 219.1c29.7 0 53.3 26.8 52.8 59.2C275.3 311 251.9 337.6 222.5 337.6zm195.4 0c-29 0-52.8-26.6-52.8-59.2S388.4 219.1 417.9 219.1c29.7 0 53.3 26.8 52.8 59.2C470.7 311 447.5 337.6 417.9 337.6z"
                    />
                  </svg>

                  <p className="text-sm sm:text-base">
                    Join this discord server to make your presence appear{" "}
                    <a
                      href="https://discord.gg/lanyard"
                      className="underline cursor-pointer text-blue-400 break-words"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      https://discord.gg/lanyard
                    </a>
                  </p>
                </div>
              </div>
              <div className="flex justify-center border-t border-gray-200 w-40 mx-auto" />
              <h2 className="p-2 text-lg" id="props">
                Props
              </h2>
              <div className="flex flex-col gap-6 border rounded-lg overflow-x-auto">
                
               <div className="grid gap-6">
              <PropTable title="<Discord Presence />" props={DiscordPresenceProps} />
              </div>
              </div>
            </div>
          </section>
        </main>

        {/* Right-side navigation */}
        <aside className="w-full lg:w-64 shrink-0 mt-8 lg:mt-0">
          <div className="sticky top-24">
            <NavigationMenu />
          </div>
        </aside>
      </div>
    </SectionWrapper>
  );
}
