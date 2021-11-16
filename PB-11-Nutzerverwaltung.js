/*1. Schreibe eine Variable mit dem Namen isFull und setze ihn auf false (der Raum ist offen für neue Nutzer).*/

let isFull = true;
/*2. Schreibe ein Array users mit den Nutzern "John Smith" und "Bob Tyler".*/
var users = ["Peter Pan" , "Ruben Schneider" , "Elisabeth Escherich" , "John Smith" , "Bob Tyler"]
/*3. Schreibe nun eine Fallabfrage.*/
if (isFull) {
    console.log("du bist abgemeldet");    
} else {
    console.log("herzlich willkommen");
}
/*4. Falls isFull false ist, füge den Nutzer "Chuck Peterson" hinzu und schreibe eine Konsolenausgabe mit allen Nutzern.*/
users.push("Chuck Peterson");
console.log(users)
/*5. Falls isFull true ist, schreibe stattdessen die Konsolenausgabe "der Raum ist leider voll".*/

if (isFull) {
    console.log("der Raum ist leider voll");    
} else {
    console.log("herzlich willkommen");
}
/*## Aufgabenstellung Teil 2
Ändere nun den Wert der Variable isFull auf true.
Wie ändert sich nun das Ergebnis?*/

