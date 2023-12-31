import { QueryDatabaseResponse } from "@notionhq/client/build/src/api-endpoints"

export const usePosts = (category: Ref<Category>) => {
    const postsToRemain = ref<any>([])
    const cursor = ref<any>(undefined)

    const { pending, data: postsFromNotion, refresh, error } = useFetch<QueryDatabaseResponse>(() => `/api/notion/posts?category=${category.value.name}`,
        { query: { cursor }, server: false }
    )

    watch(category, () => {
        postsToRemain.value = []
        cursor.value = undefined

        console.log(`/api/notion/posts?category_name=${category.value.name}`)
        refresh()
    })

    const hasMore = computed(() => postsFromNotion.value?.has_more || false)

    // Load more articles (button push)
    const loadMore = () => {
        console.log("postsFromNotion", postsFromNotion.value)
        postsToRemain.value = [
            ...postsToRemain.value,
            ...postsFromNotion.value!.results,
        ]

        cursor.value = postsFromNotion.value?.next_cursor
        refresh()
    }

    return {
        pending,
        error, 
        postsToRemain,
        postsFromNotion,
        hasMore,
        loadMore,
    }
}