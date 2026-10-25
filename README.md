# Joulies Website

Statische Website, gebaut mit [Eleventy](https://www.11ty.dev/) und veröffentlicht
über GitHub Pages. Auf dem Server landet nur reines HTML, CSS und etwas JavaScript.

## Aufbau

- `src/_data/texte.csv`: **alle Texte der Seite**, Deutsch und Englisch nebeneinander
- `src/_includes/layouts/base.njk`: gemeinsames Layout mit Header, Menü, Sprachumschalter und Footer
- `src/_data/site.json`: Name der Seite, Sprachen und Menüpunkte
- `src/pages/*.njk`: die einzelnen Seiten, jede wird einmal pro Sprache gebaut
- `src/weiterleitung.njk`: Startadresse, leitet je nach Browsersprache auf `/de/` oder `/en/`
- `src/css/style.css`: alle Styles, Farben als Variablen
- `src/js/main.js`: Burger-Menü auf dem Handy und Aufklappen der Sprachauswahl
- `src/assets/`: Logo und Bilder
- `STYLEGUIDE.md`: Farben, Schriften, Breakpoints

## Texte pflegen

Alle Texte stehen in `src/_data/texte.csv`, eine Zeile pro Text:

| key           | de                     | en              |
|---------------|------------------------|-----------------|
| home.heading  | Hallo, ich bin Joulie. | Hi, I'm Joulie. |

- Die Datei lässt sich in Excel oder Numbers öffnen. Beim Speichern **„CSV UTF-8“**
  mit Semikolon als Trennzeichen wählen, sonst gehen Umlaute kaputt.
- Die Spalte `key` nicht ändern, die Seiten greifen darüber auf den Text zu.
- Ist die englische Zelle leer, zeigt die englische Seite den deutschen Text.
- Ein Text in einer Seite: `{{ "home.heading" | t(lang) }}`. Fehlt ein `key` in der
  Tabelle, bricht der Build mit einer Meldung ab.

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
