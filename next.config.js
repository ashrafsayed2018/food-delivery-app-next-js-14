/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
         domains: ["ashraf-food-ordering.s3.amazonaws.com"],
        remotePatterns: [
            {
                protocol: "https",
                hostname:"ashraf-food-ordering.s3.amazonaws.com",
                port: '3000',
                pathname: '/**',
            }
        ]
    }
}

module.exports = nextConfig
