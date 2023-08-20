<template>
    <div
        tabindex="0"
        class="collapse collapse-arrow border border-base-300"
    >
        <input type="checkbox" />
        <div class="collapse-title text-md font-normal">
            分類
        </div>
        <div class="collapse-content">
            <div class="my-2">
                <div class="flex flex-row flex-wrap gap-1">
                    <button
                        v-if="!pending"
                        v-for="category in categories"
                        class="btn btn-md"
                        :class="{
                            'btn-primary': selectedCategory.id === category.id,
                            'btn-outline': selectedCategory.id !== category.id,
                        }"
                        @click="
                            router.push(`/articles?category=${category.id}`)
                        "
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
        </div>
    </div>
</template>

<script setup lang="ts">
const router = useRouter()

defineProps<{
    pending: boolean,
    categories: Category[],
    selectedCategory?: Category,
}>()
</script>
