<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRouter } from 'vitepress'

const router = useRouter()

// Season configuration - extensible for future categories
const SEASONS = {
  all: { label: 'All', icon: '', color: '#667eea', bg: '#f0f0ff' },
  spring: { label: 'Spring', icon: '🌸', color: '#22c55e', bg: '#f0fdf4' },
  summer: { label: 'Summer', icon: '☀️', color: '#f59e0b', bg: '#fffbeb' },
  autumn: { label: 'Autumn', icon: '🍁', color: '#ea580c', bg: '#fff7ed' },
  winter: { label: 'Winter', icon: '❄️', color: '#3b82f6', bg: '#eff6ff' }
}

// Article data with season metadata - extensible for future dimensions (brand, type, batch, etc.)
const guides = [
  {
    title: 'Kakobuy Spreadsheets Spring Style Guide 2026',
    url: '/posts/spring-style/',
    description: 'Master the art of spring mens fashion with CleanFit layering, lightweight jackets, and versatile outfit formulas.',
    date: '2026',
    season: 'spring',
    tags: ['CleanFit', 'Layering']
  },
  {
    title: 'Kakobuy Spreadsheets Summer Streetwear Guide 2026',
    url: '/posts/summer-style/',
    description: 'Beat the heat with CityBoy aesthetics, heavyweight tees, and cargo shorts styling tricks for the ultimate summer look.',
    date: '2026',
    season: 'summer',
    tags: ['CityBoy', 'Streetwear']
  },
  {
    title: 'Kakobuy Spreadsheets Autumn Fashion Guide 2026',
    url: '/posts/autumn-style/',
    description: 'Embrace fall with earth tone palettes, heavyweight work shirts, vintage Americana style, and layering essentials.',
    date: '2026',
    season: 'autumn',
    tags: ['Workwear', 'Earth Tones']
  },
  {
    title: 'Kakobuy Spreadsheets Winter Techwear Guide 2026',
    url: '/posts/winter-style/',
    description: 'Stay warm and stylish with Gorpcore techwear, premium puffer jackets, and high-street layering techniques.',
    date: '2026',
    season: 'winter',
    tags: ['Techwear', 'Gorpcore']
  }
]

const hotArticles = [
  { title: 'Kakobuy Spreadsheets Spring Style Guide 2026', url: '/posts/spring-style/' },
  { title: 'Kakobuy Spreadsheets Summer Streetwear Guide 2026', url: '/posts/summer-style/' },
  { title: 'Kakobuy Spreadsheets Autumn Fashion Guide 2026', url: '/posts/autumn-style/' },
  { title: 'Kakobuy Spreadsheets Winter Techwear Guide 2026', url: '/posts/winter-style/' }
]

// Active season filter - persisted in localStorage
const activeSeason = ref('all')

// Filtered guides
const filteredGuides = computed(() => {
  if (activeSeason.value === 'all') return guides
  return guides.filter(g => g.season === activeSeason.value)
})

// Check if there are no results
const hasNoResults = computed(() => filteredGuides.value.length === 0)

// Navigate to article
const navigateTo = (url) => {
  router.go(url)
}

// Set active season
const setSeason = (season) => {
  activeSeason.value = season
  try {
    localStorage.setItem('kakobuy_posts_season', season)
  } catch (e) {}
}

// Restore saved season on mount
onMounted(() => {
  try {
    const saved = localStorage.getItem('kakobuy_posts_season')
    if (saved && SEASONS[saved]) {
      activeSeason.value = saved
    }
  } catch (e) {}
})
</script>

<template>
  <div class="posts-layout">
    <div class="posts-main">
      <h1>All Guides</h1>
      <p class="posts-intro">Welcome to our comprehensive collection of Kakobuy spreadsheet guides. Find detailed tutorials, tips, and insights to help you make the most of this powerful cross-border e-commerce tool.</p>

      <!-- Season Navigation -->
      <nav class="season-nav" role="tablist" aria-label="Season filter">
        <button
          v-for="(config, key) in SEASONS"
          :key="key"
          :class="['season-tab', { active: activeSeason === key }]"
          :style="activeSeason === key ? { borderColor: config.color, color: config.color } : {}"
          @click="setSeason(key)"
          role="tab"
          :aria-selected="activeSeason === key"
          :aria-label="config.label"
        >
          <span v-if="config.icon" class="season-icon">{{ config.icon }}</span>
          <span>{{ config.label }}</span>
        </button>
      </nav>

      <!-- Guide Cards with transitions -->
      <TransitionGroup name="card-list" tag="div" class="guide-cards">
        <div
          v-for="(guide, index) in filteredGuides"
          :key="guide.url"
          class="guide-card"
          @click="navigateTo(guide.url)"
          style="cursor: pointer;"
        >
          <div class="guide-card-header">
            <span
              class="season-badge"
              :style="{ backgroundColor: SEASONS[guide.season].bg, color: SEASONS[guide.season].color }"
            >
              {{ SEASONS[guide.season].icon }} {{ SEASONS[guide.season].label }}
            </span>
            <span class="guide-date">{{ guide.date }}</span>
          </div>
          <h2>{{ guide.title }}</h2>
          <p class="guide-card-description">{{ guide.description }}</p>
          <div class="guide-card-tags">
            <span v-for="tag in guide.tags" :key="tag" class="guide-tag">{{ tag }}</span>
          </div>
          <span class="guide-card-link">Read Full Guide →</span>
        </div>
      </TransitionGroup>

      <!-- No results message -->
      <div v-if="hasNoResults" class="no-results">
        <p>No guides found for this season.</p>
        <button class="reset-btn" @click="setSeason('all')">Show All Guides</button>
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

<style scoped>
/* Season Navigation */
.season-nav {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin: 24px 0;
  padding: 16px;
  background: var(--vp-c-bg-soft);
  border-radius: 12px;
}

.season-tab {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 8px 16px;
  min-height: 44px;
  min-width: 44px;
  border: 2px solid transparent;
  border-radius: 8px;
  background: var(--vp-c-bg);
  color: var(--vp-c-text-2);
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  white-space: nowrap;
}

.season-tab:hover {
  background: var(--vp-c-bg-mute);
  transform: translateY(-1px);
}

.season-tab.active {
  font-weight: 600;
  background: var(--vp-c-bg);
}

.season-icon {
  font-size: 16px;
}

/* Guide Cards */
.guide-cards {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.guide-card {
  padding: 20px;
  background: var(--vp-c-bg);
  border: 1px solid var(--vp-c-divider);
  border-radius: 12px;
  transition: all 0.3s ease;
}

.guide-card:hover {
  border-color: var(--vp-c-brand-1);
  box-shadow: 0 4px 12px rgba(102, 126, 234, 0.1);
  transform: translateY(-2px);
}

.guide-card-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 12px;
}

.season-badge {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 4px 10px;
  border-radius: 6px;
  font-size: 12px;
  font-weight: 600;
}

.guide-date {
  font-size: 12px;
  color: var(--vp-c-text-3);
}

.guide-card h2 {
  font-size: 18px;
  font-weight: 600;
  margin: 0 0 8px;
  color: var(--vp-c-text-1);
  line-height: 1.4;
}

.guide-card-description {
  font-size: 14px;
  color: var(--vp-c-text-2);
  line-height: 1.6;
  margin: 0 0 12px;
}

.guide-card-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-bottom: 12px;
}

.guide-tag {
  padding: 2px 8px;
  background: var(--vp-c-bg-soft);
  border-radius: 4px;
  font-size: 12px;
  color: var(--vp-c-text-2);
}

.guide-card-link {
  font-size: 14px;
  font-weight: 500;
  color: var(--vp-c-brand-1);
}

/* No Results */
.no-results {
  text-align: center;
  padding: 48px 24px;
  color: var(--vp-c-text-2);
}

.no-results p {
  margin: 0 0 16px;
  font-size: 16px;
}

.reset-btn {
  padding: 8px 20px;
  background: var(--vp-c-brand-1);
  color: #fff;
  border: none;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: background 0.2s;
}

.reset-btn:hover {
  background: var(--vp-c-brand-2);
}

/* Card List Transitions */
.card-list-move,
.card-list-enter-active,
.card-list-leave-active {
  transition: all 0.3s ease;
}

.card-list-leave-active {
  position: absolute;
}

.card-list-enter-from,
.card-list-leave-to {
  opacity: 0;
  transform: translateY(10px);
}

/* Mobile Responsive */
@media (max-width: 768px) {
  .season-nav {
    overflow-x: auto;
    flex-wrap: nowrap;
    -webkit-overflow-scrolling: touch;
    scrollbar-width: none;
    padding: 12px;
  }

  .season-nav::-webkit-scrollbar {
    display: none;
  }

  .season-tab {
    flex-shrink: 0;
    padding: 8px 14px;
  }

  .guide-card {
    padding: 16px;
  }

  .guide-card h2 {
    font-size: 16px;
  }
}

/* Sidebar */
.posts-sidebar {
  position: sticky;
  top: 80px;
  align-self: flex-start;
}

.posts-sidebar h3 {
  font-size: 16px;
  font-weight: 600;
  margin: 0 0 12px;
  color: var(--vp-c-text-1);
}

.hot-articles-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.hot-articles-list li {
  margin-bottom: 8px;
}

.hot-articles-list a {
  font-size: 14px;
  color: var(--vp-c-text-2);
  text-decoration: none;
  transition: color 0.2s;
}

.hot-articles-list a:hover {
  color: var(--vp-c-brand-1);
}

/* Layout */
.posts-layout {
  display: grid;
  grid-template-columns: 1fr 240px;
  gap: 48px;
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 0;
}

@media (max-width: 960px) {
  .posts-layout {
    grid-template-columns: 1fr;
    gap: 32px;
  }

  .posts-sidebar {
    position: static;
  }
}

.posts-main h1 {
  font-size: 32px;
  font-weight: 700;
  margin: 0 0 12px;
  color: var(--vp-c-text-1);
}

.posts-intro {
  font-size: 16px;
  color: var(--vp-c-text-2);
  line-height: 1.6;
  margin: 0 0 24px;
}
</style>
