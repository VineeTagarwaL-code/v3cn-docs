"use client";

import { Activity, ActivityCalendar } from "react-activity-calendar";
import { useCallback, useEffect, useState } from "react";
import { useTheme } from "next-themes"; 

type GithubGraphProps = {
  username: string;
  blockMargin?: number;
  lightColorPalette?: string[];
  darkColorPalette?: string[];
};


const DEFAULT_LIGHT_PALETTE = [
  "#ebedf0",
  "#9be9a8",
  "#40c463",
  "#30a14e",
  "#216e39",
];

const DEFAULT_DARK_PALETTE = [
  "#1e1e2f",
  "#5a3e7a",
  "#7e5aa2",
  "#a87cc3",
  "#d9a9e6",
];

export const DemoGithubGraph = ({
  username,
  blockMargin,
  lightColorPalette = DEFAULT_LIGHT_PALETTE,
  darkColorPalette = DEFAULT_DARK_PALETTE,
}: GithubGraphProps) => {
  const [contribution, setContribution] = useState<Activity[]>([]);
  const [loading, setIsLoading] = useState<boolean>(true);
  const { theme } = useTheme(); 

  const fetchData = useCallback(async () => {
    try {
      const contributions = await fetchContributionData(username);
      setContribution(contributions);
    } catch (error) {
      throw Error("Error fetching contribution data");
    } finally {
      setIsLoading(false);
    }
  }, [username]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const label = {
    totalCount: `{{count}} contributions in the last year`,
  };

  return (
    <ActivityCalendar
      data={contribution}
      maxLevel={4}
      blockMargin={blockMargin ?? 2}
      loading={loading}
      labels={label}
      theme={{
        light: lightColorPalette,
        dark: darkColorPalette,
      }}
      colorScheme={theme === "dark" ? "dark" : "light"} 
    />
  );
};

async function fetchContributionData(username: string): Promise<Activity[]> {
  let response = await fetch(`https://github.vineet.pro/api/${username}`);
  let responseBody = await response.json();

  if (!response.ok) {
    throw Error("Erroring fetching contribution data");
  }
  return responseBody.data;
}