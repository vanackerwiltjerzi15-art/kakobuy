# 🚀 Cloudflare Pages 部署指南

## 📋 部署前检查清单

在开始部署之前，请确保：

- [ ] 已安装 Node.js (v16 或更高版本)
- [ ] 已创建 GitHub 账号
- [ ] 已注册 Cloudflare 账号
- [ ] 已在 Cloudflare 创建 Pages 项目 `kakobuy`

---

## 📦 步骤 1：安装依赖

打开终端（PowerShell 或 Command Prompt），进入项目目录：

```bash
cd d:\kakobuy-7zh.pages\kakobuy
```

安装项目依赖：

```bash
npm install
```

> **预计时间**：1-3 分钟（取决于网络速度）

---

## 🔧 步骤 2：本地测试构建

在推送代码之前，先在本地测试构建是否成功：

```bash
npm run build
```

**预期输出：**
```
✓ built in 5.23s
dist/
  ├── index.html
  ├── posts/
  │   ├── gutefrage-kakobuy-spreadsheet/
  │   ├── quora-kakobuy-spreadsheet/
  │   └── reddit-kakobuy-spreadsheet/
  ├── assets/
  ├── sitemap.xml
  └── 404.html
```

> ✅ 如果看到 `built in X.XXs` 且没有错误，说明构建成功！

---

## 🌐 步骤 3：推送到 GitHub

### 3.1 初始化 Git 仓库

```bash
git init
git config user.name "你的 GitHub 用户名"
git config user.email "你的 GitHub 邮箱"
```

### 3.2 添加所有文件

```bash
git add .
```

### 3.3 提交更改

```bash
git commit -m "Initial commit: Kakobuy SEO blog with VitePress"
```

### 3.4 关联 GitHub 仓库

1. 在 GitHub 创建新仓库（例如 `kakobuy-blog`）
2. **不要勾选** "Initialize this repository with a README"
3. 复制仓库地址（HTTPS）
4. 在终端运行：

```bash
git remote add origin https://github.com/你的用户名/kakobuy-blog.git
```

### 3.5 推送到 GitHub

```bash
git branch -M main
git push -u origin main
```

---

## ☁️ 步骤 4：配置 Cloudflare Pages

### 4.1 连接 GitHub 仓库

1. 登录 [Cloudflare Dashboard](https://dash.cloudflare.com)
2. 进入 **Pages** → 选择 `kakobuy` 项目
3. 点击 **Settings** → **Git**
4. 点击 **Connect to Git**
5. 授权 Cloudflare 访问 GitHub
6. 选择你的仓库 `kakobuy-blog`

### 4.2 配置构建设置

在 **Build & Deploy** 设置中填写：

| 设置项 | 值 |
|-------|-----|
| **Production branch** | `main` |
| **Build command** | `npm run build` |
| **Build output directory** | `dist` |
| **Root directory** | 留空 |

### 4.3 环境变量（可选）

如果需要，添加以下环境变量：

```
NODE_VERSION = 18
```

### 4.4 保存并部署

点击 **Save and Deploy**

**部署过程：**
1. Cloudflare 会自动从 GitHub 拉取代码
2. 执行 `npm install` 安装依赖
3. 执行 `npm run build` 构建网站
4. 将 `dist` 目录部署到全球 CDN

**预计时间**：3-5 分钟

---

## ✅ 步骤 5：验收到部署

### 5.1 检查部署状态

在 Cloudflare Pages 控制台查看：

- ✅ 部署状态应为 **Ready**
- ✅ 预览 URL 应为 `https://kakobuy-7zh.pages.dev`
- ✅ 所有页面应可正常访问

### 5.2 测试页面

访问以下页面确认正常：

- 首页：`https://kakobuy-7zh.pages.dev/`
- 文章列表：`https://kakobuy-7zh.pages.dev/posts/`
- 文章 1：`https://kakobuy-7zh.pages.dev/posts/gutefrage-kakobuy-spreadsheet/`
- 文章 2：`https://kakobuy-7zh.pages.dev/posts/quora-kakobuy-spreadsheet/`
- 文章 3：`https://kakobuy-7zh.pages.dev/posts/reddit-kakobuy-spreadsheet/`
- 404 页面：`https://kakobuy-7zh.pages.dev/nonexistent-page/`

### 5.3 检查 SEO 文件

- robots.txt：`https://kakobuy-7zh.pages.dev/robots.txt`
- sitemap.xml：`https://kakobuy-7zh.pages.dev/sitemap.xml`

---

## 🔄 步骤 6：后续更新流程

每次修改文章或添加新内容后：

### 6.1 提交更改

```bash
git add .
git commit -m "描述你的更改，例如：Updated gutefrage article"
git push
```

### 6.2 自动部署

Cloudflare Pages 会自动：
1. 检测到新的提交
2. 重新构建网站
3. 部署新版本
4. 保持零停机时间

**查看部署日志：**
- Cloudflare Pages → Deployments → 点击最新部署
- 查看 Build Log 确认无错误

---

## 🎯 步骤 7：配置自定义域名（可选）

如果你想使用自己的域名（如 `blog.kakobuy.com`）：

### 7.1 在 Cloudflare Pages 中添加域名

1. Pages → `kakobuy` 项目 → **Custom domains**
2. 点击 **Add custom domain**
3. 输入你的域名
4. 按照提示配置 DNS

### 7.2 DNS 配置

在 Cloudflare DNS 设置中添加：

| 类型 | 名称 | 内容 | TTL |
|-----|------|------|-----|
| CNAME | `blog` (或 @) | `kakobuy-7zh.pages.dev` | Auto |

### 7.3 SSL 证书

Cloudflare 会自动提供 SSL 证书，无需手动配置。

---

## 📊 步骤 8：Google Search Console 提交

### 8.1 验证网站所有权

1. 访问 [Google Search Console](https://search.google.com/search-console)
2. 添加资源：`https://kakobuy-7zh.pages.dev`
3. 选择验证方式（推荐 HTML 标签）
4. 将验证代码添加到项目中

### 8.2 提交 Sitemap

1. 进入 Sitemap 部分
2. 输入：`sitemap.xml`
3. 点击提交

### 8.3 监控索引状态

定期检查：
- 索引覆盖率
- 搜索表现
- 移动设备友好性
- Core Web Vitals

---

## 🛠️ 常见问题解决

### 问题 1：构建失败 "Cannot find module"

**解决方案：**
```bash
# 删除 node_modules 和 package-lock.json
rm -rf node_modules package-lock.json

# 重新安装
npm install

# 重新构建
npm run build
```

### 问题 2：Cloudflare 部署超时

**解决方案：**
- 检查 `npm run build` 本地是否能成功
- 查看 Build Log 找出错误
- 确保 `dist` 目录配置正确

### 问题 3：页面显示但样式丢失

**解决方案：**
- 检查 `vite.config.js` 中的 `base` 配置
- 清除浏览器缓存
- 重新构建并推送

### 问题 4：404 页面不工作

**解决方案：**
- 确认 `404.html` 在 `public` 目录
- 检查 Cloudflare Pages 的 404 设置
- 在 **Functions** → **404** 中配置

---

## 📈 性能优化建议

### 1. 启用缓存

Cloudflare 自动缓存静态资源，无需额外配置。

### 2. 图片优化

- 使用 WebP 格式
- 压缩图片（推荐 TinyPNG）
- 添加 `loading="lazy"` 属性

### 3. 减少 JavaScript

VitePress 已自动优化，无需手动处理。

### 4. 监控性能

使用以下工具：
- [PageSpeed Insights](https://pagespeed.web.dev/)
- [WebPageTest](https://www.webpagetest.org/)
- Cloudflare Analytics

---

## 🎉 部署完成！

现在你的 Kakobuy SEO 博客已经上线！

**下一步：**
1. ✅ 提交 Google Search Console
2. ✅ 分享网站给目标用户
3. ✅ 监控流量和索引状态
4. ✅ 持续更新优质内容
5. ✅ 根据数据优化 SEO

**重要链接：**
- 网站地址：`https://kakobuy-7zh.pages.dev`
- Cloudflare 控制台：`https://dash.cloudflare.com`
- GitHub 仓库：`https://github.com/你的用户名/kakobuy-blog`

---

**需要帮助？**

- VitePress 文档：https://vitepress.dev/
- Cloudflare Pages 文档：https://developers.cloudflare.com/pages/
- Google SEO 指南：https://developers.google.com/search/docs
