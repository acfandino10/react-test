/** @type {import('next').NextConfig} */
/**
 */


const nextConfig = {
  reactStrictMode: true,
  // distDir: 'dist',
  env: {
    REACT_APP_BASE_URL: process.env.REACT_APP_BASE_URL,
    REACT_APP_TOKEN: process.env.REACT_APP_TOKEN,
  },
  images: {
    domains: ["remotewoman.com", "cdn.logo.com", "adobe.com"],
  },
};

module.exports = nextConfig;
