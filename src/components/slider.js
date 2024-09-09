import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { useInView } from 'framer-motion';
import { Autoplay, EffectFade } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-fade';

export default function Slider({ images, className }) {
  const ref = useRef(null);
  const isInview = useInView(ref, { amount: 1 / 3 });
  const [swiper, setSwiper] = useState(null);

  useEffect(() => {
    if (isInview) {
      swiper?.paused && swiper.resume();
    } else {
      swiper?.running && swiper.pause();
    }
  }, [isInview, swiper]);

  return (
    <Swiper
      ref={ref}
      modules={[Autoplay, EffectFade]}
      speed={750}
      autoplay={{ delay: 3500, disableOnInteraction: true }}
      effect="fade"
      fadeEffect={{ crossFade: true }}
      onSwiper={setSwiper}
      onInit={s => isInview || s.autoplay.pause()}
      loop
      grabCursor
      className={className}
    >
      {images.map((img, i) => (
        <SwiperSlide key={img.src + i} className="self-center">
          {/* TODO: alt */}
          <Image src={img} alt="" />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
