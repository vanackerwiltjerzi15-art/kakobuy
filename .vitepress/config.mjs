import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Kakobuy Spreadsheet Guide',
  description: 'Your ultimate guide to Kakobuy spreadsheets for cross-border e-commerce',
  base: '/',
  lang: 'en-US',
  lastUpdated: true,
  cleanUrls: true,
  
  head: [
    ['meta', { name: 'theme-color', content: '#667eea' }],
    ['meta', { name: 'robots', content: 'index,follow' }],
    ['meta', { name: 'googlebot', content: 'index,follow' }],
    ['link', { rel: 'icon', href: '/favicon.ico', type: 'image/x-icon' }],
  ],
  
  themeConfig: {
    logo: {
      src: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><text y=".9em" font-size="90">📊</text></svg>',
    },
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guides', link: '/posts/' },
      { text: 'Spreadsheet', link: 'https://kakobuy.com', target: '_blank' },
    ],
    sidebar: [
      {
        text: 'Kakobuy Guides',
        items: [
          { text: 'Gutefrage Kakobuy Spreadsheet', link: '/posts/gutefrage-kakobuy-spreadsheet/' },
          { text: 'Quora Kakobuy Spreadsheet', link: '/posts/quora-kakobuy-spreadsheet/' },
          { text: 'Reddit Kakobuy Spreadsheet', link: '/posts/reddit-kakobuy-spreadsheet/' },
        ],
      },
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com' },
    ],
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2026 Kakobuy Spreadsheet Guide',
    },
  },
  
  sitemap: {
    hostname: 'https://kakobuy-7zh.pages.dev',
  },
  
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  },
})