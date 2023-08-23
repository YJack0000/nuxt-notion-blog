# Nuxt blog with Notion

![GitHub](https://img.shields.io/github/license/YJack0000/nuxt-notion-blog)

The project is mainly based on [nuxt-3-notion-blog](https://github.com/egrzeszczak/nuxt-3-notion-blog). But I added some features like the sitemap, category fetching, dark/light mode, and some other minor changes.

[![](/docs/preview.gif)](https://yjack0000.cerana.tech/)

## Stack

This project is a blog built with Nuxt.js for server-side render website and Notion API as the database. 

![](https://skillicons.dev/icons?perline=15&i=nuxt,tailwind,vercel)

## Basic environment variables setup

```env
# .env
NOTION_API_TOKEN=your_notion_integration_token
NOTION_POST_DATABASE=your_notion_posts_database
```

```javascript
// nuxt.config.js
public: {
    BLOG_NAME: "YJack's blog",
    GITHUB_PAGE: 'https://github.com/YJack0000/nuxt-notion-blog',
    LINKEDIN_PAGE: 'https://www.linkedin.com/in/宇傑-鄭-3941181a3',
    NOTION_ABOUT_PAGE: 'page_by_slug_17c6e514c9a549659e7775e5d17546b5',
    NOTION_ABOUT_PAGE_BLOCK: '4bc3731306444831b824c95c7a6ad868'
},
```

## Notion database template

| Title       | Description  | Category             | Author       | Date         | Visible          |
| ----------- | ------------ | -------------------- | ------------ | ------------ | ---------------- |
| type: `Key` | type: `Text` | type: `Multi-select` | type: `Person` | type: `Date` | type: `Checkbox` |


## Build with Sitemap script

There is a file in `scripts/generate-sitemap.js` will generate a sitemap.xml file in the root of the project. This file is used by search engines to index your site.

```bash
npm run build
```

## Additional setup

```javascript
// About page setup
public: {
    // ...
    NOTION_ABOUT_PAGE: 'page_by_slug_17c6e514c9a549659e7775e5d17546b5',
    NOTION_ABOUT_PAGE_BLOCK: '4bc3731306444831b824c95c7a6ad868',
},
```

```javascript
// DISQUS Comment setup
public: {
    // ...
    DISQUS_PROJECT_ID: 'huan-3',
},
```

## Todo

- [x] Add /about Page for `About`
- [x] Add a comment section
- [ ] Cache the Notion API data on vercel service 
