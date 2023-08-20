import { parse } from 'node-html-parser'

export default defineEventHandler(async (event) => {
    const url = getRouterParam(event, 'url')

    if(!url) return new Response('Missing url', { status: 400 })

    const resp = (await $fetch(url, { mode: 'no-cors' })) as string

    const document = parse(resp)
    var metaTags = document.querySelectorAll('meta')

    const ret = new Map()
    ;[...metaTags].forEach(function (tag, i) {
        // console.log(tag);

        if (tag.hasAttribute('property')) {
            const propName = tag.getAttribute('property')

            // Get the value of the OG property attribute
            var ogMetaValue = document
                .querySelectorAll("meta[property='" + propName + "']")[0]
                .getAttribute('content')

            // console.log("a-------------------------------------------------------------a")
            // console.log(ogMetaValue._attrs.content)

            //  Add property to ogWebsite object. We can do this because
            //  ES6 (2015) allows varible keys with object literals.
            //  To work, you must use bracket "[]" notation instead of dots.
            ret.set(propName, ogMetaValue)

            // console.log(ret)
        }
    })

    return {
        title: ret.get('og:title') || ret.get('twitter:title') || document.querySelector('title')?.text,
        description: ret.get('og:description') || ret.get('twitter:description') || ret.get('description') || null,
        image: ret.get('og:image') || null,
    }
})
