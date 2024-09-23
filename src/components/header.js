import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState, useCallback } from 'react';
import { motion } from 'framer-motion';

import MenuMobile from './menuMobile';
import MotionTag from './animations/motionTag';

import logo from '@/svg/logo.svg';
import brandText from '@/svg/brand-text.svg';
import housi from '@/svg/brand-housi.svg';
import SectionLinks from './sectionLinks';
import SocialLinks from './socialLinks';
import brazilIcon from '@/svg/brazil.svg';
import UnitedStatesIcon from '@/svg/united_states.svg';
import { useLanguage } from '@/context/LanguageContext';

const FADE_IN_PROPS = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { delay: 2, duration: 1 },
};

export default function Header() {
  const [hasBg, setBg] = useState(false);
  const onScroll = useCallback(() => {
    const bgThreshold = calcBgThreshold();
    setBg(window.scrollY > bgThreshold);
  }, [setBg]);

  useEffect(() => {
    setBg(window.scrollY > calcBgThreshold());
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [onScroll]);

  return (
    <motion.header
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1, duration: 0.5 }}
      className={
        'fixed z-40 h-[var(--header-height)] w-screen text-white transition-colors duration-500 ' +
        (hasBg ? 'bg-sand text-cacao' : '')
      }
    >
      {/* TODO: dynamically import appropriate component for viewport
                OR
                have a single component and adjust through CSS */}
      <Mobile hasBg={hasBg} />
      <Desktop hasBg={hasBg} />
    </motion.header>
  );
}

function Mobile({ hasBg }) {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex h-full grid-cols-[3rem_1fr_3rem] items-center justify-between px-8 py-4 lg:hidden">
      <div className="flex h-full items-center gap-4">
        <Link href="#inicio" className="h-full">
          <Image
            src={logo}
            alt="Logo Cocoon - figura de um casulo em vetores"
            className={'max-h-full ' + (hasBg ? 'filter-cacao' : '')}
          />
        </Link>
        <Image
          src={brandText}
          alt="cocoon."
          height="18"
          className={'justify-self-center ' + (hasBg ? 'filter-cacao' : '')}
        />
      </div>
      <div className="flex h-full items-center gap-7">
        <button
          onClick={() => {
            setLanguage(prevstate => (prevstate === 'pt' ? 'en' : 'pt'));
          }}
        >
          <Image
            src={language === 'pt' ? brazilIcon : UnitedStatesIcon}
            alt=""
            width={24}
            height={24}
          />
        </button>
        <MenuMobile />
      </div>
    </div>
  );
}

function Desktop({ hasBg }) {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="relative mx-auto hidden h-full max-w-xw grid-rows-2 px-8 py-6 lg:grid">
      <Link
        href="#inicio"
        className="absolute inset-y-0 left-0 -translate-x-full"
      >
        <Image
          src={logo}
          alt="Logo Cocoon - figura de um casulo em vetores"
          width="24"
          className={'h-full ' + (hasBg ? 'filter-cacao' : '')}
        />
      </Link>
      <div
        className={
          'relative flex items-end justify-between pb-2.5 ' +
          (hasBg ? 'border-cacao' : '')
        }
      >
        <Image
          src={brandText}
          alt="cocoon."
          className={'h-3.5 w-fit ' + (hasBg ? 'filter-cacao' : '')}
        />
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <button
              onClick={() => {
                setLanguage(prevstate => (prevstate === 'pt' ? 'en' : 'pt'));
              }}
            >
              <Image
                src={language === 'pt' ? brazilIcon : UnitedStatesIcon}
                alt=""
                width={20}
                height={20}
              />
            </button>
          </div>
          <MotionTag
            tag={Image}
            src={housi}
            alt=""
            className={'mr-px h-2 w-fit ' + (hasBg ? 'filter-cacao' : '')}
            {...FADE_IN_PROPS}
          />
        </div>
        <motion.hr
          animate={{ width: '100%' }}
          transition={{ delay: 1, duration: 1.5, ease: 'easeOut' }}
          className={
            'absolute bottom-0 border-b border-t-0 ' +
            (hasBg ? 'border-cacao' : '')
          }
        />
      </div>
      <div className="mt-0.5 flex items-center justify-between">
        <nav>
          <SectionLinks
            className={
              'flex gap-5 font-bold uppercase ' + (hasBg ? 'text-cacao' : '')
            }
            animate
          />
        </nav>
        <SocialLinks
          delay={2}
          className={hasBg ? 'filter-cacao' : ''}
          horizontal
        />
      </div>
    </div>
  );
}

const calcBgThreshold = () => {
  return (
    document.documentElement.clientHeight -
    parseInt(
      getComputedStyle(document.documentElement).getPropertyValue(
        '--header-height',
      ),
    )
  );
};
