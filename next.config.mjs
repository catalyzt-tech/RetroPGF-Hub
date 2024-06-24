/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  reactStrictMode: false,
  images: {
    // optimizeImages: true,
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
      {
        protocol: 'http',
        hostname: 'res.cloudinary.com',
      },
      {
        protocol: 'https',
        hostname: 'storage.googleapis.com',
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
