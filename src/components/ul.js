import { motion } from 'framer-motion';
import { v4 as uuid } from 'uuid';

export default function Ul({ className, items }) {
  return (
    <motion.ul
      variants={{
        init: {},
        anim: { transition: { staggerChildren: 0.1 } },
      }}
      initial="init"
      whileInView="anim"
      viewport={{ once: true }}
      className={'relative space-y-2 lg:space-y-4 ' + className}
    >
      {items.map((item, i) => (
        <motion.li
          key={uuid()}
          variants={{
            init: { x: '50%' },
            anim: {
              x: 0,
              transition: { type: 'spring', duration: 1.75, ease: 'easeOut' },
            },
          }}
          className={
            // ? "before:absolute before:-left-[0.75em] before:w-[0.4em] before:content-[url('../../svg/arrow-right.svg')] lg:w-max"
            i === 0 ? 'lg:w-max' : 'text-sand-600'
          }
        >
          {item}
        </motion.li>
      ))}
    </motion.ul>
  );
}
