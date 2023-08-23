<template>
    <div class="grid grid-cols-5 gap-2 py-8">
        <div class="flex lg:hidden col-span-5 mb-2">
            <div
                data-placeholder
                class="w-full h-24 overflow-hidden relative dark:bg-[#1b2126] bg-base-200 rounded-box"
            ></div>
        </div>
        <div class="col-span-5 flex items-center gap-2 text-sm">
            <div class="avatar">
                <div
                    data-placeholder
                    class="w-6 h-6 rounded dark:bg-[#1b2126] bg-base-200 overflow-hidden relative"
                ></div>
            </div>
            <div
                data-placeholder
                class="h-3 w-20 dark:bg-[#1b2126] bg-base-200 rounded-box overflow-hidden relative"
            ></div>
            <div
                data-placeholder
                class="h-3 w-32 dark:bg-[#1b2126] bg-base-200 rounded-box overflow-hidden relative"
            ></div>
            <div
                data-placeholder
                class="h-3 w-20 dark:bg-[#1b2126] bg-base-200 rounded-box overflow-hidden relative"
            ></div>
        </div>
        <div class="col-span-5 lg:col-span-4 gap-2">
            <div class="flex gap-2 mb-2">
                <div
                    data-placeholder
                    class="h-4 w-20 dark:bg-[#1b2126] bg-base-200 rounded-box overflow-hidden relative"
                ></div>
                <div
                    data-placeholder
                    class="h-4 w-52 dark:bg-[#1b2126] bg-base-200 rounded-box overflow-hidden relative"
                ></div>
                <div
                    data-placeholder
                    class="h-4 w-32 dark:bg-[#1b2126] bg-base-200 rounded-box overflow-hidden relative"
                ></div>
                <div
                    data-placeholder
                    class="h-4 w-16 dark:bg-[#1b2126] bg-base-200 rounded-box overflow-hidden relative"
                ></div>
            </div>
            <div class="flex gap-2 flex-wrap">
                <div
                    data-placeholder
                    class="h-2 w-32 dark:bg-[#1b2126] bg-base-200 rounded-box overflow-hidden relative"
                ></div>
                <div
                    data-placeholder
                    class="h-2 w-52 dark:bg-[#1b2126] bg-base-200 rounded-box overflow-hidden relative"
                ></div>
                <div
                    data-placeholder
                    class="h-2 w-24 dark:bg-[#1b2126] bg-base-200 rounded-box overflow-hidden relative"
                ></div>
                <div
                    class="h-2 w-16 dark:bg-[#1b2126] bg-base-200 rounded-box overflow-hidden relative"
                ></div>
                <div
                    data-placeholder
                    class="h-2 w-8 dark:bg-[#1b2126] bg-base-200 rounded-box overflow-hidden relative"
                ></div>
                <div
                    data-placeholder
                    class="h-2 w-24 dark:bg-[#1b2126] bg-base-200 rounded-box overflow-hidden relative"
                ></div>
                <div
                    data-placeholder
                    class="h-2 w-16 dark:bg-[#1b2126] bg-base-200 rounded-box overflow-hidden relative"
                ></div>
                <div
                    class="h-2 w-8 dark:bg-[#1b2126] bg-base-200 rounded-box overflow-hidden relative"
                ></div>
                <div
                    data-placeholder
                    class="h-2 w-26 dark:bg-[#1b2126] bg-base-200 rounded-box overflow-hidden relative"
                ></div>
                <div
                    data-placeholder
                    class="h-2 w-52 dark:bg-[#1b2126] bg-base-200 rounded-box overflow-hidden relative"
                ></div>
                <div
                    data-placeholder
                    class="h-2 w-24 dark:bg-[#1b2126] bg-base-200 rounded-box overflow-hidden relative"
                ></div>
                <div
                    data-placeholder
                    class="h-2 w-32 dark:bg-[#1b2126] bg-base-200 rounded-box overflow-hidden relative"
                ></div>
                <div
                    data-placeholder
                    class="h-2 w-16 dark:bg-[#1b2126] bg-base-200 rounded-box overflow-hidden relative"
                ></div>
                <div
                    data-placeholder
                    class="h-2 w-8 dark:bg-[#1b2126] bg-base-200 rounded-box overflow-hidden relative"
                ></div>
                <div
                    data-placeholder
                    class="h-2 w-52 dark:bg-[#1b2126] bg-base-200 rounded-box overflow-hidden relative"
                ></div>
                <div
                    data-placeholder
                    class="h-2 w-8 dark:bg-[#1b2126] bg-base-200 rounded-box overflow-hidden relative"
                ></div>
                <div
                    data-placeholder
                    class="h-2 w-24 dark:bg-[#1b2126] bg-base-200 rounded-box overflow-hidden relative"
                ></div>
                <div
                    data-placeholder
                    class="h-2 w-16 dark:bg-[#1b2126] bg-base-200 rounded-box overflow-hidden relative"
                ></div>
                <div
                    data-placeholder
                    class="h-2 w-52 dark:bg-[#1b2126] bg-base-200 rounded-box overflow-hidden relative"
                ></div>
                <div
                    data-placeholder
                    class="h-2 w-32 dark:bg-[#1b2126] bg-base-200 rounded-box overflow-hidden relative"
                ></div>
                <div
                    data-placeholder
                    class="h-2 w-24 dark:bg-[#1b2126] bg-base-200 rounded-box overflow-hidden relative"
                ></div>
                <div
                    data-placeholder
                    class="h-2 w-8 dark:bg-[#1b2126] bg-base-200 rounded-box overflow-hidden relative"
                ></div>
            </div>
        </div>
        <div class="col-span-5 flex gap-2 items-center flex-wrap">
            <div
                data-placeholder
                class="badge w-32 dark:bg-[#1b2126] bg-base-200 overflow-hidden relative"
            ></div>
            <div
                data-placeholder
                class="badge w-16 dark:bg-[#1b2126] bg-base-200 overflow-hidden relative"
            ></div>
            <div
                data-placeholder
                class="badge w-52 dark:bg-[#1b2126] bg-base-200 overflow-hidden relative"
            ></div>
        </div>
    </div>
</template>

<style>
[data-placeholder]::after {
    content: ' ';
    box-shadow: 0 0 50px 9px rgb(184, 176, 176);
    position: absolute;
    top: 0;
    left: -100%;
    height: 100%;
    animation: load 1s infinite;
}
@keyframes load {
    0% {
        left: -100%;
    }
    100% {
        left: 150%;
    }
}
</style>
