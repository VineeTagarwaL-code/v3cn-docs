import Link from "next/link";

export function LandingFooter() {
  return (
    <footer className="py-4 border-gray-800 border-t w-full">
      <div className="flex sm:flex-row flex-col justify-between items-center gap-4 mx-auto px-4 container">
        <p className="text-gray-400 text-sm">
          Designed by{" "}
          <Link href="//www.vineet.tech/" className="hover:text-gray-300">
            Vineet
          </Link>
          {/* . Powered by{" "}
          <Link href="#" className="hover:text-gray-300">
            Webflow
          </Link> */}
          .
        </p>
        <div className="flex items-center gap-4">
          <Link
            href="//x.com/vineetwts#"
            className="px-4 py-1 border border-gray-700 hover:border-gray-600 rounded-full text-gray-400 hover:text-gray-300 text-sm transition-colors"
          >
            X
          </Link>
          <Link
            href="//github.com/vineeTagarwaL-code"
            className="px-4 py-1 border border-gray-700 hover:border-gray-600 rounded-full text-gray-400 hover:text-gray-300 text-sm transition-colors"
          >
            Github
          </Link>
          <Link
            href="//www.linkedin.com/in/vineetagarwal2004/"
            className="px-4 py-1 border border-gray-700 hover:border-gray-600 rounded-full text-gray-400 hover:text-gray-300 text-sm transition-colors"
          >
            LinkedIn
          </Link>
        </div>
      </div>
    </footer>
  );
}
