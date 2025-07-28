# 📘 02 - Semantic HTML Structure Notes

This file introduces the structure of a **semantic HTML5 page**, focusing on layout, SEO, and accessibility best practices. It builds upon basic tags from `01-basic-tags`.

---

## 🧠 New Concepts in This File

### ✅ Semantic HTML Tags

| Tag         | Use Case / Purpose |
|-------------|--------------------|
| `<header>`  | Top of page: includes logo, nav links, etc. |
| `<nav>`     | Section for navigation menus |
| `<main>`    | Main page content (should only appear once) |
| `<section>` | Logical grouping of related content |
| `<article>` | Self-contained block (like a blog post or news item) |
| `<aside>`   | Side content (ads, tips, links) |
| `<footer>`  | Bottom of page (e.g. external links, contact info) |

---

## 🔗 Links and SEO

- **Anchor Tags (`<a>`)**  
  Use `target="_blank"` to open in new tab, and `rel="noopener noreferrer"` for security.

```html
<a href="https://example.com" target="_blank" rel="noopener noreferrer">
    Visit Example
</a>
