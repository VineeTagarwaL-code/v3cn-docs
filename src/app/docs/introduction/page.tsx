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
    "Tailwind CSS",
    "Frontend Development",
    "Web Development",
    "Design System",
  ],
  authors: [
    { name: "Vineet Agarwal", url: "https://github.com/vineetagarwal-code" },
  ],
};

export default function Home() {
  return (
    <section className="container sm:max-w-6xl max-w-sm mx-auto px-4 py-12 space-y-16">
      {/* Hero Section */}
      <div className="flex flex-col gap-6 items-start">
        <h1 className="text-5xl font-bold tracking-tight">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-violet-600 dark:from-blue-400 dark:to-violet-400">
            V3CN
          </span>
        </h1>
        <p className="text-2xl max-w-2xl dark:text-gray-300 text-wrap">
          A modern component library designed to simplify your development
          workflow
        </p>
        <div className="flex flex-wrap gap-4 pt-4">
          <a
            href="/docs/installation"
            className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-800 text-white"
          >
            Get Started
          </a>
          <a
            href="/docs/components"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-6 py-3 text-sm font-medium shadow-sm hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 dark:border-gray-700 dark:hover:bg-gray-800"
          >
            Components
          </a>
        </div>
      </div>

      {/* Introduction Section */}
      <div className="grid md:grid-cols-3 gap-12">
        <div className="md:col-span-2 space-y-6">
          <h2 className="text-3xl font-semibold tracking-tight">
            Introduction
          </h2>
          <div className="prose prose-gray dark:prose-invert max-w-none text-lg space-y-4">
            <p>
              V3CN is a modern library designed to simplify your development
              workflow with easy-to-use, reusable components for React and
              Next.js. Whether you're building a landing page or a full-scale
              web app, V3CN gives you everything you need to build fast,
              beautiful interfaces without the complexity.
            </p>
            <p>
              Built on top of Tailwind CSS and designed with Next.js in mind,
              V3CN provides a collection of professionally designed components
              that work seamlessly together. Each component is crafted to be
              accessible, responsive, and highly customizable to match your
              brand's unique style.
            </p>
            <p>
              With V3CN, you can dramatically reduce development time while
              maintaining complete control over your project's design language.
              Our components follow modern best practices for performance,
              accessibility, and responsive design.
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center p-6 bg-gray-100 dark:bg-gray-800 rounded-lg">
          {/* Code preview box */}
          <div className="w-full overflow-hidden text-sm bg-white dark:bg-gray-900 rounded-md shadow-md">
            <div className="flex items-center justify-between px-4 py-2 bg-gray-200 dark:bg-gray-700">
              <div className="flex space-x-1">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              <div className="text-xs text-gray-500 dark:text-gray-400">
                npm install v3cn
              </div>
            </div>
            <pre className="p-4 overflow-x-auto text-xs text-gray-800 dark:text-gray-300">
              <code>{`import { Button } from "v3cn/ui";

export default function App() {
  return (
    <Button variant="primary">
      Get Started with V3CN
    </Button>
  );
}`}</code>
            </pre>
          </div>
        </div>
      </div>

      {/* Why Choose V3CN Section */}
      <div className="space-y-8">
        <h2 className="text-3xl font-semibold tracking-tight">
          Why Choose V3CN?
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4 p-6 border border-gray-200 dark:border-gray-800 rounded-lg">
            <h3 className="text-xl font-medium">Streamlined Development</h3>
            <ul className="space-y-3 text-gray-700 dark:text-gray-300">
              <li className="flex items-start">
                <svg
                  className="h-5 w-5 text-green-500 mr-2 mt-0.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                <span>Plug-and-Play Components for React and Next.js</span>
              </li>
              <li className="flex items-start">
                <svg
                  className="h-5 w-5 text-green-500 mr-2 mt-0.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                <span>Seamless Integration with Minimal Setup</span>
              </li>
              <li className="flex items-start">
                <svg
                  className="h-5 w-5 text-green-500 mr-2 mt-0.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                <span>TypeScript Support with Full Type Safety</span>
              </li>
              <li className="flex items-start">
                <svg
                  className="h-5 w-5 text-green-500 mr-2 mt-0.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                <span>Extensive Documentation with Copy-Paste Examples</span>
              </li>
            </ul>
          </div>
          <div className="space-y-4 p-6 border border-gray-200 dark:border-gray-800 rounded-lg">
            <h3 className="text-xl font-medium">Modern Architecture</h3>
            <ul className="space-y-3 text-gray-700 dark:text-gray-300">
              <li className="flex items-start">
                <svg
                  className="h-5 w-5 text-green-500 mr-2 mt-0.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                <span>
                  Full Compatibility with All Routing and Folder Structures
                </span>
              </li>
              <li className="flex items-start">
                <svg
                  className="h-5 w-5 text-green-500 mr-2 mt-0.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                <span>Customizable, Scalable Design for Any Project</span>
              </li>
              <li className="flex items-start">
                <svg
                  className="h-5 w-5 text-green-500 mr-2 mt-0.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                <span>Dark Mode Support Out of the Box</span>
              </li>
              <li className="flex items-start">
                <svg
                  className="h-5 w-5 text-green-500 mr-2 mt-0.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                <span>Flexible Theming with Tailwind CSS</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="space-y-8">
        <h2 className="text-3xl font-semibold tracking-tight">Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex flex-col space-y-3 p-6 bg-gray-50 dark:bg-gray-800/50 rounded-lg">
            <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
              <svg
                className="w-6 h-6 text-blue-600 dark:text-blue-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                ></path>
              </svg>
            </div>
            <h3 className="text-xl font-medium">Performance Optimized</h3>
            <p className="text-gray-700 dark:text-gray-300">
              Built with performance in mind, V3CN components are lightweight
              and optimized for fast rendering.
            </p>
          </div>
          <div className="flex flex-col space-y-3 p-6 bg-gray-50 dark:bg-gray-800/50 rounded-lg">
            <div className="w-12 h-12 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center">
              <svg
                className="w-6 h-6 text-purple-600 dark:text-purple-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"
                ></path>
              </svg>
            </div>
            <h3 className="text-xl font-medium">Responsive by Default</h3>
            <p className="text-gray-700 dark:text-gray-300">
              Every component is designed to work flawlessly across desktops,
              tablets, and mobile devices.
            </p>
          </div>
          <div className="flex flex-col space-y-3 p-6 bg-gray-50 dark:bg-gray-800/50 rounded-lg">
            <div className="w-12 h-12 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
              <svg
                className="w-6 h-6 text-green-600 dark:text-green-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                ></path>
              </svg>
            </div>
            <h3 className="text-xl font-medium">Accessibility First</h3>
            <p className="text-gray-700 dark:text-gray-300">
              WCAG 2.1 compliant components that work for all users, including
              those using assistive technologies.
            </p>
          </div>
        </div>
      </div>

      {/* Getting Started */}
      <div className="space-y-6">
        <h2 className="text-3xl font-semibold tracking-tight">
          Getting Started
        </h2>
        <div className="prose prose-gray dark:prose-invert max-w-none text-lg">
          <p>
            V3CN is designed to be easy to install and integrate into your
            existing React or Next.js projects. Here's how to get started:
          </p>
          <div className="my-4 p-4 bg-gray-100 dark:bg-gray-800 rounded-md">
            <pre>
              <code>npx v3cn add cursor</code>
            </pre>
          </div>
          <p>
            After installation, you can import and use components directly in
            your application:
          </p>
          <div className="my-4 p-2 sm:p-4 bg-gray-100 dark:bg-gray-800 rounded-md">
            <pre className="overflow-x-auto md:overflow-x-visible max-w-full whitespace-pre text-gray-800 dark:text-gray-300">
              <code>{`// Import the Component
import { Cursor } from "@components/ui/cursor.tsx";
 
// Pass custom styles easily
<Cursor cursorClass="border-purple-500 hidden md:inline-block" />;`}</code>
            </pre>
          </div>
          <p>
            <a
              href="/docs/installation"
              className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
            >
              Read the full documentation →
            </a>
          </p>
        </div>
      </div>

      {/* Contact Section */}
      <div className="space-y-6 bg-gray-50 dark:bg-gray-800/50 p-8 rounded-lg">
        <h2 className="text-3xl font-semibold tracking-tight">Need Help?</h2>
        <div className="prose prose-gray dark:prose-invert max-w-none">
          <p className="text-lg">
            Have questions or encountering issues? We're here to help! Feel free
            to reach out through any of these channels:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
            <div className="flex flex-col items-center text-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
              <svg
                className="w-8 h-8 text-blue-500 mb-3"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"></path>
              </svg>
              <h3 className="text-lg font-medium">Twitter</h3>
              <p className="mt-2">
                DM me on{" "}
                <a
                  href="https://twitter.com/vineetwts"
                  className="text-blue-500 hover:underline"
                >
                  @vineetwts
                </a>
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
              <svg
                className="w-8 h-8 text-gray-700 dark:text-gray-300 mb-3"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path>
              </svg>
              <h3 className="text-lg font-medium">GitHub</h3>
              <p className="mt-2">
                Open an issue on our{" "}
                <a
                  href="https://github.com/VineeTagarwaL-code/v3cn-docs"
                  className="text-blue-500 hover:underline"
                >
                  GitHub repository
                </a>
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
              <svg
                className="w-8 h-8 text-red-500 mb-3"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0 3v18h24v-18h-24zm6.623 7.929l-4.623 5.712v-9.458l4.623 3.746zm-4.141-5.929h19.035l-9.517 7.713-9.518-7.713zm5.694 7.188l3.824 3.099 3.83-3.104 5.612 6.817h-18.779l5.513-6.812zm9.208-1.264l4.616-3.741v9.348l-4.616-5.607z"></path>
              </svg>
              <h3 className="text-lg font-medium">Email</h3>
              <p className="mt-2">
                Send an email to{" "}
                <a
                  href="mailto:vineetagarwal.now@gmail.com"
                  className="text-blue-500 hover:underline"
                >
                  vineetagarwal.now@gmail.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Community & Ecosystem */}
      <div className="space-y-6">
        <h2 className="text-3xl font-semibold tracking-tight">
          Community & Ecosystem
        </h2>
        <div className="prose prose-gray dark:prose-invert max-w-none text-lg">
          <p>
            V3CN is more than just a component library—it's a growing ecosystem
            of tools and resources designed to make React and Next.js
            development more efficient and enjoyable.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <div className="p-6 border border-gray-200 dark:border-gray-700 rounded-lg">
              <h3 className="text-xl font-medium mb-4">
                Open Source Community
              </h3>
              <p>
                We believe in the power of community-driven development. V3CN is
                open source, and we welcome contributions from developers of all
                skill levels.
              </p>
              <a
                href="https://github.com/vineetagarwal-code/v3cn"
                className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 inline-block mt-4"
              >
                Join our community →
              </a>
            </div>
            <div className="p-6 border border-gray-200 dark:border-gray-700 rounded-lg">
              <h3 className="text-xl font-medium mb-4">Component Extensions</h3>
              <p>
                Extend V3CN's capabilities with specialized component packages
                for data visualization, authentication, analytics, and more.
              </p>
              <a
                href="/components"
                className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 inline-block mt-4"
              >
                Explore components →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
