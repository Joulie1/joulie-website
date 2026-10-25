import { HtmlBasePlugin } from "@11ty/eleventy";

// Liest die Texttabelle (Spalten: key;de;en). Trennzeichen ; oder , –
// Felder mit Trennzeichen oder Zeilenumbruch in "Anführungszeichen".
function parseCsv(input) {
  const text = input.replace(/^﻿/, "");
  const delimiter = text.split("\n", 1)[0].includes(";") ? ";" : ",";
  const rows = [];
  let row = [];
  let field = "";
  let quoted = false;

  for (let i = 0; i < text.length; i++) {
    const c = text[i];
    if (quoted) {
      if (c === '"' && text[i + 1] === '"') { field += '"'; i++; }
      else if (c === '"') quoted = false;
      else field += c;
    } else if (c === '"') quoted = true;
    else if (c === delimiter) { row.push(field); field = ""; }
    else if (c === "\n" || c === "\r") {
      if (c === "\r" && text[i + 1] === "\n") i++;
      row.push(field); rows.push(row); row = []; field = "";
    } else field += c;
  }
  if (field || row.length) { row.push(field); rows.push(row); }

  const [header, ...body] = rows;
  const languages = header.slice(1).map((h) => h.trim());
  const texts = {};
  for (const cells of body) {
    const key = (cells[0] || "").trim();
    if (!key) continue;
    texts[key] = {};
    languages.forEach((lang, n) => { texts[key][lang] = (cells[n + 1] || "").trim(); });
  }
  return texts;
}

export default function (eleventyConfig) {
  // Statische Dateien unverändert übernehmen
  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("src/js");
  eleventyConfig.addPassthroughCopy("src/assets");
  eleventyConfig.addPassthroughCopy({ "src/.nojekyll": ".nojekyll" });

  // Setzt vor alle absoluten Links den Unterordner von GitHub Pages
  eleventyConfig.addPlugin(HtmlBasePlugin);

  eleventyConfig.addDataExtension("csv", { parser: parseCsv });

  // Text aus der Tabelle holen: {{ "home.heading" | t(lang) }}
  // Fehlt die Übersetzung, wird der deutsche Text genommen.
  eleventyConfig.addFilter("t", function (key, lang) {
    const entry = this.ctx.texte[key];
    if (!entry) throw new Error(`Text "${key}" fehlt in src/_data/texte.csv`);
    if (entry[lang]) return entry[lang];
    console.warn(`[texte] "${key}" hat keinen Text für "${lang}", nehme Deutsch`);
    return entry.de;
  });

  eleventyConfig.addFilter("year", () => new Date().getFullYear());

  // Versionsnummer für CSS/JS, damit Browser nach jedem Deploy die neuen
  // Dateien laden statt alte aus dem Cache
  eleventyConfig.addGlobalData("version", Date.now().toString(36));
}

export const config = {
  dir: {
    input: "src",
    output: "_site",
  },
  // Unterordner auf GitHub Pages; lokal per PATH_PREFIX=/ überschreibbar
  pathPrefix: process.env.PATH_PREFIX ?? "/joulie-website/",
};
