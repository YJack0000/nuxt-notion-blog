export default defineNuxtConfig({
    devtools: { enabled: true },
    modules: [
        '@nuxtjs/tailwindcss',
        '@vueuse/nuxt',
        // 'vue-notion/nuxt'
    ],
    build: {
        transpile: ['vue-notion'],
    },
    runtimeConfig: {
        NOTION_POST_DATABASE_ID: process.env.NOTION_POST_DATABASE_ID,
        NOTION_API_KEY: process.env.NOTION_API_KEY,
        public: {
            BLOG_NAME: "YJack's blog",
            GITHUB_PAGE: 'https://github.com/YJack0000',
            LINKEDIN_PAGE: 'https://www.linkedin.com/in/宇傑-鄭-3941181a3',
        },
    },
    css: ['@/assets/styles/vue-notion-dark.css'],
    app: {
        head: {
            htmlAttrs: {
                lang: 'zh',
            },
            link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
            charset: 'utf-8',
            viewport: 'width=device-width, initial-scale=1',
            title: "YJack's Site.",
            meta: [
                {
                    name: 'description',
                    content:
                        '這是一個用 Nuxt.js、Tailwindcss、Notion 作為資料庫、Vercel 作為部署平台的個人網站。用來存放文章與個人資料。',
                },
                {
                    name: 'og:title',
                    content: "YJack's Site.",
                },
                {
                    name: 'og:description',
                    content:
                        '這是一個用 Nuxt.js、Tailwindcss、Notion 作為資料庫、Vercel 作為部署平台的個人網站。用來存放文章與個人資料。',
                },
                {
                    name: 'og:type',
                    content: 'website',
                },
                {
                    name: 'og:url',
                    content: 'https://yjack0000.cerana.tech',
                },
                {
                    name: 'og:image',
                    content: '/img/og.png',
                },
            ],
        },
    },
})
