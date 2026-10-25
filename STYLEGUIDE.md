# Style Guide – Joulies Website

Dieser Style Guide sammelt alle Gestaltungsregeln der Seite. Die Werte sind als
CSS-Variablen in `src/css/style.css` (Block `:root`) hinterlegt. Wenn sich hier etwas
ändert, bitte dort mitziehen.

## Farben

Die drei Markenfarben, von Joulie festgelegt:

| Farbe        | Hex       | CSS-Variable     | Einsatz                                   |
|--------------|-----------|------------------|-------------------------------------------|
| Dunkelbraun  | `#4A2E22` | `--color-brown`  | Text, Buttons, Footer                     |
| Helles Beige | `#F8F2E8` | `--color-beige`  | Seitenhintergrund, Text auf Braun         |
| Alt-Rosé     | `#C4908E` | `--color-rose`   | Akzente, Hover, aktiver Menüpunkt, Linien |

Abgeleitete Töne (nur zur Unterstützung):

| Farbe             | Hex       | CSS-Variable          |
|-------------------|-----------|-----------------------|
| Braun, weicher    | `#6B4A3C` | `--color-brown-soft`  |
| Beige, dunkler    | `#EBDFCD` | `--color-beige-dark`  |
| Rosé, hell        | `#E8CFCB` | `--color-rose-light`  |
| Warmweiß (Karten) | `#FFFAF4` | `--color-white`       |

## Typografie

- Überschriften: **Cormorant Garamond** (Serif, elegant), Gewicht 600
- Fließtext: **Lato** (Sans-Serif, gut lesbar), 400 / 700
- Menü, Buttons, kleine Labels: Lato 700, Großbuchstaben, weite Laufweite

## Layout

- Inhalt immer mittig zentriert, maximale Breite `1100px` (`--content-width`)
- Oben: Logo links in der Ecke, Sprachauswahl rechts in der Ecke, horizontales Menü dazwischen, mit gleichem Abstand zu Logo und Sprachauswahl (nicht seitenmittig)
- Inhalte darunter von oben nach unten

## Breakpoints

| Gerät   | Breite          | Verhalten                                              |
|---------|-----------------|--------------------------------------------------------|
| Laptop  | ab 1024px       | Logo links, Sprache rechts, Menü mit gleichem Abstand dazwischen, 3 Spalten |
| Tablet  | 768px – 1023px  | Logo oben mittig, Sprache oben rechts, Menü darunter zentriert, 2 Spalten |
| Mobile  | bis 767px       | Logo links, Sprache und Burger-Icon rechts, 1 Spalte   |

## Komponenten

- **Banner (Startseite)**: Querformat, mittig, Hintergrund Rosé-Verlauf (später Foto). Großer Schriftzug „JOULIE“ in Großbuchstaben und in der Hintergrundfarbe Beige (Cormorant Garamond), darunter der Slogan *a voice for unforgettable moments* kursiv mit feinen Zierlinien
- **Button**: Pille, Braun mit beiger Schrift, Hover in Alt-Rosé
- **Karte**: Warmweiß, oben eine 3px-Linie in Alt-Rosé
- **Trennlinie**: kurze Rosé-Linie unter Seitentiteln
- **Sprachumschalter**: immer ganz oben rechts in der Ecke. Zeigt das Kürzel der aktuellen Sprache („DE ⌄“, Lato 700). Klick öffnet ein kleines Aufklappmenü mit allen Sprachen übereinander (DE, EN, weitere über `src/_data/site.json`). Aktive Sprache und Hover in Alt-Rosé

## Offen / folgt

- Finales Logo (aktuell Platzhalter `src/assets/logo.svg`)
- Weitere Style-Regeln
