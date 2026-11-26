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
function fuegeHinzu(id) {
  const warenkorb = ladeWarenkorb();
  const vorhanden = warenkorb.find(function (eintrag) { return eintrag.id === Number(id); });

  if (vorhanden) {
    vorhanden.menge += 1;
  } else {
    warenkorb.push({ id: Number(id), menge: 1 });
  }

  speichereWarenkorb(warenkorb);
  aktualisiereZaehler();
}

// Zählt alle Stücke im Warenkorb zusammen (2 Cremes + 1 Öl = 3).
function anzahlImWarenkorb() {
  return ladeWarenkorb().reduce(function (summe, eintrag) { return summe + eintrag.menge; }, 0);
}

// Schreibt die Anzahl in den Menüpunkt "Warenkorb (…)" in der Kopfzeile.
function aktualisiereZaehler() {
  const text = "Warenkorb (" + anzahlImWarenkorb() + ")";
  document.querySelectorAll(".warenkorb-link").forEach(function (link) {
    link.textContent = text;
  });
}

// Setzt die Menge eines Produkts. Bei 0 oder weniger wird es entfernt.
function setzeMenge(id, menge) {
  if (menge < 1) {
    entferneProdukt(id);
    return;
  }
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
