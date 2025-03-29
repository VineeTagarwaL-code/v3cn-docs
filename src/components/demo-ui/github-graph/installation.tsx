import { Activity } from "react-activity-calendar";
import { GithubGraph } from "@/components/ui/github";
import { InstallationTabs } from "@/components/demo-ui/github-graph/installation-tabs";
import { codeToHtml } from "shiki";

const installationCode = `"use client"

import { type Activity, ActivityCalendar } from "react-activity-calendar"
import { useCallback, useEffect, useState } from "react"

type GithubGraphProps = {
  username: string
  blockMargin?: number
  colorPalette?: string[]
}

export const GithubGraph = ({ 
  username, 
  blockMargin = 4, 
  colorPalette = ["#ebedf0", "#9be9a8", "#40c463", "#30a14e", "#216e39"]
}: GithubGraphProps) => {
  const [contribution, setContribution] = useState<Activity[]>([])
  const [loading, setIsLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)

  const fetchData = useCallback(async () => {
    try {
      setIsLoading(true)
      setError(null)
      const contributions = await fetchContributionData(username)
      setContribution(contributions)
    } catch (error) {
      setError(error instanceof Error ? error.message : "Failed to fetch contribution data")
    } finally {
      setIsLoading(false)
    }
  }, [username])

  useEffect(() => {
    fetchData()
  }, [fetchData])

  if (loading) {
    return <div>Loading contribution data...</div>
  }

  if (error) {
    return <div className="text-red-500">Error: {error}</div>
  }

  return (
    <ActivityCalendar
      data={contribution}
      blockMargin={blockMargin}
      theme={{
        dark: colorPalette,
      }}
      labels={{
        totalCount: \`{{count}} contributions in the last year\`,
      }}
    />
  )
}

async function fetchContributionData(username: string): Promise<Activity[]> {
  try {
    const response = await fetch(\`https://github.vineet.pro/api/\${username}\`)
    
    if (!response.ok) {
      throw new Error( \`HTTP error! status: \${response.status}\`)
    }
    
    const responseBody = await response.json()
    return responseBody.data
  } catch (err) {
    console.log(err)
    return [];
  }
}

export default GithubGraph`;

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
      shadcnCommand="shadcn@latest add 'https://v3cn.vineet.pro/r/github-graph'"
    />
  );
}
