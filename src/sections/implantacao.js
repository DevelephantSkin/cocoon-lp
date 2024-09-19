import Image from 'next/image';
import { motion } from 'framer-motion';

import Heading from '@/components/heading';
import MotionTag from '@/components/animations/motionTag';
import TextReveal from '@/components/animations/textReveal';

import map from '@/img/map.png';
import { useLanguage } from '@/context/LanguageContext';

export default function Implantacao() {
  const { translations } = useLanguage();

  const AREAS = [
    translations.implantacao.reception,
    translations.implantacao.pool,
    translations.implantacao.exclusive_restaurant,
    translations.implantacao.beach_tennis,
    translations.implantacao.gym,
    translations.implantacao.block_1,
    translations.implantacao.block_2,
    translations.implantacao.block_3,
    translations.implantacao.block_4,
    translations.implantacao.block_5,
    translations.implantacao.block_6,
    translations.implantacao.block_7,
    translations.implantacao.block_8,
    translations.implantacao.stairs,
    translations.implantacao.elevators,
    translations.implantacao.outdoor_cinema,
    translations.implantacao.bike_rack,
    translations.implantacao.dressing_rooms,
    translations.implantacao.laundry,
    translations.implantacao.sea,
  ];

  return (
    <section
      id="implantacao"
      className="grid-implantacao relative z-10 mx-auto mt-12 place-items-start gap-x-24 bg-sand lg:ml-24 lg:mt-40 lg:grid lg:max-w-[80%]"
      key={translations.implantacao.title}
    >
      <Heading className="cell-b1 !mt-0">
        {translations.implantacao.title}
      </Heading>
      <div className="cell-a ml-auto overflow-hidden rounded-[2rem]">
        <MotionTag
          tag={Image}
          src={map}
          alt="Mapa do empreendimento"
          initial={{ x: '100%' }}
          whileInView={{
            x: 0,
            transition: { type: 'tween', duration: 2, ease: 'circOut' },
          }}
          viewport={{ once: true }}
          className="max-h-[60rem] w-auto"
        />
      </div>
      <div className="cell-b2 mx-auto mt-8 w-fit lg:m-0">
        <motion.ol
          variants={{
            init: { opacity: 0 },
            anim: {
              opacity: 1,
              transition: { duration: 1, staggerChildren: 0.075 },
            },
          }}
          initial="init"
          whileInView="anim"
          viewport={{ once: true }}
          className="space-y-2 text-lg uppercase [counter-reset:_map-list]"
        >
          {AREAS.map((area, i) => (
            <li key={area} className={LI_CLASSES}>
              <motion.span
                variants={{
                  init: { x: -300 },
                  anim: {
                    x: 0,
                    transition: { duration: 1, ease: 'circOut' },
                  },
                }}
                className="inline-block"
              >
                {area}
              </motion.span>
            </li>
          ))}
        </motion.ol>
        <motion.hr
          initial={{ width: 0 }}
          whileInView={{ width: '100%' }}
          viewport={{ once: true }}
          transition={{ delay: 1.5, duration: 0.75, ease: 'easeOut' }}
          className="mt-4 border-t-hpx border-cacao"
        />
        <TextReveal delay={1.5} className="mt-4 w-fit text-[1.5rem] leading-4">
          {translations.implantacao.area}
        </TextReveal>
      </div>
    </section>
  );
}

const LI_CLASSES = [
  'relative',
  'overflow-hidden',
  '[counter-increment:_map-list]',
  'before:relative',
  'before:z-[2]',
  'before:mr-3',
  'before:inline-flex',
  'before:h-6',
  'before:w-6',
  'before:items-center',
  'before:justify-center',
  'before:align-middle',
  'before:rounded-full',
  'before:pl-[1.5px]',
  'before:text-sm',
  'before:font-bold',
  'before:content-[counter(map-list)]',
  'before:bg-cacao',
  'before:text-sand',
  'after:absolute',
  'after:left-0',
  'after:z-[1]',
  'after:h-full',
  'after:w-9',
  'after:bg-sand',
].join(' ');
