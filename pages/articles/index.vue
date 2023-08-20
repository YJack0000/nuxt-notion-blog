<template>
    <div class="mx-0 max-w-full">
        <div class="breadcrumbs text-sm">
            <ul>
                <li>
                    <NuxtLink to="/">主頁</NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/articles">文章</NuxtLink>
                </li>
            </ul>
        </div>

        <div class="block md:flex md:flex-row-reverse md:gap-2 mb-4">
            <aside class="w-full md:w-1/4">
                <client-only>
                    <BlogCategoryBox
                        v-if="width > 768"
                        :pending="pendingCategories"
                        :categories="categories"
                        :selectedCategory="selectedCategory"
                    ></BlogCategoryBox>
                    <BlogCollapseCategoryBox
                        v-else
                        :pending="pendingCategories"
                        :categories="categories"
                        :selectedCategory="selectedCategory"
                    />
                </client-only>
            </aside>
            <div class="flex-1">
                <!-- Display posts from last API call -->
                <BlogPostSmall v-for="post in postsToRemain" :post="post" />
                <!-- Display posts from current API call -->
                <BlogPostSmall
                    v-if="!pendingPosts"
                    v-for="post in postsFromNotion!.results"
                    :post="post"
                />
                <!-- Post placeholder -->
                <BlogPostSmallPlaceholder
                    v-if="pendingPosts"
                    v-for="el in [1, 2, 3]"
                />
                <button
                    class="btn-primary btn-block btn"
                    :class="{ loading: pendingPosts }"
                    @click="loadMore"
                    :disabled="pendingPosts || !hasMore"
                >
                    <span>載入更多</span>
                </button>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
const { width } = useWindowSize()
const route = useRoute()

const { pending: pendingCategories, categories } = useCategories()

const selectedCategory = computed(() => {
    const emptyCategory: Category = {
        id: '',
        name: '',
    }

    if (!route.query.category) return emptyCategory
    if (!categories.value) return emptyCategory

    const resultCategory = categories.value.find(
        (category) => category.name === route.query.category,
    )

    if(!resultCategory) return emptyCategory

    return resultCategory
})

const {
    pending: pendingPosts,
    postsToRemain,
    postsFromNotion,
    hasMore,
    loadMore,
} = usePosts(selectedCategory)
</script>
