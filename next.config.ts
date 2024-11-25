import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http", 
        hostname: "**", 
        port: "**", 
        pathname: "**", 
      },
    ],
  },
};

export default withNextIntl(nextConfig);
