/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [process.env.NEXT_PUBLIC_BACKEND_HOSTNAME, "www.larvalabs.com"],
  },
}

module.exports = nextConfig
