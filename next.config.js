/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ["en", "fr", "de"],
    defaultLocale: "fr",
  },
};

module.exports = nextConfig;
