import { Github, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";
import MagneticWrapper from "./magnetic-wrapper";

export function LandingFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-6 border-gray-800 border-t w-full">
      <div className="flex sm:flex-row flex-col justify-between items-center gap-6 mx-auto px-6 container">
        <div>
          <p className="text-gray-400 text-sm">
            © {currentYear} V3CN Team. All rights reserved.
          </p>
          <p className="mt-1 text-gray-500 text-xs">
            Designed and developed by{" "}
            <Link
              href="//www.vineet.tech/"
              className="hover:text-gray-300 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              V3CN Team
            </Link>
          </p>
        </div>

        <div className="flex items-center gap-4">
          <MagneticWrapper>
            <Link
              href="//x.com/vineetwts"
              className="py-1.5 rounded-full text-gray-400 hover:text-white text-sm transition-colors ease-in-out"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="X"
            >
              <Twitter size={16} />
            </Link>
          </MagneticWrapper>
          <MagneticWrapper>
            <Link
              href="//github.com/vineeTagarwaL-code"
              className="py-1.5 rounded-full text-gray-400 hover:text-white text-sm transition-colors"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <Github size={16} />
            </Link>
          </MagneticWrapper>
          <MagneticWrapper>
            <Link
              href="//www.linkedin.com/in/vineetagarwal2004/"
              className="py-1.5 rounded-full text-gray-400 hover:text-white text-sm transition-colors"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <Linkedin size={16} />
            </Link>
          </MagneticWrapper>
        </div>
      </div>
    </footer>
  );
}
