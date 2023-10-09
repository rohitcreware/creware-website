/** @type {import('next').NextConfig} */
const nextConfig = {
  // reactStrictMode: true,
  trailingSlash: true,

  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    unoptimized: true,
  },
  output: "export",

  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
  env: {
    NODEMAILER_PW: "dgfvndbqjtxzxmtq",
    NODEMAILER_EMAIL: "rohsh00@gmail.com",
  },
};

module.exports = nextConfig;
