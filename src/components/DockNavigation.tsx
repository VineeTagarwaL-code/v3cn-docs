'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { cn } from '../utils/cn';

type DockProps = {
  items: DockItemProps[];
  dockClass?: string;
};

type DockItemProps = {
  id: number;
  icon: React.ReactNode;
  label: string;
  itemClass?: string;
};

export const DockContainer: React.FC<DockProps> = ({ items, dockClass }) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div
      className={cn(
        'p-4 bg-purple-100 dark:bg-purple-900/50 rounded-3xl shadow-2xl flex gap-3 justify-center relative backdrop-blur-lg border border-gray-300/20 dark:border-gray-600/20',
        dockClass
      )}
    >
      {items.map((item, index) => (
        <DockItem
          key={item.id}
          {...item}
          index={index}
          hoveredIndex={hoveredIndex}
          setHoveredIndex={setHoveredIndex}
        />
      ))}
    </div>
  );
};

export const DockItem: React.FC<
  DockItemProps & {
    index: number;
    hoveredIndex: number | null;
    setHoveredIndex: (index: number | null) => void;
  }
> = ({ id, icon, label, index, hoveredIndex, setHoveredIndex, itemClass }) => {
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
      key={id}
      className="relative flex flex-col items-center cursor-pointer"
      onMouseEnter={() => setHoveredIndex(index)}
      onMouseLeave={() => setHoveredIndex(null)}
    >
      <motion.div
        className={cn(
          'p-3 flex items-center justify-center text-4xl rounded-full',
          itemClass
        )}
        style={{ transformOrigin: 'bottom center' }}
        animate={{ scale: scaleValue }}
        transition={{ type: 'spring', stiffness: 150, damping: 15 }}
      >
        {icon}
      </motion.div>

      {hoveredIndex === index && (
        <motion.div
          className="absolute bottom-full mb-12 px-3 py-1 text-[13px] text-white bg-black/80 backdrop-blur-lg rounded-lg shadow-lg border border-white/20"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          transition={{ duration: 0.2 }}
        >
          {label}
        </motion.div>
      )}
    </motion.div>
  );
};

const DockNavigation = { DockContainer, DockItem };

export default DockNavigation;
