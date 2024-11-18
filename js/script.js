// Attraverso l'apposita API di Boolean
// https://flynn.boolean.careers/exercises/api/random/mail
// generare 10 indirizzi email e stamparli in pagina all'interno di una lista.
// **Bonus**
// - Abbellire con CSS o Bootstrap
// - Inserire un bottone che al click faccia il fetch altre 10 mail (sostituendo le altre)

const listElem = document.getElementById("mail-list");
const buttonElem = document.getElementById("refresh");

// Ciclo for per generare l'email
const newEmails = (numEmails) => {
    for (let i = 1; i <= numEmails; i++) {
        axios.get("https://flynn.boolean.careers/exercises/api/random/mail").then((resp) => {
            // console.log(resp);
            listElem.innerHTML += `<li class="list-group-item list-group-item-primary">${resp.data.response}</li>`;
        });
    };
};

// Chiamata iniziale per la lista con 10 email
const refresh = () => {
    listElem.innerHTML = ""; //Svuoto la lista prima di aggiungere nuovi elementi
    newEmails(10);
};

// Aggiungo l'event listener al pulsante
newEmails(10);
buttonElem.addEventListener("click", refresh);