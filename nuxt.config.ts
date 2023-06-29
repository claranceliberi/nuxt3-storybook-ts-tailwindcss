// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: ["vite-plugin-vue-type-imports/nuxt", "@nuxthq/ui"],
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
    typescript: {
        strict: true,
    },
    components: [
        {
            path: "~~/components",
            pathPrefix: false,
        },
    ],
    ui: {
        global: true,
        icons: ["heroicons", "simple-icons"],
    },
})
