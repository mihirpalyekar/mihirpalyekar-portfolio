module.exports = {
  output: 'export',
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  images: {
    unoptimized: true,
  },
  basePath: '/mihirpalyekar-portfolio',
  assetPrefix: '/mihirpalyekar-portfolio/',
  trailingSlash: true,
 
}