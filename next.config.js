/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'avatar.vercel.sh',
        // Optional: specify port and pathname if needed
        // port: '',
        // pathname: '/account/**', 
      },
    ],
  },
    eslint: {
    ignoreDuringBuilds: true,
  },
    async redirects() {
        return [
          {
            source: '/',
            destination: '/home',
            permanent: true,
          },
        ]
      },
    reactStrictMode: false,
    async headers() {
        return [
            {
                source: '/:path*',
                headers: [
                    {
                        key: 'X-Frame-Options',
                        value: 'ALLOWALL',
                    },
                    {
                        key: 'Content-Security-Policy',
                        value: "frame-ancestors *",
                    },
                ],
            },
        ]
    },
}

module.exports = nextConfig
