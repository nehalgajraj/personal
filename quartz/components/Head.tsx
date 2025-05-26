import { i18n } from "../i18n"
import { FullSlug, joinSegments, pathToRoot } from "../util/path"
import { JSResourceToScriptElement } from "../util/resources"
import { googleFontHref } from "../util/theme"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"

export default (() => {
  const Head: QuartzComponent = ({ cfg, fileData, externalResources }: QuartzComponentProps) => {
    const title = fileData.frontmatter?.title ?? i18n(cfg.locale).propertyDefaults.title
    const description =
      fileData.description?.trim() ?? i18n(cfg.locale).propertyDefaults.description
    const { css, js } = externalResources

    const url = new URL(cfg.baseUrl ?? "https://example.com")
    const path = url.pathname as FullSlug
    const baseDir = fileData.slug === "404" ? path : pathToRoot(fileData.slug!)
    const canonicalUrl = `${cfg.baseUrl}${fileData.slug === "index" ? "" : "/" + fileData.slug}`

    const iconPath = joinSegments(baseDir, "static/icon.png")
    const ogImagePath = `${cfg.baseUrl}/static/og-image.png`

    // Generate structured data
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      headline: title,
      description: description,
      author: {
        "@type": "Person",
        name: "Nehal",
        url: cfg.baseUrl,
      },
      publisher: {
        "@type": "Organization",
        name: "næhāl blog",
        url: cfg.baseUrl,
      },
      url: canonicalUrl,
      image: ogImagePath,
      datePublished: fileData.dates?.created,
      dateModified: fileData.dates?.modified,
    }

    return (
      <head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        {cfg.theme.cdnCaching && cfg.theme.fontOrigin === "googleFonts" && (
          <>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" />
            <link rel="stylesheet" href={googleFontHref(cfg.theme)} />
          </>
        )}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content={description} />
        <meta name="generator" content="Quartz" />
        <meta name="theme-color" content="#7b97aa" />
        <meta name="author" content="Nehal" />
        <link rel="canonical" href={canonicalUrl} />

        {/* Open Graph meta tags */}
        <meta property="og:type" content="article" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:site_name" content="næhāl blog" />
        {cfg.baseUrl && <meta property="og:image" content={ogImagePath} />}
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="675" />
        <meta property="og:locale" content="en_US" />

        {/* Twitter Card meta tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={ogImagePath} />
        <meta name="twitter:creator" content="@nehalgajraj" />
        <meta name="twitter:site" content="@nehalgajraj" />

        {/* Favicon and icons */}
        <link rel="icon" href={iconPath} />
        <link rel="apple-touch-icon" href={iconPath} />

        {/* Structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        {css.map((href) => (
          <link key={href} href={href} rel="stylesheet" type="text/css" spa-preserve />
        ))}
        {js
          .filter((resource) => resource.loadTime === "beforeDOMReady")
          .map((res) => JSResourceToScriptElement(res, true))}
      </head>
    )
  }

  return Head
}) satisfies QuartzComponentConstructor
