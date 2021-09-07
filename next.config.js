module.exports = phase => {
  return {
    reactStrictMode: true,
    images: {
      domains: ['picsum.photos'],
      minimumCacheTTL: 180,
    },
    async rewrites() {
      return [
        {
          source: '/api/v1/:path*',
          destination: `${process.env.NEXT_PUBLIC_REST_API_ENDPOINT}/:path*`
        }
      ]
    }
  }
}
