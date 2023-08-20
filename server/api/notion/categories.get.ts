import { Client } from '@notionhq/client'

export default defineEventHandler(async (event) => {
    const runtimeConfig = useRuntimeConfig()

    const notion = new Client({ auth: runtimeConfig.NOTION_API_KEY })
    const databaseInfo = await notion.databases.retrieve({
        database_id: runtimeConfig.NOTION_POST_DATABASE_ID,
    }) as DatabaseInfoResponse

    const response = databaseInfo.properties.Category.multi_select.options.map((option: Category) => {
        return {
            id: option.id,
            name: option.name,
        }
    })

    return response
})
