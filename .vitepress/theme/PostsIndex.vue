<script setup>
import { useRouter } from 'vitepress'

const router = useRouter()

const guides = [
  {
    title: '🌸 Spring Style Guide 2026',
    url: '/posts/spring-style/',
    description: 'Master the art of spring mens fashion with CleanFit layering, lightweight jackets, and versatile outfit formulas.',
    date: '2026',
    tags: ['Spring', 'CleanFit', 'Layering']
  },
  {
    title: '☀️ Summer Streetwear Guide 2026',
    url: '/posts/summer-style/',
    description: 'Beat the heat with CityBoy aesthetics, heavyweight tees, and cargo shorts styling tricks for the ultimate summer look.',
    date: '2026',
    tags: ['Summer', 'CityBoy', 'Streetwear']
  },
  {
    title: '🍁 Autumn Fashion Guide 2026',
    url: '/posts/autumn-style/',
    description: 'Embrace fall with earth tone palettes, heavyweight work shirts, vintage Americana style, and layering essentials.',
    date: '2026',
    tags: ['Autumn', 'Workwear', 'Earth Tones']
  },
  {
    title: '❄️ Winter Techwear Guide 2026',
    url: '/posts/winter-style/',
    description: 'Stay warm and stylish with Gorpcore techwear, premium puffer jackets, and high-street layering techniques.',
    date: '2026',
    tags: ['Winter', 'Techwear', 'Gorpcore']
  },
  {
    title: '📊 Gutefrage Kakobuy Spreadsheet',
    url: '/posts/gutefrage-kakobuy-spreadsheet/',
    description: "Everything you need to know about the Kakobuy spreadsheet discussed on Gutefrage, Germany's largest Q&A platform.",
    date: '2026',
    tags: ['Gutefrage', 'Spreadsheet', 'German Community']
  },
  {
    title: '📊 Quora Kakobuy Spreadsheet',
    url: '/posts/quora-kakobuy-spreadsheet/',
    description: 'Comprehensive guide to the Kakobuy spreadsheet featured on Quora, with insights from international sellers.',
    date: '2026',
    tags: ['Quora', 'Spreadsheet', 'International']
  },
  {
    title: '📊 Reddit Kakobuy Spreadsheet',
    url: '/posts/reddit-kakobuy-spreadsheet/',
    description: 'Deep dive into the Kakobuy spreadsheet discussions from Reddit communities like r/ecommerce and r/dropshipping.',
    date: '2026',
    tags: ['Reddit', 'Spreadsheet', 'Community Discussion']
  }
]

const hotArticles = [
  { title: 'Spring Style Guide 2026 - CleanFit & Layering', url: '/posts/spring-style/' },
  { title: 'Summer Streetwear Guide 2026 - CityBoy Aesthetics', url: '/posts/summer-style/' },
  { title: 'Autumn Fashion Guide 2026 - Earth Tones & Workwear', url: '/posts/autumn-style/' },
  { title: 'Winter Techwear Guide 2026 - Gorpcore & Puffers', url: '/posts/winter-style/' },
  { title: 'Gutefrage Kakobuy Spreadsheet - Complete Guide', url: '/posts/gutefrage-kakobuy-spreadsheet/' },
  { title: 'Quora Kakobuy Spreadsheet - International Guide', url: '/posts/quora-kakobuy-spreadsheet/' },
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
