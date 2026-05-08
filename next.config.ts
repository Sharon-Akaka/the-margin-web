import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Allow video files in public/videos to be served
  async headers() {
    return [
      {
        source: '/videos/:path*',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
    ];
  },
};

export default nextConfig;
