import { motion, useAnimation } from "framer-motion";
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';

const variants = {
  visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.75 } },
  hidden: { opacity: 0, scale: 0, y: 50}
}

export function Card({ icon }) {
  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      control.start('visible');
    } else {
      control.start('hidden');
    }
  }, [control, inView]);

  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={control}
      className="card"
    >
      <div>{icon}</div>
    </motion.div>
  );
}