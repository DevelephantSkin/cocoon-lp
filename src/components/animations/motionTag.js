import { forwardRef, useMemo } from 'react';
import { motion } from 'framer-motion';

const MotionTag = forwardRef(({ tag, ...rest }, ref) => {
  const Tag = useMemo(() => motion(tag), [tag]);

  return <Tag ref={ref} {...rest} />;
});

MotionTag.displayName = 'MotionTag';

export default MotionTag;
