# Neuron AI PHP framework

The Agentic Framework of the PHP ecosystem to build production-ready AI driven applications. 
Connect components (LLMs, Tools, vector DBs, memory) to agents that interact with your data and UI.

https://neuron-ai.dev

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
|:--------------------------| :----------------------------------------------- |
| `npm run install`         | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## ✍️ Writing a blog post

Blog posts are Markdown files in `src/content/blog/posts/`. The file name is the post URL:
`my-post.md` is published at `/blog/my-post/`. Put the post images in
`src/content/blog/images/my-post/` and reference them with relative paths.

```markdown
---
title: "My post title"
description: "One or two sentences, shown in the blog list and in search results."
date: "2026-11-27T10:00:00Z"
updated: "2026-11-27T10:00:00Z" # optional, the last-modified date in the sitemap
author: "Valerio Barbera"
featured_image: "../images/my-post/featured.png"
---

Your content, with images like this: ![Alt text](../images/my-post/screenshot.png)
```

Code blocks are highlighted with [highlight.js](https://highlightjs.org) at build time.
Always set the language on the code fence (`php`, `bash`, `json`, ...).

The blog list, the sitemap and `/llms.txt` pick up new posts automatically on the next build.
