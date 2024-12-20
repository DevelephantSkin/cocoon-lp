import Image from 'next/image';

import FadeTo from '@/components/animations/fadeTo';
import ReefStamp from '@/components/animations/reefStamp';
import TextReveal from '@/components/animations/textReveal';
import Article from '@/components/article';
import Heading from '@/components/heading';
import OverflowCarousel from '@/components/overflowCarousel';
import SideImages from '@/components/sideImages';
import StackedImages from '@/components/stackedImages';
import Video from '@/components/video';

import { useLanguage } from '@/context/LanguageContext';
import boats2 from '@/img/boats-2.png';
import boats from '@/img/boats.png';
import jeep from '@/img/jeep.png';
import sandSurf from '@/img/sand-surf.png';
import cover from '@/img/video-cover.png';
import biosphereBrand from '@/svg/brand-biosphere.svg';
import { motion } from 'framer-motion';

export default function Milagres() {
  const { translations } = useLanguage();

  return (
    <section
      id="milagres"
      className="relative z-10 mx-auto bg-sand pb-8 lg:mt-16"
    >
      <Heading>São Miguel dos Milagres</Heading>
      {/* TODO: replace this beautiful grid+flex mess with order property */}
      <div className="grid-milagres ml-auto gap-x-[5%] gap-y-8 lg:mb-36 lg:grid lg:max-w-[80%] qhd:mx-auto">
        <div className="cell-b1 z-10 min-w-0">
          <StackedImages
            back={sandSurf}
            front={boats}
            alt="Barcos coloridos em um mar de águas claras"
          />
          <SideImages
            left={boats2}
            right={jeep}
            className="mt-4 lg:max-w-[75%]"
          />
        </div>
        <div className="cell-a self-end">
          <Article
            key={translations.milagres.title1}
            title="Milagres"
            subtitle={[
              translations.milagres.title1,
              translations.milagres.title2,
              translations.milagres.title3,
            ]}
            className="ml-auto max-w-md"
          >
            {translations.milagres.description}
          <motion.a
              key={translations.cover.button}
              href='#contato'
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 1, duration: 0.5, ease: 'backOut' }}
              className="block w-52 border-cacao border py-4 text-center font-bold transition-colors duration-300 cursor-pointer mt-6 -mb-6"
            >
              {translations.contato.button}
            </motion.a>
          </Article>
          <ReefStamp
            key={translations.milagres.animated_image_description}
            alt={translations.milagres.animated_image_description}
            className="mb-8 ml-auto mt-6 w-1/2 max-w-48 lg:mb-12 lg:mt-10"
          />
          <OverflowCarousel />
        </div>
        <Article
          key={translations.praia_do_toque.title1}
          title="Praia do Toque"
          subtitle={[
            translations.praia_do_toque.title1,
            translations.praia_do_toque.title2,
            translations.praia_do_toque.title3,
            translations.praia_do_toque.title4,
          ]}
          className="cell-b2 z-10 mt-16 max-w-xl self-end lg:ml-16"
          subtitleClass="max-w-lg"
        >
          {translations.praia_do_toque.description}
        </Article>
      </div>
      <Heading key={translations.mascon.title}>
        {translations.mascon.title}
      </Heading>
      <div className="mx-auto lg:max-w-[80%]">
        <Video videoId='967169595' cover={cover} />
        <div className="ml-auto w-fit text-coco lg:mt-4">
          <TextReveal
            duration={1.5}
            className="text-lg font-bold lg:text-2xl"
            key={translations.mascon.subtitle}
          >
            {translations.mascon.subtitle}
          </TextReveal>
          <FadeTo
            direction="right"
            delay={0.5}
            className="flex justify-between text-xxs lg:text-sm"
          >
            <Image
              src={biosphereBrand}
              alt="Biosphere"
              className="ml-0.5 lg:mt-px lg:h-5 lg:w-fit"
            />
            <span>
              by <strong>C. REYMOND</strong>
            </span>
          </FadeTo>
        </div>
      </div>
    </section>
  );
}
