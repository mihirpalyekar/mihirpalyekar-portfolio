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
  assetPrefix: 'mihirpalyekar.github.io',
  trailingSlash: true,
 
}