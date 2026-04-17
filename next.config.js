/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['example.com'], // Specify allowed image domains
  },
};

module.exports = nextConfig;
