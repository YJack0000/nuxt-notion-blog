<template>
    <div class="mx-auto w-[800px] max-w-full">
        <div class="prose text-base-content">
            <NotionRenderer
                v-if="!pendingContent && !errorContent"
                :blockMap="content"
                :pageLinkOptions="pageLinkOptions"
                prism
            />
            <BlogPostPlaceholder v-else />
        </div>
    </div>
</template>
<script setup>
const { $notion } = useNuxtApp()

const {
    data: content,
    pending: pendingContent,
    error: errorContent,
} = await useAsyncData(
    `page_by_slug_17c6e514c9a549659e7775e5d17546b5`,
    async () => {
        const blockMap = await $notion.getPageBlocks(
            '4bc3731306444831b824c95c7a6ad868',
        )
        if (!blockMap || blockMap.error) {
            throw createError({
                statusCode: 404,
                statusMessage: 'Page Not Found',
            })
        }
        return blockMap
    },
)

const NuxtLink = resolveComponent('NuxtLink')
const pageLinkOptions = { component: NuxtLink, href: 'to' }
</script>
