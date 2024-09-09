import { v4 as uuid } from 'uuid';

import Ul from './ul';
import OverlappingImages from './overlappingImages';

const SM_MIN_W = 'min-w-[calc(45%-1rem)]';
const LG_MIN_W = 'min-w-[calc(55%-0rem)]';

export default function FeaturePanels({
  featureLists,
  frontImage,
  alt,
  backImage,
  className,
  reverse = false,
}) {
  return (
    <div
      className={
        'mx-auto mt-4 flex max-w-screen-fhd flex-wrap items-start gap-4 lg:grid lg:grid-cols-[1fr_55%] lg:gap-40 ' +
        (reverse ? 'flex-row-reverse ' : ' ') +
        className
      }
    >
      <div
        className={
          'z-10 flex-1 basis-48 bg-sand ' +
          (reverse ? 'min-w-[55%] lg:order-1' : 'ml-auto min-w-[45%]')
        }
      >
        {featureLists.map((list, i) => (
          <Ul
            items={list}
            key={uuid()}
            className={
              'leading-4 lg:text-xl lg:tracking-wide ' + (i == 0 ? 'mb-8' : '')
            }
          />
        ))}
      </div>
      <OverlappingImages
        front={frontImage}
        alt={alt}
        back={backImage}
        leftAligned={!reverse}
        className={
          'flex-1 ' +
          (reverse ? 'min-w-[calc(45%-1rem)]' : 'min-w-[calc(55%-1rem)]')
        }
      />
    </div>
  );
}
