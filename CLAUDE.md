# CLAUDE.md - Quartz Personal Website

This is a **Quartz 4.2.3** digital garden/blog website for Nehal (nehalgajraj.com). Quartz is a static site generator that transforms Markdown content into a modern, fast website with features like search, graph view, and backlinks.

## 🏗️ Architecture Overview

- **Framework**: Quartz v4.2.3 (Static Site Generator)
- **Frontend**: Preact with TypeScript
- **Content**: Markdown files with frontmatter
- **Styling**: SCSS with custom theming
- **Build**: esbuild + custom build pipeline
- **Deployment**: Static files to `public/` directory

## 📁 Key Directories

```
├── content/               # Markdown content files
│   ├── index.md          # Homepage content
│   ├── papers/           # Academic papers/notes
│   ├── writing/          # Blog posts
│   ├── art/              # Art-related content
│   └── interpretability/ # ML interpretability content
├── quartz/               # Core Quartz framework
│   ├── components/       # React/Preact UI components
│   ├── plugins/          # Content processing plugins
│   ├── styles/           # SCSS stylesheets
│   └── util/             # Utility functions
├── public/               # Generated static site output
├── docs/                 # Quartz documentation
└── quartz.config.ts      # Main configuration
```

## ⚙️ Configuration Files

- **`quartz.config.ts`**: Main site configuration (theme, plugins, analytics)
- **`quartz.layout.ts`**: Page layout definitions (sidebar components, etc.)
- **`package.json`**: Dependencies and build scripts
- **`tsconfig.json`**: TypeScript configuration

## 🎨 Current Theme Settings

The site uses a custom dark theme with:
- **Fonts**: Schibsted Grotesk (headers), Source Sans Pro (body), IBM Plex Mono (code)
- **Colors**: Dark mode with blue/teal accents (#7b97aa, #84a59d)
- **Analytics**: Google Analytics (G-DNETZD1VGV)
- **Domain**: nehalgajraj.com

## 🔧 Common Commands

```bash
# Build and serve the site locally
npm run docs

# Build only
npx quartz build

# Sync content and build
npx quartz sync

# Format code
npm run format

# Type check
npm run check

# Run tests
npm run test
```

## 🧩 Plugin Configuration

**Transformers** (content processing):
- FrontMatter: YAML frontmatter parsing
- CreatedModifiedDate: File date extraction
- SyntaxHighlighting: Code highlighting (github themes)
- ObsidianFlavoredMarkdown: Obsidian-style links and embeds
- GitHubFlavoredMarkdown: GFM support
- TableOfContents: Auto-generated TOCs
- Latex: Math rendering with KaTeX

**Filters** (content filtering):
- RemoveDrafts: Hide draft content
- ExplicitPublish: Only show files with `publish: true`

**Emitters** (output generation):
- ContentPage: Individual page generation
- FolderPage: Directory listing pages
- TagPage: Tag-based pages
- ContentIndex: Search index + sitemap + RSS
- Assets: Static asset processing

## 📝 Content Creation

Create `.md` files in `content/` with frontmatter:
```yaml
---
title: "Page Title"
publish: true
tags: [tag1, tag2]
---
# Content here
```

**Important**: Files need `publish: true` in frontmatter to be visible (ExplicitPublish filter).

## 🔍 Search & Navigation

- **Full-text search**: Powered by FlexSearch
- **Graph view**: Available but currently disabled in layout
- **Explorer**: File tree navigation in left sidebar
- **Backlinks**: Automatic bidirectional linking
- **Breadcrumbs**: Path-based navigation

## 🎯 Component Layout

**Content Pages** (`quartz.layout.ts:12`):
- Left: PageTitle, Search, Explorer
- Right: TableOfContents, Backlinks
- Before content: Breadcrumbs, ArticleTitle, ContentMeta

**List Pages** (`quartz.layout.ts:36`):
- Left: PageTitle, Search, Explorer
- Right: (empty)
- Before content: Breadcrumbs, ArticleTitle, ContentMeta

## 🚀 Development Workflow

1. **Content**: Add/edit `.md` files in `content/`
2. **Preview**: Run `npm run docs` for live preview
3. **Build**: Run `npx quartz build` to generate `public/`
4. **Deploy**: Upload `public/` contents to web server

### 🔄 Git Workflow

**IMPORTANT**: After completing any feature or significant change, always create a pull request:

```bash
# Create feature branch
git checkout -b feature/your-feature-name

# Make changes and commit
git add .
git commit -m "descriptive commit message"

# Push and create PR
git push -u origin feature/your-feature-name
gh pr create --title "Feature: Your Feature Name" --body "Description of changes"
```

This ensures:
- Code review and quality control
- Proper change tracking and documentation
- Rollback capability if issues arise
- Collaborative development workflow

## 🔧 Customization Points

- **Theme colors**: `quartz.config.ts:30-61`
- **Layout components**: `quartz.layout.ts`
- **Plugins**: `quartz.config.ts:64-102`
- **Custom styles**: `quartz/styles/custom.scss`
- **Component modifications**: `quartz/components/`

## 🚨 Current Issues

- `ReaderMode` component is declared but not implemented (`quartz/components/index.ts:47`)
- Darkmode component exists but is commented out in layout
- Graph component exists but is disabled in layout

## 📚 Useful File Locations

- Site content: `content/index.md`
- Main config: `quartz.config.ts:11` (pageTitle: "næhāl blog")
- Layout config: `quartz.layout.ts`
- Custom styles: `quartz/styles/custom.scss`
- Component index: `quartz/components/index.ts`
- Plugin definitions: `quartz/plugins/index.ts`

## 🔗 External Dependencies

- **Markdown processing**: remark, rehype ecosystem
- **Math rendering**: KaTeX
- **Code highlighting**: Shiki
- **Search**: FlexSearch  
- **UI**: Preact (React alternative)
- **Build**: esbuild, typescript
- **Git integration**: @napi-rs/simple-git

This is a highly customized Quartz installation focused on academic/technical content with a clean, dark aesthetic.