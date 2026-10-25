# Style Guide – Julies Website

Dieser Style Guide sammelt alle Gestaltungsregeln der Seite. Die Werte sind als
CSS-Variablen in `css/style.css` (Block `:root`) hinterlegt. Wenn sich hier etwas
ändert, bitte dort mitziehen.

## Farben

Die drei Markenfarben, von Julie festgelegt:

| Farbe        | Hex       | CSS-Variable     | Einsatz                                   |
|--------------|-----------|------------------|-------------------------------------------|
| Dunkelbraun  | `#4A2E22` | `--color-brown`  | Text, Buttons, Footer                     |
| Helles Beige | `#F3EADB` | `--color-beige`  | Seitenhintergrund, Text auf Braun         |
| Alt-Rosé     | `#C4908E` | `--color-rose`   | Akzente, Hover, aktiver Menüpunkt, Linien |

Abgeleitete Töne (nur zur Unterstützung):

| Farbe             | Hex       | CSS-Variable          |
|-------------------|-----------|-----------------------|
| Braun, weicher    | `#6B4A3C` | `--color-brown-soft`  |
| Beige, dunkler    | `#E6D8C3` | `--color-beige-dark`  |
| Rosé, hell        | `#E8CFCB` | `--color-rose-light`  |
| Warmweiß (Karten) | `#FFFAF4` | `--color-white`       |

## Typografie

- Überschriften: **Cormorant Garamond** (Serif, elegant), Gewicht 600
- Fließtext: **Lato** (Sans-Serif, gut lesbar), 400 / 700
- Menü, Buttons, kleine Labels: Lato 700, Großbuchstaben, weite Laufweite

## Layout

- Inhalt immer mittig zentriert, maximale Breite `1100px` (`--content-width`)
- Oben: Logo links, horizontales Menü rechts daneben
- Inhalte darunter von oben nach unten

## Breakpoints

| Gerät   | Breite          | Verhalten                                              |
|---------|-----------------|--------------------------------------------------------|
| Laptop  | ab 1024px       | Logo links, Menü in einer Zeile rechts, 3 Spalten      |
| Tablet  | 768px – 1023px  | Logo oben mittig, Menü darunter zentriert, 2 Spalten   |
| Mobile  | bis 767px       | Logo links, Menü hinter Burger-Icon, 1 Spalte          |

## Komponenten

- **Button**: Pille, Braun mit beiger Schrift, Hover in Alt-Rosé
- **Karte**: Warmweiß, oben eine 3px-Linie in Alt-Rosé
- **Trennlinie**: kurze Rosé-Linie unter Seitentiteln

## Offen / folgt

- Finales Logo (aktuell Platzhalter `assets/logo.svg`)
- Weitere Style-Regeln
