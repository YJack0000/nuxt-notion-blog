<template>
        <div
            class="hero h-screen items-top"
            style="background-image: url(/big-pic.jpg)"
        >
            <div class="hero-overlay z-0 bg-opacity-60"></div>
            <div class="hero-content z-10 text-center text-slate-50">
                <div class="max-w-lg">
                    <h1
                        class="mb-5 text-5xl font-bold transition-opacity duration-700 ease-in"
                        :class="{
                            'opacity-100': isHero,
                            'opacity-0': !isHero,
                        }"
                    >
                        歡迎來到我的個人網站
                    </h1>
                    <p
                        class="mb-5 transition-opacity duration-700 ease-in"
                        :class="{
                            'opacity-100': isContent,
                            'opacity-0': !isContent,
                        }"
                    >
                        這是一個由 Nuxt.js、Tailwindcss、Notion
                        作為資料庫、Vercel 作為部署平台的個人部落格。
                    </p>
                </div>
            </div>
        </div>
</template>

<script setup lang="ts">
definePageMeta({
    layout: 'landing',
})

const isHero = ref(false)
const isContent = ref(false)
setTimeout(() => {
    isHero.value = true
    setTimeout(() => {
        isContent.value = true
    }, 700)
}, 100)
</script>

