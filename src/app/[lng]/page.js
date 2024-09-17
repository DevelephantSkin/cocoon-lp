'use client';

import Header from '@/components/header';
import Footer from '@/sections/footer';

import Cover from '@/sections/cover';
import Milagres from '@/sections/milagres';
import Diferenciais from '@/sections/diferenciais';
import Unidades from '@/sections/unidades';
import Design from '@/sections/design';
import Implantacao from '@/sections/implantacao';
import Facilidades from '@/sections/facilidades';
import Contato from '@/sections/contato';

export default function Home({ params: { lng } }) {
  return (
    <>
      <Header lng={lng} />
      <Cover lng={lng} />
      <main className="relative w-full max-w-full overflow-x-hidden p-8 pt-0 text-cacao lg:mb-16 lg:px-44">
        <Milagres lng={lng} />
        <Diferenciais lng={lng} />
        <Unidades lng={lng} />
        <Design lng={lng} />
        <Implantacao lng={lng} />
        <Facilidades lng={lng} />
        <Contato lng={lng} />
      </main>
      <Footer t={lng} />
    </>
  );
}
