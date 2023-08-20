<template>
    <div class="hero bg-base-100">
        <div class="hero-content text-center">
            <div class="">
                <h1 class="text-7xl font-bold">404</h1>
                <p class="py-6">Oops! This page doesn't exist.</p>
                <button class="btn btn-neutral btn-sm" @click="goBack">
                    &lArr; Go back
                </button>
            </div>
        </div>
    </div>
</template>

<script setup>
definePageMeta({
    layout: 'landing',
})
const router = useRouter()
const goBack = () => {
    router.go(-1)
}
</script>
