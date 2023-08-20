# Nuxt 3 blog with Notio

![GitHub](https://img.shields.io/github/license/YJack0000/nuxt-notion-blog)

This project is a blog built with Nuxt3 for SSR website and Notion API as a database. 

The project is mainly based on [nuxt-3-notion-blog](https://github.com/egrzeszczak/nuxt-3-notion-blog). But have the newer version of Nuxt3, DaisyUI, and other dependencies. 

Moreover, I have added some features like the sitemap, category fetching, dark/light mode, and some other minor changes.

## Stack
![](https://skillicons.dev/icons?perline=15&i=nuxt,tailwind,vercel)

### Environment variables setup

```env
NOTION_API_TOKEN=your_notion_integration_token
NOTION_POST_DATABASE=your_notion_posts_database
```

### Notion database template

| Title       | Description  | Category             | Author       | Date         | Visible          |
| ----------- | ------------ | -------------------- | ------------ | ------------ | ---------------- |
| type: `Key` | type: `Text` | type: `Multi-select` | type: `Person` | type: `Date` | type: `Checkbox` |

## Build with Sitemap script

There is a file in `scripts/generate-sitemap.js` will generate a sitemap.xml file in the root of the project. This file is used by search engines to index your site.

```bash
npm run build
```

## Todo

- [ ] Add a search bar
- [ ] Add a comment section
