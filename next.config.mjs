/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
      {
        protocol: 'http',
        hostname: 'res.cloudinary.com',
      },
    ],
    // domains: ['res.cloudinary.com'],
  },
  // images: {
  //     // domains: ['res.cloudinary.com', 'lh3.googleusercontent.com'],
  //     domains: ['*'],

  // },
}

export default nextConfig
