/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    typedRoutes: true,
  },
  eslint: { ignoreDuringBuilds: true },
  output: 'standalone',
};

export default nextConfig;
