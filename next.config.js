module.exports = {
    async redirects() {
        return [
          {
            source: '/',
            destination: '/search',
            permanent: false,
          },
        ]
      },
    images: {
        domains: ['avatars.githubusercontent.com'],
    },
}