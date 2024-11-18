// Attraverso l'apposita API di Boolean
// https://flynn.boolean.careers/exercises/api/random/mail
// generare 10 indirizzi email e stamparli in pagina all'interno di una lista.
// **Bonus**
// - Abbellire con CSS o Bootstrap
// - Inserire un bottone che al click faccia il fetch altre 10 mail (sostituendo le altre)
const listElem = document.getElementById("mail-list");

// Ciclo for per generare l'email
for (let i = 0; i <= 10; i++) {
    axios.get("https://flynn.boolean.careers/exercises/api/random/mail").then((resp) => {
        // console.log(resp);
        listElem.innerHTML += `<li>${resp.data.response}</li>`
    });
}