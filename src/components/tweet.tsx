"use client"

import { Tweet } from 'react-tweet'
import { motion } from 'framer-motion'

interface TweetComponentProps {
  id: string
}

export function TweetComponent({ id }: TweetComponentProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }} 
      whileInView={{ opacity: 1, y: 0 }} 
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      whileHover={{ scale: 1.02 }}
      className="themed-tweets rounded-xl overflow-hidden"
    >
      <Tweet id={id} />
    </motion.div>
  )
} 