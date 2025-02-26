"use client";

import { Book, Slash } from "lucide-react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { useMemo } from "react";
import { usePathname } from "next/navigation";

// Define a custom type for breadcrumb items
type Crumb = {
  label: string;
  path: string;
  isLast: boolean;
};

export const BreadCrumb = () => {
  const pathname = usePathname();

  const crumbs: Crumb[] = useMemo(() => {
    const segments = pathname.split("/").filter(Boolean);

    if (segments.length === 0) {
      return [
        { label: "Introduction", path: "/docs/introduction", isLast: true },
      ];
    }

    return segments
      .map((segment, index) => {
        const path = `/${segments.slice(0, index + 1).join("/")}`;
        const label = segment
          .split("-")
          .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
          .join(" ");

        const isLast = index === segments.length - 1;

        if (segment === "components" && segments[index + 1]) {
          return [
            { label: "Components", path, isLast: false },
            {
              label: segments[index + 1]
                .split("-")
                .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                .join(" "),
              path: `${path}/${segments[index + 1]}`,
              isLast: true,
            },
          ];
        }

        if (segments[index - 1] === "components") return null;

        return { label, path, isLast };
      })
      .flat()
      .filter((item): item is Crumb => item !== null);
  }, [pathname]);

  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbLink href="/docs">
          <Book className="h-4 w-4 shrink-0" />
        </BreadcrumbLink>
        {crumbs.map(({ label, path, isLast }) => (
          <motion.div
            initial={{ translateX: -10, opacity: 0 }}
            animate={{ translateX: 0, opacity: 1 }}
            transition={{ duration: 0.2 }}
            key={path}
          >
            <BreadcrumbItem>
              <BreadcrumbLink href={path}>
                <Slash className="h-2 w-2 shrink-0" />
              </BreadcrumbLink>
              {isLast || label === "Components" ? (
                <BreadcrumbPage
                  className={cn(
                    label === "Components" && "text-muted-foreground",
                    "tracking-wider text-sm"
                  )}
                >
                  {label}
                </BreadcrumbPage>
              ) : (
                <BreadcrumbLink href={path}>{label}</BreadcrumbLink>
              )}
            </BreadcrumbItem>
          </motion.div>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  );
};
