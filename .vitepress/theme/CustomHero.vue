<script setup>
import { useData } from 'vitepress'

const { frontmatter } = useData()
const actions = frontmatter.value.hero?.actions || []

function handleAction(action) {
  if (action.text === 'Open Kakobuy Spreadsheet') {
    window.open('https://docs.google.com/spreadsheets/d/1Vs190yOAkrQ04LQb6l_Lnr_oTA0ny4CI3PJ_0B4_6zs/edit?gid=1903531254#gid=1903531254', '_blank')
  } else if (action.link) {
    window.location.href = action.link
  }
}
</script>

<template>
  <section class="VPHero has-image">
    <div class="container">
      <div class="main">
        <h1 class="name">
          <slot name="home-hero-name">{{ frontmatter.hero.name }}</slot>
        </h1>
        <p class="text">
          <slot name="home-hero-text">{{ frontmatter.hero.text }}</slot>
        </p>
        <p class="tagline">
          <slot name="home-hero-tagline">{{ frontmatter.hero.tagline }}</slot>
        </p>
        <div v-if="actions.length" class="actions">
          <div v-for="action in actions" :key="action.text" class="action">
            <button
              :class="['VPButton', action.theme || 'default']"
              @click="handleAction(action)"
            >
              {{ action.text }}
            </button>
          </div>
        </div>
      </div>
      <div class="image">
        <div class="image-container">
          <slot name="home-hero-image">
            <img
              v-if="frontmatter.hero?.image?.src"
              :src="frontmatter.hero.image.src"
              :alt="frontmatter.hero.image.alt || ''"
              loading="lazy"
            />
          </slot>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.VPHero {
  margin-top: calc((var(--vp-nav-height) + var(--vp-layout-top-height, 0px)) * -1);
  padding: calc(var(--vp-nav-height) + var(--vp-layout-top-height, 0px) + 48px) 24px 48px;
}

@media (min-width: 640px) {
  .VPHero {
    padding: calc(var(--vp-nav-height) + var(--vp-layout-top-height, 0px) + 80px) 48px 64px;
  }
}

@media (min-width: 960px) {
  .VPHero {
    padding: calc(var(--vp-nav-height) + var(--vp-layout-top-height, 0px) + 80px) 48px 64px;
  }
}

.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  max-width: 1152px;
}

@media (min-width: 960px) {
  .container {
    flex-direction: row;
  }
}

.main {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  flex: 1;
}

@media (min-width: 960px) {
  .main {
    align-items: flex-start;
    text-align: left;
    padding-top: 40px;
  }
}

.name {
  font-size: 40px;
  font-weight: 700;
  line-height: 1.2;
  color: var(--vp-c-text-1);
  margin: 0;
}

@media (min-width: 640px) {
  .name {
    font-size: 56px;
  }
}

@media (min-width: 960px) {
  .name {
    font-size: 64px;
  }
}

.text {
  font-size: 20px;
  font-weight: 600;
  line-height: 1.4;
  color: var(--vp-c-text-1);
  margin: 12px 0 0;
}

@media (min-width: 640px) {
  .text {
    font-size: 24px;
  }
}

.tagline {
  font-size: 16px;
  line-height: 1.6;
  color: var(--vp-c-text-2);
  margin: 12px 0 0;
  max-width: 568px;
}

@media (min-width: 640px) {
  .tagline {
    font-size: 18px;
  }
}

.actions {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 12px;
  margin: 32px 0 0;
}

@media (min-width: 960px) {
  .actions {
    justify-content: flex-start;
  }
}

.action {
  flex-shrink: 0;
}

.VPButton {
  display: inline-block;
  border-radius: 20px;
  padding: 0 20px;
  line-height: 40px;
  font-size: 14px;
  font-weight: 500;
  white-space: nowrap;
  transition: all 0.2s;
  cursor: pointer;
  border: none;
  text-decoration: none;
}

.VPButton.brand {
  color: #fff;
  background-color: var(--vp-c-brand-1);
}

.VPButton.brand:hover {
  background-color: var(--vp-c-brand-2);
}

.VPButton.alt {
  color: var(--vp-c-text-1);
  background-color: var(--vp-c-gray-soft-bg);
}

.VPButton.alt:hover {
  background-color: var(--vp-c-gray-mute-bg);
}

.image {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  order: -1;
  margin-bottom: 24px;
}

@media (min-width: 960px) {
  .image {
    order: 1;
    margin-bottom: 0;
    padding-top: 40px;
  }
}

.image-container {
  width: 100%;
  max-width: 460px;
}

.image-container img {
  width: 100%;
  height: auto;
  border-radius: 12px;
}
</style>
