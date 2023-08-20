<template>
    <div>
        <Header
            class="absolute z-10 bg-transparent align-top text-neutral-content"
        />
        <div ref="vantaRef" class="items-top hero z-0 h-screen">
            <div class="hero-overlay z-10 bg-opacity-60"></div>
            <div class="hero-content z-20 text-center text-slate-50">
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
    </div>
</template>

<script setup lang="ts">
import * as THREE from 'three'
import WAVES from 'vanta/dist/vanta.waves.min'

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

const vantaRef = ref(null)
onMounted(() => {
    WAVES({
        el: vantaRef.value,
        THREE: THREE,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.0,
        minWidth: 200.0,
        scale: 1.0,
        scaleMobile: 1.0,
    })
})
</script>

<style>
canvas {
    filter: blur(3px);
}
</style>
