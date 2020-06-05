let ogprefix = 'og: https://akeneolabs.com'
let title = 'Akeneo Labs'
let description = 'Documentation about Akeneo'
let color = '#82549d'
let author = 'Dani Roman'
let website = 'https://akeneolabs.com'
let logo = 'https://akeneolabs.com/akeneo-labs.jpg';

module.exports = {
    locales: {
        '/': {
            lang: 'en-US',
            title: title,
            description: description
        },
    },
    head: [
        ['link', { rel: 'icon', href: `/icons/logo.png` }],
        ['link', { rel: 'manifest', href: '/manifest.json' }],
        ['meta', { name: 'theme-color', content: color }],
        ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
        ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
        ['link', { rel: 'apple-touch-icon', href: `/icons/apple-touch-icon-152x152.png` }],
        ['link', { rel: 'mask-icon', href: '/icons/safari-pinned-tab.svg', color: color }],
        ['meta', { name: 'msapplication-TileImage', content: '/icons/msapplication-icon-144x144.png' }],
        ['meta', { name: 'msapplication-TileColor', content: '#000000' }],
        ['meta', { prefix: ogprefix, property: 'og:title', content: title }],
        ['meta', { prefix: ogprefix, property: 'twitter:title', content: title }],
        ['meta', { prefix: ogprefix, property: 'og:type', content: 'article' }],
        ['meta', { prefix: ogprefix, property: 'og:url', content: website }],
        ['meta', { prefix: ogprefix, property: 'og:description', content: description }],
        ['meta', { prefix: ogprefix, property: 'og:image', content: logo }],
        ['meta', { prefix: ogprefix, property: 'og:article:author', content: author }],
    ],
    themeConfig: {
        nav: [
            { text: 'Home', link: '/' },
            { text: 'Get Started', link: '/get-started/' },
            { text: 'About the Author', link: 'https://danielromanmartinez.com/'},
        ],
        sidebar: {
            '/api/': getApiSidebar(),
        },
        smoothScroll: true,
    },
    plugins: [
        ['@vuepress/last-updated'],
        ['@vuepress/back-to-top', true],
        ['vuepress-plugin-nprogress'],
        ['@vuepress/google-analytics',
        {
            'ga': 'UA-77531775-2'
        }]
    ]
}

function getApiSidebar () {
    return [
        'cli',
        'node'
    ]
}