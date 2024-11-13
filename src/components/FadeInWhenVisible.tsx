import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface FadeInWhenVisibleProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export default function FadeInWhenVisible({ children, className = "", delay = 0 }: FadeInWhenVisibleProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ 
        opacity: 1, 
        y: 0,
        transition: {
          duration: 0.8,
          delay,
          ease: [0.22, 1, 0.36, 1]
        }
      }}
      viewport={{ once: true }}
      className={className}
    >
      {children}
    </motion.div>
  );
}