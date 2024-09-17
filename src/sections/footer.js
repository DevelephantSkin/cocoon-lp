import Image from 'next/image';
import Link from 'next/link';
import { useTranslation } from '@/app/i18n/client';

import SocialLinks from '../components/socialLinks';
import MotionTag from '../components/animations/motionTag';
import TextReveal from '../components/animations/textReveal';

import brand from '@/svg/brand-mascon.svg';
import upArrow from '@/svg/arrow-up.svg';

export default function Footer({ lng }) {
  const { t } = useTranslation(lng);

  return (
    <footer className="bg-cacao p-8 pb-8 pt-4 text-center text-xs text-white lg:py-8">
      <div className="max-w-header mx-auto grid grid-cols-[1.5rem_1fr_1.5rem]">
        <div></div>
        <div>
          <MotionTag
            tag={Image}
            src={brand}
            alt="Marca MASCON - silhueta de uma palmeira sob uma casa em traços simples"
            initial={{ y: '50%', opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: 'circOut' }}
            className="mx-auto mt-4 h-24"
          />
          <TextReveal stagger={0.02} className="mt-8">
            {t('footer.rights')}
          </TextReveal>
          <p className="mt-4">{t('footer.images-alert')}</p>
        </div>
        <div className="flex h-full flex-col justify-between pb-1">
          <Link href="#inicio">
            <Image src={upArrow} alt="" />
          </Link>
          <SocialLinks />
        </div>
      </div>
    </footer>
  );
}
