<template>
    <div class="my-2">
        <h2 class="text-md font-normal my-2">分類</h2>
        <div class="flex flex-row flex-wrap gap-1">
            <button
                    class="btn btn-md"
                    :class="{
                        'btn-primary': selectedCategory.name === '',
                        'btn-outline': selectedCategory.name !== '',
                    }"
                    @click="router.push(`/articles`)"
                >
                    全部
            </button>
            <button
                v-if="!pending"
                v-for="category in categories"
                class="btn btn-md"
                :class="{
                    'btn-primary': selectedCategory.name === category.name,
                    'btn-outline': selectedCategory.name !== category.name,
                }"
                @click="router.push(`/articles?category=${category.name}`)"
            >
                {{ category.name }}
            </button>
            <span
                data-placeholder
                v-else
                v-for="categoryPlaceholder in [
                    'w-12',
                    'w-32',
                    'w-48',
                    'w-16',
                    'w-24',
                    'w-48',
                    'w-48',
                    'w-12',
                ]"
                :class="categoryPlaceholder"
                class="btn btn-md btn-outline overflow-hidden relative"
            ></span>
        </div>
    </div>
</template>

<script setup lang="ts">
const router = useRouter()

defineProps<{
    pending: boolean
    categories: Category[]
    selectedCategory: Category
}>()
</script>
