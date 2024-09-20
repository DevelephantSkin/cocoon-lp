'use client';

import Header from '@/components/header';
import Footer from '@/components/footer';

import Cover from '@/sections/cover';
import Milagres from '@/sections/milagres';
import Diferenciais from '@/sections/diferenciais';
import Unidades from '@/sections/unidades';
import Design from '@/sections/design';
import Implantacao from '@/sections/implantacao';
import Facilidades from '@/sections/facilidades';
import Contato from '@/sections/contato';
import { LanguageProvider } from '@/context/LanguageContext';

export default function Home() {
  return (
    <LanguageProvider>
      <Header />
      <Cover />
      <main className="relative w-full max-w-full overflow-x-hidden p-8 pt-0 text-cacao lg:mb-16 lg:px-44">
        <Milagres />
        <Diferenciais />
        <Unidades />
        <Design />
        <Implantacao />
        <Facilidades />
        <Contato />
      </main>
      <Footer />
    </LanguageProvider>
  );
}
