import { motion } from 'framer-motion';

import MotionTag from './motionTag';

export default function LineByLine({
  tag = 'p',
  lines = [],
  delay = 0,
  ...rest
}) {
  return (
    <MotionTag
      tag={tag}
      variants={{
        init: {},
        anim: {
          transition: {
            staggerChildren: 0.25,
            delayChildren: delay,
          },
        },
      }}
      initial="init"
      whileInView="anim"
      viewport={{ once: true }}
      {...rest}
    >
      {lines.map(Line)}
    </MotionTag>
  );
}

function Line(text, i) {
  return (
    <motion.span
      className="block"
      variants={{
        init: { opacity: 0, y: 100 },
        anim: {
          opacity: 1,
          y: 0,
          transition: {
            type: 'spring',
            bounce: 0,
            ease: [0.75, 0.85, 0.95, 0.975],
            duration: 0.8,
          },
        },
      }}
      key={`${i}-${text}`}
    >
      {text}
    </motion.span>
  );
}
