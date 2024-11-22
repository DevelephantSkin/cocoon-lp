'use client';

import cover from '@/img/video-cover-2.png';
import Video from '../components/video';
import closeIcon from '@/svg/close.svg';
import Image from 'next/image';

export default function PopupVideo({ opened, setOpened }) {
  const additionalClass = opened ? 'scale-1' : 'scale-0'; // If opened, scale to 1, else scale to 0

  return (
    <div
      className={`fixed left-0 top-0 z-50 h-full w-full content-center bg-black/70 ${additionalClass} transition-transform duration-500`}
    >
      <div
        className="absolute right-5 top-5 cursor-pointer"
        onClick={() => setOpened(false)}
      >
        <Image src={closeIcon} height={32} width={32} alt="Close" />
      </div>

      <div className="m-auto aspect-video w-5/6 max-w-6xl">
        {opened && <Video videoId="1024899193" cover={cover} autoplay />}
      </div>
    </div>
  );
}
