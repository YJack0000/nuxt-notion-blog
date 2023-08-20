import VueNotion, { getPageBlocks, getPageTable } from 'vue-notion'

export default defineNuxtPlugin(({ vueApp }) => {
    vueApp.use(VueNotion)

    return {
        provide: {
            notion: { getPageBlocks, getPageTable },
        },
    }
})
