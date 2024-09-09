import { useEffect, useState } from 'react';

import screens from './tailwindScreens.preval';

const matchScreen = (window, screen) =>
  window.matchMedia(`(min-width: ${screens[screen]})`).matches;

export default function useMatchScreen(screen) {
  const [isMatch, setMatch] = useState(null);

  useEffect(() => {
    const onResize = () => setMatch(matchScreen(window, screen));
    onResize();
    window.addEventListener('resize', onResize, { passive: true });

    return () => window.removeEventListener('resize', onResize);
  }, [screen]);

  return isMatch;
}
