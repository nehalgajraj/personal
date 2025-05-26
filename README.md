# Nehal's Personal Website

A **Quartz 4.2.3** digital garden/blog hosted at [nehalgajraj.com](https://nehalgajraj.com).

## Quick Start

```bash
# Install dependencies
npm install

# Serve locally with live reload
npm run docs

# Build for production
npx quartz build
```

## 📋 Development Guidelines

**IMPORTANT**: Always create a pull request for any feature or significant change:

```bash
git checkout -b feature/your-feature-name
# Make changes...
git push -u origin feature/your-feature-name
gh pr create --title "Feature: Your Feature Name"
```

## 📚 Documentation

See [CLAUDE.md](./CLAUDE.md) for comprehensive documentation including:
- Architecture overview and configuration
- Plugin system and customization points  
- Development workflow and common commands
- Content creation guidelines

## 🏗️ Tech Stack

- **Framework**: Quartz v4.2.3 (Static Site Generator)
- **Frontend**: Preact + TypeScript
- **Content**: Markdown with frontmatter
- **Styling**: SCSS with custom dark theme
- **Build**: esbuild pipeline