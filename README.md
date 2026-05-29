# Kakobuy SEO 博客项目 - 快速开始指南

## 🎯 项目概述

这是一个基于 **VitePress** 的纯静态 SEO 博客网站，专为 Kakobuy 跨境电商平台设计。

### 核心特性

✅ **纯静态网站** - 构建时生成 HTML，无需后端  
✅ **SEO 优化** - 符合 Google 搜索规则  
✅ **响应式设计** - 适配手机、平板、桌面  
✅ **快速加载** - Cloudflare CDN 全球分发  
✅ **零成本** - Cloudflare Pages 免费额度足够  

---

## 📁 项目结构

```
kakobuy/
├── .vitepress/              # VitePress 配置
│   ├── config.mjs          # 主配置文件
│   └── theme/              # 自定义主题
│       ├── index.js
│       └── custom.css
├── posts/                   # 博客文章
│   ├── index.md            # 文章列表页
│   ├── gutefrage-kakobuy-spreadsheet/
│   │   └── index.md
│   ├── quora-kakobuy-spreadsheet/
│   │   └── index.md
│   └── reddit-kakobuy-spreadsheet/
│       └── index.md
├── public/                  # 静态资源
│   └── robots.txt          # 爬虫配置
├── index.md                 # 网站首页
├── 404.html                 # 404 页面
├── sitemap.md               # Sitemap 占位符
├── package.json             # 项目配置
├── DEPLOYMENT.md            # 部署指南
└── README.md                # 本文件
```

---

## 🚀 快速开始

### 1. 安装 Node.js

下载并安装：https://nodejs.org/

### 2. 安装依赖

```bash
npm install
```

### 3. 本地开发

```bash
npm run dev
```

访问：http://localhost:5173

### 4. 构建生产版本

```bash
npm run build
```

输出目录：`dist/`

### 5. 预览构建结果

```bash
npm run preview
```

---

## 📝 添加新文章

### 步骤 1：创建文章文件

在 `posts/` 目录下创建新文件夹和文件：

```
posts/your-article-slug/index.md
```

### 步骤 2：添加 Front Matter

```markdown
---
layout: doc
title: 你的文章标题
description: 150-160 字符的 SEO 描述
keywords: 关键词 1, 关键词 2, 关键词 3
author: Kakobuy Spreadsheet Guide
date: 2026-05-27
---

# 你的文章标题

文章内容...
```

### 步骤 3：更新文章列表

编辑 [`posts/index.md`](file:///d:/kakobuy-7zh.pages/kakobuy/posts/index.md)，添加新文章信息。

### 步骤 4：更新侧边栏

编辑 [`.vitepress/config.mjs`](file:///d:/kakobuy-7zh.pages/kakobuy/.vitepress/config.mjs)，在 `sidebar` 中添加新链接。

---

## 🎨 自定义样式

### 修改主题颜色

编辑 [`.vitepress/theme/custom.css`](file:///d:/kakobuy-7zh.pages/kakobuy/.vitepress/theme/custom.css)：

```css
:root {
  --vp-c-brand-1: #667eea;  /* 主色调 */
  --vp-c-brand-2: #764ba2;  /* 渐变色调 */
  --vp-c-bg: #f5f5f5;       /* 背景色 */
}
```

### 添加自定义组件

在 `.vitepress/theme/index.js` 中注册新组件。

---

## 🌐 部署上线

### 方式 1：Cloudflare Pages（推荐）

1. 推送到 GitHub
2. Cloudflare Pages 连接仓库
3. 配置：
   - Build command: `npm run build`
   - Output directory: `dist`
4. 自动部署

详细步骤见 [`DEPLOYMENT.md`](file:///d:/kakobuy-7zh.pages/kakobuy/DEPLOYMENT.md)

### 方式 2：手动部署

```bash
npm run build
# 将 dist/ 目录上传到任何静态托管服务
```

---

## 🔍 SEO 检查清单

每篇文章发布前检查：

- [ ] Title 包含目标关键词
- [ ] Description 长度 150-160 字符
- [ ] 包含 H1、H2、H3 标题层级
- [ ] 添加了结构化数据（JSON-LD）
- [ ] Meta robots 设置为 `index,follow`
- [ ] 图片有 alt 属性
- [ ] 内部链接到相关文章
- [ ] URL 使用小写 + 连字符

---

## 📊 性能优化

### 图片优化

```bash
# 使用在线工具压缩图片
https://tinypng.com/
```

### 启用缓存

Cloudflare 自动缓存，无需配置。

### 监控性能

- Google PageSpeed Insights
- WebPageTest
- Cloudflare Analytics

---

## 🛠️ 常用命令

```bash
# 安装依赖
npm install

# 本地开发
npm run dev

# 构建生产版本
npm run build

# 预览构建结果
npm run preview

# Git 操作
git add .
git commit -m "描述更改"
git push
```

---

## 📚 学习资源

- [VitePress 官方文档](https://vitepress.dev/)
- [Google SEO 入门指南](https://developers.google.com/search/docs/fundamentals/seo-starter-guide)
- [Cloudflare Pages 文档](https://developers.cloudflare.com/pages/)
- [结构化数据测试工具](https://search.google.com/test/rich-results)

---

## ❓ 常见问题

### Q: 我没有编程经验，能使用这个项目吗？

**A:** 可以！只需要会写 Markdown 就能添加文章。其他配置都已设置好。

### Q: 如何修改网站首页内容？

**A:** 编辑 [`index.md`](file:///d:/kakobuy-7zh.pages/kakobuy/index.md) 文件。

### Q: 可以删除某篇文章吗？

**A:** 直接删除对应的文件夹，然后重新构建和推送。

### Q: 如何查看网站流量？

**A:** 注册 Google Analytics，将跟踪代码添加到 `.vitepress/config.mjs` 的 `head` 配置中。

---

## 🎯 下一步行动

1. ✅ 安装 Node.js
2. ✅ 运行 `npm install`
3. ✅ 本地测试 `npm run dev`
4. ✅ 创建 GitHub 仓库
5. ✅ 推送到 GitHub
6. ✅ 配置 Cloudflare Pages
7. ✅ 提交 Google Search Console
8. ✅ 开始推广你的网站！

---

**祝你部署成功！** 🎉

如有问题，请查看 [`DEPLOYMENT.md`](file:///d:/kakobuy-7zh.pages/kakobuy/DEPLOYMENT.md) 获取详细部署指南。