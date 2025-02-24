import Image from "next/image";
import Link from "next/link";
import React from "react";

export const Navbar = () => {
  const links = [
    {
      name: "Home",
      href: "#",
    },
    {
      name: "About Us",
      href: "#about",
    },
    {
      name: "Workflow",
      href: "#work",
    },
    {
      name: "Examples",
      href: "#examples",
    },
  ];
  return (
    <header className="relative flex justify-between items-center p-3 w-full text-white">
      <div className="flex items-center gap-1">
        <Image src="/logo.webp" alt="logo" width={60} height={60} className="grayscale-[100%]" />
      </div>
      <nav
        className="hidden top-1/2 left-1/2 absolute md:flex items-center gap-4 py-2 pr-3 pl-6 border border-[#5c58673d] rounded-[100px] -translate-x-1/2 -translate-y-1/2"
        style={{
          background:
            "linear-gradient(180deg, rgba(25, 25, 27, 0.4) 19.09%, #19191B 100%)",
        }}
      >
        <div className="flex items-center gap-2">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="p-2 font-medium text-white hover:text-gray-300 text-sm"
            >
              {link.name}
            </Link>
          ))}
          <button
            className="flex items-center gap-1 ml-5 p-2 pl-4 border border-[#5c58673d] rounded-full font-medium text-white hover:text-gray-300 text-sm"
            style={{
              background:
                "linear-gradient(180deg, #222223 0%, rgba(34, 34, 35, 0.6) 68.75%)",
            }}
          >
            Contact Us
            <Image
              src="/icons/arrow-up.svg"
              alt="arrow"
              width={20}
              height={20}
            />
          </button>
        </div>
      </nav>
      <button
        className="flex items-center gap-1 ml-10 px-4 py-2 border border-[#5c58673d] rounded-full font-medium text-white hover:text-gray-300 text-sm"
        style={{
          background:
            "linear-gradient(180deg, #222223 0%, rgba(34, 34, 35, 0.6) 68.75%)",
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="16"
          height="16"
          color="#fffcfc"
          fill="none"
        >
          <path
            d="M20.4999 10.5V10C20.4999 6.22876 20.4999 4.34315 19.3284 3.17157C18.1568 2 16.2712 2 12.4999 2H11.5C7.72883 2 5.84323 2 4.67166 3.17156C3.50009 4.34312 3.50007 6.22872 3.50004 9.99993L3.5 14.5C3.49997 17.7874 3.49996 19.4312 4.40788 20.5375C4.57412 20.7401 4.75986 20.9258 4.96242 21.0921C6.06877 22 7.71249 22 10.9999 22"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M7.5 7H16.5"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M7.5 12H13.5"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M20.5 20L20.5 17C20.5 15.5706 19.1569 14 17.5 14C15.8431 14 14.5 15.5706 14.5 17L14.5 20.5C14.5 21.3284 15.1716 22 16 22C16.8284 22 17.5 21.3284 17.5 20.5V17"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        Open docs
      </button>
    </header>
  );
};
