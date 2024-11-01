import Player from '@vimeo/player';
import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

import MotionTag from './animations/motionTag';

import { useLanguage } from '@/context/LanguageContext';
import playBtn from '@/svg/play.svg';

export default function Video({ videoId, cover }) {
  const { language } = useLanguage();
  const ref = useRef(null);
  const [player, setPlayer] = useState(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    setPlayer(
      new Player(ref.current, {
        id: videoId,
        responsive: true,
        portrait: false,
        title: false,
        byline: false,
        color: '744441',
        autopause: true,
        pip: true,
        playsinline: false,
      }),
    );
  }, []);

  return (
    <div ref={ref} className="relative aspect-video h-full w-full">
      <AnimatePresence>
        {started || (
          <motion.div
            key="video-overlay"
            initial={false}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            onClick={() => {
              player.enableTextTrack(language === 'pt' ? 'pt-BR' : 'en');
              player.play();
              setStarted(true);
            }}
            className="absolute z-10 h-full w-full cursor-pointer overflow-hidden bg-sand"
          >
            <MotionTag
              tag={Image}
              src={cover}
              alt=""
              initial={{ opacity: 0, scale: 1.25 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: 'easeOut' }}
              className="relative z-10 h-full w-full object-cover"
            />
            <Image
              src={playBtn}
              alt=""
              className="absolute inset-0 z-20 m-auto"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
