// js/produkte.js
// Alle Produktdaten von Alma Pure an EINER Stelle.
// Alle Angaben sind erfundene Testdaten (Demo-Shop).
// bild = Pfad zum Produktfoto, alt = Bildbeschreibung für Screenreader (Barrierefreiheit).
// Preise stehen als Zahl (mit Punkt) hier, damit man damit rechnen kann.
// Für die Anzeige wandeln wir sie später in "29,90 €" um (siehe formatPreis unten).

const produkte = [
  {
    id: 1,
    bild: "images/produkte/01-reinigungsoel.jpg",
    alt: "Glasflasche mit Holz-Pipette: Sanftes Reinigungsöl, 100 ml, auf hellem Marmor mit Eukalyptus",
    name: "Sanftes Reinigungsöl",
    kategorie: "Gesicht",
    groesse: "100 ml",
    preis: 29.90,
    hauttyp: "alle Hauttypen",
    duftfrei: true,
    vegan: true,
    kurztext: "Mildes Öl zur täglichen Reinigung des Gesichts.",
    beschreibung: "Das Reinigungsöl löst Make-up, Sonnenschutz und Pflegereste mild und gründlich. Die Mischung aus Sonnenblumen-, Jojoba- und Mandelöl hinterlässt ein weiches, geschmeidiges Hautgefühl. Ein ruhiger Einstieg in die Abendroutine – ohne Mikroplastik, Parabene und synthetische Duftstoffe.",
    anwendung: "Auf die trockene Haut geben, sanft einmassieren und mit lauwarmem Wasser abspülen.",
    inhaltsstoffe: [
      { name: "Sonnenblumenöl", wofuer: "mildes Pflanzenöl, das Make-up und Pflegereste löst" },
      { name: "Jojobaöl", wofuer: "macht die Haut geschmeidig" },
      { name: "Mandelöl", wofuer: "pflanzliches Öl für ein weiches Hautgefühl" },
      { name: "Vitamin E (Tocopherol)", wofuer: "hält die Öle länger frisch" }
    ]
  },
  {
    id: 2,
    bild: "images/produkte/02-tagescreme-morgenlicht.jpg",
    alt: "Glastiegel mit Holzdeckel: Tagescreme „Morgenlicht“, 50 ml, auf hellem Marmor mit Eukalyptus",
    name: "Tagescreme „Morgenlicht“",
    kategorie: "Gesicht",
    groesse: "50 ml",
    preis: 44.90,
    hauttyp: "normale bis trockene Haut",
    duftfrei: true,
    vegan: true,
    kurztext: "Leichte Creme für den Morgen, die die Haut mit Feuchtigkeit versorgt.",
    beschreibung: "Eine leichte Creme für den Start in den Tag. Glycerin und Aloe vera spenden Feuchtigkeit, Sheabutter und Squalan pflegen die Haut geschmeidig. Die Creme zieht rasch ein und eignet sich gut als Grundlage unter Make-up.",
    anwendung: "Morgens nach der Reinigung auf Gesicht und Hals auftragen.",
    inhaltsstoffe: [
      { name: "Wasser", wofuer: "Grundlage der Creme" },
      { name: "Sheabutter", wofuer: "pflegt und macht die Haut geschmeidig" },
      { name: "Glycerin", wofuer: "bindet Feuchtigkeit" },
      { name: "Aloe-vera-Saft", wofuer: "spendet Feuchtigkeit" },
      { name: "Squalan", wofuer: "pflanzliches Pflegeöl für ein glattes Hautgefühl" }
    ]
  },
  {
    id: 3,
    bild: "images/produkte/03-nachtcreme-ruhe.jpg",
    alt: "Glastiegel mit salbeigrünem Deckel: Nachtcreme „Ruhe“, 50 ml, auf hellem Marmor mit Eukalyptus",
    name: "Nachtcreme „Ruhe“",
    kategorie: "Gesicht",
    groesse: "50 ml",
    preis: 48.90,
    hauttyp: "normale bis trockene Haut",
    duftfrei: true,
    vegan: true,
    kurztext: "Reichhaltige Creme für den Abend, die die Haut über Nacht pflegt.",
    beschreibung: "Eine reichhaltigere Pflege für den Abend. Sheabutter und Mandelöl pflegen die Haut über Nacht, Glycerin bindet Feuchtigkeit. Die Textur ist cremig und angenehm – gut für Haut, die abends etwas mehr Pflege mag.",
    anwendung: "Abends nach der Reinigung auf Gesicht und Hals auftragen.",
    inhaltsstoffe: [
      { name: "Wasser", wofuer: "Grundlage der Creme" },
      { name: "Sheabutter", wofuer: "pflegt und macht die Haut geschmeidig" },
      { name: "Mandelöl", wofuer: "pflanzliches Öl für ein weiches Hautgefühl" },
      { name: "Glycerin", wofuer: "bindet Feuchtigkeit" },
      { name: "Candelillawachs", wofuer: "pflanzliches Wachs, das der Creme ihre Konsistenz gibt" }
    ]
  },
  {
    id: 4,
    bild: "images/produkte/04-serum-feuchtigkeitsquelle.jpg",
    alt: "Kleine Glasflasche mit goldener Pipette: Serum „Feuchtigkeitsquelle“, 30 ml, auf hellem Marmor",
    name: "Serum „Feuchtigkeitsquelle“",
    kategorie: "Gesicht",
    groesse: "30 ml",
    preis: 42.90,
    hauttyp: "alle Hauttypen",
    duftfrei: true,
    vegan: true,
    kurztext: "Leichtes Serum, das Feuchtigkeit spendet.",
    beschreibung: "Ein leichtes, wässriges Serum als zusätzliche Feuchtigkeitsschicht unter der Creme. Hyaluronsäure und Glycerin halten Feuchtigkeit in der Haut, Panthenol pflegt. Wenige Tropfen genügen, und das Serum lässt sich gut mit Tages- und Nachtcreme kombinieren.",
    anwendung: "Morgens und abends einige Tropfen auf das gereinigte Gesicht geben und sanft einklopfen, danach die Creme auftragen.",
    inhaltsstoffe: [
      { name: "Wasser", wofuer: "Grundlage des Serums" },
      { name: "Glycerin", wofuer: "bindet Feuchtigkeit" },
      { name: "Hyaluronsäure", wofuer: "hält Feuchtigkeit in der Haut" },
      { name: "Aloe-vera-Saft", wofuer: "spendet Feuchtigkeit" },
      { name: "Panthenol (Vitamin B5)", wofuer: "pflegt die Haut" }
    ]
  },
  {
    id: 5,
    bild: "images/produkte/05-augenpflege-klarblick.jpg",
    alt: "Cremefarbene Tube mit salbeigrüner Kappe: Augenpflege „Klarblick“, 15 ml, auf hellem Marmor",
    name: "Augenpflege „Klarblick“",
    kategorie: "Augen",
    groesse: "15 ml",
    preis: 29.90,
    hauttyp: "alle Hauttypen",
    duftfrei: true,
    vegan: true,
    kurztext: "Sanfte Pflege für die empfindliche Haut rund um die Augen.",
    beschreibung: "Die Haut rund um die Augen ist dünner als im übrigen Gesicht und mag eine besonders sanfte Pflege. Die leichte Textur mit Jojobaöl und Gurkenextrakt spendet Feuchtigkeit und fühlt sich angenehm frisch an. Bewusst ohne Duftstoffe.",
    anwendung: "Morgens und abends mit dem Ringfinger sanft um die Augen auftupfen.",
    inhaltsstoffe: [
      { name: "Wasser", wofuer: "Grundlage der Pflege" },
      { name: "Jojobaöl", wofuer: "macht die Haut geschmeidig" },
      { name: "Glycerin", wofuer: "bindet Feuchtigkeit" },
      { name: "Gurkenextrakt", wofuer: "spendet Feuchtigkeit und fühlt sich frisch an" },
      { name: "Squalan", wofuer: "pflanzliches Pflegeöl für ein glattes Hautgefühl" }
    ]
  },
  {
    id: 6,
    bild: "images/produkte/06-koerperoel-sanft.jpg",
    alt: "Glasflasche mit Pumpspender: Körperöl „Sanft“, 100 ml, auf hellem Marmor mit Eukalyptus",
    name: "Körperöl „Sanft“",
    kategorie: "Körper",
    groesse: "100 ml",
    preis: 32.90,
    hauttyp: "trockene Haut",
    duftfrei: true,
    vegan: true,
    kurztext: "Duftfreies Öl, das die Haut geschmeidig pflegt.",
    beschreibung: "Ein duftfreies Pflegeöl für den ganzen Körper. Auf die noch feuchte Haut gegeben, verteilt es sich leicht und hinterlässt ein weiches, geschmeidiges Hautgefühl. Besonders angenehm für trockene Haut, etwa in den Wintermonaten.",
    anwendung: "Nach dem Duschen auf die leicht feuchte Haut geben und einmassieren.",
    inhaltsstoffe: [
      { name: "Sonnenblumenöl", wofuer: "mildes Pflanzenöl, das die Haut geschmeidig pflegt" },
      { name: "Mandelöl", wofuer: "pflanzliches Öl für ein weiches Hautgefühl" },
      { name: "Jojobaöl", wofuer: "macht die Haut geschmeidig" },
      { name: "Vitamin E (Tocopherol)", wofuer: "hält die Öle länger frisch" }
    ]
  },
  {
    id: 7,
    bild: "images/produkte/07-set-basis-routine.jpg",
    alt: "Set „Basis-Routine“: Reinigungsöl, Tagescreme und Nachtcreme mit Set-Karte auf hellem Marmor",
    name: "Set „Basis-Routine“",
    kategorie: "Sets",
    groesse: "3 Produkte",
    preis: 99.99,
    altPreis: 123.70,            // Summe der Einzelpreise (Nr. 1 + 2 + 3)
    enthaelt: [1, 2, 3],         // IDs der Produkte im Set
    hauttyp: "normale bis trockene Haut",
    duftfrei: true,
    vegan: true,
    kurztext: "Reinigungsöl, Tagescreme und Nachtcreme als Einstieg in eine einfache Pflegeroutine.",
    beschreibung: "Drei aufeinander abgestimmte Produkte für eine einfache Routine: am Abend reinigen und reichhaltig pflegen, am Morgen leicht pflegen. Das Set eignet sich gut, wenn Sie Alma Pure in Ruhe kennenlernen möchten. Alle drei Produkte sind vegan und ohne Duftstoffe.",
    anwendung: "Reinigungsöl und Nachtcreme am Abend, Tagescreme am Morgen verwenden."
  }
];

// Hilfsfunktion: macht aus 29.9 den Text "29,90 €"
function formatPreis(zahl) {
  return zahl.toLocaleString("de-DE", { minimumFractionDigits: 2, maximumFractionDigits: 2 }) + " €";
}

// Hilfsfunktion: Grundpreis = Preis pro 100 ml, z. B. "89,80 € / 100 ml".
// In Deutschland muss er neben dem Preis stehen, wenn Ware nach Menge verkauft wird.
// Bei Sets aus verschiedenen Produkten entfällt er: dann kommt ein leerer Text zurück.
function grundpreisText(p) {
  if (!p.groesse.endsWith(" ml")) return "";
  const milliliter = parseFloat(p.groesse);          // "50 ml" -> 50
  return formatPreis(p.preis / milliliter * 100) + " / 100 ml";
}

// Hilfsfunktion: sucht ein Produkt anhand seiner Nummer (id)
function findeProdukt(id) {
  return produkte.find(function (p) { return p.id === Number(id); });
}

// Hilfsfunktion: baut aus EINEM Produkt den HTML-Text einer Produktkarte
function erzeugeKarte(p) {
  // Beim Set zeigen wir den alten Preis durchgestrichen, bei den anderen Größe und Grundpreis
  let preisText;
  if (p.altPreis) {
    preisText = formatPreis(p.preis) + ' <span style="font-weight:normal">statt <s>' + formatPreis(p.altPreis) + '</s></span>';
  } else {
    preisText = formatPreis(p.preis) + ' <span style="font-weight:normal">· ' + p.groesse + '</span>' +
      '<span class="grundpreis">(' + grundpreisText(p) + ')</span>';
  }

  return `
    <article class="karte">
      <div class="karte-bild"><img src="${p.bild}" alt="${p.alt}" width="1200" height="1200" loading="lazy"></div>
      <div class="karte-text">
        <span class="kategorie">${p.kategorie}</span>
        <h3>${p.name}</h3>
        <p class="preis">${preisText}</p>
        <a class="button hell" href="produkt.html?id=${p.id}">Ansehen</a>
      </div>
    </article>`;
}

// Hilfsfunktion: füllt einen Bereich der Seite (per id) mit Karten für die übergebenen Produkte
function zeigeKarten(containerId, liste) {
  const container = document.getElementById(containerId);
  if (!container) return;   // Seite hat diesen Bereich nicht: nichts tun
  container.innerHTML = liste.map(erzeugeKarte).join("");
}
