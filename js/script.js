// Chiediamo il suo nome
const userName = prompt("Scrivi il tuo nome");
// Chiediamo il cognome
const userLastName = prompt("Scrivi il tuo cognome");
// Chiediamo il colore preferito
const userFavouriteColor = prompt("Scrivi il tuo colore preferito");
// Composizione password
const userPassword = userName + userLastName + userFavouriteColor + 22;
// Scrivere in pagina la password
document.getElementById("result").innerHTML = userPassword.toLowerCase();
