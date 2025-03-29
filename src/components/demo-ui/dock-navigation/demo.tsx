'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Home, Settings, User, Bell, MessageSquare } from 'lucide-react';

type DockItem = {
  id: number;
  icon: React.ReactNode;
  label: string;
};

const Dock: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const icons: DockItem[] = [
    { id: 1, icon: <Home />, label: 'Home' },
    { id: 2, icon: <User />, label: 'Profile' },
    { id: 3, icon: <MessageSquare />, label: 'Messages' },
    { id: 4, icon: <Bell />, label: 'Notifications' },
    { id: 5, icon: <Settings />, label: 'Settings' },
  ];

  return (
    <div className="p-4 bg-purple-100 dark:bg-purple-900/50 text-muted-foreground dark:text-purple-400 rounded-3xl shadow-2xl flex gap-3 justify-center relative backdrop-blur-lg border border-gray-300/20 dark:border-gray-600/20">
      {icons.map((item, index) => {
        const isHovered = hoveredIndex !== null;
        const scaleValue =
          hoveredIndex === index
            ? 2.2
            : hoveredIndex === index - 1 || hoveredIndex === index + 1
              ? 1.6 
              : hoveredIndex === index - 2 || hoveredIndex === index + 2
                ? 1.3
                : 1; 

        return (
          <motion.div
            key={item.id}
            className="relative flex flex-col items-center cursor-pointer"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <motion.div
              className="p-3 flex items-center justify-center text-4xl rounded-full"
              style={{ transformOrigin: 'bottom center' }}
              animate={{ scale: scaleValue }}
              transition={{ type: 'spring', stiffness: 150, damping: 15 }}
            >
              {item.icon}
            </motion.div>
            {hoveredIndex === index && (
              <motion.div
                className="absolute bottom-full mb-12 px-3 py-1 text-[13px] text-white bg-white/10 backdrop-blur-lg rounded-lg shadow-lg border border-white/20"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.2 }}
              >
                {item.label}
              </motion.div>
            )}
          </motion.div>
        );
      })}
    </div>
  );
};

export default Dock;
