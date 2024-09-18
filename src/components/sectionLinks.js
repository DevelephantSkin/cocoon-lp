import Link from 'next/link';

import TextReveal from './animations/textReveal';
import { useLanguage } from '@/context/LanguageContext';

export default function SectionLinks({ animate = false, onClick, className }) {
  const { translations } = useLanguage();

  const SECTIONS = [
    translations.header.milagres,
    translations.header.features,
    translations.header.residences,
    translations.header.design,
    translations.header.master_plan,
    translations.header.amenities,
    translations.header.contact,
  ];
  return (
    <menu className={className} key={translations.header.features}>
      {SECTIONS.map(title => (
        <li key={title}>
          <Anchor {...{ title, animate, onClick }} />
        </li>
      ))}
    </menu>
  );
}

function Anchor({ title, animate, onClick }) {
  const Tag = animate ? TextReveal : Link;

  return (
    <Tag
      tag={Link}
      delay={1}
      stagger={0.05}
      href={buildHref(title)}
      onClick={onClick}
    >
      {title}
    </Tag>
  );
}

const buildHref = title =>
  '#' + title.toLocaleLowerCase().normalize('NFKD').replace(/[^\w]/g, '');
