<template>
    <div class="mx-auto max-w-4xl my-4 rounded-lg">
        <div class="p-4 bg-white rounded-lg">
            <div id="disqus_thread"></div>
        </div>
    </div>
</template>

<script setup lang="ts">
onMounted(() => {
    var disqus_config = function () {
        this.page.url = `${route.fullPath}`
        this.page.identifier = `${route.fullPath}`
    }
    ;(function () {
        var d = document,
            s = d.createElement('script')
        s.src = `https://${"huan-3"}.disqus.com/embed.js`
        s.setAttribute('data-timestamp', +new Date())
        ;(d.head || d.body).appendChild(s)
    })()
    window
        .matchMedia('(prefers-color-scheme: dark)')
        .addEventListener('change', ({ matches }) => {
            if (document.readyState == 'complete') {
                DISQUS.reset({ reload: true, config: disqus_config })
            }
        })
})
</script>

<style scoped>
#disqus_thread a {
    background-color: #000;
}
</style>
