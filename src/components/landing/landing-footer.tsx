import Link from "next/link";

export default function LandingFooter() {
  return (
    <footer className="w-full border-t border-gray-800 bg-black py-4">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 sm:flex-row">
        <p className="text-sm text-gray-400">
          Designed by{" "}
          <Link href="#" className="hover:text-gray-300">
            Radiant Templates
          </Link>
          . Powered by{" "}
          <Link href="#" className="hover:text-gray-300">
            Webflow
          </Link>
          .
        </p>
        <div className="flex items-center gap-4">
          <Link
            href="#"
            className="rounded-full border border-gray-700 px-4 py-1 text-sm text-gray-400 transition-colors hover:border-gray-600 hover:text-gray-300"
          >
            Facebook
          </Link>
          <Link
            href="#"
            className="rounded-full border border-gray-700 px-4 py-1 text-sm text-gray-400 transition-colors hover:border-gray-600 hover:text-gray-300"
          >
            Twitter
          </Link>
          <Link
            href="#"
            className="rounded-full border border-gray-700 px-4 py-1 text-sm text-gray-400 transition-colors hover:border-gray-600 hover:text-gray-300"
          >
            LinkedIn
          </Link>
        </div>
      </div>
    </footer>
  );
}
