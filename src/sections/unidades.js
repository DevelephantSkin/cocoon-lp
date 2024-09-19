import Heading from '@/components/heading';
import UnitSlider from '@/components/unitSlider';
import { useLanguage } from '@/context/LanguageContext';

export default function Unidades() {
  const { translations } = useLanguage();

  return (
    <section
      id="unidades"
      className="relative mt-10 scroll-mt-[calc(var(--header-height)-5rem)] bg-sand pt-10"
    >
      <Heading key={translations.unidades.title}>
        {translations.unidades.title}
      </Heading>
      <UnitSlider />
    </section>
  );
}
