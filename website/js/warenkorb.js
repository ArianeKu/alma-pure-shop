// js/warenkorb.js
// Die Warenkorb-Logik von Alma Pure (Demo-Shop, keine echten Bestellungen).
//
// Idee: Der Warenkorb ist eine Liste aus Einträgen wie { id: 2, menge: 1 }.
// Wir speichern NUR die Produktnummer und die Menge, nicht Name oder Preis.
// Name und Preis holen wir bei Bedarf aus js/produkte.js. So gibt es
// jede Information nur an einer Stelle.
//
// Gespeichert wird im "localStorage" des Browsers. Das ist ein kleiner
// Speicher, der beim Neuladen der Seite oder beim Wechsel auf eine andere
// Seite erhalten bleibt.

const WARENKORB_SCHLUESSEL = "almaPureWarenkorb";

// Versandregeln (erfundene Beispielwerte für die Demo).
// Nur HIER ändern: Produktseite und Warenkorb lesen beide diese Werte.
const VERSANDKOSTEN = 4.90;          // Euro pro Bestellung
const VERSANDKOSTENFREI_AB = 79;     // ab diesem Warenwert kostenlos

// Höchstmenge pro Produkt. Die kleinste Menge ist 1 (darunter: "Entfernen" benutzen).
const HOECHSTMENGE = 10;

// Lädt den Warenkorb aus dem Browser-Speicher. Ist nichts da: leere Liste.
function ladeWarenkorb() {
  try {
    const text = localStorage.getItem(WARENKORB_SCHLUESSEL);
    return text ? JSON.parse(text) : [];
  } catch (fehler) {
    return [];   // Speicher nicht verfügbar oder Inhalt kaputt: neu anfangen
  }
}

// Speichert den Warenkorb. Der Speicher kennt nur Text, daher JSON.stringify.
function speichereWarenkorb(warenkorb) {
  try {
    localStorage.setItem(WARENKORB_SCHLUESSEL, JSON.stringify(warenkorb));
  } catch (fehler) {
    // Speichern nicht möglich (z. B. privater Modus): Seite läuft trotzdem weiter
  }
}

// Legt ein Produkt in den Warenkorb. Ist es schon drin, erhöht sich die Menge.
// Gibt true zurück, wenn es geklappt hat, und false, wenn schon 10 Stück drin sind.
function fuegeHinzu(id) {
  const warenkorb = ladeWarenkorb();
  const vorhanden = warenkorb.find(function (eintrag) { return eintrag.id === Number(id); });

  if (vorhanden) {
    if (vorhanden.menge >= HOECHSTMENGE) return false;   // Grenze erreicht: nichts ändern
    vorhanden.menge += 1;
  } else {
    warenkorb.push({ id: Number(id), menge: 1 });
  }

  speichereWarenkorb(warenkorb);
  aktualisiereZaehler();
  return true;
}

// Zählt alle Stücke im Warenkorb zusammen (2 Cremes + 1 Öl = 3).
function anzahlImWarenkorb() {
  return ladeWarenkorb().reduce(function (summe, eintrag) { return summe + eintrag.menge; }, 0);
}

// Schreibt die Anzahl in "Warenkorb (…)" in der Kopfzeile.
// Es gibt zwei solche Links: einen im Menü und einen fürs Handy neben dem Menü-Button.
function aktualisiereZaehler() {
  const anzahl = anzahlImWarenkorb();
  document.querySelectorAll(".warenkorb-link").forEach(function (link) {
    if (link.classList.contains("warenkorb-mobil")) {
      // Handy: Symbol + Zahl. Vorleseprogramme lesen "Warenkorb, 2 Artikel".
      link.querySelector(".warenkorb-zahl").textContent = anzahl;
      link.setAttribute("aria-label", "Warenkorb, " + anzahl + " Artikel");
    } else {
      link.textContent = "Warenkorb (" + anzahl + ")";
    }
  });
}

// Leert den ganzen Warenkorb (z. B. nach der Demo-Bestellung).
function leereWarenkorb() {
  speichereWarenkorb([]);
  aktualisiereZaehler();
}

// Setzt die Menge eines Produkts, immer zwischen 1 und 10.
// Ein zu kleiner oder zu großer Wert wird auf die Grenze gesetzt.
function setzeMenge(id, menge) {
  menge = Math.min(Math.max(menge, 1), HOECHSTMENGE);
  const warenkorb = ladeWarenkorb();
  const eintrag = warenkorb.find(function (e) { return e.id === Number(id); });
  if (eintrag) {
    eintrag.menge = menge;
    speichereWarenkorb(warenkorb);
    aktualisiereZaehler();
  }
}

// Nimmt ein Produkt komplett aus dem Warenkorb.
// filter behält alle Einträge, die NICHT die gesuchte Nummer haben.
function entferneProdukt(id) {
  const warenkorb = ladeWarenkorb().filter(function (e) { return e.id !== Number(id); });
  speichereWarenkorb(warenkorb);
  aktualisiereZaehler();
}

// Berechnet die Gesamtsumme. Die Preise kommen aus js/produkte.js,
// deshalb muss produkte.js auf der Seite VOR warenkorb.js eingebunden sein,
// wenn diese Funktion benutzt wird.
function berechneSumme() {
  return ladeWarenkorb().reduce(function (summe, eintrag) {
    const produkt = findeProdukt(eintrag.id);
    return produkt ? summe + produkt.preis * eintrag.menge : summe;
  }, 0);
}

// Berechnet die Versandkosten zu einem Warenwert.
// Leerer Warenkorb oder Warenwert ab 79 €: 0 €. Sonst: 4,90 €.
// Wir vergleichen in Cent (gerundet), weil der Computer bei Kommazahlen
// manchmal winzig daneben liegt (z. B. 78,99999999 statt 79).
function berechneVersand(warenwert) {
  const cent = Math.round(warenwert * 100);
  if (cent === 0 || cent >= VERSANDKOSTENFREI_AB * 100) return 0;
  return VERSANDKOSTEN;
}

// Beim Laden jeder Seite den Zähler einmal auffrischen.
aktualisiereZaehler();
