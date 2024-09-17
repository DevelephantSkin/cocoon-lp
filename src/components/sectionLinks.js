import Link from 'next/link';
import { useTranslation } from '@/app/i18n/client';

import TextReveal from './animations/textReveal';

export default function SectionLinks({
  animate = false,
  onClick,
  className,
  lng,
}) {
  const { t } = useTranslation(lng);

  const SECTIONS = [
    t('header.milagres'),
    t('header.features'),
    t('header.residences'),
    t('header.design'),
    t('header.master-plan'),
    t('header.amenities'),
    t('header.contact'),
  ];

  return (
    <menu className={className}>
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
