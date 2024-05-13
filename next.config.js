/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'opengraph.githubassets.com',
                port: '',
                pathname: '/1afeafda/Shikhar97/**',
            },
        ],
    },
};

module.exports = nextConfig;
