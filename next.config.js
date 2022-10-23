/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
}
module.exports = {
  ...nextConfig,
  images: {
    domains: ['placeimg.com','mdbcdn.b-cdn.net'],
  },
}

// module.exports = nextConfig
