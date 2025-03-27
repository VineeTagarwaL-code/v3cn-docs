"use client"

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { NavigationMenu } from "@/components/navigation-menu";
import { PackageManagerTabs } from "@/components/ui/package-manager-tabs";
import { SectionWrapper } from "@/components/section-wrapper";

export default function CliPage() {
  const cliCommand = "v3cn add discord";
  const layoutIdPrefix = "discord";

  return (
    <SectionWrapper>
      <div className="flex lg:flex-row flex-col gap-8">
        <main className="flex-1 space-y-12">
          <section className="space-y-4">
            <div className="flex gap-6 justify-start items-start flex-col mb-10">
              <h1 className="mb-4 font-bold text-3xl md:text-4xl">V3CN CLI</h1>
              <p className="text-muted-foreground/90 leading-relaxed">
                Our CLI provides an easy way to install and integrate V3CN components into your project.
              </p>
            </div>

            {/* Installation content */}
            <div className="">
              <div className="space-y-6">
                <h2 className="text-2xl font-semibold mb-4">Install our CLI</h2>
                <p className="mb-4">First, install the V3CN CLI globally:</p>
                <PackageManagerTabs
                  command="-g v3cn"
                  variant="install"
                  layoutId={`${layoutIdPrefix}-cli-install`}
                />
                
                <h2 className="text-2xl font-semibold mt-8 mb-4">Add Components</h2>
                <p className="mb-4">Then use the CLI to add components to your project:</p>
                <PackageManagerTabs
                  command={cliCommand}
                  variant="dlx"
                  layoutId={`${layoutIdPrefix}-package-manager`}
                />
                
                <div className="mt-8 p-4 border border-blue-500/20 bg-blue-500/10 rounded-lg">
                  <h3 className="text-lg font-medium mb-2">Available Commands</h3>
                  <ul className="list-disc list-inside space-y-2">
                    <li><code className="bg-gray-200 dark:bg-gray-800 px-2 py-1 rounded">v3cn add [component]</code> - Add a specific component</li>
                  </ul>
                </div>
              </div>
            </div>

            <hr className="border-gray-200 dark:border-gray-700 border-t my-8" />

            {/* Future documentation */}
            <div>
              <h2 className="text-xl font-semibold mb-4">Next Steps</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="rounded-lg border bg-card">
                  <div className="p-6 pb-3">
                    <div className="space-y-1">
                      <h3 className="font-medium leading-none">Component Library</h3>
                      <p className="text-sm text-muted-foreground">
                        Explore all available components in our library.
                      </p>
                    </div>
                    <div className="mt-4">
                      <Link href="/docs/components/discord">
                        <Button variant="outline" size="sm">
                          Browse Components
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
                
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
