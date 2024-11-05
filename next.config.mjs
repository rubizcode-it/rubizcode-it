// next.config.mjs

/** @type {import('next').NextConfig} */
const nextConfig = {
    // React strict mode
    reactStrictMode: true,
  
    // Image configuration
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'rubizcode.com',
          pathname: '/**',
        }
      ],
      domains: ['images.unsplash.com', 'localhost'],
    },
  
    // Headers for security
    async headers() {
      return [
        {
          source: '/:path*',
          headers: [
            {
              key: 'X-DNS-Prefetch-Control',
              value: 'on'
            },
            {
              key: 'Strict-Transport-Security',
              value: 'max-age=63072000; includeSubDomains; preload'
            },
            {
              key: 'X-Content-Type-Options',
              value: 'nosniff'
            }
          ]
        }
      ]
    },
  
    // Environment variables
    env: {
      NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL,
    },
  
    // Compiler options
    compiler: {
      // Remove console.log in production
      removeConsole: process.env.NODE_ENV === 'production',
    },
  
    // PoweredByHeader
    poweredByHeader: false,
  
    // Compression
    compress: true,
  
    // Trailing slash
    trailingSlash: false,
  }
  
  export default nextConfig