import { GithubGraph } from "@/components/ui/github";
import { InstallationTabs } from "@/components/demo-ui/github-graph/installation-tabs";
import { codeToHtml } from "shiki";

const installationCode = `"use client";

import  { Activity, ActivityCalendar } from "react-activity-calendar";
import { useCallback, useEffect, useState } from "react";

type GithubGraphProps = {
  username: string;
  blockMargin?: number;
  colorPallete?: string[];
};

export const GithubGraph = ({
  username,
  blockMargin,
  colorPallete,
}: GithubGraphProps) => {
  const [contribution, setContribution] = useState<Activity[]>([]);
  const [loading, setIsLoading] = useState<boolean>(true);

  const fetchData = useCallback(async () => {
    try {
      const contributions = await fetchContributionData(username);
      setContribution(contributions);
    } catch (error) {
      throw new Error(\`Error fetching contribution data: \${error}\`);
    } finally {
      setIsLoading(false);
    }
  }, [username]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const label = {
    totalCount: \`{{count}} contributions in the last year\`,
  };

  return (
    <>
      <ActivityCalendar
        data={contribution}
        maxLevel={4}
        blockMargin={blockMargin ?? 2}
        loading={loading}
        labels={label}
        theme={{
          dark: colorPallete ?? [
            "#ebedf0",
            "#9be9a8",
            "#40c463",
            "#30a14e",
            "#216e39",
          ],
        }}
      />
    </>
  );
};

async function fetchContributionData(username: string): Promise<Activity[]> {
  const response = await fetch(\`https://github.vineet.pro/api/\${username}\`);
  const responseBody = await response.json();

  if (!response.ok) {
    throw Error("Erroring fetching contribution data");
  }
  return responseBody.data;
}

export default GithubGraph;`;

export async function GithubGraphInstallationCode() {
  const html = await codeToHtml(installationCode, {
    lang: "bash",
    theme: "min-dark",
  });

  return (
    <InstallationTabs
      codeHtml={html}
      layoutIdPrefix="github-graph"
      cliCommand=" v3cn add github"
      importCode="import { GithubGraph } from '@/components/GithubGraph';"
    />
  );
}
