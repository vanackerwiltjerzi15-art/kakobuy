# 个人求职文档 - Kakobuy 跨境电商内容平台项目

---

## 一、项目概述

**项目名称：** Kakobuy Spreadsheet Guide（跨境电商内容平台）
**项目地址：** https://kakobuy-7zh.pages.dev/
**项目类型：** 跨境电商 SEO 内容营销平台 / 静态站点
**部署平台：** Cloudflare Pages（CDN 全球加速）
**技术栈：** VitePress + Vue 3 + Markdown

---

## 二、个人项目经验详述

### 2.1 项目背景

Kakobuy 是一个领先的跨境电商采购平台，帮助全球买家高效地从中国采购产品。本项目是一个为其构建的 SEO 内容营销平台，旨在通过高质量的内容吸引目标用户，引导用户使用 Kakobuy 的采购工具（Google Spreadsheet），最终提升平台转化率。

### 2.2 个人职责

作为该项目的**全栈开发者**，独立负责从需求分析到上线部署的全流程：

- **架构设计：** 选型 VitePress 作为静态站点生成器，设计模块化主题架构
- **前端开发：** 开发自定义 Vue 组件（导航页、侧边栏、滚动公告栏等）
- **SEO 优化：** 配置 robots.txt、sitemap.xml、Schema.org 结构化数据、Google Analytics 4
- **内容策略：** 设计文章矩阵模板，规划 12+ 篇 SEO 导向文章
- **爬虫控制：** 实现 Google Spreadsheet 链接的 JavaScript 动态加载，防止爬虫追踪外部链接
- **CI/CD：** 配置 Cloudflare Pages 自动部署流水线，实现 Git Push 即部署
- **性能优化：** 优化移动端响应式布局，调整内容宽度、字体大小等

### 2.3 技术栈应用

| 技术领域 | 技术/工具 | 应用场景 |
|----------|-----------|----------|
| **前端框架** | Vue 3 (Composition API) | 自定义主题组件开发 |
| **静态站点生成** | VitePress 1.6.4 | 项目核心框架 |
| **构建工具** | Vite | 快速热更新和构建 |
| **样式方案** | CSS Variables + Scoped CSS | 主题定制和响应式设计 |
| **部署平台** | Cloudflare Pages | 全球 CDN 加速，自动构建部署 |
| **版本控制** | Git + GitHub | 代码管理和 CI/CD 触发 |
| **SEO 工具** | Google Search Console | 站点地图提交、索引监控 |
| **数据分析** | Google Analytics 4 | 用户行为追踪 |
| **内容管理** | Markdown + Frontmatter | 文章编写和元数据管理 |
| **结构化数据** | Schema.org (JSON-LD) | Article、FAQPage、WebSite、Organization |

### 2.4 解决的关键问题

#### 问题 1：Google Spreadsheet 链接的爬虫控制
**挑战：** 需要将 Google Spreadsheet 链接提供给真实用户，但不能让 Google 爬虫追踪这些外部链接，避免权重流失。

**解决方案：** 
- 方案一（按钮类链接）：使用 JavaScript 动态加载，移除 `<a>` 标签的 `href` 属性，改用 `<button>` + `onclick` 事件
- 方案二（文章内链接）：添加 `rel="nofollow noopener noreferrer"` 属性
- 首页 Hero 按钮：通过 `router.onAfterRouteChanged` 和 `DOMContentLoaded` 双重拦截，确保 SPA 路由切换后仍能正确拦截

#### 问题 2：Sitemap 包含内部文件
**挑战：** VitePress 自动生成的 sitemap.xml 包含了 README、模板文件等内部文件，导致 Google Search Console 无法正确读取。

**解决方案：**
- 在 `config.mjs` 中配置 `sitemap.transformItems` 过滤函数
- 将内部文件（README.md、article-matrix-template.md、scripts/）移出项目仓库
- 最终实现 15 个有效页面的精准索引

#### 问题 3：移动端标题显示问题
**挑战：** 移动端 h1 标题字体过大，影响阅读体验。

**解决方案：** 通过 CSS 媒体查询，将移动端 h1 字体从 `2rem` 缩小至 `1.4rem`（缩小 30%）。

#### 问题 4：三栏布局实现与调整
**挑战：** 最初需求为三栏布局（左侧品牌导航、中间文章、右侧热榜），后改为单栏布局。

**解决方案：** 
- 使用 VitePress 的 `doc-top` 插槽注入自定义组件
- 通过 CSS `position: fixed` 实现侧栏定位
- 根据需求变化快速调整为单栏布局

### 2.5 取得的成果

| 成果指标 | 数据 |
|----------|------|
| 页面数量 | 15 个有效页面（首页 + 平台页 + 目录页 + 12 篇文章） |
| 文章覆盖 | 4 个季节系列 + 8 个批次系列 |
| 外链控制 | 100% Google Spreadsheet 链接实现爬虫隔离 |
| SEO 配置 | robots.txt + sitemap.xml + Schema.org + GA4 完整配置 |
| 部署效率 | Git Push 后 1-2 分钟自动部署 |
| 响应式适配 | 桌面端 + 移动端全覆盖 |

---

## 三、核心技能清单

### 3.1 技术能力

| 技能类别 | 具体技能 | 掌握程度 |
|----------|----------|----------|
| **前端开发** | Vue 3、JavaScript、HTML5、CSS3 | 熟练 |
| **静态站点生成** | VitePress、Vite | 熟练 |
| **SEO 优化** | robots.txt、sitemap.xml、Schema.org、Meta Tags | 熟练 |
| **响应式设计** | CSS Grid、Flexbox、媒体查询 | 熟练 |
| **版本控制** | Git、GitHub | 熟练 |
| **CI/CD** | Cloudflare Pages、自动部署 | 熟练 |
| **数据分析** | Google Analytics 4 | 熟练 |
| **内容策略** | Markdown、Frontmatter、SEO 关键词优化 | 熟练 |
| **爬虫控制** | rel 属性、JavaScript 动态加载、robots.txt | 熟练 |

### 3.2 工具掌握

| 工具 | 用途 |
|------|------|
| VS Code / Trae IDE | 代码编辑 |
| Git Bash | 版本控制 |
| Google Search Console | SEO 监控 |
| Google Analytics | 数据分析 |
| Cloudflare Pages | 部署托管 |
| GitHub | 代码托管 |

---

## 四、工作履历概述

### 项目时间线

| 时间 | 里程碑 |
|------|--------|
| 项目初期 | 搭建 VitePress 基础架构，配置主题和导航 |
| 内容开发 | 创建 12 篇文章（4 季节 + 8 批次系列） |
| SEO 优化 | 配置 robots.txt、sitemap.xml、Schema.org、GA4 |
| 爬虫控制 | 实现 Google Spreadsheet 链接的 JavaScript 动态加载 |
| 性能优化 | 移动端响应式调整、内容宽度优化 |
| 上线部署 | Cloudflare Pages 自动部署，提交 Google Search Console |

### 核心业绩

- **独立完成**从 0 到 1 的跨境电商内容平台开发
- **15 个页面**的 SEO 优化和索引配置
- **100% 外链控制**，防止爬虫追踪外部链接
- **自动化部署**，实现 Git Push 即部署

---

## 五、项目成果量化数据

| 指标 | 数值 | 说明 |
|------|------|------|
| 总页面数 | 15 | 首页 + 平台页 + 目录页 + 12 篇文章 |
| 文章系列 | 2 大类 | Season Selection（4 篇）+ Batch Picks（8 篇） |
| 外链控制 | 100% | 所有 Google Spreadsheet 链接实现爬虫隔离 |
| SEO 配置项 | 5+ | robots.txt、sitemap.xml、Schema.org、GA4、Meta Tags |
| 自定义组件 | 5 个 | PostsIndex、LeftSidebar、RightSidebar、LeftMarquee、CustomDocLayout |
| 部署时间 | 1-2 分钟 | Cloudflare Pages 自动构建部署 |
| 响应式断点 | 2 个 | 桌面端（>960px）+ 移动端（<768px） |

---

## 六、职业发展方向

### 目标岗位
- **前端开发工程师**（Vue 3 / React）
- **全栈开发工程师**
- **SEO 技术专家**
- **跨境电商技术顾问**

### 发展方向
1. **技术深度：** 深入学习 Vue 3 生态（Pinia、Vue Router、Nuxt 3）
2. **技术广度：** 扩展后端技能（Node.js、Python、数据库）
3. **SEO 专业：** 深入研究搜索引擎算法、内容营销策略
4. **跨境电商：** 深入了解跨境电商行业，成为技术 + 业务的复合型人才

---

## 七、项目亮点总结

1. **完整的技术栈实践：** 从前端开发到 SEO 优化到 CI/CD 部署，覆盖完整开发流程
2. **SEO 导向的设计思维：** 所有技术决策都围绕 SEO 效果展开
3. **爬虫控制技术：** 实现了精细化的外链爬虫控制策略
4. **自动化部署：** 实现了 Git Push 即部署的 CI/CD 流程
5. **响应式设计：** 兼顾桌面端和移动端的用户体验
6. **结构化数据：** 实现了 Article、FAQPage、WebSite、Organization 等多种 Schema.org 类型

---

*文档生成时间：2026-06-18*
*项目地址：https://kakobuy-7zh.pages.dev/*
