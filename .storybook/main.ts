// Imports the Storybook's configuration API
import { StorybookConfig } from '@storybook/nextjs'

const config: StorybookConfig = {
  stories: ['../stories/**/*.mdx', '../stories/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    'storybook-dark-mode',
    '@storybook/addon-mdx-gfm',
    '@etchteam/storybook-addon-status',
  ],
  framework: {
    name: '@storybook/nextjs',
    options: {
      strictMode: false,
      legacyRootApi: true,
    },
  },
  webpackFinal: async (config, { configType }) => {
    // `configType` has a value of 'DEVELOPMENT' or 'PRODUCTION'
    // You can change the configuration based on that.
    // 'PRODUCTION' is used when building the static version of storybook.

    // Make whatever fine-grained changes you need
    config.resolve = {
      ...config.resolve,
      fallback: {
        fs: false,
        path: false,
        os: false,
        assert: false,
        util: false,
        child_process: false,
        stream: false,
        buffer: false,
        crypto: false,
      },
    }
    // Return the altered config
    return config
  },
  docs: {
    autodocs: true,
  },
  staticDirs: ['../public'],
}
module.exports = config
