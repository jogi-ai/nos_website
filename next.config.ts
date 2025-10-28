import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [new URL('https://igutafeeling.com/**')],
  },
  async redirects() {
    return [
      {
        source: '/courses/white-water-kayaking-foundation-course',
        destination: '/activities/white-water-kayaking/courses/white-water-kayaking-foundation-course',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
