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
      {
        source: '/courses/white-water-kayaking-kids-summer-camp-uttarakhand',
        destination: '/activities/white-water-kayaking/courses/himalayan-white-water-kayaking-summer-program-for-kids',
        permanent: true,
      },
      {
        source: '/activities/white-water-kayaking/courses/white-water-kayaking-kids-summer-camp-uttarakhand',
        destination: '/activities/white-water-kayaking/courses/himalayan-white-water-kayaking-summer-program-for-kids',
        permanent: true,
      },
      {
        source: '/courses/himalayan-white-water-kayaking-summer-program-for-kids',
        destination: '/activities/white-water-kayaking/courses/himalayan-white-water-kayaking-summer-program-for-kids',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
