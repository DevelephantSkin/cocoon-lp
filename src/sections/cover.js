import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

import TextReveal from '@/components/animations/textReveal';

import LineByLine from '@/components/animations/lineByLine';
import { useLanguage } from '@/context/LanguageContext';
import downArrow from '@/svg/arrow-down.svg';
import { useState } from 'react';

// TODO: orchestrate animation staggering through parent component
export default function Cover({ onButtonClick }) {
  const { translations } = useLanguage();
  const [imgLoaded, setImgLoaded] = useState(true);

  return (
    <motion.section
      id="inicio"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="relative h-svh min-h-svh w-screen overflow-hidden text-white"
    >
      <Bg imgLoaded={imgLoaded} onLoad={() => setImgLoaded(true)} />
      {imgLoaded && (
        <div className="relative mx-auto h-full max-w-xw p-8">
          <div className="center-y space-y-6">
            <LineByLine
              key={translations.cover.title1}
              tag="h1"
              lines={[
                translations.cover.title1,
                translations.cover.title2,
                translations.cover.title3,
                translations.cover.title4,
              ]}
              delay={0.75}
              className="text-4xl uppercase"
            />
            <TextReveal
              delay={1.75}
              className="uppercase"
              key={translations.cover.subtitle}
            >
              {translations.cover.subtitle}
            </TextReveal>
            <motion.a
              key={translations.cover.button}
              onClick={() => onButtonClick()}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 2.5, duration: 0.5, ease: 'backOut' }}
              className="block w-full border py-4 text-center text-lg font-bold transition-colors duration-300 hover:bg-white hover:text-[#2D6861]"
            >
              {translations.cover.button}
            </motion.a>
          </div>
          <Link href="#milagres">
            <Image
              src={downArrow}
              alt=""
              className="absolute bottom-4 left-1/2 h-3 translate-x-[-50%]"
            />
          </Link>
        </div>
      )}
    </motion.section>
  );
}

const Bg = ({ onLoad, imgLoaded }) => (
  <motion.div
    initial={{ scale: 1.1, opacity: 0 }}
    animate={imgLoaded && { scale: 1, opacity: 1 }}
    transition={{ duration: 2 }}
    className="pointer-events-none absolute left-0 top-0 h-full w-full"
  >
    <video
      poster="https://media.cocoonmilagres.com.br/img/hero-poster.webp"
      onLoadedData={onLoad}
      playsInline
      autoPlay
      muted
      loop
      className="h-full w-full object-cover brightness-75"
    >
      <source
        src="https://media.cocoonmilagres.com.br/video/hero.webm"
        type="video/webm"
      />
      <source
        src="https://media.cocoonmilagres.com.br/video/hero.mp4"
        type="video/mp4"
      />
    </video>
  </motion.div>
);
