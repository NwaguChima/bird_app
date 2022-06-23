/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "www.svgrepo.com",
      "i0.wp.com",
      "images.unsplash.com",
      "image.cnbcfm.com",
      "a57.foxnews.com",
    ],
  },
};

module.exports = nextConfig;
