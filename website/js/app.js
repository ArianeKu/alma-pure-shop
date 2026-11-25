// js/app.js
// Allgemeine Skripte von Alma Pure, die auf allen Seiten geladen werden.
// Wird als LETZTES Skript eingebunden (nach produkte.js und warenkorb.js).


// ===== 1. Menü-Button für das Handy =====
// Auf schmalen Bildschirmen ist die Navigation eingeklappt.
// Ein Klick auf "Menü" klappt sie auf, ein zweiter Klick wieder zu.
// Ob sie offen ist, steht im Attribut aria-expanded ("true" oder "false").
// So erfahren auch Screenreader (Vorleseprogramme), ob das Menü offen ist.

const menueButton = document.querySelector(".menue-button");
const hauptmenue = document.getElementById("hauptmenue");

// Menü öffnen (true) oder schließen (false)
function setzeMenue(offen) {
  menueButton.setAttribute("aria-expanded", offen ? "true" : "false");
  hauptmenue.classList.toggle("offen", offen);
}

// Nur weitermachen, wenn es Button und Navigation auf der Seite gibt
if (menueButton && hauptmenue) {
  // Dem CSS sagen: JavaScript läuft, das Menü darf eingeklappt werden
  menueButton.closest("header").classList.add("menue-bereit");

  // Klick (oder Enter/Leertaste, das kann ein echter Button von selbst)
  menueButton.addEventListener("click", function () {
    const istOffen = menueButton.getAttribute("aria-expanded") === "true";
    setzeMenue(!istOffen);   // umschalten: offen wird zu, zu wird offen
  });

  // Taste Escape schließt das offene Menü und setzt den Fokus zurück auf den Button
  document.addEventListener("keydown", function (ereignis) {
    if (ereignis.key === "Escape" && menueButton.getAttribute("aria-expanded") === "true") {
      setzeMenue(false);
      menueButton.focus();
    }
  });
}


// ===== 2. Bestseller auf der Startseite =====
// Nur auf Seiten mit dem Bereich "bestseller-grid" (also der Startseite).
// Die Funktionen zeigeKarten und findeProdukt stehen in js/produkte.js.
if (document.getElementById("bestseller-grid")) {
  // Produkte mit diesen Nummern anzeigen (1, 2, 4 und das Set 7)
  const bestsellerIds = [1, 2, 4, 7];
  zeigeKarten("bestseller-grid", bestsellerIds.map(findeProdukt));
}
