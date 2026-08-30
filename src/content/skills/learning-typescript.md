---
title: 学习 TypeScript
description: 系统学习 TypeScript 的笔记与心得。
date: "2025-06-10"
category: 前端
status: 进行中
tags: [TypeScript, 前端]
---

系统学习 TypeScript 的笔记，边学边记。

## 为什么学 TS

类型系统能在编译期发现很多问题，对于大型项目尤其有用。

## 核心概念

- **类型注解**：显式声明变量类型
- **接口与类型别名**：描述对象结构
- **泛型**：写出可复用的类型

```ts
function identity<T>(value: T): T {
  return value;
}
```

> 类型是写给未来的自己和同事看的文档。

当前状态：进行中，持续更新笔记。
