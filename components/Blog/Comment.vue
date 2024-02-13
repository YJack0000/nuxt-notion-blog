<template>
    <div class="mx-auto max-w-4xl my-4 rounded-lg">
        <div v-if="DISQUS_PROJECT_ID" class="p-4 bg-white rounded-lg">
            <div id="disqus_thread"></div>
        </div>
    </div>
</template>

<script setup lang="ts">
const { DISQUS_PROJECT_ID } = useRuntimeConfig().public

onMounted(() => {
    var disqus_config = function () {
        this.page.url = `${route.fullPath}`
        this.page.identifier = `${route.fullPath}`
    }
    ;(function () {
        var d = document,
            s = d.createElement('script')
        s.src = `https://${DISQUS_PROJECT_ID}.disqus.com/embed.js`
        s.setAttribute('data-timestamp', +new Date())
        ;(d.head || d.body).appendChild(s)
    })()
})
</script>
