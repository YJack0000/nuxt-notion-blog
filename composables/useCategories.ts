import { GetDatabaseResponse } from "@notionhq/client/build/src/api-endpoints"

export default function useCategories() {
    const { pending, data: categories } = useLazyAsyncData<Category[]>('categories', () =>
        $fetch(`/api/notion/categories`),
    )

    return {
        pending,
        categories
    }
}
