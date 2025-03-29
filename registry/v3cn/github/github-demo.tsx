"use client"

import { GithubGraph } from "@/registry/v3cn/github/github";
// import { GithubGraph } from "@/components/github";

const GithubGraphDemo = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <GithubGraph
        username="vineetagarwal-code"
        blockMargin={2}
      />
    </div>
  )
}
export { GithubGraphDemo };
