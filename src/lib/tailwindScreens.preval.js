// https://github.com/vercel/next.js/discussions/31841
import preval from 'next-plugin-preval';

import resolveConfig from 'tailwindcss/resolveConfig';
import tailwindConfig from '../../tailwind.config';

async function getScreens() {
  const fullConfig = await resolveConfig(tailwindConfig);
  return fullConfig.theme.screens;
}

export default preval(getScreens());
