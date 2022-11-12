const nextConfig = {
  reactStrictMode: false,
}
module.exports = {
  ...nextConfig,
  
  images: {
    domains: ['placeimg.com','mdbcdn.b-cdn.net','mdbootstrap.com','images.unsplash.com'],
  },
  eslint: {
    ignoreDuringBuilds: true,
  }

}
