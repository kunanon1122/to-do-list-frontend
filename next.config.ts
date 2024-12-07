import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  i18n: {
    defaultLocale: 'th',
    locales: ['en', 'th'],
    localeDetection: false,
},
};

export default nextConfig;
