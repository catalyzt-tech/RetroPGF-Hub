/** @type {import('next').NextConfig} */
const nextConfig = {
    trailingSlash: true,
    reactStrictMode: false,
    images: {
        remotePatterns: [
          {
            protocol: "https",
            hostname: "**",
          },
        ],
        domains: ["res.cloudinary.com"]
    },
    // images: {
    //     // domains: ['res.cloudinary.com', 'lh3.googleusercontent.com'],
    //     domains: ['*'],

    // },
};

export default nextConfig;
