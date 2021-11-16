console.log("Nutzerverwaltung");
// Aufgabenstellung Teil 1

// 1. Schreibe eine Variable mit dem Namen isFull und setze ihn auf false (der Raum ist offen für neue Nutzer)
let isFull = false; 

// 2. Schreibe ein Array users mit den Nutzern "John Smith" und "Bob Tyler"
 const nutzern = ["John Smith" ,"Bob Tyler"]
 console.log(nutzern);

// 3. Schreibe nun eine Fallabfrage 
if (isFull) {
  console.log("der Raum ist leider voll");
} else {
  console.log("der Raum ist offen für neue Nutzer");
  // 4. Falls isFull false ist, füge den Nutzer "Chuck Peterson" hinzu und schreibe eine Konsolenausgabe mit allen Nutzern
  nutzern.push("Chuck Peterson");
  console.log(nutzern);
}




