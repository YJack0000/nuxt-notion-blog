<template>
    <section class="mt-1 mb-6">
        <!-- TYTUŁ -->
        <div>
            <div
                data-placeholder
                class="w-full h-64 object-cover rounded-box mt-2 mb-4 dark:bg-[#1b2126] bg-base-200 overflow-hidden relative"
            ></div>
        </div>

        <div class="prose mb-6">
            <div
                data-placeholder
                class="w-full dark:bg-[#1b2126] bg-base-200 h-12 rounded-box overflow-hidden relative"
            ></div>
        </div>
        <!-- TYTUŁ -->

        <!-- Autor, Data publikacji, W ile do przeczytania? -->
        <div class="flex items-center gap-2 text-sm mb-6">
            <div class="flex items-center gap-2">
                <div class="avatar">
                    <div
                        data-placeholder
                        class="w-6 h-6 rounded dark:bg-[#1b2126] bg-base-200 overflow-hidden relative"
                    ></div>
                </div>
                <div
                    data-placeholder
                    class="w-24 dark:bg-[#1b2126] bg-base-200 h-4 rounded-box overflow-hidden relative"
                ></div>
                <div
                    data-placeholder
                    class="w-12 dark:bg-[#1b2126] bg-base-200 h-4 rounded-box overflow-hidden relative"
                ></div>
                <div
                    data-placeholder
                    class="w-0 dark:bg-[#1b2126] bg-base-200 h-4 rounded-box overflow-hidden relative"
                ></div>
                <div
                    data-placeholder
                    class="w-48 dark:bg-[#1b2126] bg-base-200 h-4 rounded-box overflow-hidden relative"
                ></div>
            </div>
            <div></div>
        </div>
        <!-- Autor, Data publikacji, W ile do przeczytania? -->

        <!-- Treść -->
        <article class="prose">
            <div
                data-placeholder
                class="w-full dark:bg-[#1b2126] bg-base-200 h-10 rounded-box overflow-hidden relative"
            ></div>
            <br />
            <div class="flex gap-2 flex-wrap">
                <div
                    data-placeholder
                    v-for="categoryPlaceholder in [
                        'w-12',
                        'w-32',
                        'w-48',
                        'w-4',
                        'w-24',
                        'w-48',
                        'w-48',
                        'w-12',
                        'w-8',
                        'w-48',
                        'w-48',
                        'w-12',
                        'w-8',
                        'w-12',
                        'w-32',
                        'w-48',
                        'w-16',
                        'w-24',
                        'w-48',
                        'w-16',
                        'w-24',
                        'w-12',
                        'w-32',
                        'w-4',
                        'w-48',
                        'w-12',
                        'w-8',
                        'w-12',
                        'w-32',
                        'w-48',
                        'w-4',
                        'w-24',
                        'w-48',
                        'w-48',
                        'w-12',
                        'w-8',
                        'w-48',
                        'w-48',
                        'w-12',
                        'w-8',
                        'w-12',
                        'w-32',
                        'w-48',
                        'w-16',
                        'w-24',
                        'w-48',
                        'w-16',
                        'w-24',
                        'w-12',
                        'w-32',
                        'w-4',
                        'w-48',
                        'w-12',
                        'w-8',
                    ]"
                    :class="categoryPlaceholder"
                    class="h-3 dark:bg-[#1b2126] bg-base-200 rounded-box overflow-hidden relative"
                ></div>
            </div>
        </article>
        <!-- Treść -->
    </section>
</template>

<script setup></script>
