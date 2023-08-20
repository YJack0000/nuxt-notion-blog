module.exports = {
    content: [
        './components/**/*.{js,vue,ts}',
        './layouts/**/*.vue',
        './pages/**/*.vue',
        './plugins/**/*.{js,ts}',
    ],
    theme: {
        extend: {},
    },
    plugins: [
        require('tailwind-scrollbar'),
        require('@tailwindcss/typography'),
        require('daisyui'),
    ],
    daisyui: {
        themes: [
            'winter',
            {
                business: {
                    ...require('daisyui/src/theming/themes')[
                        '[data-theme=business]'
                    ],
                    'base-100': '#10151a',
                },
            },
        ],
        darkTheme: 'business',
    },
}
