'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Home, Settings, User, Bell, MessageSquare } from 'lucide-react';

type DockItem = {
  id: number;
  icon: JSX.Element;
  label: string;
};

const Dock: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const icons: DockItem[] = [
    { id: 1, icon: <Home />, label: 'Home' },
    { id: 2, icon: <User />, label: 'Profile' },
    { id: 3, icon: <MessageSquare />, label: 'Messages' },
    { id: 4, icon: <Bell />, label: 'Notifications' },
    { id: 5, icon: <Settings />, label: 'Settings' },
  ];

  return (
    <div className="p-4 bg-purple-100 dark:bg-purple-900/50 text-muted-foreground dark:text-purple-400 rounded-2xl shadow-lg flex gap-4 justify-center relative backdrop-blur">
      {icons.map((item, index) => (
        <div className="relative flex flex-col items-center" key={item.id}>
          <motion.div
            className="p-2 flex items-center justify-center text-2xs text-muted-foreground bg-purple-100 px-2 rounded-full dark:bg-purple-900/50 dark:text-purple-400 cursor-pointer"
            initial={{ scale: 1 }}
            animate={{ scale: hoveredIndex === index ? 1.5 : 1 }}
            transition={{ type: 'spring', stiffness: 300 }}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            onClick={() => setActiveIndex(index)}
          >
            {item.icon}
          </motion.div>
          {hoveredIndex === index && (
            <motion.div
              className="absolute bottom-full mb-4 left-1/5 transform -translate-x-1/2 bg-gray-900 text-white text-sm px-3 py-1 rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 15 }}
            >
              {item.label}
            </motion.div>
          )}
          {activeIndex === index && (
            <motion.div
              className="w-2 h-2 bg-purple-700 rounded-full mt-1"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default Dock;
