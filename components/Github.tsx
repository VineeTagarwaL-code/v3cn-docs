"use client";
import { useEffect, useState } from "react";

import Calendar, { ActivityCalendar } from "react-activity-calendar";

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
  const [contribution, setContribution] = useState([]);
  const [loading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const contributions = await fetchContributionData(username);
        setContribution(contributions);
        setIsLoading(false);
      } catch (error) {
        console.error("Failed to fetch contribution data:", error);
      }
    };

    fetchData();
  }, []);
  const label = {
    totalCount: `{{count}} contributions in the last year`,
  };

  return (
    <>
      <ActivityCalendar
        data={contribution}
        maxLevel={4}
        blockMargin={blockMargin ? blockMargin : 2}
        loading={loading}
        labels={label}
        theme={{
          dark: colorPallete
            ? colorPallete
            : ["#ebedf0", "#9be9a8", "#40c463", "#30a14e", "#216e39"],
        }}
      />
    </>
  );
};

async function fetchContributionData(username: string): Promise<any> {
  let response = await fetch(`https://github.vineet.tech/api/${username}`);
  let responseBody = await response.json();

  if (!response.ok) {
    throw Error("Erroring fetching contribution data");
  }
  return responseBody.data;
}
