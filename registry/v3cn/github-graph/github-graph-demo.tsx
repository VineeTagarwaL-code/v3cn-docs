"use client"

import { GithubGraph } from "@/registry/v3cn/github-graph/github";
// import { GithubGraph } from "@/components/github-graph";

const GithubGraphDemo = () => {
  return (
    <GithubGraph
      username="vineetagarwal-code"
      blockMargin={2}
    />
  )
}
export { GithubGraphDemo };
