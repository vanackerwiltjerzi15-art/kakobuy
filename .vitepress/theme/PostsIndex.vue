<script setup>
import { useRouter } from 'vitepress'

const router = useRouter()

const guides = [
  {
    title: ' Gutefrage Kakobuy Spreadsheet',
    url: '/posts/gutefrage-kakobuy-spreadsheet/',
    description: "Everything you need to know about the Kakobuy spreadsheet discussed on Gutefrage, Germany's largest Q&A platform.",
    date: 'May 27, 2026',
    tags: ['Gutefrage', 'Spreadsheet', 'German Community']
  },
  {
    title: ' Quora Kakobuy Spreadsheet',
    url: '/posts/quora-kakobuy-spreadsheet/',
    description: 'Comprehensive guide to the Kakobuy spreadsheet featured on Quora, with insights from international sellers.',
    date: 'May 27, 2026',
    tags: ['Quora', 'Spreadsheet', 'International']
  },
  {
    title: ' Reddit Kakobuy Spreadsheet',
    url: '/posts/reddit-kakobuy-spreadsheet/',
    description: 'Deep dive into the Kakobuy spreadsheet discussions from Reddit communities like r/ecommerce and r/dropshipping.',
    date: 'May 27, 2026',
    tags: ['Reddit', 'Spreadsheet', 'Community Discussion']
  }
]

const hotArticles = [
  { title: 'Gutefrage Kakobuy Spreadsheet - Complete Guide 2026', url: '/posts/gutefrage-kakobuy-spreadsheet/' },
  { title: "Quora Kakobuy Spreadsheet - International Seller's Guide", url: '/posts/quora-kakobuy-spreadsheet/' },
  { title: 'Reddit Kakobuy Spreadsheet - Community Insights', url: '/posts/reddit-kakobuy-spreadsheet/' }
]

const navigateTo = (url) => {
  router.go(url)
}
</script>

<template>
  <div class="posts-layout">
    <div class="posts-main">
      <h1>All Guides</h1>
      <p class="posts-intro">Welcome to our comprehensive collection of Kakobuy spreadsheet guides. Find detailed tutorials, tips, and insights to help you make the most of this powerful cross-border e-commerce tool.</p>

      <div v-for="(guide, index) in guides" :key="index" class="guide-card" @click="navigateTo(guide.url)" style="cursor: pointer;">
        <h2>{{ guide.title }}</h2>
        <p class="guide-card-description">{{ guide.description }}</p>
        <span class="guide-card-link">Read Full Guide →</span>
      </div>
    </div>

    <aside class="posts-sidebar">
      <h3>Hot Articles</h3>
      <ul class="hot-articles-list">
        <li v-for="(article, index) in hotArticles" :key="index">
          <a :href="article.url">{{ article.title }}</a>
        </li>
      </ul>
    </aside>
  </div>
</template>
