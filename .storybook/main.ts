//import type { StorybookConfig } from '@storybook/nextjs'

const config = {
  stories: ['../src/components/**/stories.tsx'],
  addons: [
    '@storybook/addon-essentials',
  ],
  framework: {
    name: '@storybook/nextjs',
    options: {}
  },
  docs: {
    autodocs: true
  },
  webpackFinal: (config) => {
    config.resolve.modules.push(`${process.cwd()}/src`)
    return config
  },
  staticDirs: ['../public']
}
export default config
