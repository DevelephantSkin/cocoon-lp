import Image from 'next/image';
import { motion } from 'framer-motion';

import Heading from '@/components/heading';
import CondoServices from '@/components/condoServices';

import sideView from '@/img/side-view.jpg';
// import aerialView from '@/img/aerial-view.jpg';
// import aerialViewHigh from '@/img/aerial-view-high.jpg';
import reef from '@/img/reef.png';
import housiDark from '@/svg/brand-housi-dark.svg';
import OverlappingImages from '@/components/overlappingImages';
import LineByLine from '@/components/animations/lineByLine';
import FadeTo from '@/components/animations/fadeTo';

export default function Facilidades() {
  return (
    <section
      id="facilidades"
      className="mx-auto max-w-screen-fhd scroll-mt-[calc(var(--header-height)-4rem)]"
    >
      <div className="relative z-10 bg-sand pb-8 pt-16 lg:pb-20 lg:pt-28">
        <Heading className="!my-0 mx-auto max-w-lg">
          Onde a metamorfose da alma encontra o refúgio.
        </Heading>
      </div>
      <div className="grid-facilidades grid-cols-2 gap-8 gap-x-24 lg:grid ">
        <OverlappingImages
          back={reef}
          // front={[sideView, aerialView, aerialViewHigh]}
          front={sideView}
          largeOffset
          alt="Vista lateral do empreendimento, destacando os dois pavilhões e a piscina"
          className="cell-b1 max-w-full"
        />
        <motion.ul
          variants={{
            init: { opacity: 0 },
            anim: {
              opacity: 1,
              transition: { duration: 1, staggerChildren: 0.1 },
            },
          }}
          initial="init"
          whileInView="anim"
          viewport={{ once: true }}
          className="cell-a1 mt-8 max-w-80 space-y-8 overflow-hidden text-lg leading-6 text-cacao lg:mt-0 lg:place-self-center lg:text-xl lg:leading-10"
        >
          <motion.li variants={LI_VARIANTS}>LOCALIZAÇÃO ÚNICA</motion.li>
          <motion.li variants={LI_VARIANTS}>
            ENTRETENIMENTO AO AR LIVRE
          </motion.li>
          <motion.li variants={LI_VARIANTS}>BEM-ESTAR E SAÚDE</motion.li>
          <motion.li variants={LI_VARIANTS}>
            INTEGRAÇÃO COM A NATUREZA
          </motion.li>
          <motion.li variants={LI_VARIANTS}>
            VENTILAÇÃO NATURAL E SOMBREAMENTO
          </motion.li>
        </motion.ul>
        <div className="cell-a2 mt-16 flex-col justify-between lg:mt-0 lg:flex">
          <p className="text-sm text-sand-600 lg:text-xl">
            POWERED BY
            <Image
              src={housiDark}
              alt="HOUSI"
              height={12}
              className="-mt-1 ml-1 inline lg:ml-3 lg:inline-block lg:w-48"
            />
          </p>
          <LineByLine
            tag="h3"
            lines={[
              'Moradia inteligente',
              'conectada a serviços',
              'para você ganhar',
              'mais praticidade em',
              'seu investimento.',
            ]}
            className="mt-6 text-xl uppercase lg:mt-0 lg:text-5xl"
          ></LineByLine>
        </div>
        <div className="cell-b2 mt-12 lg:mt-0">
          <FadeTo className="text-wrap">
            A HOUSI cuida das locações individuais, assegurando uma experiência
            completa e eficaz para todos os envolvidos. Além disso, utiliza
            tecnologia para simplificar e modernizar o processo de locação,
            oferecendo uma plataforma online onde os proprietários podem
            anunciar seus imóveis para locação e os inquilinos podem encontrar e
            alugar imóveis de forma rápida e descomplicada.
          </FadeTo>
          <FadeTo
            tag="ul"
            direction="bottom right"
            className="mx-auto mt-8 w-fit space-y-4 text-lg *:before:font-bold *:before:content-['+_'] lg:ml-0 lg:mt-12"
          >
            <li>de 500 prédios,</li>
            <li>de 120 cidades,</li>
            <li>de 100 marcas no AppSpace,</li>
            <li>de 300 incorporadores parceiros.</li>
          </FadeTo>
        </div>
      </div>
      <h3 className="mt-12 text-center text-xl lg:mt-24">
        Serviços oferecidos pela <strong>HOUSI</strong>
      </h3>
      <CondoServices />
    </section>
  );
}

const LI_VARIANTS = {
  init: { x: '-100%' },
  anim: {
    x: 0,
    transition: { duration: 1.25, ease: 'circOut' },
  },
};
