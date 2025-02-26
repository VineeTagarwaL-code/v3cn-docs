import CodeBlock from "@/components/code-block";

export default function GithubCode() {
  const code = `// Import the Component
import { GithubGraph } from "@/components/GithubGraph";
 
// Use the Component with custom props
<GithubGraph
  username="vineetagarwal-code" // your github username
  blockMargin={2}
  colorPallete={["#1e1e2f", "#5a3e7a", "#7e5aa2", "#a87cc3", "#d9a9e6"]}
/>;`;

  return (
    <div>
      <CodeBlock code={code} language="javascript" />
    </div>
  );
}
