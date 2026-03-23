/** @type {import('next').NextConfig} */
import withNextPluginPreval from './prevalWrapper.cjs';

const nextConfig = {
  images: {
    unoptimized: true,
  },
};

export default withNextPluginPreval(nextConfig);
