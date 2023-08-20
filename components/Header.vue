<template>
    <div class="navbar bg-base-100">
        <div class="navbar-start">
            <div class="dropdown">
                <label tabindex="0" class="btn-ghost btn lg:hidden">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M4 6h16M4 12h8m-8 6h16"
                        />
                    </svg>
                </label>
                <ul
                    tabindex="0"
                    class="dropdown-content menu rounded-box menu-compact mt-3 w-52 bg-base-100 p-2 text-base-content shadow"
                >
                    <li>
                        <NuxtLink to="/">主頁</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/articles">文章</NuxtLink>
                    </li>
                </ul>
            </div>
            <NuxtLink
                to="/"
                class="btn-ghost btn p-0 text-xl normal-case md:p-2"
            >
                {{ props.title }}
            </NuxtLink>
        </div>
        <div class="navbar-center hidden lg:flex">
            <ul class="menu menu-horizontal p-0 text-lg">
                <li>
                    <NuxtLink to="/">主頁</NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/articles">文章</NuxtLink>
                </li>
            </ul>
        </div>
        <div class="navbar-end">
            <NuxtLink class="btn-neutral btn" :to="'/about'"> 關於我 </NuxtLink>
        </div>
    </div>
</template>
<script setup lang="ts">
const props = defineProps({
    title: {
        type: String,
        default: 'xxx\'s blog',
    },
})
</script>
