import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

import waIcon from '@/svg/icon-wa.svg';
import igIcon from '@/svg/icon-ig.svg';
import ytIcon from '@/svg/icon-yt.svg';

function SocialLink({ url, icon, horizontal }) {
  return (
    <motion.li
      variants={{
        init: { scale: 0 },
        anim: { scale: 1, transition: { duration: 0.25 } },
      }}
    >
      <Link href={url} target="_blank" className="align-middle">
        <Image
          src={icon}
          alt=""
          className={'size-fit ' + (horizontal ? 'h-[1.2rem]' : 'w-5')}
        />
      </Link>
    </motion.li>
  );
}

export default function SocialLinks({
  horizontal = false,
  delay = 0,
  className,
}) {
  const animationProps = {
    variants: {
      init: {},
      anim: {
        transition: {
          delayChildren: delay,
          staggerChildren: 0.25,
        },
      },
    },
    initial: 'init',
    whileInView: 'anim',
    viewport: { once: true },
  };

  return (
    <motion.menu
      className={
        `flex ${className} ` +
        (horizontal ? 'items-center gap-2' : 'flex-col gap-4')
      }
      {...animationProps}
    >
      <SocialLink
        icon={waIcon}
        url="https://api.whatsapp.com/send?phone=554888759299"
        horizontal={horizontal}
      />
      <SocialLink
        icon={igIcon}
        url="https://www.instagram.com/cocoon.milagres"
        horizontal={horizontal}
      />
      <SocialLink
        icon={ytIcon}
        url="https://youtube.com/@masconinc?si=-qbW8WU5t2QASUoa"
        horizontal={horizontal}
      />
    </motion.menu>
  );
}
