/** @type {import('next').NextConfig} */
const nextConfig = {
    trailingSlash: true,
    reactStrictMode: false,
    images: {
        domains: ['res.cloudinary.com'],
    },
};

export default nextConfig;
