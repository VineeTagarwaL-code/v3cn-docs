"use client"

import { GithubGraph } from "@/registry/v3cn/github-graph/github-graph";
// import { GithubGraph } from "@/components/github-graph";

const GithubGraphDemo = () => {
  return (
    <GithubGraph
      username="vineetagarwal-code"
      blockMargin={2}
      lightColorPalette={["#1e1e2f", "#5a3e7a", "#7e5aa2", "#a87cc3", "#d9a9e6"]}
      darkColorPalette={["#1e1e2f", "#5a3e7a", "#7e5aa2", "#a87cc3", "#d9a9e6"]}
    />
  )
}
export { GithubGraphDemo };
