/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "edus.lk",
            },
            {
                protocol: "https",
                hostname: "pub-25daa8127a824bc58c903315ba000dc1.r2.dev",
            },
        ],
    },
};

export default nextConfig;
