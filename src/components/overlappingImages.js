import Image from 'next/image';
import { motion } from 'framer-motion';

import MotionTag from './animations/motionTag';
import Slider from './slider';

// TODO: merge with StackedImages?
export default function OverlappingImages({
  front,
  back,
  alt,
  className = '',
  leftAligned = true,
  largeOffset = false,
}) {
  return (
    <motion.div
      variants={{ init: {}, anim: {} }}
      initial="init"
      whileInView="anim"
      viewport={{ once: true }}
      className={'relative ' + className}
    >
      <MotionTag
        tag={Image}
        src={back}
        alt=""
        className={backClasses(leftAligned, largeOffset)}
        {...animationProps(false)}
      />
      <motion.div
        className={frontClasses(leftAligned, largeOffset)}
        {...animationProps(true)}
      >
        {Array.isArray(front) ? (
          <Slider images={front} />
        ) : (
          <Image src={front} alt={alt} />
        )}
      </motion.div>
    </motion.div>
  );
}

const animationProps = isFront => ({
  variants: {
    init: { y: isFront ? 200 : -200 },
    anim: { y: 0 },
  },
  transition: { duration: 1.5, ease: 'circOut' },
});

const backClasses = (rightAligned, largeOffset) => {
  const classes = ['absolute', 'h-full', 'w-full', 'object-cover', 'pb-[6%]'];

  if (rightAligned) {
    classes.push(largeOffset ? 'pl-[18%]' : 'pl-[4.5%]');
  } else {
    classes.push(largeOffset ? 'pr-[18%]' : 'pr-[9%]');
  }

  return classes.join(' ');
};

const frontClasses = (leftAligned, largeOffset) => {
  const classes = ['relative', 'pt-[6%]'];

  if (leftAligned) {
    classes.push(largeOffset ? 'pr-[18%]' : 'pr-[4.5%]');
  } else {
    classes.push(largeOffset ? 'pl-[18%]' : 'pl-[9%]');
  }

  return classes.join(' ');
};
