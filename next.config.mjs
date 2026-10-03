/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: { unoptimized: true },
  // Lint stays advisory. Do not remove this: `next build` must not fail on
  // lint, or Vercel deploys from main will break.
  eslint: { ignoreDuringBuilds: true },
};

export default nextConfig;
