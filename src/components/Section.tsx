import { motion } from "motion/react";
import type { ReactNode } from "react";

type SectionProps = {
  id?: string;
  className?: string;
  children: ReactNode;
};

/** Panel-style section that fades + slides up when scrolled into view. */
export default function Section({ id, className, children }: SectionProps) {
  return (
    <motion.section
      id={id}
      className={className}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      {children}
    </motion.section>
  );
}
