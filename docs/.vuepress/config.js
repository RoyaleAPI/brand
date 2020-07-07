const {description} = require('../../package')

module.exports = {
    /**
     * Ref：https://v1.vuepress.vuejs.org/config/#title
     */
    title: 'RoyaleAPI Brand',
    /**
     * Ref：https://v1.vuepress.vuejs.org/config/#description
     */
    description: description,

    /**
     * Extra tags to be injected to the page HTML `<head>`
     *
     * ref：https://v1.vuepress.vuejs.org/config/#head
     */
    head: [
        ['meta', {name: 'theme-color', content: '#2b73ff'}],
        ['meta', {name: 'apple-mobile-web-app-capable', content: 'yes'}],
        ['meta', {name: 'apple-mobile-web-app-status-bar-style', content: 'black'}],
        ['link', {
            rel: 'stylesheet',
            href: 'https://fonts.googleapis.com/css2?family=Source+Sans+Pro:ital,wght@0,400;0,600;1,400;1,600&display=swap'
        }],
        ['link', {
            rel: 'icon',
            href: 'https://help.royaleapi.com/img/favicon.ico',
        }],
        ['meta', {
            'http-equiv': 'Cache-Control',
            content: 'no-cache, no-store, must-revalidate'
        }],
        ['meta', {
            'http-equiv': 'Pragma',
            content: 'no-cache'
        }],
        ['meta', {
            'http-equiv': 'Expires',
            content: '0'
        }],
        ['meta', {
            property: 'description',
            content: description
        }],
        ['meta', {
            property: 'keywords',
            content: 'RoyaleAPI, Clash Royale, help, branding, support'
        }],
        ['meta', {
            property: 'og:type',
            content: 'website'
        }],
        ['meta', {
            property: 'og:title',
            content: 'RoyaleAPI Brand'
        }],
        ['meta', {
            property: 'og:description',
            content: description
        }],
        ['meta', {
            property: 'og:image',
            content: 'https://cdn.royaleapi.com/static/img/branding/cr-api-logo.png'
        }],
        ['meta', {
            property: 'og:site_name',
            content: 'RoyaleAPI Brand'
        }],
        ['meta', {
            property: 'twitter:card',
            content: 'summary'
        }],
        ['meta', {
            property: 'twitter:site',
            content: '@RoyaleAPI'
        }],
        ['meta', {
            property: 'twitter:creator',
            content: '@RoyaleAPI'
        }],
        ['meta', {
            property: 'twitter:image',
            content: 'https://cdn.royaleapi.com/static/img/branding/cr-api-logo.png'
        }],
    ],

    /**
     * Theme configuration, here is the default theme configuration for VuePress.
     *
     * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
     */
    themeConfig: {
        repo: '',
        editLinks: false,
        docsDir: '',
        editLinkText: '',
        lastUpdated: false,
        logo: '/img/royaleapi-logo.png',
        nav: [
            {
                text: 'Site',
                link: 'https://royaleapi.com',
            },
        ],
        sidebar: [
            {
                title: 'Introduction',
                path: '/',
            },
            {
                title: 'Elements',
                collapsable: false,
                children: [
                    '/guide/name',
                    '/guide/logo',
                    '/guide/subbrands',
                    '/guide/color',
                    '/guide/typography',
                ]
            },
            {
                title: 'Terms',
                path: '/legal/terms',
            },


        ]
    },

    /**
     * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
     */
    plugins: [
        '@vuepress/plugin-back-to-top',
        '@vuepress/plugin-medium-zoom',
        [
            'vuepress-plugin-container',
            {
                type: 'quote',
                defaultTitle: '',
            },
        ],
    ]
}
