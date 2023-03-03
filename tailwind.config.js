/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./components/**/*.vue", "./pages/**/*.vue", "./layouts/**/*.vue", "./plugins/**/*.js", "./nuxt.config.js", "./App.vue"],
    theme: {
        extend: {
            colors: {
                primary: "#FE4D1A",
            },
        },
    },
    plugins: [],
}
