module.export = {
    stories: [
        '../components/**/*.stories.mdx',
        '../components/**/*.stories.@(js|jsx|ts|tsx)',
    ],
    addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
    core: {
        builder: '@storybook/builder-vite',
    },
}