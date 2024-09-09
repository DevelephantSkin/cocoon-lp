/** @type {import('next').NextConfig} */
import withNextPluginPreval from './prevalWrapper.cjs';

const nextConfig = {
  images: {
    deviceSizes: [640, 1920],
  },
};

export default withNextPluginPreval(nextConfig);
