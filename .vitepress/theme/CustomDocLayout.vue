<script setup>
import { useData, useRoute, withBase } from 'vitepress'
import { computed } from 'vue'

const { frontmatter, page } = useData()
const route = useRoute()

const allPosts = [
  {
    title: 'Gutefrage Kakobuy Spreadsheet',
    desc: 'Everything you need to know about the Kakobuy spreadsheet discussed on Gutefrage.',
    path: '/posts/gutefrage-kakobuy-spreadsheet/',
  },
  {
    title: 'Quora Kakobuy Spreadsheet',
    desc: 'Comprehensive guide to the Kakobuy spreadsheet featured on Quora.',
    path: '/posts/quora-kakobuy-spreadsheet/',
  },
  {
    title: 'Reddit Kakobuy Spreadsheet',
    desc: 'Deep dive into the Kakobuy spreadsheet discussions from Reddit communities.',
    path: '/posts/reddit-kakobuy-spreadsheet/',
  },
]

const hotPosts = computed(() => allPosts.filter(p => p.path !== route.path))
const relatedPosts = computed(() => allPosts.filter(p => p.path !== route.path))
</script>

<template>
  <div class="custom-doc-layout">
    <!-- Title bar -->
    <header class="custom-doc-header">
      <h1 v-if="frontmatter.title">{{ frontmatter.title }}</h1>
    </header>

    <!-- Three-column body -->
    <div class="custom-doc-body">
      <!-- Left sidebar: Brand keywords -->
      <aside class="custom-doc-left">
        <div class="side-panel">
          <h3 class="side-panel-title">Brand Keywords</h3>
          <div class="side-panel-content">
            <div v-for="tag in frontmatter.brandKeywords" :key="tag" class="tag-item">
              {{ tag }}
            </div>
          </div>
        </div>
      </aside>

      <!-- Main content -->
      <main class="custom-doc-content">
        <Content />
      </main>

      <!-- Right sidebar: Hot articles -->
      <aside class="custom-doc-right">
        <div class="side-panel">
          <h3 class="side-panel-title">Hot Articles</h3>
          <div class="side-panel-content">
            <a
              v-for="post in hotPosts"
              :key="post.path"
              :href="post.path"
              class="hot-article-item"
            >
              <span class="hot-article-title">{{ post.title }}</span>
              <span class="hot-article-desc">{{ post.desc }}</span>
            </a>
          </div>
        </div>
      </aside>
    </div>

    <!-- Bottom: Related articles -->
    <footer class="custom-doc-footer">
      <div class="side-panel">
        <h3 class="side-panel-title">You Might Also Like</h3>
        <div class="related-grid">
          <a
            v-for="post in relatedPosts"
            :key="post.path"
            :href="post.path"
            class="related-card"
          >
            <span class="related-title">{{ post.title }}</span>
            <span class="related-desc">{{ post.desc }}</span>
          </a>
        </div>
      </div>
    </footer>
  </div>
</template>

<style scoped>
.custom-doc-layout {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
}

/* Header */
.custom-doc-header {
  padding: 2rem 0 1.5rem;
  border-bottom: 1px solid #e0e0e0;
  margin-bottom: 2rem;
}

.dark .custom-doc-header {
  border-bottom-color: #3a3a4e;
}

.custom-doc-header h1 {
  font-size: 2.2rem;
  font-weight: 800;
  color: var(--vp-c-text-1);
  margin: 0;
}

/* Body: three columns */
.custom-doc-body {
  display: grid;
  grid-template-columns: 200px 1fr 220px;
  gap: 2rem;
  align-items: start;
}

/* Left sidebar */
.custom-doc-left {
  position: sticky;
  top: 5rem;
}

/* Right sidebar */
.custom-doc-right {
  position: sticky;
  top: 5rem;
}

/* Side panel */
.side-panel {
  background: white;
  border-radius: 12px;
  padding: 1.25rem;
  box-shadow: 0 2px 8px rgba(0,0,0,0.06);
}

.dark .side-panel {
  background: #252540;
}

.side-panel-title {
  font-size: 1rem;
  font-weight: 700;
  color: #667eea;
  margin: 0 0 1rem;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid #667eea;
}

.side-panel-content {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

/* Tag items (left sidebar) */
.tag-item {
  padding: 0.5rem 0.75rem;
  background: linear-gradient(135deg, #667eea15 0%, #764ba215 100%);
  border-radius: 8px;
  font-size: 0.85rem;
  font-weight: 500;
  color: var(--vp-c-text-1);
}

.dark .tag-item {
  background: linear-gradient(135deg, #667eea30 0%, #764ba230 100%);
}

/* Hot article items (right sidebar) */
.hot-article-item {
  display: block;
  padding: 0.75rem;
  border-radius: 8px;
  text-decoration: none;
  transition: background 0.2s;
  border: 1px solid #e8e8e8;
}

.dark .hot-article-item {
  border-color: #3a3a4e;
}

.hot-article-item:hover {
  background: #667eea10;
}

.hot-article-title {
  display: block;
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--vp-c-text-1);
  margin-bottom: 0.25rem;
}

.hot-article-desc {
  display: block;
  font-size: 0.75rem;
  color: var(--vp-c-text-2);
  line-height: 1.4;
}

/* Main content */
.custom-doc-content {
  min-width: 0;
}

/* Footer: related articles */
.custom-doc-footer {
  margin-top: 3rem;
  padding: 2rem 0;
  border-top: 1px solid #e0e0e0;
}

.dark .custom-doc-footer {
  border-top-color: #3a3a4e;
}

.related-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1rem;
}

.related-card {
  display: flex;
  flex-direction: column;
  padding: 1.25rem;
  border-radius: 12px;
  text-decoration: none;
  background: linear-gradient(135deg, #667eea08 0%, #764ba208 100%);
  border: 1px solid #e0e0e0;
  transition: transform 0.2s, box-shadow 0.2s;
}

.dark .related-card {
  border-color: #3a3a4e;
  background: linear-gradient(135deg, #667eea20 0%, #764ba220 100%);
}

.related-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 6px 20px rgba(102, 126, 234, 0.15);
}

.related-title {
  font-size: 1rem;
  font-weight: 600;
  color: var(--vp-c-text-1);
  margin-bottom: 0.35rem;
}

.related-desc {
  font-size: 0.85rem;
  color: var(--vp-c-text-2);
  line-height: 1.4;
}

/* Responsive */
@media (max-width: 768px) {
  .custom-doc-body {
    grid-template-columns: 1fr;
  }

  .custom-doc-left,
  .custom-doc-right {
    position: static;
  }

  .related-grid {
    grid-template-columns: 1fr;
  }
}
</style>
