import Image from 'next/image';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, EffectFade } from 'swiper/modules';

import MotionTag from './animations/motionTag';
import SlideNav from './slideNav';

import 'swiper/css';
import 'swiper/css/effect-fade';

import shadySand from '@/img/shady-sand.png';
import cinema from '@/img/features/cinema.jpg';
import entrance from '@/img/features/entrance.jpg';
import externalArea from '@/img/features/external-area.jpg';
import gym from '@/img/features/gym.jpg';
import indoorBistro from '@/img/features/indoor-bistro.jpg';
import indoorFacade from '@/img/features/indoor-facade.jpg';
import outdoorBistro from '@/img/features/outdoor-bistro.jpg';
import pool from '@/img/features/pool.jpg';
import sandCourt from '@/img/features/sand-court.jpg';
import waterLounge from '@/img/features/water-lounge.jpg';

const FEATURES = [
  { name: 'Área Externa', img: externalArea },
  { name: 'Fachada Interna', img: indoorFacade },
  { name: 'Piscina', img: pool },
  { name: 'Lounge Submerso', img: waterLounge },
  { name: 'Bistro Externo', img: outdoorBistro },
  { name: 'Bistro Interno', img: indoorBistro },
  { name: 'Academia', img: gym },
  { name: 'Beach Tennis', img: sandCourt },
  { name: 'Cinema', img: cinema },
  { name: 'Portaria', img: entrance },
];

export default function IndexedCarousel() {
  const [swiper, setSwiper] = useState(null);
  const [currentSlide, setSlide] = useState(0);

  const slideTo = index => {
    setSlide(index);
    swiper.slideTo(index);
  };

  return (
    <div className="mt-6 flex flex-row-reverse flex-wrap items-center justify-center gap-6 lg:mt-20 lg:gap-24">
      <motion.div
        variants={{ init: {}, anim: {} }}
        initial="init"
        whileInView="anim"
        viewport={{ once: true, amount: 0.5 }}
        onViewportEnter={() =>
          swiper.autoplay.paused && swiper.autoplay.resume()
        }
        className="relative min-w-56 max-w-4xl flex-1 qhd:max-w-screen-2xl"
      >
        <MotionTag
          tag={Image}
          src={shadySand}
          alt=""
          className="ml-auto w-[85%]"
          {...carouselAnimationProps(false)}
        />
        <motion.div
          className="center-y w-[95%]"
          {...carouselAnimationProps(true)}
        >
          <Swiper
            modules={[Navigation, Autoplay, EffectFade]}
            navigation={{
              prevEl: '.swiper-button-prev',
              nextEl: '.swiper-button-next',
            }}
            speed={750}
            autoplay={{ delay: 3500, disableOnInteraction: true }}
            effect="fade"
            fadeEffect={{ crossFade: true }}
            onSwiper={setSwiper}
            onInit={s => s.autoplay.pause()}
            onSlideChange={s => setSlide(s.activeIndex)}
            rewind
            className="overflow-visible @container"
          >
            <SlideNav direction="prev" className="hidden @[80vw]:block" />
            {FEATURES.map(({ name, img }) => (
              <SwiperSlide
                className="self-center"
                key={'feature-slide-' + name}
              >
                <Image
                  src={img}
                  alt={name}
                  className={
                    'object-cover object-center ' +
                    (img.height > img.width
                      ? 'mx-auto aspect-wide-portrait max-w-[60%]'
                      : 'aspect-video')
                  }
                />
              </SwiperSlide>
            ))}
            <SlideNav direction="next" className="!-right-[calc(2rem+7.5%)]" />
          </Swiper>
        </motion.div>
      </motion.div>
      {/* TODO: extract to Ul */}
      <motion.ul
        variants={{
          init: {},
          anim: { transition: { staggerChildren: 0.1 } },
        }}
        initial="init"
        whileInView="anim"
        viewport={{ once: true }}
        className="relative w-fit space-y-2 text-lg lg:space-y-4 lg:text-xl"
      >
        {FEATURES.map(({ name }, i) => {
          let classes =
            'cursor-pointer uppercase before:absolute before:-left-[0.75em] before:w-[0.4em] ';
          classes +=
            i == currentSlide
              ? "before:content-[url('../svg/arrow-right.svg')]"
              : 'text-sand-600';
          return (
            <motion.li
              key={'feature-index-' + name}
              onClick={() => slideTo(i)}
              variants={{
                init: { x: 100 },
                anim: {
                  x: 0,
                  transition: {
                    duration: 1,
                    ease: 'easeOut',
                  },
                },
              }}
              className={classes}
            >
              {name}
            </motion.li>
          );
        })}
      </motion.ul>
    </div>
  );
}

const carouselAnimationProps = isFront => ({
  variants: {
    init: { y: isFront ? '50%' : '-50%' },
    anim: { y: 0 },
  },
  transition: { duration: 1.5, ease: 'circOut' },
});
