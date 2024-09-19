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
          [
            translations.features.accessibility_convenience,
            translations.features.elevators,
            translations.features.bike_rack,
            translations.features.exclusive_restaurant_for_residents,
          ],
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
            translations.features.daily_facilities,
            translations.features.omo_laundry,
            translations.features.mini_market,
            translations.features.mini_pharmacy,
            translations.features.locker,
            translations.features.guest_reception,
          ],
          [
            translations.features.exclusive_comfort,
            translations.features.submerged_lounge,
            translations.features.open_air_cinema,
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
      <IndexedCarousel />
    </section>
  );
}
