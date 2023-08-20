<template>
    <div
        class="mb-4 grid cursor-pointer grid-cols-5 gap-2 rounded border border-slate-300 dark:border-slate-800 bg-base-100 py-6 px-4 transition hover:bg-base-300"
        @click="useRouter().push(`/articles/post/${post.id}`)"
    >
        <div class="col-span-5 flex items-center gap-2 text-sm">
            <div
                class="flex items-center gap-2"
                v-for="author in post.properties.Author.people"
            >
                <div class="avatar">
                    <div class="w-6 rounded">
                        <img :src="author.avatar_url" alt="author avatar" onerror="this.onerror=null; this.src='/img/cat.png'" />
                    </div>
                </div>
                {{ author.name }}
            </div>
            <div v-if="post.properties.Date[post.properties.Date.type]">
                {{ publishedAtReadable }}
            </div>
        </div>
        <div class="col-span-5 lg:col-span-4">
            <div
                class="my-1 text-2xl font-semibold"
                v-for="title in post.properties.Title[
                    post.properties.Title.type
                ]"
            >
                <NuxtLink
                    class="link-hover link"
                    :to="`/articles/post/${post.id}`"
                >
                    {{ title.plain_text }}
                </NuxtLink>
            </div>
            <div class="prose">
                <span
                    class="font-light"
                    v-for="description in post.properties.Description[
                        post.properties.Description.type
                    ]"
                >
                    {{ description.plain_text }}
                </span>
            </div>
        </div>
        <div class="col-span-5 flex flex-wrap items-center gap-2">
            <div
                class="badge badge-outline badge"
                v-for="category in post.properties.Category[
                    post.properties.Category.type
                ]"
            >
                {{ category.name }}
            </div>
        </div>
    </div>
</template>

<script setup>
const props = defineProps(['post'])
const publishedAtReadable = computed(() => {
    // Calculate the date to a friendly format
    if (props.post.properties.Date[props.post.properties.Date.type]) {
        let date = new Date(
            props.post.properties.Date[props.post.properties.Date.type].start,
        )
        return date.toDateString()
    } else return '?'
})
</script>
