import withPWA from "next-pwa";

const configWithPwa = withPWA({
  dest: "public",
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === "development",
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "standalone",
  env: {
    BASE_API_URL: process.env.BASE_API_URL,
  },
};

export default configWithPwa(nextConfig);
