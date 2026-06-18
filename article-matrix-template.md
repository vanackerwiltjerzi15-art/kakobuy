# Kakobuy Spreadsheets Article Matrix Generator

> **使用说明**：填写下方配置区域后，系统将根据模板自动生成完整的文章矩阵，包含 Frontmatter、正文结构、商品卡片、穿搭表格、Discord 板块及内链推荐。

---

## 配置区域

### 系列信息

| 字段 | 值 |
|------|-----|
| **系列名称** | `{series-name}`（如 `spring-style`、`denim-guide`） |
| **系列主题** | `{series-theme}`（如 `Spring Streetwear`、`Denim Collection`） |
| **年份** | `{year}`（如 `2026`） |
| **文章数量** | `{article-count}`（如 `4`） |
| **封面图片文件名** | `{image-filename}`（如 `mens-fashion-guide.png`） |
| **Google Spreadsheet 链接** | `{spreadsheet-url}` |
| **Discord 邀请链接** | `https://discord.com/invite/jtc399kUQV` |
| **Google Analytics 衡量 ID** | `G-674NVFF73M`（已在 config.mjs 全局配置，所有文章自动追踪） |

### 文章列表

| 序号 | 文章目录名 | 文章标题核心词 | 核心关键词（5个） | 内容摘要 | 三大趋势 |
|------|-----------|---------------|------------------|---------|---------|
| 1 | `{slug-1}` | `{title-keywords-1}` | `{kw1}, {kw2}, {kw3}, {kw4}, {kw5}` | `{summary-1}` | `{trend1-1}` / `{trend2-1}` / `{trend3-1}` |
| 2 | `{slug-2}` | `{title-keywords-2}` | `{kw1}, {kw2}, {kw3}, {kw4}, {kw5}` | `{summary-2}` | `{trend1-2}` / `{trend2-2}` / `{trend3-2}` |
| 3 | `{slug-3}` | `{title-keywords-3}` | `{kw1}, {kw2}, {kw3}, {kw4}, {kw5}` | `{summary-3}` | `{trend1-3}` / `{trend2-3}` / `{trend3-3}` |
| 4 | `{slug-4}` | `{title-keywords-4}` | `{kw1}, {kw2}, {kw3}, {kw4}, {kw5}` | `{summary-4}` | `{trend1-4}` / `{trend2-4}` / `{trend3-4}` |

---

## 文章生成模板

### 单篇文章标准结构

```markdown
---
layout: doc
title: "Kakobuy Spreadsheets {year} {series-theme}: {article-specific-title} | Kakobuy"
description: "{150-160字符的SEO描述，含核心关键词}"
tags: ["kakobuy {series-keyword} {year}", "{keyword-1}", "{keyword-2}", "{keyword-3}", "{keyword-4}"]
---

# Kakobuy Spreadsheets {year} {series-theme}: {article-specific-title}

![{SEO-friendly alt text}](./{image-filename})

{引言段落：2-3句话，概述本系列/季节的穿搭核心理念}

## 1. Trend #1: {趋势名称}

{趋势描述段落}

- **The Formula:** {穿搭公式}
- **Why it works:** {原理解释}
- **Key Pieces:** {关键单品}

## 2. Trend #2: {趋势名称}

{趋势描述段落}

- **The Formula:** {穿搭公式}
- **Why it works:** {原理解释}
- **Key Pieces:** {关键单品}

## 3. Trend #3: {趋势名称}

{趋势描述段落}

- **The Formula:** {穿搭公式}
- **Why it works:** {原理解释}
- **Key Pieces:** {关键单品}

## Featured {series-theme} Wardrobe Essentials

<a href="{spreadsheet-url}" target="_blank" rel="noopener noreferrer">
<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 16px; margin: 24px 0;">
  <div style="background: #1b1b1f; padding: 16px; border-radius: 8px; border: 1px solid #2e2e32; text-align: center;">
    <h4 style="margin: 12px 0 4px 0; color: #fff;">{商品名称1}</h4>
    <p style="color: #888; font-size: 13px; margin: 0;">{商品描述1}</p>
  </div>
  <div style="background: #1b1b1f; padding: 16px; border-radius: 8px; border: 1px solid #2e2e32; text-align: center;">
    <h4 style="margin: 12px 0 4px 0; color: #fff;">{商品名称2}</h4>
    <p style="color: #888; font-size: 13px; margin: 0;">{商品描述2}</p>
  </div>
  <div style="background: #1b1b1f; padding: 16px; border-radius: 8px; border: 1px solid #2e2e32; text-align: center;">
    <h4 style="margin: 12px 0 4px 0; color: #fff;">{商品名称3}</h4>
    <p style="color: #888; font-size: 13px; margin: 0;">{商品描述3}</p>
  </div>
</div>
</a>

## {series-theme} Outfit Formulas at a Glance

| Occasion | {Column-1} | {Column-2} | {Column-3} | {Column-4} |
|----------|-----------|-----------|-----------|-----------|
| {场景1} | {单品} | {单品} | {单品} | {单品} |
| {场景2} | {单品} | {单品} | {单品} | {单品} |
| {场景3} | {单品} | {单品} | {单品} | {单品} |
| {场景4} | {单品} | {单品} | {单品} | {单品} |

::: tip HOW TO COP THESE ITEMS WITH EXCLUSIVE DISCOUNTS
All items featured in our style guides are curated directly from top high-street manufacturers and are available for global shipping via our **Discord Community**.

---

### Join Our Discord Community

Get exclusive access to:
- **Product Recommendations** — Personalized outfit suggestions and trending picks from our fashion curators
- **After-Sales Support** — Dedicated customer service for order tracking, returns, and exchanges
- **Member-Only Deals** — Early access to seasonal sales and exclusive discount codes
- **Style Consultation** — Real-time advice from our styling team to help you build the perfect wardrobe

[Join Kakobuy Discord](https://discord.com/invite/jtc399kUQV) to connect with our community and elevate your style game!
:::

***

### Explore Related Guides

{内链推荐区域 — 见下方规则}
```

---

## 内链推荐规则

### 规则优先级

1. **同系列文章优先**：推荐当前系列内的其他文章（排除自身）
2. **跨系列相关推荐**：当同系列文章不足 3 篇时，补充推荐内容相关的其他系列文章
3. **仅推荐已存在内容**：所有推荐的文章必须是 `posts/` 目录下已发布的文章

### 内链推荐模板

```markdown
### Explore Related Guides

**From This Series:**
- [{emoji} {文章标题}](/posts/{slug}/)

**You May Also Like:**
- [{emoji} {相关文章标题}](/posts/{slug}/)
- [{emoji} {相关文章标题}](/posts/{slug}/)
```

### 现有文章索引（用于内链推荐）

| 目录名 | 标题 | 系列 | 标签 |
|--------|------|------|------|
| `spring-style` | Kakobuy Spreadsheets 2026 Mens Spring Streetwear Guide: CleanFit & Light Layering | 四季男装 | Spring, CleanFit, Layering |
| `summer-style` | Kakobuy Spreadsheets 2026 Mens Summer Streetwear Guide: CleanFit & CityBoy Aesthetics | 四季男装 | Summer, CityBoy, Streetwear |
| `autumn-style` | Kakobuy Spreadsheets 2026 Mens Autumn Fashion Guide: Earth Tones & Heavyweight Workwear | 四季男装 | Autumn, Workwear, Earth Tones |
| `winter-style` | Kakobuy Spreadsheets 2026 Mens Winter Fashion Guide: Gorpcore Techwear & Premium Puffers | 四季男装 | Winter, Techwear, Gorpcore |

### 内链推荐示例

**示例：春季文章的内链推荐**

```markdown
### Explore Related Guides

**From This Series:**
- [Summer Streetwear Guide: CityBoy & Heavyweight Tees](/posts/summer-style/)
- [Autumn Fashion Guide: Earth Tones & Workwear](/posts/autumn-style/)
- [Winter Techwear Guide: Gorpcore & Premium Puffers](/posts/winter-style/)
```

**示例：新系列（如牛仔指南）的内链推荐**

```markdown
### Explore Related Guides

**From This Series:**
- [Denim Care & Maintenance Guide](/posts/denim-care/)
- [Vintage Denim Collection Guide](/posts/vintage-denim/)

**You May Also Like:**
- [Spring Streetwear Guide: CleanFit & Light Layering](/posts/spring-style/)
- [Autumn Fashion Guide: Earth Tones & Workwear](/posts/autumn-style/)
```

---

## PostsIndex.vue 更新模板

生成新文章后，需同步更新 `.vitepress/theme/PostsIndex.vue`：

### guides 数组添加项

```javascript
{
  title: '{emoji} Kakobuy Spreadsheets {year} {series-theme}: {article-specific-title}',
  url: '/posts/{slug}/',
  description: '{文章描述}',
  date: '{year}',
  tags: ['{Tag1}', '{Tag2}', '{Tag3}']
}
```

### hotArticles 数组添加项

```javascript
{ title: 'Kakobuy Spreadsheets {year} {series-theme}: {article-specific-title}', url: '/posts/{slug}/' }
```

---

## 质量检查清单

生成文章后，请逐项核对：

- [ ] Frontmatter 分隔符使用 `---`（三横线）
- [ ] 图片文件名无空格、无单引号、无特殊字符
- [ ] 图片引用路径使用 `./文件名` 相对路径
- [ ] H1 标题和 frontmatter title 均含 "Kakobuy Spreadsheets"
- [ ] description 长度在 150-160 字符之间
- [ ] tags 第一个为 `kakobuy + 系列词 + 年份` 格式
- [ ] 商品卡片包裹在 `<a>` 标签中，链接至 Spreadsheet
- [ ] Discord 板块包含完整四要素
- [ ] 内链推荐仅包含已存在的文章
- [ ] 本地执行 `npm run build` 无报错

---

## 快速生成命令

```bash
# 1. 创建文章目录
mkdir -p posts/{slug}

# 2. 创建 index.md（复制上方模板内容）
# 编辑 posts/{slug}/index.md

# 3. 放置封面图片
cp {image-path} posts/{slug}/{image-filename}

# 4. 更新 PostsIndex.vue
# 编辑 .vitepress/theme/PostsIndex.vue

# 5. 推送
git add .
git commit -m "Add: Kakobuy Spreadsheets {year} {series-theme}: {article-specific-title}"
git push origin master
```
