/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: process.env.NEXT_PUBLIC_BACKEND_HOSTNAME,
        port: process.env.NEXT_PUBLIC_BACKEND_PORT,
      },
      {
        protocol: "https",
        hostname: "www.larvalabs.com",
      },
    ],
  },
}

module.exports = nextConfig
