import DefaultTheme from 'vitepress/theme'
import { h } from 'vue'
import './custom.css'

const marqueeData = [
  { flag: '🇪🇺', text: 'European users have placed their orders' },
  { flag: '🇺🇸', text: 'American users have placed their orders' },
  { flag: '🇬🇧', text: 'UK users have placed their orders' },
  { flag: '🇯🇵', text: 'Japanese users have placed their orders' },
  { flag: '🇰🇷', text: 'Korean users have placed their orders' },
  { flag: '🇦🇺', text: 'Australian users have placed their orders' },
  { flag: '🇨🇦', text: 'Canadian users have placed their orders' },
  { flag: '🇸🇬', text: 'Singaporean users have placed their orders' },
  { flag: '🇲🇾', text: 'Malaysian users have placed their orders' },
  { flag: '🇹🇭', text: 'Thai users have placed their orders' },
  { flag: '🇩🇪', text: 'German users have placed their orders' },
  { flag: '🇫🇷', text: 'French users have placed their orders' },
  { flag: '🇧🇷', text: 'Brazilian users have placed their orders' },
  { flag: '🇮🇳', text: 'Indian users have placed their orders' },
  { flag: '🇦🇪', text: 'UAE users have placed their orders' },
  { flag: '🇳🇬', text: 'Nigerian users have placed their orders' },
  { flag: '🇷🇺', text: 'Russian users have placed their orders' },
  { flag: '🇮🇩', text: 'Indonesian users have placed their orders' },
  { flag: '🇵🇭', text: 'Filipino users have placed their orders' },
  { flag: '🇻🇳', text: 'Vietnamese users have placed their orders' },
]

function createMarqueeContent() {
  const items = []
  marqueeData.forEach((item, index) => {
    items.push(
      h('div', { class: 'marquee-item', key: `item-${index}` }, [
        h('span', { class: 'flag' }, item.flag),
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
