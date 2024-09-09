import Heading from '@/components/heading';
import UnitSlider from '@/components/unitSlider';

export default function Unidades() {
  return (
    <section
      id="unidades"
      className="relative mt-10 scroll-mt-[calc(var(--header-height)-5rem)] bg-sand pt-10"
    >
      <Heading>Renove-se</Heading>
      <UnitSlider />
    </section>
  );
}
