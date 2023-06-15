// 1 - creare un form per chiedere la mail all'utente 
// 2 - Selezionare gli elementi html con getElementById
// 3 - Creare arroy con finti indirizzi email che verranno approvate
// 4 - attivare "Submit" con "addEventListener" e aggiungere "PreventDefault" per non inviare i dati al server.
// 5 - Creare ciclo per stabilire quali mail saranno approvate
// 6 - creare condizioni di approvazione
// 7 - Svuotare la stringa per inserire nuovo indirizzo


const accessForm = document.getElementById('access-form');
const emailInput = document.getElementById('email');
const resultMessage = document.getElementById('result-message');


const approvedEmail = [
    'ale1@gmail.com', 
    'ale2@gmail.com', 
    'ale3@gmail.com']; 

accessForm.addEventListener('submit', function (event) {
event.preventDefault();
  
const email = emailInput.value;
let accessGranted = false;


for (let i = 0; i < approvedEmail.length; i++) {
if (approvedEmail[i] === email) {
    accessGranted = true;
    break;
}
}

if (accessGranted) {
resultMessage.textContent = 'Accesso consentito!';
resultMessage.style.color = 'green';
console.log('Accesso consentito!')
}

else {
resultMessage.textContent = 'Accesso negato!';
resultMessage.style.color = 'red';
console.log('Accesso negato!')
}



emailInput.value = ''; 
});