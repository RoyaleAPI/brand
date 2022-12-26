import { defineUserConfig } from 'vuepress'
import { defaultTheme } from '@vuepress/theme-default'
import { searchPlugin } from '@vuepress/plugin-search'
import { googleAnalyticsPlugin } from '@vuepress/plugin-google-analytics'

const autometa_options = {
    site: {
        name: 'RoyaleAPI Brand',
        twitter: 'RoyaleAPI',
    },
    author: {
        name: 'RoyaleAPI Brand',
        twitter: 'RoyaleAPI',
    },
    canonical_base: 'https://brand.royaleapi.com',
};

const seo_options = {};

const description = "Branding guidelines for RoyaleAPI"

export default defineUserConfig({
    title: 'RoyaleAPI Brand',
    description: description,

    theme: defaultTheme({
        repo: '',
        editLinks: false,
        docsDir: '',
        editLinkText: '',
        lastUpdated: false,
        logo: '/img/royaleapi-logo.png',
        nav: require('./nav/en.js'),
        sidebar: [
            {
                text: 'Introduction',
                link: '/',
            },
            {
                text: 'Elements',
                link: '/guide/name',
                children: [
                    '/guide/name',
                    '/guide/logo',
                    '/guide/subbrands',
                    '/guide/color',
                    '/guide/typography',
                ]
            },
            {
                text: 'Examples',
                link: '/examples/season',
                children: [
                    '/examples/season',
                    '/examples/deck_spotlight',
                ]
            },
            {
                text: 'Terms',
                link: '/legal/terms',
            },


        ]
    }),

    plugins: [
        searchPlugin({
            // options
        }),
        googleAnalyticsPlugin({
            id: 'G-48L7KQ2BZD',
        }),
    ],

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
            href: 'https://brand.royaleapi.com/img/favicon.ico',
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


})
