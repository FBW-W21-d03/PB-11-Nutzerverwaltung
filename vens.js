//1. Schreibe eine Variable mit dem Namen isFull und setze ihn auf false (der Raum ist offen für neue Nutzer).
let isFull = false; //Raum ist offen für neue Nutzer

if (isFull) {
    console.log("Raum ist geschlossen für neue Nutzer");
} else {
    console.log("Raum ist offen für neue Nutzer");
    //2. Schreibe ein Array users mit den Nutzern "John Smith" und "Bob Tyler".
const isNutzer = ["John Smith", "Bob Tyler"];

//3. Schreibe nun eine Fallabfrage.
if (isNutzer == "Chuck Peterson") {
    // 5. Falls isFull true ist, schreibe stattdessen die Konsolenausgabe "der Raum ist leider voll".
    console.log("der Raum ist leider voll")
} else {
    //4. Falls isFull false ist, füge den Nutzer "Chuck Peterson" hinzu und schreibe eine Konsolenausgabe mit allen Nutzern.
    isNutzer.push("Chuck Peterson")
    console.log("Chuck Peterson ist hinzufügen");
    console.log(isNutzer);
}
}

