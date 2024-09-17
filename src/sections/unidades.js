import Heading from '@/components/heading';
import UnitSlider from '@/components/unitSlider';
import { useTranslation } from '@/app/i18n/client';

export default function Unidades({ lng }) {
  const { t } = useTranslation(lng);

  return (
    <section
      id="unidades"
      className="relative mt-10 scroll-mt-[calc(var(--header-height)-5rem)] bg-sand pt-10"
    >
      <Heading>{t('unidades.title')}</Heading>
      <UnitSlider t={t} />
    </section>
  );
}
