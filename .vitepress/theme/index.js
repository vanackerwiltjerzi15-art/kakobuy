import DefaultTheme from 'vitepress/theme'
import { h } from 'vue'
import './custom.css'

const marqueeData = [
  { text: 'European users have placed their orders' },
  { text: 'American users have placed their orders' },
  { text: 'British users have placed their orders' },
  { text: 'Japanese users have placed their orders' },
  { text: 'Korean users have placed their orders' },
  { text: 'Australian users have placed their orders' },
  { text: 'Canadian users have placed their orders' },
  { text: 'Singaporean users have placed their orders' },
  { text: 'Malaysian users have placed their orders' },
  { text: 'Thai users have placed their orders' },
  { text: 'German users have placed their orders' },
  { text: 'French users have placed their orders' },
  { text: 'Brazilian users have placed their orders' },
  { text: 'Indian users have placed their orders' },
  { text: 'United Arab Emirates users have placed their orders' },
  { text: 'Nigerian users have placed their orders' },
  { text: 'Russian users have placed their orders' },
  { text: 'Indonesian users have placed their orders' },
  { text: 'Filipino users have placed their orders' },
  { text: 'Vietnamese users have placed their orders' },
]

function createMarqueeContent() {
  const items = []
  marqueeData.forEach((item, index) => {
    items.push(
      h('div', { class: 'marquee-item', key: `item-${index}` }, [
        h('span', { class: 'text' }, item.text)
      ])
    )
    items.push(
      h('span', { class: 'marquee-separator', key: `sep-${index}` }, '✦')
    )
  })
  return items
}

export default {
  ...DefaultTheme,
  Layout() {
    const fullMarqueeContent = [...createMarqueeContent(), ...createMarqueeContent()]
    
    return h(DefaultTheme.Layout, null, {
      'layout-top': () => h('div', { class: 'marquee-container' }, [
        h('div', { class: 'marquee-track' }, fullMarqueeContent)
      ])
    })
  },
}
