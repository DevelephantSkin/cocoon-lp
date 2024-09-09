import { motion } from 'framer-motion';

import MotionTag from './motionTag';

export default function TextReveal({
  tag = 'p',
  delay = 0,
  stagger = 0.025,
  duration = 0.75,
  controlled = false,
  children,
  ...rest
}) {
  const chars = children.split('');
  const controlledProps = controlled
    ? {}
    : { initial: 'init', whileInView: 'anim', viewport: { once: true } };

  return (
    <MotionTag
      tag={tag}
      variants={{
        init: {},
        anim: {
          transition: { delayChildren: delay, staggerChildren: stagger },
        },
      }}
      {...controlledProps}
      {...rest}
    >
      {chars.map((char, i) => Span(char, i, duration))}
    </MotionTag>
  );
}

function Span(char, i, duration) {
  return (
    <motion.span
      key={`${i}-${char}`}
      variants={{
        init: { opacity: 0 },
        anim: { opacity: 1, transition: { duration } },
      }}
    >
      {char}
    </motion.span>
  );
}
