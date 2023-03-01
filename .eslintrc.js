module.exports = {
    root: true,
    env: {
        node: true,
        es2021: true,
        "vue/setup-compiler-macros": true,
    },
    extends: [
        "eslint:recommended",
        "plugin:vue/vue3-essential",
        "plugin:storybook/recommended",
        "plugin:markdown/recommended",
        "plugin:vue/strongly-recommended",
        "@vue/typescript/recommended",
        "prettier",
    ],
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
