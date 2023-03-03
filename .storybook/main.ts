const {
  mergeConfig
} = require("vite");
const eslintPlugin = require("vite-plugin-eslint").default;
import VueTypeImports from 'vite-plugin-vue-type-imports'

module.exports = {
  stories: ["../components/**/*.mdx", "../components/**/*.stories.@(js|ts)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-mdx-gfm",
    '@storybook/addon-storysource',
    "storybook-addon-designs",

    {
        name: '@storybook/addon-postcss',
        options: {
            cssLoaderOptions:{
                importLoaders: 1,
            },
            postcssLoaderOptions: {
                implementation: require('postcss'),
            },
        },
    },

],
  framework: {
    name: "@storybook/vue3-vite",
    options: {}
  },
  typescript: {
    check: false,
    checkOptions: {}
  },
  async viteFinal(previousConfig) {
    return mergeConfig(previousConfig, {
      plugins: [
      eslintPlugin(),
      VueTypeImports(),
    ]
    });
  },
  docs: {
    autodocs: true
  }
};
