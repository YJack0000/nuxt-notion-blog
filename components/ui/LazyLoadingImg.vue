<template>
    <div class="w-6 rounded">
        <img
            :src="src"
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
