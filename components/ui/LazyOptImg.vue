<template>
    <div class="w-6 rounded">
        <NuxtImg
            :src="src"
            format="webp"
            alt="Lazy loading image"
            loading="lazy"
        />
    </div>
</template>
<script setup lang="ts">
defineProps({
    src: {
        type: String,
        required: true,
    },
})
</script>
