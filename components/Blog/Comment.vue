<template>
    <div class="mx-auto max-w-4xl my-4 rounded-lg">
        <div v-if="DISQUS_SHORTNAME" class="p-4 bg-white rounded-lg">
            <DisqusComments :identifier="route.fullPath" />
        </div>
    </div>
</template>

<script setup lang="ts">
const { DISQUS_SHORTNAME } = useRuntimeConfig().public
const route = useRoute()
</script>
