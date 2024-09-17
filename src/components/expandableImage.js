import { useRef } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

import MotionTag from './animations/motionTag';
import TextReveal from './animations/textReveal';

import expandIcon from '@/svg/icon-expand.svg';

function expandImage(imgRef) {
  const img = imgRef.current;

  img.requestFullscreen?.() ||
    /* Safari */
    img.webkitRequestFullscreen?.() ||
    /* IE11 */
    img.msRequestFullscreen?.();
}

export default function ExpandableImage({ src, alt, title, t }) {
  const imgRef = useRef();

  return (
    <>
      <MotionTag
        tag={Image}
        ref={imgRef}
        src={src}
        alt={alt}
        initial={{ opacity: 0, scale: 1.25 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: 'easeOut' }}
        className="aspect-video object-cover object-center lg:aspect-wider"
      />
      <div className="mt-2 flex justify-between text-sm lg:mt-4 lg:text-lg">
        <TextReveal delay={1} className="uppercase">
          {title}
        </TextReveal>
        <motion.button
          onClick={() => expandImage(imgRef)}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          viewport={{ once: true }}
        >
          {t('expand-image')}
          <Image src={expandIcon} alt="" className="ml-1 inline" />
        </motion.button>
      </div>
    </>
  );
}
