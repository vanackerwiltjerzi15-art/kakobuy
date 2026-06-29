# GitHub 个人资源项目搭建完整指南

---

## 一、GitHub Pages 站点类型

### 1. 用户站点（User Site）
- **仓库名**：`用户名.github.io`
- **示例**：`vanackerwiltjerzi15-art.github.io`
- **访问地址**：`https://用户名.github.io/`
- **限制**：一个 GitHub 账号只能有一个用户站点
- **适用场景**：个人主页、主品牌站

### 2. 项目站点（Project Site）
- **仓库名**：任意名称（如 `oopbuy`、`acbuy`）
- **访问地址**：`https://用户名.github.io/仓库名/`
- **限制**：无数量限制
- **适用场景**：多个独立平台、子品牌站

---

## 二、用户站点搭建流程

### 步骤 1：创建仓库
1. 在 GitHub 新建仓库，名称为 `vanackerwiltjerzi15-art.github.io`
2. 设为 **Public**
3. 勾选 "Add a README file"（可选）

### 步骤 2：准备项目文件
1. 复制模板项目到本地：
   ```bash
   cp -r /d/kakobuy-7zh.pages/project-template /d/用户名.github.io
   ```

2. 修改 `.vitepress/config.mjs`：
   ```javascript
   export default defineConfig({
     base: '/',  // 用户站点必须用 '/'
     // ...
   })
   ```

3. 删除旧的 `.git` 文件夹：
   ```bash
   cd /d/用户名.github.io
   rm -rf .git
   ```

### 步骤 3：初始化并推送
```bash
cd /d/用户名.github.io
git init
git add .
git commit -m "Initial commit: user site setup"
git branch -M main
git remote add origin https://github.com/vanackerwiltjerzi15-art/vanackerwiltjerzi15-art.github.io.git
git push -u origin main
```

### 步骤 4：启用 GitHub Pages
1. 打开仓库 → **Settings** → **Pages**
2. **Source** 选择 **GitHub Actions**
3. 等待 workflow 构建完成（约 1-2 分钟）

### 步骤 5：访问网站
- 地址：`https://vanackerwiltjerzi15-art.github.io/`
- **不需要加仓库名路径**

---

## 三、项目站点搭建流程（多平台）

### 步骤 1：创建仓库
1. 在 GitHub 新建仓库，名称为 `oopbuy`（或其他平台名）
2. 设为 **Public**

### 步骤 2：准备项目文件
1. 复制模板项目到本地：
   ```bash
   cp -r /d/kakobuy-7zh.pages/project-template /d/oopbuy
   ```

2. 修改 `.vitepress/config.mjs`：
   ```javascript
   export default defineConfig({
     base: '/oopbuy/',  // 项目站点必须用 '/仓库名/'
     // ...
   })
   ```

3. 删除旧的 `.git` 文件夹：
   ```bash
   cd /d/oopbuy
   rm -rf .git
   ```

### 步骤 3：初始化并推送
```bash
cd /d/oopbuy
git init
git add .
git commit -m "Initial commit: oopbuy project setup"
git branch -M main
git remote add origin https://github.com/vanackerwiltjerzi15-art/oopbuy.git
git push -u origin main
```

### 步骤 4：启用 GitHub Pages
1. 打开仓库 → **Settings** → **Pages**
2. **Source** 选择 **GitHub Actions**
3. 等待 workflow 构建完成

### 步骤 5：访问网站
- 地址：`https://vanackerwiltjerzi15-art.github.io/oopbuy/`
- **必须加仓库名路径**

---

## 四、配置文件对比

| 配置项 | 用户站点 | 项目站点 |
|--------|----------|----------|
| 仓库名 | `用户名.github.io` | 任意名称 |
| `base` 配置 | `base: '/'` | `base: '/仓库名/'` |
| 访问地址 | `https://用户名.github.io/` | `https://用户名.github.io/仓库名/` |
| 数量限制 | 1 个 | 无限制 |

---

## 五、多平台管理策略

### 推荐架构
```
vanackerwiltjerzi15-art.github.io  ← 主站/品牌总站
├── /oopbuy/  ← OOPBuy 平台站
├── /acbuy/   ← ACBuy 平台站
└── /其他平台/  ← 未来扩展
```

### 模板复用流程
1. **维护一个模板项目**：`d:\kakobuy-7zh.pages\project-template`
2. **新建平台时**：
   ```bash
   cp -r /d/kakobuy-7zh.pages/project-template /d/新平台名
   cd /d/新平台名
   rm -rf .git
   # 修改配置
   git init && git add . && git commit -m "Initial commit"
   git remote add origin https://github.com/用户名/新平台名.git
   git push -u origin main
   ```

---

## 六、需要修改的核心配置

### 1. `.vitepress/config.mjs`
```javascript
export default defineConfig({
  title: '新平台名称',
  description: '新平台描述',
  base: '/',  // 用户站点用 '/'，项目站点用 '/仓库名/'
  lang: 'en-US',
  
  head: [
    // Google Analytics ID
    ['script', { async: '', src: 'https://www.googletagmanager.com/gtag/js?id=G-新ID' }],
  ],
  
  themeConfig: {
    logo: { src: '/favicon.png' },
    nav: [
      { text: 'Home', link: '/' },
      // 修改所有链接
    ],
  },
  
  sitemap: {
    hostname: 'https://用户名.github.io',  // 或 https://用户名.github.io/仓库名
  },
})
```

### 2. `package.json`
```json
{
  "name": "新平台名-blog",
  "version": "1.0.0"
}
```

### 3. `public/robots.txt`
```
Sitemap: https://用户名.github.io/sitemap.xml
# 或
Sitemap: https://用户名.github.io/仓库名/sitemap.xml
```

### 4. `index.md`
- 修改 Hero 标题、描述、图片
- 修改按钮链接
- 修改功能特性

### 5. 所有文章内容
- 批量替换平台名称
- 更新链接和引用

---

## 七、GitHub Actions 配置

### 用户站点 Workflow
创建 `.github/workflows/deploy.yml`：
```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]

permissions:
  contents: read
  pages: write
  id-token: write

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
      - run: npm install
      - run: npm run build
      - uses: actions/upload-pages-artifact@v3
        with:
          path: dist

  deploy:
    needs: build
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - id: deployment
        uses: actions/deploy-pages@v4
```

---

## 八、SEO 配置清单

| 配置项 | 用户站点 | 项目站点 |
|--------|----------|----------|
| robots.txt | ✅ | ✅ |
| sitemap.xml | ✅ | ✅ |
| Google Analytics | ✅ | ✅ |
| Schema.org | ✅ | ✅ |
| canonical URL | `https://用户名.github.io/` | `https://用户名.github.io/仓库名/` |

---

## 九、快速命令参考

### 新建项目站点
```bash
# 1. 复制模板
cp -r /d/kakobuy-7zh.pages/project-template /d/新平台名

# 2. 进入目录
cd /d/新平台名

# 3. 删除旧 git
rm -rf .git

# 4. 初始化新仓库
git init
git add .
git commit -m "Initial commit: 新平台名 setup"
git branch -M main

# 5. 关联远程仓库
git remote add origin https://github.com/vanackerwiltjerzi15-art/新平台名.git

# 6. 推送
git push -u origin main
```

### 修改 base 配置
```bash
# 用户站点
sed -i "s|base: '/.*'|base: '/'|" .vitepress/config.mjs

# 项目站点
sed -i "s|base: '/.*'|base: '/仓库名/'|" .vitepress/config.mjs
```

---

## 十、常见问题

### Q1: 用户站点和项目站点可以同时存在吗？
**A:** 可以。一个 GitHub 账号可以有 1 个用户站点 + 无限个项目站点。

### Q2: 如何切换用户站点的内容？
**A:** 直接向 `用户名.github.io` 仓库推送新代码即可，旧内容会被覆盖。

### Q3: 项目站点的 base 配置错误会怎样？
**A:** 页面会 404，所有资源（CSS、JS、图片）都无法加载。必须确保 `base` 与仓库名一致。

### Q4: 如何为项目站点配置自定义域名？
**A:** 在仓库 Settings → Pages → Custom domain 中添加域名，并在 `public/CNAME` 文件中写入域名。

---

*文档版本：v1.0*
*最后更新：2026-06-18*
*GitHub 用户：vanackerwiltjerzi15-art*
