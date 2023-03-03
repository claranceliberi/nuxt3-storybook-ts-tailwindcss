// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app: {
        head: {
            charset: "utf-16",
            viewport: "width=500, initial-scale=1",
            title: "StunPark",
            meta: [
                // <meta name="description" content="My amazing site">
                // TODO: seo improvement
                { name: "description", content: "" },
            ],
        },
    },
    components: [
        {
            path: "~~/components",
            pathPrefix: false,
        },
    ],
    modules: ["@nuxtjs/tailwindcss", "vite-plugin-vue-type-imports/nuxt"],
})
