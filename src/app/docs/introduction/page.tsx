import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Introduction",
  description:
    "V3CN is a modern React component library that helps you build the best UI for your web applications.",
  keywords: [
    "React",
    "Next.js",
    "Shadcn UI",
    "NextUI",
    "UI Library",
    "Components",
    "TypeScript",
    "Component Library",
    "Motion",
    "Framer Motion",
  ],
  authors: [
    { name: "Vineet Agarwal", url: "https://github.com/vineetagarwal-code" },
  ],
};

export default function Home() {
  return (
    <section className="space-y-4">
      <div className="flex gap-6 justify-start items-start flex-col mb-10 w-[60%]">
        <h1 className="text-4xl tracking-wide">Introduction</h1>
        <span className="text-lg dark:text-gray-400">
          V3CN is a modern library designed to simplify your development
          workflow with easy-to-use, reusable components for React and Next.js.
          Whether you're building a landing page or a full-scale web app, V3CN
          gives you everything you need to build fast, beautiful interfaces
          without the complexity.
        </span>
      </div>

      <div className="flex gap-6 justify-start items-start flex-col mb-10 w-[60%]">
        <h2 className="text-2xl font-semibold">Why Choose V3CN?</h2>
        <ul className="list-disc list-inside space-y-2 text-lg max-w-xl dark:text-gray-400">
          <li>Plug-and-Play Components for React and Next.js</li>
          <li>Seamless Integration with Minimal Setup</li>
          <li>Full Compatibility with All Routing and Folder Structures</li>
          <li>Customizable, Scalable Design for Any Project</li>
        </ul>
      </div>

      {/* Contact Section */}
      <div className="flex gap-6 justify-start items-start flex-col mb-10 w-[60%]">
        <h2 className="text-2xl font-semibold">Need Help?</h2>
        <p className="text-lg">
          Feel free to reach out if you encounter any issues!
        </p>
        <p className="text-lg">
          DM me on{" "}
          <a
            href="https://twitter.com/vineetwts"
            className="text-blue-500 hover:underline"
          >
            Twitter
          </a>{" "}
          or email me at{" "}
          <a
            href="mailto:vineetagarwal.now@gmail.com"
            className="text-blue-500 hover:underline"
          >
            vineetagarwal.now@gmail.com
          </a>
        </p>
      </div>
    </section>
  );
}
