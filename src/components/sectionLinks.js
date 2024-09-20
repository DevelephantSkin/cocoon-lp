import Link from 'next/link';

import TextReveal from './animations/textReveal';
import { useLanguage } from '@/context/LanguageContext';

export default function SectionLinks({
  animate = false,
  onClick,
  className,
  isPrivacyPolicyPage,
}) {
  const { translations } = useLanguage();

  const SECTIONS = isPrivacyPolicyPage
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
    <menu
      className={className}
      key={isPrivacyPolicyPage ? undefined : translations.header.features}
    >
      {SECTIONS.map(section => (
        <li key={section.id}>
          <Anchor
            {...{
              id: section.id,
              animate,
              onClick,
              isPrivacyPolicyPage,
              title: section.title,
            }}
          />
        </li>
      ))}
    </menu>
  );
}

function Anchor({ id, animate, onClick, isPrivacyPolicyPage, title }) {
  const Tag = animate ? TextReveal : Link;

  return (
    <Tag
      tag={Link}
      delay={1}
      stagger={0.05}
      href={isPrivacyPolicyPage ? '/' : buildHref(id)}
      onClick={onClick}
    >
      {title}
    </Tag>
  );
}

const buildHref = title =>
  '#' + title.toLocaleLowerCase().normalize('NFKD').replace(/[^\w]/g, '');
