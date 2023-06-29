module.exports = {
    root: true,
    env: {
        node: true,
        es2021: true,
        "vue/setup-compiler-macros": true,
    },
    extends: ["eslint:recommended", "plugin:storybook/recommended", "plugin:markdown/recommended", "@nuxt/eslint-config", "prettier"],
    plugins: ["@typescript-eslint", "prettier", "vitest"],
    parserOptions: {
        ecmaVersion: 2020,
    },
    rules: {
        "prettier/prettier": "error",
        "no-console": "warn",
        "@typescript-eslint/explicit-module-boundary-types": "off",
    },
}
