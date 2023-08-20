<template>
    <section class="mt-1 mb-6">
        <div class="relative">
            <img
                v-if="header.cover"
                class="rounded-box mt-2 mb-4 h-96 w-full object-cover brightness-50"
                :src="header.cover[header.cover.type].url"
                alt="photo of the post"
            />
            <img
                v-else
                class="rounded-box mt-2 mb-4 h-96 w-full object-cover brightness-50"
                :src="'/img/bg.png'"
                alt="photo replacement of the post"
            />
            <h1
                class="absolute bottom-0 mb-6 max-w-2xl px-8 text-white text-4xl lg:text-5xl font-bold leading-normal"
                v-for="title in header.properties.Title[
                    header.properties.Title.type
                ]"
            >
                {{ title.plain_text }}
            </h1>
        </div>
        <div class="mx-auto max-w-4xl">
            <div class="mb-6 flex items-center gap-2 text-sm">
                <div
                    class="flex items-center gap-2"
                    v-for="author in header.properties.Author.people"
                >
                    <div class="avatar">
                        <div class="w-6 rounded">
                            <img
                                :src="author.avatar_url"
                                alt="author avatar"
                                onerror="this.onerror=null; this.src='/img/cat.png'"
                            />
                        </div>
                    </div>
                    {{ author.name }}
                </div>
                <div v-if="header.properties.Date[header.properties.Date.type]">
                    {{ publishedAtReadable }}
                </div>
            </div>
            <article class="prose-lg text-base-content">
                <NotionRenderer
                    :blockMap="content"
                    :pageLinkOptions="pageLinkOptions"
                    prism
                />
            </article>
        </div>
    </section>
</template>

<script setup>
useHead({
    script: [
        {
            hid: 'mathjax',
            src: 'https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.2/MathJax.js?config=TeX-AMS_HTML',
            defer: true,
        },
    ],
})
const props = defineProps(['header', 'content'])
const publishedAtReadable = computed(() => {
    if (props.header.properties.Date[props.header.properties.Date.type]) {
        let date = new Date(
            props.header.properties.Date[
                props.header.properties.Date.type
            ].start,
        )
        return date.toDateString()
    } else return '?'
})

const NuxtLink = resolveComponent('NuxtLink')
const pageLinkOptions = { component: NuxtLink, href: 'to' }
</script>
