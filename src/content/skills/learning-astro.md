---
title: 学习 Astro 内容集合
description: 用 Astro 内容集合搭建博客的实践记录。
date: "2025-06-05"
category: 前端
status: 已完成
tags: [Astro, 静态站点]
---

用 Astro 内容集合搭建博客的实践记录。

## 内容集合

用 `defineCollection` + `glob` loader 管理 Markdown，配合 Zod schema 校验 frontmatter。

## 收获

- 内容与页面分离，写作体验好
- 构建产物是纯静态文件，部署方便
- 按需加载，性能出色

> 静态站点生成器 + Markdown，是个人博客的黄金组合。

整个过程比想象中顺畅。
