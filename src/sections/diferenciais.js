import Image from 'next/image';

import FeaturePanels from '@/components/featurePanels';
import MotionTag from '@/components/animations/motionTag';

import sandSurf from '@/img/sand-surf.png';
import gym from '@/img/features/gym.jpg';
import cinema from '@/img/features/cinema.jpg';
import dunySand from '@/img/duny-sand.png';
import brandDark from '@/svg/brand-dark.svg';
import IndexedCarousel from '@/components/indexedCarousel';
import { useLanguage } from '@/context/LanguageContext';

export default function Diferenciais() {
  const { translations } = useLanguage();

  return (
    <section
      id="diferenciais"
      className="mt-8 scroll-mt-[calc(var(--header-height)+1rem)] lg:mt-28"
    >
      <FeaturePanels
        featureLists={[
          [translations.features.accessibility_convenience],
          [translations.features.elevators],
          [translations.features.bike_rack],
          [translations.features.exclusive_restaurant_for_residents],
          [
            translations.features.leisure_well_being,
            translations.features.gym,
            translations.features.sand_floor,
          ],
        ]}
        backImage={sandSurf}
        frontImage={gym}
        alt="Academia com piso de madeira, esteiras, bicicletas ergométricas e outros aparelhos"
      />
      <FeaturePanels
        featureLists={[
          [
            'FACILIDADES DO DIA A DIA',
            'LAVANDERIA OMO',
            'MINI MERCADO',
            'MINI FARMÁCIA',
            'LOCKER',
            'RECEPÇÃO AOS HÓSPEDES',
          ],
          ['CONFORTO EXCLUSIVO', 'LOUNGE SUBMERSO', 'CINEMA AO AR LIVRE'],
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
      <IndexedCarousel />
    </section>
  );
}
