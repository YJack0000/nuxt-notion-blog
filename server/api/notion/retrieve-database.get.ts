import { Client } from '@notionhq/client'

export default defineEventHandler((event) => {
    const runtimeConfig = useRuntimeConfig()
    const notion = new Client({ auth: runtimeConfig.NOTION_API_KEY })
    const response = notion.databases.retrieve({
        database_id: runtimeConfig.NOTION_POST_DATABASE_ID,
    })
    return response
})
