import { Client } from '@notionhq/client'

export default defineEventHandler((event) => {
    const runtimeConfig = useRuntimeConfig()
    const notion = new Client({ auth: runtimeConfig.NOTION_API_KEY })

    const query = getQuery(event)
    const response = notion.databases.query({
        database_id: runtimeConfig.NOTION_POST_DATABASE_ID,
        filter: {
            and: [
                {
                    property: 'Visible',
                    checkbox: {
                        equals: true,
                    },
                },
            ],
        },
        sorts: [
            {
                property: 'Date',
                direction: 'descending',
            },
        ],
        page_size: 3,
        start_cursor:
            query.cursor && query.cursor !== 'undefined'
                ? query.cursor.toString()
                : undefined,
    })

    return response
})
