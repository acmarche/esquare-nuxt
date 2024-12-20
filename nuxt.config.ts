// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: {enabled: true},
    experimental: {
        payloadExtraction: true
    },
    modules: ['@nuxtjs/tailwindcss', "@nuxt/image", "@nuxtjs/google-fonts"],
    googleFonts: {
        families: {
            Oswald: {
                wght: [200, 300, 400, 500, 600, 700],
            },
            "Open Sans": {
                wght: [300, 400, 500, 600, 700, 800],
                ital: [300, 400, 500, 600, 700, 800]
            },
        }
    },
    app: {
        rootId: 'app',
        head: {
            htmlAttrs: {
                lang: 'fr',
            },
        },
        pageTransition: {name: 'page', mode: 'out-in'}
    },
    // Configure IPX here
    image: {
        domains: ['picsum.photos', 'www.google.com', 'amazonaws.com'],
        provider: 'ipx',
        quality: 80,
        format: ['webp']
    },
    runtimeConfig: {
        public: {
            API_URL: process.env.API_URL,
            DEFAULT_COVER: 'https://e-square.marche.be/new/images/cover-e-Square.png',
            DEFAULT_ICON: 'https://notion-emojis.s3-us-west-2.amazonaws.com/prod/svg-twitter/1f468-1f3ff-200d-1f4bc.svg',
            NOTION_PARTNERS_DATABASE_ID: process.env.NOTION_PARTNERS_DATABASE_ID,
            NOTION_RGPD_PAGE_ID: process.env.NOTION_RGPD_PAGE_ID,
            NOTION_SERVICES_PAGE_ID: process.env.NOTION_SERVICES_PAGE_ID,
            NOTION_ROOMS_PAGE_ID: process.env.NOTION_ROOMS_PAGE_ID,
            NOTION_ROOMS_DATABASE_ID: process.env.NOTION_ROOMS_DATABASE_ID,
            NOTION_MACHINES_DATABASE_ID: process.env.NOTION_MACHINES_DATABASE_ID,
            NOTION_CONTACT_DATABASE_ID: process.env.NOTION_CONTACT_DATABASE_ID,
            NOTION_CONTACT_PAGE_ID: process.env.NOTION_CONTACT_PAGE_ID,
            NUXT_APP_BASE_URL: process.env.NUXT_APP_BASE_URL || '/',
        },
    },
    nitro: {
        prerender: {
            routes: [],
        },
    },
    compatibilityDate: '2024-07-03',
})