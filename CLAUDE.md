# Alma Pure (DemoShop) – Regeln für Claude Code

- Ich bin kein Programmierer. Erkläre vor dem Code kurz, was als Nächstes passiert, und
  danach, was der Code macht und warum. Antworte auf Deutsch, freundlich, ohne Fachjargon.
- Technik: reines HTML, CSS und JavaScript. Kein Framework, kein Build-Tool.
- Arbeite in kleinen Schritten. Ändere nichts an Dateien, die nichts mit der Aufgabe zu tun haben.
- Bei Fehlern: erst die Ursache einfach erklären, dann die Lösung zeigen.
- Aktuelle Struktur (alles im Ordner website/):
  - Seiten: index.html (Startseite), produkte.html, produkt.html, warenkorb.html, philosophie.html
  - css/style.css (das gesamte CSS für alle Seiten)
  - js/app.js (Menü-Button fürs Handy, Bestseller auf der Startseite; auf allen Seiten als letztes Skript)
  - js/produkte.js (Produktdaten und Produktkarten), js/warenkorb.js (Warenkorb-Logik)
  - images/ (Bilder, Quellen in images/QUELLEN.md), fonts/ (lokale Schriften, Quellen in fonts/QUELLEN.txt)
  - Noch offen: impressum.html und datenschutz.html (in der Fußzeile schon verlinkt).
  - Sicherung des ursprünglichen Entwurfs: sicherung/index_entwurf.html (nicht verändern).
  - Im Projektordner: .gitignore (was Git nicht sichert), CLAUDE.md (diese Regeln).
- Gestaltung: ruhig, hell, erwachsen, viel Weißraum. Farben: Creme #faf6f0,
  Salbei #6b7f5e, helles Salbei #e9efe3, Text dunkelgrau #3a3a3a.
  Schrift: Überschriften Georgia (Serifenschrift), Fließtext Arial.
  Als lokale Reserve, falls Georgia/Arial fehlen: die freien Schriften Gelasio und Arimo
  in website/fonts/. Nichts von fremden Servern laden (kein Google Fonts, kein CDN).
- Responsive: Die Seite muss auch auf dem Handy gut aussehen.
- Barrierefreiheit: ausreichender Farbkontrast, Alt-Texte für alle Bilder,
  Schriftgröße mindestens 16 px.
- Keine Geheimnisse im Code: API-Schlüssel, Passwörter und Zugangsdaten gehören nie in
  den Code oder auf GitHub, sondern in eine .env-Datei, die in .gitignore steht.
  Weise mich aktiv darauf hin, sobald so etwas ins Spiel kommt.
- Nur erfundene Daten: keine echten personenbezogenen Daten. Namen, Bewertungen,
  Adressen und Bestellungen sind Testdaten.
- Auf der Seite steht sichtbar, dass es ein Demo-Shop ohne echte Bestellungen ist.
- Keine Wirk- oder Heilversprechen: "spendet Feuchtigkeit" und "pflegt" sind in Ordnung,
  "reduziert Falten" oder "heilt" nicht. "schadstofffrei" nur vorsichtig verwenden,
  besser konkret: "ohne Mikroplastik, Parabene und synthetische Duftstoffe".
- Bilder: nur eigene, KI-generierte oder frei lizenzierte Bilder (z. B. Unsplash, Pexels).
  Keine Bilder von echten Shops kopieren. Quelle notieren.
- Pflichtseiten: Impressum und Datenschutz als Platzhalterseiten anlegen, mit dem Hinweis,
  dass sie in einem echten Shop vollständig sein müssten.
- Texte auf der Website: ruhig, respektvoll, erwachsen, Ansprache mit "Sie".
  Keine Jugendsprache, keine Angstmache vor dem Älterwerden.
  Markenversprechen: "Pflege, die Haut ab 40 versteht. Klare Inhaltsstoffe."
- Git und GitHub: Git ist eingerichtet (Zweig main), GitHub-CLI gh ist installiert.
  - Commit und Push nur, wenn ich ausdrücklich darum bitte. Nie von dir aus.
  - Vor jedem Commit und Push alle Dateien prüfen auf Passwörter, API-Schlüssel,
    Tokens und echte persönliche Daten (Namen, E-Mail-Adressen, Telefonnummern,
    Adressen). Wenn du etwas findest: anhalten und mich fragen.
  - Geheime Dateien wie .env stehen in .gitignore und werden nie gesichert.
  - Sag mir vor jedem Befehl, was er tut und was ich selbst machen muss
    (z. B. im Browser anmelden).
  - Erinnere mich nach abgeschlossenen Arbeitsschritten daran, den Stand zu sichern,
    und schlage eine kurze, verständliche Commit-Nachricht vor.
- Frag mich ab und zu, ob ich den Code erklären kann. Ich muss meine Lösung am
  Ende selbst verstehen und präsentieren können.
