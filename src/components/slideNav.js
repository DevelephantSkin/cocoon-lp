import Image from 'next/image';
import { motion } from 'framer-motion';

import arrowRight from '@/svg/arrow-right.svg';

export default function SlideNav({ direction, className, animateX = false }) {
  const swiperClass = `swiper-button-${direction}`;
  const [slot, directionClass] =
    direction === 'prev'
      ? ['start', '-left-10 lg:-left-12 flip-h']
      : ['end', '-right-10 lg:-right-12'];

  return (
    <motion.div
      initial={{ opacity: 0, x: animateX ? -100 : 0 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 2 }}
      slot={slot}
      className={`center-y absolute z-30 cursor-pointer p-4 ${directionClass} ${swiperClass} ${className}`}
    >
      <Image src={arrowRight} alt="" className="h-4 w-fit lg:h-6" />
    </motion.div>
  );
}
