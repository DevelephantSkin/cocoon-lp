import MotionTag from './motionTag';

export default function FadeTo({
  tag = 'div',
  direction = 'bottom',
  delay = 0,
  duration = 1,
  className,
  children,
}) {
  const masks = buildMasks(direction);

  return (
    <MotionTag
      tag={tag}
      initial={{ maskImage: masks[0] }}
      whileInView={{ maskImage: masks }}
      viewport={{ once: true }}
      transition={{ delay, duration, ease: 'easeIn' }}
      className={className}
    >
      {children}
    </MotionTag>
  );
}

const buildMasks = direction => [
  `linear-gradient(to ${direction}, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0))`,
  `linear-gradient(to ${direction}, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0))`,
  `linear-gradient(to ${direction}, rgba(0, 0, 0, 1), rgba(0, 0, 0, 1))`,
];
