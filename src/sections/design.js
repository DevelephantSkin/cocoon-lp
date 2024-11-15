import Image from 'next/image';
import { motion } from 'framer-motion';

import Heading from '@/components/heading';
import Article from '@/components/article';
import FadeTo from '@/components/animations/fadeTo';
import MotionTag from '@/components/animations/motionTag';

import sofa from '@/img/sofa.png';
import trees from '@/img/trees.png';
import chair from '@/img/chair.png';
import { useLanguage } from '@/context/LanguageContext';
import Video from '@/components/video';
import cover from '@/img/video-cover.png';


export default function Design() {
  const { translations } = useLanguage();
  return (
    <section id="design" className="mt-4 lg:mt-24">
      <motion.div
        variants={{
          init: {},
          anim: { transition: { delayChildren: 1, staggerChildren: 0.25 } },
        }}
        initial="init"
        whileInView="anim"
        viewport={{ once: true }}
        className="mx-auto max-w-xw grid-cols-2 items-center gap-24 lg:grid"
      >
        <FadeTo className="order-2 grid grid-cols-2 gap-4 bg-[url('../svg/logo-milk.svg')] bg-contain bg-center bg-no-repeat pt-12 lg:pt-24">
          <MotionTag
            tag={Image}
            src={sofa}
            alt="Mesinha de madeira com sofá ao fundo"
            variants={fadeVariants({ translate: 'y' })}
            className="self-center"
          />
          <div className="grid grid-rows-2 gap-4">
            <div className="overflow-hidden">
              <MotionTag
                tag={Image}
                src={trees}
                variants={fadeVariants({ zoom: true })}
                alt="Visão aérea de palmeiras"
              />
            </div>
            <MotionTag
              tag={Image}
              src={chair}
              alt="Cadeira de madeira"
              variants={fadeVariants({ translate: 'x' })}
              className="w-2/3 justify-self-center lg:justify-self-end"
            />
          </div>
        </FadeTo>
        <Article
          key={translations.design.title1}
          title="Design"
          subtitle={[
            translations.design.title1,
            translations.design.title2,
            translations.design.title3,
          ]}
        >
          {translations.design.description}
        </Article>
      </motion.div>
      <Heading className="lg:mt-24">{translations.design.video_title}</Heading>
      <div className="mx-auto lg:max-w-[80%]">
        <Video videoId='967169595' cover={cover}/>
      </div>
    </section>
  );
}

const fadeVariants = ({ zoom = false, translate = false }) => {
  const variants = {
    init: {
      opacity: 0,
    },
    anim: {
      opacity: 1,
      transition: { duration: 1 },
    },
  };

  if (zoom) {
    variants.init.scale = 1.25;
    variants.anim.scale = 1;
  }

  if (translate) {
    variants.init[translate] = 50;
    variants.anim[translate] = 0;
  }

  return variants;
};
