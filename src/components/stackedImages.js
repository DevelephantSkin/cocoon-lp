import Image from 'next/image';
import { motion } from 'framer-motion';

import MotionTag from './animations/motionTag';

// TODO: merge with OverlappingImages?
export default function StackedImages({ front, back, alt }) {
  return (
    <motion.div
      variants={{ init: {}, anim: {} }}
      initial="init"
      whileInView="anim"
      viewport={{ once: true }}
      className="relative"
    >
      <MotionTag
        tag={Image}
        src={back}
        alt=""
        className="ml-auto w-[85%]"
        {...animationProps(false)}
      />
      <MotionTag
        tag={Image}
        src={front}
        alt={alt}
        className="center-y w-[95%]"
        {...animationProps(true)}
      />
    </motion.div>
  );
}

// TODO: maybe DRY w/ SideImages
const animationProps = isFront => ({
  variants: {
    init: { y: isFront ? 200 : -200 },
    anim: { y: 0 },
  },
  transition: { duration: 1.5, ease: 'circOut' },
});
