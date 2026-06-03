import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Kakobuy Spreadsheet Guide',
  description: 'Your ultimate guide to Kakobuy spreadsheets for cross-border e-commerce',
  base: '/',
  lang: 'en-US',
  lastUpdated: true,
  cleanUrls: true,
  ignoreDeadLinks: true,
  
  head: [
    ['meta', { name: 'theme-color', content: '#667eea' }],
    ['meta', { name: 'robots', content: 'index,follow' }],
    ['meta', { name: 'googlebot', content: 'index,follow' }],
    ['link', { rel: 'icon', href: '/favicon.ico', type: 'image/x-icon' }],
    
    // Google Analytics 4
    ['script', { async: '', src: 'https://www.googletagmanager.com/gtag/js?id=G-ZQJ8BWRZZY' }],
    ['script', {}, `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-ZQJ8BWRZZY');
    `],
  ],
  
  themeConfig: {
    logo: {
      src: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><text y=".9em" font-size="90">📊</text></svg>',
    },
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Other Platforms', link: '/platforms/' },
      { text: 'Browse Guides', link: '/posts/' },
      { text: 'Spreadsheet', link: 'https://docs.google.com/spreadsheets/d/1Vs190yOAkrQ04LQb6l_Lnr_oTA0ny4CI3PJ_0B4_6zs/edit?gid=1903531254#gid=1903531254', target: '_blank' },
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
    footer: {
      message: 'Kakobuy Spreadsheet Guide - Your trusted resource for cross-border e-commerce',
      copyright: 'Copyright © 2026 Kakobuy Spreadsheet Guide',
    },
    // 启用上一篇/下一篇导航
    docFooter: {
      prev: true,
      next: true,
    },
    // 启用目录（TOC）
    outline: {
      level: 'deep',
      label: 'On this page',
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
