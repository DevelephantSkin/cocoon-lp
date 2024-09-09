import Link from 'next/link';

import TextReveal from './animations/textReveal';

const SECTIONS = [
  'Milagres',
  'Diferenciais',
  'Unidades',
  'Design',
  'Implantação',
  'Facilidades',
  'Contato',
];

export default function SectionLinks({ animate = false, onClick, className }) {
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
