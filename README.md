# Joulies Website

Statische Website, gebaut mit [Eleventy](https://www.11ty.dev/) und veröffentlicht
über GitHub Pages. Auf dem Server landet nur reines HTML, CSS und etwas JavaScript.

## Aufbau

- `src/_includes/layouts/base.njk`: gemeinsames Layout mit Header, Menü und Footer
- `src/_data/site.json`: Name der Seite und Menüpunkte
- `src/*.njk`: die einzelnen Seiten (nur der Inhalt)
- `src/css/style.css`: alle Styles, Farben als Variablen
- `src/js/main.js`: Burger-Menü auf dem Handy
- `src/assets/`: Logo und Bilder
- `STYLEGUIDE.md`: Farben, Schriften, Breakpoints

## Lokal ansehen

```
npm install
npm start
```

Danach ist die Seite unter http://localhost:8080 erreichbar und lädt bei
Änderungen automatisch neu.

## Veröffentlichen mit GitHub Pages

Einmalig im Repository unter **Settings → Pages** bei „Build and deployment“ als
Quelle **GitHub Actions** wählen. Danach baut die Action
`.github/workflows/pages.yml` die Seite bei jedem Push auf `main` und
veröffentlicht sie unter `https://joulie1.github.io/joulie-website/`.
