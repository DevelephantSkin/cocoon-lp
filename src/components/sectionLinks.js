import Link from 'next/link';

import TextReveal from './animations/textReveal';
import { useLanguage } from '@/context/LanguageContext';

export default function SectionLinks({
  animate = false,
  onClick,
  className,
  isPrivacyPolicePage,
}) {
  const { translations } = useLanguage();

  const SECTIONS = isPrivacyPolicePage
    ? [{ title: 'Home', id: 'Home' }]
    : [
        { title: translations.header.milagres, id: 'Milagres' },
        { title: translations.header.features, id: 'Diferenciais' },
        { title: translations.header.residences, id: 'Unidades' },
        { title: translations.header.design, id: 'Design' },
        { title: translations.header.master_plan, id: 'Implantação' },
        { title: translations.header.amenities, id: 'Facilidades' },
        { title: translations.header.contact, id: 'Contato' },
      ];
  return (
    <menu className={className} key={translations.header.features}>
      {SECTIONS.map(section => (
        <li key={section.id}>
          <Anchor
            {...{ id: section.id, animate, onClick, isPrivacyPolicePage }}
          />
        </li>
      ))}
    </menu>
  );
}

function Anchor({ id, animate, onClick, isPrivacyPolicePage }) {
  const Tag = animate ? TextReveal : Link;

  return (
    <Tag
      tag={Link}
      delay={1}
      stagger={0.05}
      href={isPrivacyPolicePage ? '/' : buildHref(id)}
      onClick={onClick}
    >
      {id}
    </Tag>
  );
}

const buildHref = title =>
  '#' + title.toLocaleLowerCase().normalize('NFKD').replace(/[^\w]/g, '');
