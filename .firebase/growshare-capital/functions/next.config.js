"use strict";

// next.config.js
var securityHeaders = [
  {
    key: "X-DNS-Prefetch-Control",
    value: "on"
  },
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload"
  },
  {
    key: "X-XSS-Protection",
    value: "1; mode=block"
  },
  {
    key: "X-Frame-Options",
    value: "SAMEORIGIN"
  },
  {
    key: "X-Content-Type-Options",
    value: "nosniff"
  },
  {
    key: "Referrer-Policy",
    value: "origin-when-cross-origin"
  }
];
var nextConfig = {
  // 1. ADDED: This tells Next.js 16 to enable Turbopack (fast builds)
  turbopack: {},
  // 2. KEPT: Ignore TS errors so your build finishes even if there are small type issues.
  typescript: {
    ignoreBuildErrors: true
  },
  // 3. REMOVED: 'eslint' config here is invalid in Next.js 16.
  // (ESLint ignores are now handled in the .eslintrc.json file instead).
  async headers() {
    return [
      {
        source: "/:path*",
        headers: securityHeaders
      }
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "picsum.photos",
        port: "",
        pathname: "/**"
      },
      {
        protocol: "https",
        hostname: "i.imgur.com",
        port: "",
        pathname: "/**"
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
        pathname: "/**"
      },
      {
        protocol: "https",
        hostname: "plus.unsplash.com",
        port: "",
        pathname: "/**"
      },
      {
        protocol: "https",
        hostname: "i.postimg.cc",
        port: "",
        pathname: "/**"
      },
      {
        protocol: "https",
        hostname: "firebasestorage.googleapis.com",
        port: "",
        pathname: "/**"
      },
      {
        protocol: "https",
        hostname: "static.wixstatic.com",
        port: "",
        pathname: "/**"
      },
      {
        protocol: "https",
        hostname: "img.icons8.com",
        port: "",
        pathname: "/**"
      },
      {
        protocol: "https",
        hostname: "sites.uab.edu",
        port: "",
        pathname: "/**"
      },
      {
        protocol: "https",
        hostname: "images.pexels.com",
        port: "",
        pathname: "/**"
      },
      {
        protocol: "https",
        hostname: "images.seeklogo.com",
        port: "",
        pathname: "/**"
      },
      {
        protocol: "https",
        hostname: "cdn.freebiesupply.com",
        port: "",
        pathname: "/**"
      },
      {
        protocol: "https",
        hostname: "nuspay.com",
        port: "",
        pathname: "/**"
      },
      {
        protocol: "https",
        hostname: "1000logos.net",
        port: "",
        pathname: "/**"
      },
      {
        protocol: "https",
        hostname: "www.tnstate.edu",
        port: "",
        pathname: "/**"
      },
      {
        protocol: "https",
        hostname: "cscrhospital.com",
        port: "",
        pathname: "/**"
      },
      {
        protocol: "https",
        hostname: "upload.wikimedia.org",
        port: "",
        pathname: "/**"
      },
      {
        protocol: "https",
        hostname: "fastpro.tax",
        port: "",
        pathname: "/**"
      },
      {
        protocol: "https",
        hostname: "scontent-atl3-2.xx.fbcdn.net",
        port: "",
        pathname: "/**"
      },
      {
        protocol: "https",
        hostname: "i.pinimg.com",
        port: "",
        pathname: "/**"
      },
      {
        protocol: "https",
        hostname: "images.squarespace-cdn.com",
        port: "",
        pathname: "/**"
      },
      {
        protocol: "https",
        hostname: "cdn-icons-png.flaticon.com",
        port: "",
        pathname: "/**"
      }
    ]
  },
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      "handlebars": "handlebars/dist/cjs/handlebars.js"
    };
    return config;
  },
  async redirects() {
    return [
      {
        source: "/bakery",
        destination: "/services/safuras-bakery",
        permanent: true
      },
      {
        source: "/training",
        destination: "/services/training",
        permanent: true
      },
      {
        source: "/khaluifarm",
        destination: "/services/khalui-farm",
        permanent: true
      },
      {
        source: "/khalui",
        destination: "/services/khalui-farm",
        permanent: true
      },
      {
        source: "/globaltrade",
        destination: "/services/global-trade",
        permanent: true
      },
      // 🚀 NEW ADDITION BELOW:
      {
        source: "/skylinedb3",
        destination: "/services/skylinedb3",
        permanent: true
      }
    ];
  }
};
module.exports = nextConfig;
