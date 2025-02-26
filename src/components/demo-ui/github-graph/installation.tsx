"use client"

import { AnimatePresence, motion } from "framer-motion"
import { Check, Copy } from "lucide-react"
import { type PackageManagers, Variant } from "@/types/types"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { useState } from "react"

export function GithubInstallation({
  command,
  variant = Variant.install,
  className,
}: {
  command: string
  variant: Variant
  className?: string
}) {
  const [selected, setSelected] = useState<PackageManagers>("npm")
  const [copied, setCopied] = useState(false)

  const options: { id: PackageManagers; label: string }[] = [
    { id: "npm", label: "npm" },
    { id: "yarn", label: "yarn" },
    { id: "pnpm", label: "pnpm" },
    { id: "bun", label: "bun" },
  ]

  const getCommandToCopy = (manage: PackageManagers) => {
    const prefixMap = {
      add: {
        npm: "npm install v3cn add github",
        yarn: "yarn add v3cn add github",
        pnpm: "pnpm add v3cn add github",
        bun: "bun add v3cn add github",
      },
      install: {
        npm: "npm install",
        yarn: "yarn install",
        pnpm: "pnpm install",
        bun: "bun install",
      },
    }

    const prefix = prefixMap[variant][manage]
    return `${prefix} ${command}`
  }

  const handleSelect = (manager: PackageManagers) => {
    setSelected(manager)
  }

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(getCommandToCopy(selected))
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <div className={cn("space-y-4", className)}>
      {/* Tab buttons */}
      <div className="relative flex border-b border-gray-100 dark:border-zinc-700/50 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-px after:bg-gray-100 dark:after:bg-zinc-700/50">
        {options.map((option) => (
          <motion.button
            key={option.id}
            onClick={() => handleSelect(option.id)}
            className={`relative pb-2 text-sm px-4 ${
              selected === option.id
                ? "text-foreground"
                : "text-muted-foreground hover:text-foreground/80 transition-all duration-300"
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {option.label}
            {selected === option.id && (
              <motion.div
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-foreground z-10"
                layoutId="activeTab"
                transition={{
                  type: "spring",
                  stiffness: 500,
                  damping: 30,
                }}
              />
            )}
          </motion.button>
        ))}
      </div>

      {/* Command display */}
      <motion.div
        className="relative group"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <motion.div
          key={selected}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="p-5 text-sm font-mono leading-[1.6rem] text-gray-800  bg-gray-200 dark:bg-primary dark:bg-gradient-to-br dark:from-zinc-800 dark:to-zinc-900 dark:border dark:border-zinc-700/10 rounded-lg overflow-x-auto dark:text-gray-100"
        >
          {getCommandToCopy(selected)}
        </motion.div>
        <Button
          onClick={handleCopy}
          variant="ghost"
          size="icon"
          className="transition-opacity absolute right-2 top-1/2 -translate-y-1/2 px-2 py-1 text-xs dark:text-white/80 hover:text-white hover:bg-transparent"
        >
          <AnimatePresence mode="wait" initial={false}>
            {copied ? (
              <motion.div
                key="check"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0 }}
                className="text-green-500"
              >
                <Check className="w-4 h-4" />
              </motion.div>
            ) : (
              <motion.div key="copy" initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }}>
                <Copy className="w-4 h-4" />
              </motion.div>
            )}
          </AnimatePresence>
        </Button>
      </motion.div>
    </div>
  )
}

