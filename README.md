# 我的博客

基于 [Astro](https://astro.build/) 的个人博客，包含首页、个人随想、技能学习、书影音四大板块。内容全部用 Markdown 管理。

## 目录结构

- `src/content/thoughts/` — 个人随想（Markdown）
- `src/content/skills/` — 技能学习（Markdown）
- `src/content/shares/` — 书影音（书籍 / 电影 / 游戏 / 音乐 / 其他，一个统一集合）
- `src/content.config.ts` — 各集合的 frontmatter schema
- `src/lib/shares.ts` — 书影音类型标签与颜色映射

## 本地运行

```bash
npm install
npm run dev        # 开发模式 http://localhost:4321
npm run build      # 构建到 dist/
npm run preview    # 预览构建产物
```

## 添加内容

在对应目录新建 Markdown 文件（文件名用英文 kebab-case，作为 URL），填写 frontmatter 即可。以书影音为例：

```md
---
title: 《示例书名》
type: book            # book | movie | game | music | other
creator: 作者名
year: 2024
genre: 分类
rating: 5             # 1–5，可省略
date: "2024-01-01"
summary: 一句话短评
tags: [标签]
---

正文……
```

## 新增分享类型

1. 在 `src/content.config.ts` 的 `shares` schema 中扩展 `type` 枚举；
2. 在 `src/lib/shares.ts` 的 `SHARE_TYPE_META` 加一行标签与颜色。

无需改页面代码。

## 部署到 Vercel

1. 把本项目推到 GitHub：`git init -b main` → `git add -A` → `git commit` → 在 GitHub 新建空仓库后 `git remote add origin <仓库地址>` → `git push -u origin main`。
2. 打开 [vercel.com](https://vercel.com)，用 GitHub 账号登录，点 **Add New → Project**，导入该仓库。
3. 框架会自动识别为 Astro；构建命令 `npm run build`、输出目录 `dist`（已写入 `vercel.json`，默认即正确）。
4. 点 **Deploy**，完成后得到 `https://你的项目名.vercel.app`，此时任何人可访问。
5. **部署后记得改一处**：把 `astro.config.mjs` 里的 `site` 改成你的真实地址（如 `https://my-blog.vercel.app`），再推送一次，sitemap 就正确了。

> 绑定自定义域名：在 Vercel 项目的 Settings → Domains 添加你的域名，再到域名注册商处按提示加 A/CNAME 记录即可，HTTPS 自动签发。
