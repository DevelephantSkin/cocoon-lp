import Image from 'next/image';
import { useEffect, useState } from 'react';
import { Fade as Hamburger } from 'hamburger-react';
import { AnimatePresence, motion } from 'framer-motion';

import SocialLinks from './socialLinks';

import brand from '@/svg/brand.svg';
import SectionLinks from './sectionLinks';
import { useLanguage } from '@/context/LanguageContext';
import brazilIcon from '@/svg/brazil.svg';
import UnitedStatesIcon from '@/svg/united_states.svg';

// heavily inspired on:
// https://www.freecodecamp.org/news/how-to-create-an-animated-hamburger-menu-in-react/
export default function MenuMobile() {
  const [isOpen, setOpen] = useState(false);
  const { language, setLanguage } = useLanguage();

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';

    return () => (document.body.style.overflow = '');
  }, [isOpen]);

  return (
    <nav>
      <Hamburger toggled={isOpen} onToggle={setOpen} size={44} duration={0.5} />
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute left-0 top-0 grid h-dvh w-screen grid-rows-[1fr_auto_1fr] bg-cacao p-8"
          >
            <div className="min-h-1 w-full">
              <button
                onClick={() => {
                  setLanguage(prevstate => (prevstate === 'pt' ? 'en' : 'pt'));
                }}
              >
                <Image
                  src={language === 'pt' ? brazilIcon : UnitedStatesIcon}
                  alt=""
                  width={40}
                  height={40}
                />
              </button>
            </div>
            <div>
              <SectionLinks
                onClick={() => setOpen(false)}
                className="space-y-6 text-right text-2xl font-bold uppercase tracking-wide"
              />
            </div>
            <div className="flex items-end justify-between">
              <SocialLinks delay={0.25} />
              <Image
                src={brand}
                alt="Marca Cocoon - figura de um casulo em vetores"
                height="80"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
