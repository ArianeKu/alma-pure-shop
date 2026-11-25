# Konzept: Alma Pure (DemoShop)

## Idee

**Alma Pure** ist ein fiktiver Onlineshop für Clean-Beauty-Pflege. Er richtet sich an Frauen ab 40, die bewusst einkaufen und auf Inhaltsstoffe achten.

**Name:** *Alma* (lateinisch/spanisch: Seele, nährend) und *Pure* (englisch: rein). Zusammen etwa "reine Seele" oder "wohltuende Reinheit". Der Name ist erfunden. Für eine öffentliche Nutzung müsste geprüft werden, ob er schon belegt ist.

**Claim:** Pflege, die Haut ab 40 versteht. Klare Inhaltsstoffe.

## Zielgruppe

Frauen ab 40, die Qualität vor Menge stellen, kurze Inhaltsstofflisten schätzen und Wert auf eine ruhige, verständliche Ansprache legen.

## Positionierung (erfundene Markenversprechen)

- Kurze, nachvollziehbare Inhaltsstofflisten
- Ohne Mikroplastik, Parabene und synthetische Duftstoffe
- Vegan
- Recycelbare Verpackungen

## Sortiment (Testdaten)

| Nr. | Produkt | Kategorie | Größe | Preis |
|---|---|---|---|---|
| 1 | Sanftes Reinigungsöl | Gesicht | 100 ml | 29,90 € |
| 2 | Tagescreme "Morgenlicht" | Gesicht | 50 ml | 44,90 € |
| 3 | Nachtcreme "Ruhe" | Gesicht | 50 ml | 48,90 € |
| 4 | Serum "Feuchtigkeitsquelle" | Gesicht | 30 ml | 42,90 € |
| 5 | Augenpflege "Klarblick" | Augen | 15 ml | 29,90 € |
| 6 | Körperöl "Sanft" (duftfrei) | Körper | 100 ml | 32,90 € |
| 7 | Set "Basis-Routine" (Nr. 1 + 2 + 3) | Sets | – | 99,99 € statt 123,70 € |

Kategorien: Gesicht, Augen, Körper, Sets. Filter: Hauttyp, Preis, duftfrei, vegan.

## Seiten

| Seite | Zweck | Priorität |
|---|---|---|
| Startseite | Marke vorstellen, Bestseller zeigen | Pflicht |
| Produktübersicht | Alle Produkte, Filter | Pflicht |
| Produktseite | Details, Inhaltsstoffe, Warenkorb-Button | Pflicht |
| Warenkorb | Menge ändern, Gesamtpreis | Pflicht |
| Unsere Philosophie | Clean-Versprechen, "Ohne-Liste" | Pflicht |
| Kasse | Formular nur zur Ansicht, ohne Zahlung | Optional |
| Impressum / Datenschutz | Platzhalter | Optional |

**Weg durch den Shop:** Startseite → Produktübersicht → Produktseite → Warenkorb → (Kasse)

## Aufbau der Startseite

1. Kopfzeile: Logo, Menü, Warenkorb
2. Hero-Bereich mit Überschrift und Button
3. Drei Vorteile
4. Bestseller (3-4 Produktkarten)
5. Philosophie-Teaser
6. Kundenstimmen (erfunden)
7. Fußzeile

## Gestaltung

Warme, helle Farben (Creme, Salbei), viel Weißraum, Serifenschrift für Überschriften, ruhiger Gesamteindruck. Responsive und barrierearm.

## Technik

Reines HTML, CSS und JavaScript. Produktdaten als JavaScript-Liste, aus der die Produktkarten erzeugt werden. Der Warenkorb wird im Browser gespeichert (localStorage). Versionsverwaltung mit Git.

## Umsetzungsplan

1. Projektordner und Git anlegen
2. Startseite: Kopfzeile und Hero-Bereich
3. Produktdaten in `js/produkte.js`
4. Bestseller und Produktübersicht aus den Daten erzeugen
5. Produktseite
6. Warenkorb
7. Philosophie-Seite, Impressum und Datenschutz (Platzhalter)
8. Feinschliff: Responsive, Barrierefreiheit, Tests
9. Präsentation vorbereiten: Ich kann jeden Teil des Codes erklären

## Rechtliche und fachliche Hinweise

- "Clean" und "schadstofffrei" sind keine geschützten Begriffe. Formulierungen konkret und vorsichtig halten.
- Keine Wirk- oder Heilversprechen.
- Demo-Shop: Kennzeichnung auf der Seite, keine echten Bestellungen, nur erfundene Daten.
- Inhaltsstofflisten sind vereinfachte Testdaten, keine echten INCI-Angaben.
