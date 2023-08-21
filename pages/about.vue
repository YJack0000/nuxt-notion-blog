<template>
    <div class="mx-auto my-4 max-w-full">
        <div class="prose text-base-content">
            <NotionRenderer
                v-if="!pendingContent && !errorContent"
                :blockMap="content"
                :pageLinkOptions="pageLinkOptions"
                prism
            />
        </div>
    </div>
</template>
<script setup>
const { $notion } = useNuxtApp()
const { NOTION_ABOUT_PAGE, NOTION_ABOUT_PAGE_BLOCK } = useRuntimeConfig().public

const {
    data: content,
    pending: pendingContent,
    error: errorContent,
} = await useAsyncData(
    NOTION_ABOUT_PAGE,
    async () => {
        const blockMap = await $notion.getPageBlocks(
            NOTION_ABOUT_PAGE_BLOCK,
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
