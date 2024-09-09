import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, EffectFade } from 'swiper/modules';
import Image from 'next/image';

import ExpandableImage from '@/components/expandableImage';
import SlideNav from './slideNav';

import 'swiper/css';
import 'swiper/css/effect-fade';

import bedroom1 from '@/img/units/1-bedroom.jpg';
import livingRoom1 from '@/img/units/1-living-room.jpg';
import bedroom1_2 from '@/img/units/1_2-bedroom.jpg';
import porch2 from '@/img/units/2-porch.jpg';
import livingRoom3 from '@/img/units/3-living-room.jpg';
import livingRoom4 from '@/img/units/4-living-room.jpg';
import porch5 from '@/img/units/5-porch.jpg';

export default function UnitSlider() {
  return (
    <Swiper
      modules={[Navigation, EffectFade]}
      navigation={{
        prevEl: '.swiper-button-prev',
        nextEl: '.swiper-button-next',
      }}
      speed={750}
      effect="fade"
      fadeEffect={{ crossFade: true }}
      grabCursor
      rewind
      className="unit-slider max-w-screen-fhd overflow-visible"
    >
      <SlideNav direction="prev" animateX />
      {SLIDES.map(slide => (
        <SwiperSlide key={slide.src.src} className="overflow-hidden">
          <ExpandableImage {...slide} />
        </SwiperSlide>
      ))}
      <SlideNav direction="next" animateX />
    </Swiper>
  );
}

const SLIDES = [
  {
    title: 'Tipo 1 - Sala',
    src: livingRoom1,
    alt: 'Sala mobiliada com vista para área comum',
  },
  {
    title: 'Tipo 1 - Quarto',
    src: bedroom1,
    alt: 'Quarto com paredes claras, mobiliado e com vista para varanda',
  },
  {
    title: 'Tipo 1.2',
    src: bedroom1_2,
    alt: 'Studio mobiliado com paredes cinzas e painéis de madeira',
  },
  {
    title: 'Tipo 2 - Varanda',
    src: porch2,
    alt: 'Varanda mobiliada com banheira e vista para área comum',
  },
  {
    title: 'Tipo 3 - Sala',
    src: livingRoom3,
    alt: 'Sala mobiliada com vista para piscina',
  },
  {
    title: 'Tipo 4 - Sala',
    src: livingRoom4,
    alt: 'Ampla sala e cozinha mobiliadas com vista para palmeiras',
  },
  {
    title: 'Tipo 5 - Varanda',
    src: porch5,
    alt: 'Varanda mobiliada com banheira, duas redes e vista para copas de palmeiras',
  },
];
