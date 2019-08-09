# 前端面试测试

测试分两个部分。

- 按要求完成 Hacker News 2。
- 完成算法题（算法题不做要求，但做了可以提高面试几率哦~）。

测试流程

- 克隆本库。
- 按要求完成测试。
- 发布这个库到自己的 git 仓库上（可以是任何的 git 仓库，github，gitlab，bitbucket，etc...）。

## Hacker News 2

### 使用框架

本项目是用 `vue-cli` 自动生成的，包含了

- babel
- vuex
- vue-router
- sass
- eslint/prettier

本项目还会用到

- Firebase

### 基本要求

- [ ] 通过 [Hacker News API](https://github.com/HackerNews/API) 获取 top stories 和 new stories 列表数据，并渲染成列表在页面显示。列表项内容包括 by（作者）、score（分数）、time（时间戳）、title（标题）、url（发布的文章链接）、comments（评论数量）。
- [ ] 实现导航栏，并显示 Logo（Logo 位于 `src/assets/logo.png`）、Top（对应导航到 top stories 列表）和 New（对应导航到 new stories 列表）。
- [ ] 实现列表分页，每页 20 项。

_网站样式自定，并勾选已经实现的要求，如果实现了基本要求以外的功能或效果，请在列表下方列出清单。_

### 限制条件

- 不能使用任何 UI 框架，可以使用 css pre-processor（css 预处理器）。
- 至少一个功能一个 commit（提交），并且尽量保证回退到任何一个 commit 是可运行的，如有特殊情况可以在 message（消息） 里标明。

### 参考资源

- [Firebase Doc（Firebase 文档）](https://firebase.google.com/docs?authuser=0)
- [Hacker News API（Hacker News 网站的 API 文档）](https://github.com/HackerNews/API)
- [Original Hacker News Website（Hacker News 官网）](https://news.ycombinator.com/news)

## 算法题（选做）

算法题位于 `algorithm` 文件夹下。一共两题。

### Question 1

Jamie is a programmer, and James' girlfriend. She likes diamonds, and wants a diamond string from James. Since James doesn't know how to make this happen, he needs your help.

#### Task

You need to return a string that looks like a diamond shape when printed on the screen, using asterisk (`*`) characters. Trailing spaces should not be removed, but every line must be terminated with a newline character (`\n`).

Return `null/nil/None/`... if the input is an even number or negative, as it is not possible to print a diamond of even or negative size.

#### Examples

A size 3 diamond:

```bash
 *
***
 *
```

A size 5 diamond:

```bash
  *
 ***
*****
 ***
  *
```

### Question 2

John has invited some friends. His list is:

`s = "Fred:Corwill;Wilfred:Corwill;Barney:Tornbull;Betty:Tornbull;Bjon:Tornbull;Raphael:Corwill;Alfred:Corwill";`

Could you make a program that

- makes this string uppercase
- gives it sorted in alphabetical order by last name.

When the last names are the same, sort them by first name. Last name and first name of a guest come in the result between parentheses separated by a comma.

So the result of function meeting(s) will be:

`"(CORWILL, ALFRED)(CORWILL, FRED)(CORWILL, RAPHAEL)(CORWILL, WILFRED)(TORNBULL, BARNEY)(TORNBULL, BETTY)(TORNBULL, BJON)"`

It can happen that in two distinct families with the same family name two people have the same first name too.
