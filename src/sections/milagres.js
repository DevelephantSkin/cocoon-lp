import Image from 'next/image';

import Heading from '@/components/heading';
import StackedImages from '@/components/stackedImages';
import SideImages from '@/components/sideImages';
import OverflowCarousel from '@/components/overflowCarousel';
import Article from '@/components/article';
import ReefStamp from '@/components/animations/reefStamp';
import Video from '@/components/video';
import TextReveal from '@/components/animations/textReveal';
import FadeTo from '@/components/animations/fadeTo';
import { useTranslation } from '@/app/i18n/client';

import boats from '@/img/boats.png';
import sandSurf from '@/img/sand-surf.png';
import boats2 from '@/img/boats-2.png';
import jeep from '@/img/jeep.png';
import biosphereBrand from '@/svg/brand-biosphere.svg';

export default function Milagres({ lng }) {
  const { t } = useTranslation(lng);

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
            title="Milagres"
            subtitle={[
              t('milagres.title1'),
              t('milagres.title2'),
              t('milagres.title3'),
            ]}
            className="ml-auto max-w-md"
          >
            {t('milagres.description')}
          </Article>
          <ReefStamp
            alt="Localizado na segunda maior barreira de corais do mundo"
            className="mb-8 ml-auto mt-6 w-1/2 max-w-48 lg:mb-12 lg:mt-10"
          />
          <OverflowCarousel />
        </div>
        <Article
          title="Praia do Toque"
          subtitle={[
            t('praia-do-toque.title1'),
            t('praia-do-toque.title2'),
            t('praia-do-toque.title3'),
            t('praia-do-toque.title4'),
          ]}
          className="cell-b2 z-10 mt-16 max-w-xl self-end lg:ml-16"
          subtitleClass="max-w-lg"
        >
          {t('praia-do-toque.description')}
        </Article>
      </div>
      <Heading>{t('mascon.title')}</Heading>
      <div className="mx-auto lg:max-w-[80%]">
        <Video />
        <div className="ml-auto w-fit text-coco lg:mt-4">
          <TextReveal duration={1.5} className="text-lg font-bold lg:text-2xl">
            {t('mascon.subtitle')}
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
