import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4.0 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "næhāl blog",
    enableSPA: true,
    enablePopovers: true,
    analytics: {
      provider: "google",
      tagId: "G-DNETZD1VGV",
    },
    locale: "en-US",
    baseUrl: "https://nehalgajraj.com",
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "created",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "Schibsted Grotesk",
        body: "Source Sans 3",
        code: "IBM Plex Mono",
      },
      colors: {
        lightMode: {
          light: "#eff1f5", // base (Latte)
          lightgray: "#e6e9ef", // mantle
          gray: "#bcc0cc", // overlay0
          darkgray: "#4c4f69", // text
          dark: "#4c4f69", // text
          secondary: "#8839ef", // mauve
          tertiary: "#ea76cb", // pink
          highlight: "rgba(136, 57, 239, 0.15)", // mauve with opacity
        },
        darkMode: {
          light: "#1e1e2e", // base (Mocha)
          lightgray: "#181825", // mantle
          gray: "#6c7086", // overlay0
          darkgray: "#cdd6f4", // text
          dark: "#cdd6f4", // text
          secondary: "#cba6f7", // mauve
          tertiary: "#f5c2e7", // pink
          highlight: "rgba(203, 166, 247, 0.15)", // mauve with opacity
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
    ],
    filters: [Plugin.RemoveDrafts(), Plugin.ExplicitPublish()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
        rssLimit: 10,
        rssFullHtml: true,
        includeEmptyFiles: false,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.NotFoundPage(),
      Plugin.CNAME(),
    ],
  },
}

export default config
