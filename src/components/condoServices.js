import Image from 'next/image';
import { motion } from 'framer-motion';

import MotionTag from './animations/motionTag';
import TextReveal from './animations/textReveal';

import bed from '@/img/services/bed.jpg';
import keys from '@/img/services/keys.jpg';
import livingRoom from '@/img/services/living-room.jpg';
import maid from '@/img/services/maid.jpg';
import phone from '@/img/services/phone.jpg';
import vendingMachine from '@/img/services/vending-machine.jpg';
import washers from '@/img/services/washers.jpg';

function service(image, title) {
  return (
    <div className="w-[clamp(3rem,30%,7rem)] lg:w-auto">
      <div className="overflow-hidden">
        <MotionTag
          tag={Image}
          src={image}
          alt=""
          variants={{
            init: { opacity: 0, scale: 1.1 },
            anim: {
              opacity: 1,
              scale: 1,
              transition: { duration: 1 },
            },
          }}
          className="w-full"
        />
      </div>
      <TextReveal className="my-2 text-xs uppercase lg:text-base">
        {title}
      </TextReveal>
    </div>
  );
}

export default function CondoServices() {
  return (
    <motion.div
      variants={{ init: {}, anim: { transition: { staggerChildren: 0.2 } } }}
      initial="init"
      whileInView="anim"
      viewport={{ once: true }}
      className="mx-auto mt-6 flex max-w-screen-fhd grid-cols-7 flex-wrap justify-evenly gap-4 lg:grid"
    >
      {service(livingRoom, 'Entrega do imóvel mobiliado')}
      {service(keys, 'Administração das locações')}
      {service(bed, 'Enxoval completo')}
      {service(vendingMachine, 'Facilidades inovadoras')}
      {service(washers, 'Serviços exclusivos')}
      {service(maid, 'Serviços de hotel')}
      {service(phone, 'Aplicativo exclusivo aos condôminos')}
    </motion.div>
  );
}
