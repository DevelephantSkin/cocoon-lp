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

export default function HeaderPrivacyPolice() {
  return (
    <motion.header
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1, duration: 0.5 }}
      className={
        'fixed z-40 h-[var(--header-height)] w-screen bg-sand text-cacao text-white transition-colors duration-500'
      }
    >
      <Desktop />
    </motion.header>
  );
}

function Desktop() {
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
          className={'filter-cacao h-full'}
        />
      </Link>
      <div
        className={
          'relative flex items-end justify-between border-cacao pb-2.5'
        }
      >
        <Image
          src={brandText}
          alt="cocoon."
          className={'filter-cacao h-3.5 w-fit'}
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
            className={'filter-cacao mr-px h-2 w-fit'}
            {...FADE_IN_PROPS}
          />
        </div>
        <motion.hr
          animate={{ width: '100%' }}
          transition={{ delay: 1, duration: 1.5, ease: 'easeOut' }}
          className={'absolute bottom-0 border-b border-t-0 border-cacao'}
        />
      </div>
      <div className="mt-0.5 flex items-center justify-between">
        <nav>
          <SectionLinks
            className={'flex gap-5 font-bold uppercase text-cacao'}
            isPrivacyPolicePage
            animate
          />
        </nav>
        <SocialLinks delay={2} className={'filter-cacao'} horizontal />
      </div>
    </div>
  );
}
