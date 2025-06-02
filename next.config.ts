import type { NextConfig } from "next";
import withPWA from 'next-pwa';

const nextConfig: NextConfig = withPWA({
  /* config options here */
  dest: 'public', // Destination directory for the PWA files
  disable: process.env.NODE_ENV === 'development', // Disable PWA in development
});

export default nextConfig;