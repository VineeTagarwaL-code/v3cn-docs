import CodeBlock from "@/components/code-block";

export default function GithubCode() {
  const code = `// Import the Component
import { Discord } from "@/components/ui/discord";
 
// Pass custom styles easily
 
<Discord
  userId="1018532712455352330"
  userName="vineet"
  activityDetailClass="dark:text-cyan-300"
  activityDescriptionClass="dark:text-[#ffbe6f]"
  progressBarClassName="dark:bg-[#ffbe6f]"
  localTimeClass="dark:text-green-500"
/>;`;

  return (
    <div>
      <CodeBlock code={code} language="javascript" />
    </div>
  );
}
