/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["links.papareact.com"],
  },
  env: {
    mapbox_key:
      "pk.eyJ1Ijoia2V1bmhvIiwiYSI6ImNsYXVybzI0NjA5YTYzb295MHkzZTFybzAifQ.OQMcndaKudeJGtHaNTJh_g",
  },
};

module.exports = nextConfig;
