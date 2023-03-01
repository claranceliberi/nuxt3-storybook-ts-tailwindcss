const {
  mergeConfig
} = require("vite");
const eslintPlugin = require("vite-plugin-eslint").default;

module.exports = {
  stories: ["../components/**/*.mdx", "../components/**/*.stories.@(js|ts)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-mdx-gfm"],
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

      eslintPlugin()]
    });
  },
  docs: {
    autodocs: true
  }
};