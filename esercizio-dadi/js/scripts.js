// Creare struttura html
// Generare un numero casuale da 1 a 6 per il giocatore
// Genera un numero casuale da 1 a 6 per il computer
// Creare ciclo per determinare il vincitore
// Rendere visibile in pagina il risultato 
// Stampa il risultato nella console


const playerScore = Math.floor(Math.random() * 6) + 1;


const computerScore = Math.floor(Math.random() * 6) + 1;


let winner;
if (playerScore > computerScore) {
  winner = "Giocatore";
} else if (computerScore > playerScore) {
  winner = "Computer";
} else {
  winner = "Pareggio";
}


const resultElement = document.getElementById("result");


resultElement.innerHTML = `Punteggio del Giocatore: ${playerScore}<br><br>` +
                          `Punteggio del Computer: ${computerScore}<br><br>` +
                          `Vincitore: ${winner}`;



console.log(`Punteggio del Giocatore: ${playerScore}`);
console.log(`Punteggio del Computer: ${computerScore}`);
console.log(`Vincitore: ${winner}`);
