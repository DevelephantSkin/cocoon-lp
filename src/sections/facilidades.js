import Image from 'next/image';
import { motion } from 'framer-motion';

import Heading from '@/components/heading';
import CondoServices from '@/components/condoServices';

import sideView from '@/img/side-view.jpg';
// import aerialView from '@/img/aerial-view.jpg';
// import aerialViewHigh from '@/img/aerial-view-high.jpg';
import reef from '@/img/reef.png';
import OverlappingImages from '@/components/overlappingImages';
import LineByLine from '@/components/animations/lineByLine';
import FadeTo from '@/components/animations/fadeTo';
import { useLanguage } from '@/context/LanguageContext';

export default function Facilidades() {
  const { translations } = useLanguage();

  return (
    <section
      id="facilidades"
      className="mx-auto max-w-screen-fhd scroll-mt-[calc(var(--header-height)-4rem)]"
    >
      <div
        className="relative z-10 bg-sand pb-8 pt-16 lg:pb-20 lg:pt-28"
        key={translations.facilidades.title}
      >
        <Heading className="!my-0 mx-auto max-w-lg">
          {translations.facilidades.title}
        </Heading>
      </div>
      <div
        key={translations.facilidades.unique}
        className="grid-facilidades grid-cols-2 gap-8 gap-x-24 lg:grid "
      >
        <OverlappingImages
          back={reef}
          // front={[sideView, aerialView, aerialViewHigh]}
          front={sideView}
          largeOffset
          alt="Vista lateral do empreendimento, destacando os dois pavilhões e a piscina"
          className="cell-b1 max-w-full"
        />
        <motion.ul
          variants={{
            init: { opacity: 0 },
            anim: {
              opacity: 1,
              transition: { duration: 1, staggerChildren: 0.1 },
            },
          }}
          initial="init"
          whileInView="anim"
          viewport={{ once: true }}
          className="cell-a1 mt-8 max-w-80 space-y-8 overflow-hidden text-lg leading-6 text-cacao lg:mt-0 lg:place-self-center lg:text-xl lg:leading-10"
        >
          <motion.li variants={LI_VARIANTS}>
            {translations.facilidades.unique}
          </motion.li>
          <motion.li variants={LI_VARIANTS}>
            {translations.facilidades.entertainment}
          </motion.li>
          <motion.li variants={LI_VARIANTS}>
            {translations.facilidades.wellness}
          </motion.li>
          <motion.li variants={LI_VARIANTS}>
            {translations.facilidades.nature}
          </motion.li>
          <motion.li variants={LI_VARIANTS}>
            {translations.facilidades.ventilation}
          </motion.li>
        </motion.ul>
        <div className="cell-a2 mt-16 flex-col justify-between lg:mt-0 lg:flex">
          <LineByLine
            tag="h3"
            lines={[
              translations.housi.subtitle1,
              translations.housi.subtitle2,
              translations.housi.subtitle3,
              translations.housi.subtitle4,
              translations.housi.subtitle5,
            ]}
            className="mt-6 text-xl uppercase lg:mt-0 lg:text-5xl"
          ></LineByLine>
        </div>
        <div className="cell-b2 mt-12 lg:mt-0 flex items-center">
          <FadeTo className="text-wrap">
            {translations.housi.description}
          </FadeTo>
        </div>
      </div>
      <h3 className="mt-12 text-center text-xl lg:mt-24">
        {translations.services.title}
      </h3>
      <CondoServices />
    </section>
  );
}

const LI_VARIANTS = {
  init: { x: '-100%' },
  anim: {
    x: 0,
    transition: { duration: 1.25, ease: 'circOut' },
  },
};
