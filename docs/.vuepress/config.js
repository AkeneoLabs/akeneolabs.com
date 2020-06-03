module.exports = {
    locales: {
        '/': {
            lang: 'en-US',
            title: 'Akeneo Labs',
            description: 'Documentation about Akeneo'
        },
    },
    head: [
        ['link', { rel: 'icon', href: `/icons/logo.png` }],
        ['link', { rel: 'manifest', href: '/manifest.json' }],
        ['meta', { name: 'theme-color', content: '#82549d' }],
        ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
        ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
        ['link', { rel: 'apple-touch-icon', href: `/icons/apple-touch-icon-152x152.png` }],
        ['link', { rel: 'mask-icon', href: '/icons/safari-pinned-tab.svg', color: '#3eaf7c' }],
        ['meta', { name: 'msapplication-TileImage', content: '/icons/msapplication-icon-144x144.png' }],
        ['meta', { name: 'msapplication-TileColor', content: '#000000' }]
    ],
    themeConfig: {
        nav: [
            { text: 'Home', link: '/' },
            { text: 'Get Started', link: '/get-started/' },
        ],
        sidebar: {
            '/api/': getApiSidebar(),
        },
        smoothScroll: true,
    },
    plugins: [
        '@vuepress/last-updated',
        '@vuepress/back-to-top',
        'vuepress-plugin-nprogress'
    ]
}

function getApiSidebar () {
    return [
        'cli',
        'node'
    ]
}