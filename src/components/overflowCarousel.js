// @refresh reset

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { motion } from 'framer-motion';

import MotionTag from './animations/motionTag';
import SlideNav from './slideNav';

import 'swiper/css';

import church from '@/img/church.png';
import shore from '@/img/shore.png';

export default function OverflowCarousel() {
  return (
    <motion.div
      variants={{
        init: {},
        anim: {
          transition: { staggerChildren: 0.5 },
        },
      }}
      initial="init"
      whileInView="anim"
      viewport={{ once: true, amount: 1 / 3 }}
    >
      <Swiper
        modules={[Navigation]}
        slidesPerView={'auto'}
        freeMode
        spaceBetween={14}
        dir="rtl"
        speed={1000}
        navigation={{
          prevEl: '.swiper-button-prev',
          nextEl: '.swiper-button-next',
        }}
        grabCursor
        className="after:center-y relative z-0 h-96 overflow-visible after:absolute after:left-full after:z-10 after:block after:h-[calc(100%+1rem)] after:w-screen after:bg-sand lg:h-[36rem]"
      >
        <SwiperSlide className="relative flex w-auto flex-row-reverse items-center gap-4">
          <MotionTag
            src={church}
            alt="Foto de uma igreja próxima à praia com várias palmeiras ao redor"
            className="max-h-full w-auto"
            {...ANIMATION_PROPS}
          />
        </SwiperSlide>
        <SwiperSlide className="flex w-auto items-center gap-4">
          <SlideNav direction="prev" />
          <MotionTag
            src={shore}
            alt="Praia de areias claras entre mata intocada e mar azul-turquesa"
            className="h-full w-auto"
            {...ANIMATION_PROPS}
          />
        </SwiperSlide>
        <SlideNav direction="next" />
      </Swiper>
    </motion.div>
  );
}

const ANIMATION_PROPS = {
  tag: Image,
  variants: {
    init: { x: -1000 },
    anim: { x: 0 },
  },
  transition: { duration: 1, ease: 'circOut' },
};
