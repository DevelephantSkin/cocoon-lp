'use client';

import Footer from '@/components/footer';
import Header from '@/components/header';

import { LanguageProvider } from '@/context/LanguageContext';
import Contato from '@/sections/contato';
import Cover from '@/sections/cover';
import Design from '@/sections/design';
import Diferenciais from '@/sections/diferenciais';
import Facilidades from '@/sections/facilidades';
import Implantacao from '@/sections/implantacao';
import Milagres from '@/sections/milagres';
import Unidades from '@/sections/unidades';
import { useState } from 'react';
import ContactUs from '../components/contactUs';
import PopupVideo from '../sections/popup-video';

export default function Home() {
  const [popupVideoOpened, setPopupVideoOpened] = useState(false);

  return (
    <LanguageProvider>
      <Header />
      <Cover onButtonClick={() => setPopupVideoOpened(true)} />
      <main className="relative w-full max-w-full overflow-x-hidden p-8 pt-0 text-cacao lg:mb-16 lg:px-44">
        <Milagres />
        <Diferenciais />
        <Unidades />
        <Design />
        <Implantacao />
        <Facilidades />
        <Contato />
      </main>
      <PopupVideo opened={popupVideoOpened} setOpened={setPopupVideoOpened} />
      <Footer />
      <ContactUs />
    </LanguageProvider>
  );
}
