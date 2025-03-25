import { Github } from 'lucide-react';
import Link from 'next/link';
import { Metadata } from 'next';
import { SectionWrapper } from '@/components/section-wrapper';
import { TweetComponent } from '@/components/tweet';
export const metadata: Metadata = {
  title: 'Introduction',
  description:
    'V3CN is a modern React component library that helps you build the best UI for your web applications.',
  keywords: [
    'React',
    'Next.js',
    'Shadcn UI',
    'NextUI',
    'UI Library',
    'Components',
    'TypeScript',
    'Component Library',
    'Motion',
    'Framer Motion',
    'Tailwind CSS',
    'Frontend Development',
    'Web Development',
    'Design System',
  ],
  authors: [{ name: 'Vineet Agarwal', url: 'https://github.com/vineetagarwal-code' }],
};

export default function Home() {
  return (
    <SectionWrapper>
      {/* Hero Section */}
      <div className="flex flex-col gap-6 items-start">
        <h1 className="text-5xl font-bold tracking-tight">
          <span className=" text-purple-400">V3CN</span>
        </h1>
        <p className="text-lg md:flex-nowrap  dark:text-gray-400 text-wrap">
          A collection of unique components that make your website stand out.
        </p>
        <div className="flex flex-wrap gap-4 pt-1">
          <Link
            href="/docs/installation"
            className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 "
          >
            Get Started
          </Link>
          <Link
            href="https://github.com/vineetagarwal-code/v3cn-docs"
            className="inline-flex items-center gap-2 justify-center rounded-md border border-input bg-background px-6 py-3 text-sm font-medium shadow-sm hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 dark:border-gray-700 dark:hover:bg-gray-800"
          >
            <Github className="mr-2 h-4 w-4" />
            Github
          </Link>
        </div>
      </div>
      <div className="flex flex-col gap-6 max-w-[750px] text-gray-700 dark:text-zinc-300 mt-10">
        <p className="leading-relaxed">
          Last year around this time, I made my portfolio website. I was excited and a bit nervous
          to share it with the world. I posted it on X and the people went berserk. It got 15k+
          views in 24 hours. People loved it. All of a sudden, I was flooded with messages. Asking
          me to make components out of it. So here I am, making it true.
        </p>
        {/* <TweetComponent id="1779960061952950393" /> */}
      </div>
    </SectionWrapper>
  );
}
