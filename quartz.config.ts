import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "sergiopb.dev",
    pageTitleSuffix: " - sergiopolarbear",
    enableSPA: true,
    enablePopovers: true,
    analytics: {
      provider: "plausible",
    },
    locale: "en-US",
    baseUrl: "sergiopb.dev",
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "created",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "Inter",
        body: "Atkinson Hyperlegible",
        code: "Iosevka",
      },
      colors: {
        lightMode: {
          light: "#faf4ed",          // base
          lightgray: "#f2e9de",      // overlay
          gray: "#9893a5",           // muted
          darkgray: "#797593",       // subtle
          dark: "#575279",           // text
          secondary: "#286983",      // pine
          tertiary: "#56949f",       // foam
          highlight: "rgba(214, 208, 197, 0.15)", // highlightMed as transparent
          textHighlight: "#ea9d3488", // gold with transparency
        },
        darkMode: {
          light: "#191724",          // base
          lightgray: "#26233a",      // overlay
          gray: "#6e6a86",           // muted
          darkgray: "#908caa",       // subtle
          dark: "#e0def4",           // text
          secondary: "#31748f",      // pine
          tertiary: "#c4a7e7",       // iris
          highlight: "rgba(82, 79, 103, 0.15)",  // highlightHigh as transparent
          textHighlight: "#f6c17788", // gold with transparency
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "git", "filesystem"],
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
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.Favicon(),
      Plugin.NotFoundPage(),
      // Comment out CustomOgImages to speed up build time
      Plugin.CustomOgImages(),
    ],
  },
}

export default config
