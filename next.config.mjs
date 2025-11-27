/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "edus.lk",
            },
        ],
    },
};

export default nextConfig;
