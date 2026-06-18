/**
 * Kakobuy Article Generator
 * 
 * Usage: node scripts/generate-article.js <series-keyword>
 * 
 * Example: node scripts/generate-article.js streetwear
 * 
 * This script generates:
 * 1. Article index.md file
 * 2. Media resource management file (media.md)
 * 3. Waits for user confirmation before git push
 */

const fs = require('fs')
const path = require('path')
const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

const ROOT_DIR = path.resolve(__dirname, '..')
const POSTS_DIR = path.join(ROOT_DIR, 'posts')

// ============================================
// Article Content Templates
// ============================================

const ARTICLE_TEMPLATES = {
  // Season-based templates
  spring: {
    icon: '🌸',
    color: '#22c55e',
    title: (kw) => `Kakobuy Spreadsheets 2026 Mens Spring ${kw} Guide: CleanFit & Light Layering | Kakobuy`,
    description: (kw) => `Master the art of spring mens fashion with our ${kw} layering guide. Discover lightweight jackets, essential hoodies, and versatile outfit formulas for the 2026 season.`,
    tags: (kw) => [`kakobuy spring 2026`, `mens spring fashion`, `${kw} spring`, `lightweight jackets`, `spring ${kw}`],
    intro: (kw) => `Spring is the ultimate transitional season for mens fashion. The key to nailing your spring ${kw} wardrobe is mastering the art of light layering—combining breathable base pieces with versatile outerwear that adapts to unpredictable weather. Whether you're heading to class, the office, or a weekend outing, these outfit formulas will keep you looking sharp all season long.`,
    trends: [
      {
        title: (kw) => `Trend #1: The CleanFit Spring ${kw} Essentials`,
        content: (kw) => `CleanFit continues to dominate mens fashion in 2026. This ${kw} aesthetic is built on perfectly proportioned basics, neutral color palettes, and premium fabric quality.\n\n- **The Formula:** A lightweight crewneck sweatshirt layered over a crisp white tee, paired with straight-leg chino pants and minimalist white sneakers.\n- **Why it works:** The clean lines and muted tones create a polished, put-together look that transitions seamlessly from casual to smart-casual settings.\n- **Key Pieces:** Boxy-fit crewnecks, slim-straight chinos, low-profile leather sneakers.`
      },
      {
        title: () => `Trend #2: The Light Layering Technique`,
        content: () => `Spring weather can shift from chilly mornings to warm afternoons. Smart layering is your best defense.\n\n- **The Formula:** A lightweight bomber jacket or unstructured blazer worn over a fine-gauge knit polo, paired with tapered trousers and suede loafers.\n- **Why it works:** Each layer can be added or removed as temperatures change, while maintaining a cohesive silhouette throughout the day.\n- **Key Pieces:** Nylon bomber jackets, knit polos, tapered wool-blend trousers.`
      },
      {
        title: () => `Trend #3: The Sporty Casual Hybrid`,
        content: () => `Athleisure meets streetwear in this versatile spring look that prioritizes comfort without sacrificing style.\n\n- **The Formula:** A technical windbreaker layered over a graphic tee, paired with jogger-style track pants and chunky retro sneakers.\n- **Why it works:** The combination of performance fabrics and streetwear silhouettes creates a modern, dynamic aesthetic perfect for active lifestyles.\n- **Key Pieces:** Water-resistant windbreakers, premium cotton tees, tapered joggers.`
      }
    ],
    essentials: [
      { name: 'Lightweight Bomber Jacket', desc: 'Perfect spring outerwear' },
      { name: 'Premium Crewneck Sweatshirt', desc: 'Essential layering piece' },
      { name: 'Straight-Leg Chino Pants', desc: 'Versatile bottom essential' }
    ],
    outfitTable: {
      headers: ['Occasion', 'Top Layer', 'Base Layer', 'Bottoms', 'Footwear'],
      rows: [
        ['Casual Weekend', 'Bomber Jacket', 'Graphic Tee', 'Cargo Pants', 'Retro Sneakers'],
        ['Smart Casual', 'Unstructured Blazer', 'Knit Polo', 'Chino Pants', 'Suede Loafers'],
        ['Campus/Office', 'Crewneck Sweatshirt', 'White Tee', 'Straight Trousers', 'White Sneakers'],
        ['Active Day', 'Windbreaker', 'Performance Tee', 'Joggers', 'Chunky Sneakers']
      ]
    }
  },

  summer: {
    icon: '☀️',
    color: '#f59e0b',
    title: (kw) => `Kakobuy Spreadsheets 2026 Mens Summer ${kw} Guide: CleanFit & CityBoy Aesthetics | Kakobuy`,
    description: (kw) => `Beat the heat without sacrificing your style. Discover the hottest 2026 mens summer ${kw} fashion trends, heavyweight tee recommendations, and cargo shorts styling tricks.`,
    tags: (kw) => [`kakobuy summer 2026`, `mens summer fashion`, `${kw} style`, `heavyweight tee`, `summer ${kw}`],
    intro: (kw) => `When it comes to mens summer ${kw} fashion, the ultimate goal is balancing comfort with a sharp silhouette. You don't need complicated layers to stand out—just the right cuts, proportions, and high-quality essential pieces.\n\nHere are the top two aesthetics dominating streetwear this season and the exact items you need to pull them off.`,
    trends: [
      {
        title: (kw) => `Trend #1: The CleanFit Minimalist ${kw} Look`,
        content: (kw) => `CleanFit is all about perfectly fitting basics, muted color palettes, and premium textures.\n\n- **The Formula:** A crisp boxy-fit tee paired with tailored straight-leg trousers or clean canvas shorts.\n- **Why it works:** It looks effortlessly expensive and sharp without trying too hard.\n- **Key Pieces:** 260g heavyweight tees, tailored shorts, minimalist sandals or clean sneakers.`
      },
      {
        title: () => `Trend #2: The CityBoy Oversized Vibe`,
        content: () => `Rooted in Japanese street culture, the CityBoy style leans heavily into relaxed, voluminous shapes.\n\n- **The Formula:** An oversized heavyweight drop-shoulder t-shirt, baggy cargo utility shorts, crew socks, and retro sneakers.\n- **Why it works:** It creates an incredible streetwear silhouette while keeping you completely cool and comfortable.\n- **Key Pieces:** Drop-shoulder tees, wide-leg cargo shorts, thick crew socks, vintage-inspired sneakers.`
      },
      {
        title: () => `Trend #3: The Resort Casual Approach`,
        content: () => `For those summer days when you want to look polished but still feel the breeze.\n\n- **The Formula:** A lightweight linen button-up shirt worn open over a fitted tank top, paired with tailored swim shorts and leather slides.\n- **Why it works:** It bridges the gap between beach-ready and street-ready, perfect for summer outings and vacations.\n- **Key Pieces:** Linen shirts, fitted tanks, tailored shorts, leather slides.`
      }
    ],
    essentials: [
      { name: '260g Heavyweight Retro Tee', desc: 'Must-Have Basic' },
      { name: 'Lightweight Utility Cargo Shorts', desc: 'Trending Item' },
      { name: 'Linen Button-Up Shirt', desc: 'Resort Essential' }
    ],
    outfitTable: {
      headers: ['Occasion', 'Top', 'Bottoms', 'Footwear', 'Accessories'],
      rows: [
        ['Street Casual', 'Heavyweight Boxy Tee', 'Cargo Shorts', 'Retro Sneakers', 'Cap + Chain'],
        ['CleanFit Daily', 'Fitted Polo Tee', 'Tailored Shorts', 'Clean Sneakers', 'Minimal Watch'],
        ['Beach/Resort', 'Linen Shirt + Tank', 'Swim Shorts', 'Leather Slides', 'Sunglasses'],
        ['Night Out', 'Oversized Graphic Tee', 'Wide-Leg Trousers', 'Chunky Sneakers', 'Crossbody Bag']
      ]
    }
  },

  autumn: {
    icon: '🍁',
    color: '#ea580c',
    title: (kw) => `Kakobuy Spreadsheets 2026 Mens Autumn ${kw} Guide: Earth Tones & Heavyweight Workwear | Kakobuy`,
    description: (kw) => `Embrace fall with earth tone palettes, heavyweight work shirts, vintage Americana style, and layering essentials for the 2026 autumn ${kw} season.`,
    tags: (kw) => [`kakobuy autumn 2026`, `mens autumn fashion`, `${kw} fall`, `earth tones`, `autumn ${kw}`],
    intro: (kw) => `Autumn is the most versatile season for mens fashion. The cooler temperatures allow for rich layering, earthy color palettes, and heavyweight fabrics that define the ${kw} aesthetic. From vintage workwear to modern streetwear, fall is when your wardrobe truly comes alive.`,
    trends: [
      {
        title: (kw) => `Trend #1: The Earth Tone ${kw} Palette`,
        content: (kw) => `Earth tones dominate autumn fashion in 2026. Think olive greens, burnt oranges, warm browns, and deep burgundies.\n\n- **The Formula:** A heavyweight flannel shirt layered over a thermal long-sleeve, paired with dark selvedge denim and leather work boots.\n- **Why it works:** The warm, natural color palette creates a cohesive, grounded look that embodies the autumn spirit.\n- **Key Pieces:** Flannel shirts, thermal base layers, selvedge denim, leather boots.`
      },
      {
        title: () => `Trend #2: The Heavyweight Workwear Revival`,
        content: () => `Vintage Americana workwear is having a massive resurgence. Durable fabrics and utilitarian design meet modern streetwear sensibilities.\n\n- **The Formula:** A chore coat or denim jacket worn over a heavyweight henley, paired with carpenter pants and moc-toe boots.\n- **Why it works:** The rugged, functional aesthetic tells a story of craftsmanship and durability that resonates with modern consumers.\n- **Key Pieces:** Chore coats, denim jackets, carpenter pants, moc-toe boots.`
      },
      {
        title: () => `Trend #3: The Modern Layering Masterclass`,
        content: () => `Autumn is the perfect season to experiment with multi-layer outfits that balance warmth and style.\n\n- **The Formula:** A wool overcoat layered over a chunky cable-knit sweater and a collared shirt, paired with corduroy pants and Chelsea boots.\n- **Why it works:** Each layer adds texture and depth, creating a sophisticated look that's both warm and visually interesting.\n- **Key Pieces:** Wool overcoats, cable-knit sweaters, corduroy pants, Chelsea boots.`
      }
    ],
    essentials: [
      { name: 'Heavyweight Flannel Shirt', desc: 'Autumn essential' },
      { name: 'Vintage Chore Coat', desc: 'Workwear classic' },
      { name: 'Dark Selvedge Denim', desc: 'Premium bottom' }
    ],
    outfitTable: {
      headers: ['Occasion', 'Outer Layer', 'Mid Layer', 'Bottoms', 'Footwear'],
      rows: [
        ['Casual Weekend', 'Chore Coat', 'Flannel Shirt', 'Carpenter Pants', 'Work Boots'],
        ['Smart Casual', 'Wool Overcoat', 'Cable-Knit Sweater', 'Corduroy Pants', 'Chelsea Boots'],
        ['Campus/Office', 'Denim Jacket', 'Henley Shirt', 'Selvedge Denim', 'Leather Boots'],
        ['Outdoor', 'Puffer Vest', 'Thermal Long-Sleeve', 'Cargo Pants', 'Hiking Boots']
      ]
    }
  },

  winter: {
    icon: '❄️',
    color: '#3b82f6',
    title: (kw) => `Kakobuy Spreadsheets 2026 Mens Winter ${kw} Guide: Gorpcore Techwear & Premium Puffers | Kakobuy`,
    description: (kw) => `Stay warm and stylish with Gorpcore techwear, premium puffer jackets, and high-street layering techniques for the 2026 winter ${kw} season.`,
    tags: (kw) => [`kakobuy winter 2026`, `mens winter fashion`, `${kw} techwear`, `gorpcore`, `winter ${kw}`],
    intro: (kw) => `Winter fashion is about mastering the balance between warmth and style. The 2026 ${kw} season is defined by Gorpcore techwear, premium insulated outerwear, and strategic layering that keeps you protected from the cold while maintaining a sharp silhouette.`,
    trends: [
      {
        title: (kw) => `Trend #1: The Gorpcore ${kw} Techwear Movement`,
        content: (kw) => `Gorpcore continues to dominate winter fashion, blending outdoor functionality with urban streetwear aesthetics.\n\n- **The Formula:** A technical shell jacket with waterproof membranes layered over a fleece mid-layer, paired with cargo tech pants and trail sneakers.\n- **Why it works:** The combination of performance fabrics and utilitarian design creates a futuristic, adventure-ready look that's both functional and fashionable.\n- **Key Pieces:** Technical shell jackets, fleece mid-layers, cargo tech pants, trail sneakers.`
      },
      {
        title: () => `Trend #2: The Premium Puffer Statement`,
        content: () => `The puffer jacket has evolved from purely functional outerwear to a fashion statement piece.\n\n- **The Formula:** A cropped or oversized puffer jacket in a bold color or metallic finish, worn over a hoodie and slim-fit jeans with chunky winter boots.\n- **Why it works:** The exaggerated proportions and premium materials elevate a classic winter staple into a head-turning fashion piece.\n- **Key Pieces:** Cropped puffers, oversized puffers, premium hoodies, chunky winter boots.`
      },
      {
        title: () => `Trend #3: The High-Street Layering System`,
        content: () => `Luxury streetwear brands have perfected the art of winter layering with coordinated sets and premium fabrics.\n\n- **The Formula:** A long wool coat layered over a technical vest and a heavyweight hoodie, paired with wide-leg trousers and designer sneakers.\n- **Why it works:** The mix of formal and casual elements creates a sophisticated, high-fashion look that's perfect for urban winter environments.\n- **Key Pieces:** Long wool coats, technical vests, heavyweight hoodies, wide-leg trousers.`
      }
    ],
    essentials: [
      { name: 'Technical Shell Jacket', desc: 'Waterproof essential' },
      { name: 'Premium Puffer Jacket', desc: 'Statement outerwear' },
      { name: 'Fleece Mid-Layer', desc: 'Warmth layer' }
    ],
    outfitTable: {
      headers: ['Occasion', 'Outer Layer', 'Mid Layer', 'Bottoms', 'Footwear'],
      rows: [
        ['Daily Commute', 'Puffer Jacket', 'Hoodie', 'Slim Jeans', 'Winter Boots'],
        ['Outdoor Activity', 'Shell Jacket', 'Fleece Layer', 'Tech Pants', 'Trail Sneakers'],
        ['Smart Casual', 'Wool Overcoat', 'Technical Vest', 'Wide Trousers', 'Designer Sneakers'],
        ['Extreme Cold', 'Parka', 'Down Vest + Sweater', 'Insulated Pants', 'Snow Boots']
      ]
    }
  }
}

// Default template for custom keywords
const DEFAULT_TEMPLATE = {
  icon: '📌',
  color: '#667eea',
  title: (kw) => `Kakobuy Spreadsheets 2026 Mens ${kw} Guide: Essential Style & Outfit Formulas | Kakobuy`,
  description: (kw) => `Discover the latest 2026 mens ${kw} fashion trends, essential pieces, and versatile outfit formulas curated by Kakobuy for the modern style-conscious man.`,
  tags: (kw) => [`kakobuy ${kw} 2026`, `mens ${kw} fashion`, `${kw} style`, `${kw} essentials`, `mens ${kw}`],
  intro: (kw) => `The ${kw} category is one of the most important segments in mens fashion for 2026. Whether you're building a new wardrobe or refreshing your existing collection, this guide covers the essential pieces, trending styles, and outfit formulas you need to know.`,
  trends: [
    {
      title: (kw) => `Trend #1: The Essential ${kw} Foundation`,
      content: (kw) => `Every great ${kw} wardrobe starts with the right foundation pieces.\n\n- **The Formula:** Start with high-quality basics in neutral colors that can be mixed and matched effortlessly.\n- **Why it works:** A solid foundation of versatile pieces allows you to create multiple outfits from a minimal wardrobe.\n- **Key Pieces:** Premium basics, neutral color palette, quality fabrics.`
    },
    {
      title: (kw) => `Trend #2: The Modern ${kw} Silhouette`,
      content: (kw) => `Contemporary ${kw} fashion is defined by clean lines and intentional proportions.\n\n- **The Formula:** Focus on fit and proportion rather than following fleeting trends.\n- **Why it works:** Well-proportioned pieces create a polished look that stands the test of time.\n- **Key Pieces:** Tailored fits, balanced proportions, quality construction.`
    },
    {
      title: (kw) => `Trend #3: The ${kw} Statement Piece`,
      content: (kw) => `Every ${kw} outfit benefits from one standout piece that elevates the entire look.\n\n- **The Formula:** Pair a statement piece with understated basics to create visual interest without overwhelming the outfit.\n- **Why it works:** A single focal point draws attention and demonstrates personal style confidence.\n- **Key Pieces:** Bold outerwear, unique textures, distinctive accessories.`
    }
  ],
  essentials: [
    { name: `${kw} Essential #1`, desc: 'Must-have piece' },
    { name: `${kw} Essential #2`, desc: 'Trending item' },
    { name: `${kw} Essential #3`, desc: 'Versatile basic' }
  ],
  outfitTable: {
    headers: ['Occasion', 'Top', 'Bottoms', 'Footwear', 'Accessories'],
    rows: [
      ['Casual Daily', `${kw} Basic Tee`, 'Straight Pants', 'Clean Sneakers', 'Minimal Watch'],
      ['Smart Casual', `${kw} Layered Top`, 'Tailored Pants', 'Leather Shoes', 'Belt'],
      ['Weekend Outing', `${kw} Oversized Top`, 'Relaxed Pants', 'Retro Sneakers', 'Cap'],
      ['Evening Look', `${kw} Statement Piece`, 'Slim Pants', 'Premium Sneakers', 'Chain']
    ]
  }
}

// ============================================
// Generate Article Content
// ============================================

function generateArticleContent(seriesKey, template) {
  const kw = seriesKey.charAt(0).toUpperCase() + seriesKey.slice(1)
  const folderName = `${seriesKey}-style`

  const title = template.title(kw)
  const description = template.description(kw)
  const tags = template.tags(kw)
  const intro = template.intro(kw)

  let content = `---
layout: doc
title: "${title}"
description: "${description}"
tags: [${tags.map(t => `"${t}"`).join(', ')}]
---

# ${template.icon} ${title.replace(' | Kakobuy', '')}

![${title.replace(' | Kakobuy', '')} by Kakobuy](./mens-fashion-guide.png)

${intro}

`

  // Add trends
  template.trends.forEach((trend, i) => {
    content += `## ${trend.title(kw)}\n\n${trend.content(kw)}\n\n`
  })

  // Add featured essentials
  content += `##  Featured ${kw} Wardrobe Essentials\n\n`
  content += `<button onclick="window.open('https://docs.google.com/spreadsheets/d/1Vs190yOAkrQ04LQb6l_Lnr_oTA0ny4CI3PJ_0B4_6zs/edit?gid=1903531254#gid=1903531254', '_blank')" style="cursor:pointer; background:none; border:none; padding:0; width:100%;">\n`
  content += `<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 16px; margin: 24px 0;">\n`
  
  template.essentials.forEach(item => {
    content += `  <div style="background: #1b1b1f; padding: 16px; border-radius: 8px; border: 1px solid #2e2e32; text-align: center;">\n`
    content += `    <h4 style="margin: 12px 0 4px 0; color: #fff;">${item.name}</h4>\n`
    content += `    <p style="color: #888; font-size: 13px; margin: 0;">${item.desc}</p>\n`
    content += `  </div>\n`
  })
  
  content += `</div>\n</button>\n\n`

  // Add outfit table
  content += `## 📐 ${kw} Outfit Formulas at a Glance\n\n`
  content += `| ${template.outfitTable.headers.join(' | ')} |\n`
  content += `| ${template.outfitTable.headers.map(() => '---').join(' | ')} |\n`
  template.outfitTable.rows.forEach(row => {
    content += `| ${row.join(' | ')} |\n`
  })
  content += `\n`

  // Add Discord CTA
  content += `::: tip 🛍️ HOW TO COP THESE ITEMS WITH EXCLUSIVE DISCOUNTS
All items featured in our style guides are curated directly from top high-street manufacturers and are available for global shipping via our **Discord Community**.

---

### 💬 Join Our Discord Community

Get exclusive access to:
- **Product Recommendations** — Personalized outfit suggestions and trending picks from our fashion curators
- **After-Sales Support** — Dedicated customer service for order tracking, returns, and exchanges
- **Member-Only Deals** — Early access to seasonal sales and exclusive discount codes
- **Style Consultation** — Real-time advice from our styling team to help you build the perfect wardrobe

👉 **[Join Kakobuy Discord](https://discord.com/invite/jtc399kUQV)** to connect with our community and elevate your style game!
:::

***

### 🌐 Explore Other Seasonal Lookbooks

- 🌸 **[Spring Guide:](/posts/spring-style)** [Light Layering & CleanFit Jackets](/posts/spring-style)
- ☀️ **[Summer Guide:](/posts/summer-style)** [CityBoy Style & Heavyweight Tees](/posts/summer-style)
-  **[Autumn Guide:](/posts/autumn-style)** [Earth Tones & Heavyweight Workwear](/posts/autumn-style)
- ❄️ **[Winter Guide:](/posts/winter-style)** [Gorpcore Techwear & Premium Puffers](/posts/winter-style)
`

  return { folderName, content }
}

// ============================================
// Generate Media Resource File
// ============================================

function generateMediaFile(seriesKey, template) {
  const kw = seriesKey.charAt(0).toUpperCase() + seriesKey.slice(1)
  const folderName = `${seriesKey}-style`
  const title = template.title(kw).replace(' | Kakobuy', '')

  return `# Media Resources - ${kw} ${template.icon}

> Generated: ${new Date().toISOString().split('T')[0]}
> Series: ${kw} Style Guide
> Folder: \`posts/${folderName}/\`

---

## 📸 Cover Image

### File Information
- **Filename:** \`mens-fashion-guide.png\`
- **Location:** \`posts/${folderName}/mens-fashion-guide.png\`
- **Recommended Size:** 1200×630px (OG image standard) or 1920×1080px (full width)
- **Format:** PNG or WebP (WebP preferred for performance)

### Image Prompt (for AI generation or photographer brief)
\`\`\`
A professional mens fashion editorial photo showcasing ${kw.toLowerCase()} style for Spring/Summer 2026. 
The image should feature a male model wearing curated ${kw.toLowerCase()} pieces including essential items 
from the Kakobuy spreadsheet collection. Clean, modern aesthetic with natural lighting. 
Suitable for a fashion guide blog header image. Style: editorial photography, high fashion, streetwear.
\`\`\`

### SEO Alt Text
\`\`\`
${title} by Kakobuy - 2026 Mens ${kw} Fashion Guide
\`\`\`

### Filename Rules
- Use lowercase with hyphens: \`mens-fashion-guide.png\`
- No spaces or special characters
- Keep under 50 characters
- Include relevant keywords

---

##  Image Checklist

- [ ] Cover image generated/photographed
- [ ] Image resized to recommended dimensions
- [ ] Image optimized (compressed for web)
- [ ] Image saved to \`posts/${folderName}/mens-fashion-guide.png\`
- [ ] Alt text verified in index.md
- [ ] Image tested on desktop and mobile

---

## 🔗 Related Resources

| Resource | URL |
|----------|-----|
| Article | \`/posts/${folderName}/\` |
| Google Spreadsheet | https://docs.google.com/spreadsheets/d/1Vs190yOAkrQ04LQb6l_Lnr_oTA0ny4CI3PJ_0B4_6zs/edit?gid=1903531254#gid=1903531254 |
| Category Color | ${template.color} |
| Category Icon | ${template.icon} |
`
}

// ============================================
// Main Workflow
// ============================================

async function main() {
  const seriesKey = process.argv[2]

  if (!seriesKey) {
    console.log('\n📝 Kakobuy Article Generator')
    console.log('============================')
    console.log('\nUsage: node scripts/generate-article.js <series-keyword>')
    console.log('\nExamples:')
    console.log('  node scripts/generate-article.js spring')
    console.log('  node scripts/generate-article.js summer')
    console.log('  node scripts/generate-article.js autumn')
    console.log('  node scripts/generate-article.js winter')
    console.log('  node scripts/generate-article.js streetwear')
    console.log('\nSupported seasons: spring, summer, autumn, winter')
    console.log('Custom keywords will use the default template.\n')
    process.exit(1)
  }

  const key = seriesKey.toLowerCase()
  const template = ARTICLE_TEMPLATES[key] || DEFAULT_TEMPLATE
  const isCustom = !ARTICLE_TEMPLATES[key]

  console.log(`\n Generating article for: "${seriesKey}"`)
  console.log(`   Template: ${isCustom ? 'Default (custom keyword)' : key.charAt(0).toUpperCase() + key.slice(1) + ' (seasonal)'}`)
  console.log('')

  // Step 1: Generate article content
  const { folderName, content } = generateArticleContent(seriesKey, template)
  const folderPath = path.join(POSTS_DIR, folderName)

  // Create folder if not exists
  if (!fs.existsSync(folderPath)) {
    fs.mkdirSync(folderPath, { recursive: true })
    console.log(`✅ Created folder: posts/${folderName}/`)
  } else {
    console.log(`⚠️  Folder already exists: posts/${folderName}/`)
    const overwrite = await askQuestion('   Overwrite existing index.md? (y/N): ')
    if (overwrite.toLowerCase() !== 'y') {
      console.log('   Aborted.')
      process.exit(0)
    }
  }

  // Write index.md
  const indexPath = path.join(folderPath, 'index.md')
  fs.writeFileSync(indexPath, content, 'utf-8')
  console.log(`✅ Generated: posts/${folderName}/index.md`)

  // Step 2: Generate media resource file
  const mediaContent = generateMediaFile(seriesKey, template)
  const mediaPath = path.join(folderPath, 'media.md')
  fs.writeFileSync(mediaPath, mediaContent, 'utf-8')
  console.log(`✅ Generated: posts/${folderName}/media.md`)

  // Step 3: Update PostsIndex.vue navigation
  console.log(`\n Next: Add navigation tag to PostsIndex.vue`)
  console.log(`   Add this to CATEGORIES array:`)
  console.log(`   { name: '${seriesKey.charAt(0).toUpperCase() + seriesKey.slice(1)}', icon: '${template.icon}', url: '/posts/${folderName}/', color: '${template.color}' }`)

  // Step 4: Wait for user to add images
  console.log(`\n⏳ Waiting for image resources...`)
  console.log(`   Please add your cover image to: posts/${folderName}/mens-fashion-guide.png`)
  console.log(`   Refer to media.md for image specifications and prompts.`)

  const imagesReady = await askQuestion('\n   Are image resources ready? (y/N): ')

  if (imagesReady.toLowerCase() === 'y') {
    console.log('\n✅ Image resources confirmed.')
    console.log('\n📦 Ready to commit and push:')
    console.log(`   git add posts/${folderName}/`)
    console.log(`   git commit -m "Add: new ${seriesKey} style guide article"`)
    console.log(`   git push origin master`)

    const doPush = await askQuestion('\n   Execute git push now? (y/N): ')
    if (doPush.toLowerCase() === 'y') {
      console.log('\n🚀 Pushing to GitHub...')
      console.log('   (Please run these commands in Git Bash)')
    } else {
      console.log('\n⏭️  Skipped. Run the git commands manually when ready.')
    }
  } else {
    console.log('\n⏸️  Paused. Add your images first, then run:')
    console.log(`   node scripts/generate-article.js ${seriesKey}`)
    console.log('   (It will detect existing files and skip regeneration)')
  }

  console.log('\n✨ Done!')
  rl.close()
}

function askQuestion(query) {
  return new Promise((resolve) => {
    rl.question(query, (answer) => {
      resolve(answer)
    })
  })
}

main().catch(console.error)
