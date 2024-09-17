import Image from 'next/image';

import FeaturePanels from '@/components/featurePanels';
import MotionTag from '@/components/animations/motionTag';
import { useTranslation } from '@/app/i18n/client';

import sandSurf from '@/img/sand-surf.png';
import gym from '@/img/features/gym.jpg';
import cinema from '@/img/features/cinema.jpg';
import dunySand from '@/img/duny-sand.png';
import brandDark from '@/svg/brand-dark.svg';
import IndexedCarousel from '@/components/indexedCarousel';

import entrance from '@/img/features/entrance.jpg';
import externalArea from '@/img/features/external-area.jpg';
import indoorBistro from '@/img/features/indoor-bistro.jpg';
import indoorFacade from '@/img/features/indoor-facade.jpg';
import outdoorBistro from '@/img/features/outdoor-bistro.jpg';
import pool from '@/img/features/pool.jpg';
import sandCourt from '@/img/features/sand-court.jpg';
import waterLounge from '@/img/features/water-lounge.jpg';

export default function Diferenciais({ lng }) {
  const { t } = useTranslation(lng);

  const FEATURES_CAROUSEL = [
    { name: t('features.external-area'), img: externalArea },
    { name: t('features.indoor-facade'), img: indoorFacade },
    { name: t('features.pool'), img: pool },
    { name: t('features.water-lounge'), img: waterLounge },
    { name: t('features.outdoor-bistro'), img: outdoorBistro },
    { name: t('features.indoor-bistro'), img: indoorBistro },
    { name: t('features.gym'), img: gym },
    { name: t('features.sand-court'), img: sandCourt },
    { name: t('features.cinema'), img: cinema },
    { name: t('features.entrance'), img: entrance },
  ];

  return (
    <section
      id="diferenciais"
      className="mt-8 scroll-mt-[calc(var(--header-height)+1rem)] lg:mt-28"
    >
      <FeaturePanels
        featureLists={[
          [
            t('features.accessibility-convenience'),
            t('features.elevators'),
            t('features.bike-rack'),
            t('features.exclusive-restaurant-for-residents'),
          ],
          [
            t('features.leisure-well-being'),
            t('features.gym'),
            t('features.sand-floor'),
          ],
        ]}
        backImage={sandSurf}
        frontImage={gym}
        alt="Academia com piso de madeira, esteiras, bicicletas ergométricas e outros aparelhos"
      />
      <FeaturePanels
        featureLists={[
          [
            t('features.daily-facilities'),
            t('features.omo-laundry'),
            t('features.mini-market'),
            t('features.mini-pharmacy'),
            t('features.locker'),
            t('features.guest-reception'),
          ],
          [
            t('features.exclusive-comfort'),
            t('features.submerged-lounge'),
            t('features.open-air-cinema'),
          ],
        ]}
        backImage={dunySand}
        frontImage={cinema}
        alt="Área aberta com projetor e diversas poltronas redeadas por vegetação"
        className="lg:mt-28"
        reverse
      />
      <div className="w-fill relative z-10 bg-sand pb-8 lg:pb-16">
        <MotionTag
          tag={Image}
          src={brandDark}
          alt="Marca cocoon - desenho de um casulo vetorizado"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 2 }}
          className="mx-auto mt-10 lg:mt-32 lg:w-72"
        />
      </div>
      <IndexedCarousel features={FEATURES_CAROUSEL} />
    </section>
  );
}
