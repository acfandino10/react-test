/** @type {import('next').NextConfig} */
/**
 */


const nextConfig = {
  reactStrictMode: true,
  // distDir: 'dist',
  env: {
    REACT_APP_BASE_URL: process.env.REACT_APP_BASE_URL,
  },
  images: {
    domains: ["remotewoman.com", "cdn.logo.com", "adobe.com"],
  },
};

module.exports = nextConfig;
