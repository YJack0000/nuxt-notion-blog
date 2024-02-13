<template>
    <div class="w-6 rounded">
        <NuxtImg
            :src="src"
            format="webp"
            alt="Lazy loading image"
            lazy="loading"
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
