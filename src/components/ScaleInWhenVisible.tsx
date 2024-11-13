import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface ScaleInWhenVisibleProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export default function ScaleInWhenVisible({ children, className = "", delay = 0 }: ScaleInWhenVisibleProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ 
        opacity: 1, 
        scale: 1,
        transition: {
          duration: 0.5,
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