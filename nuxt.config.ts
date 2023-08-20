// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: ["vite-plugin-vue-type-imports/nuxt", "@nuxthq/ui",'@pinia/nuxt'],
    app: {
        head: {
            charset: "utf-16",
            viewport: "width=500, initial-scale=1",
            title: "Nuxt App",
            meta: [
                { name: "description", content: "My amazing site" },
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

    devtools: {
      enabled: true,

      timeline: {
        enabled: true,
      },

      vscode: {
        // startOnBoot: true,
        // enabled: true,
        mode: "tunnel",
    },
    },
})