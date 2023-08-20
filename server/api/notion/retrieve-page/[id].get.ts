import { Client } from '@notionhq/client'

export default defineEventHandler((event) => {
    const runtimeConfig = useRuntimeConfig()
    const notion = new Client({ auth: runtimeConfig.NOTION_API_KEY })

    const id = getRouterParam(event, 'id')
    if(!id) return new Response('Missing id', { status: 400 })

    const response = notion.pages.retrieve({
        page_id: id,
    })

    return response
})
