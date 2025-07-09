/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'standalone', // or 'export' if you want static export
  experimental: {
    appDir: true,
    swcPlugins: [
      ["next-superjson-plugin", {}]
    ]
  },
  images: {
    domains: [
      "res.cloudinary.com",
      "avatars.githubusercontent.com",
      "lh3.googleusercontent.com"
    ]
  },
    compress: true,
}

module.exports = nextConfig
