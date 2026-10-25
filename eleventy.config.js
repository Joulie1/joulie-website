import { HtmlBasePlugin } from "@11ty/eleventy";

export default function (eleventyConfig) {
  // Statische Dateien unverändert übernehmen
  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("src/js");
  eleventyConfig.addPassthroughCopy("src/assets");
  eleventyConfig.addPassthroughCopy({ "src/.nojekyll": ".nojekyll" });

  // Setzt vor alle absoluten Links den Unterordner von GitHub Pages
  eleventyConfig.addPlugin(HtmlBasePlugin);

  eleventyConfig.addFilter("year", () => new Date().getFullYear());
}

export const config = {
  dir: {
    input: "src",
    output: "_site",
  },
  // Unterordner auf GitHub Pages; lokal per PATH_PREFIX=/ überschreibbar
  pathPrefix: process.env.PATH_PREFIX ?? "/joulie-website/",
};
