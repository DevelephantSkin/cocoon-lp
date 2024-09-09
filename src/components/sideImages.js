import Image from 'next/image';
import { motion } from 'framer-motion';

import MotionTag from './animations/motionTag';

// TODO: better name
export default function SideImages({ left, right, className = '' }) {
  return (
    <motion.div
      variants={{ init: {}, anim: {} }}
      initial="init"
      whileInView="anim"
      viewport={{ once: true }}
      className={'ml-auto grid grid-cols-2 gap-4 ' + className}
    >
      <MotionTag
        tag={Image}
        src={left}
        alt=""
        className="mt-[25%]"
        {...animationProps(false)}
      />
      <MotionTag tag={Image} src={right} alt="" {...animationProps(true)} />
    </motion.div>
  );
}

// TODO: maybe DRY w/ StackedImages
const animationProps = isLeft => ({
  variants: {
    init: { opacity: 0, y: isLeft ? 100 : -100 },
    anim: { opacity: 1, y: 0 },
  },
  transition: { delay: 0.25, duration: 1.5, ease: 'circOut' },
});
