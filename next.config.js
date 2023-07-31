/**
 * @typedef {import('next').NextConfig} NextConfig
 * @typedef {import('webpack').Configuration} WebpackConfig
 * @typedef {import('next/dist/server/config-shared').WebpackConfigContext} WebpackConfigContext
 * @typedef {(config: WebpackConfig, context: WebpackConfigContext) => any} NextWebpackConfig
 */

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: false,
  openAnalyzer: false,
})

/** @type {Omit<NextConfig, 'webpack'>} nextConfig */
const nextConfig = {
  basePath:
    '' === process.env.NEXT_PUBLIC_PATH
      ? undefined
      : '/' + process.env.NEXT_PUBLIC_PATH,
  reactStrictMode: false, // se desactiva porque React 18 renderiza y llama useEffect 2 veces 🤷‍♂️
  poweredByHeader: false,
  /** @type {NextWebpackConfig} */
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback.child_process = false
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
      }
    }

    return config
  },
  output: 'standalone',
  eslint: {
    dirs: ['common', 'context', 'modules', 'pages', 'themes', 'stories'],
  },
}

module.exports = withBundleAnalyzer(nextConfig)
