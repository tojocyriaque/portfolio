const isProd = process.env.NODE_ENV === 'production';
const repoName = process.env.GITHUB_REPOSITORY?.split('/')[1] ?? 'portfolio';
const basePath = isProd ? `/${repoName}` : '';

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  basePath,
  assetPrefix: isProd ? `${basePath}/` : '',
};

export default nextConfig;
