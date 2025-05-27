const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  output: 'export',
  basePath: isProd ? '/REPO' : '',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;