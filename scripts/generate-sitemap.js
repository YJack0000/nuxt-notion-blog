import { Client } from '@notionhq/client'
import dotenv from 'dotenv'
import fs from 'fs'
dotenv.config()

const getPageProperty = () => {
    if (!process.env.NOTION_API_KEY)
        throw new Error('NOTION_API_KEY is not defined')
    if (!process.env.NOTION_POST_DATABASE_ID)
        throw new Error('NOTION_POST_DATABASE_ID is not defined')

    const notion = new Client({ auth: process.env.NOTION_API_KEY })

    const response = notion.databases.query({
        database_id: process.env.NOTION_POST_DATABASE_ID,
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
        ]
    })

    return response
}

(async () => {
    const response = await getPageProperty()
    const pages = response.results

    const sitemap = `<?xml version="1.0" encoding="UTF-8" ?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
                    <url>
                        <loc>${`https://yjack0000.cerana.tech`}</loc>
                    </url>
        ${pages
            .map((page) => {
                return `
                    <url>
                        <loc>${`https://yjack0000.cerana.tech/articles/post/${page.id}`}</loc>
                        <lastmod>${page.last_edited_time}</lastmod>
                    </url>
                `
            }
            )
            .join('')}
    </urlset>
    `
    console.log(sitemap)

    fs.writeFileSync('public/sitemap.xml', sitemap)
})