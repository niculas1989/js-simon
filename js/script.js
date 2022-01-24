console.log('JS OK');

/*
Descrizione:
Generare 5 numeri casuali e mostrarli in un alert all'utente.
Dall'ok  parte un timer di 30 secondi. (ricordate che l'alert blocca il flusso. il timer partirà a contare dopo che avete schiacciato ok.)
Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite prompt().
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri  sono stati indovinati dall'utente.
Bonus:
controllare che i numeri casuali siano diversi tra loro
controllare che l'utente non inserisca 2 volte lo stesso numero
*/

//| funzione per generare numeri random
const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

//| 'ciclo' in cui poter generare TOT numeri random - la traccia ci dice che saranno 5
let result = 0;
/*
let firstResult = [
    { numero: 0 },
    { numero: 0 },
    { numero: 0 },
    { numero: 0 },
    { numero: 0 },
];*/

let finalResult = [];

for (let k = 0; k < 5; k++) {
    result = getRandomNumber(1, 100);
    finalResult.push(result);
}

console.table(finalResult);


//| mostro il risultato all'utente: questi saranno i numeri che dovrà ricordarsi
const resultElement = alert(`I numeri che devi ricordare sono: ${finalResult}`);

//| dopo che l'utente preme "ok" dovrà partire un timer di TOT secondi

const timeOut = setTimeout(() => {
    //| dopodicché bisogna far apparire, per 5 volte, un prompt in cui si domanda all'utente di inserire un numero
    /*
    let firstUserResult = [
        { numero: 0 },
        { numero: 0 },
        { numero: 0 },
        { numero: 0 },
        { numero: 0 },
    ];*/
    let finalUserResult = [];
    for (let k = 0; k < 5; k++) {
        let userResult = parseInt(prompt('Inserisci uno dei numeri che hai visto prima'));
        if (finalResult.includes(userResult)) {
            finalUserResult.push(userResult);
        }
    }
    console.table(finalUserResult);



    //! creare un rapporto tra i due array per capire se i numeri sono uguali
    //! a questo punto ho due insieme di numeri, devo capire se l'utente ha inseriro numeri uguali al primo insieme o meno


    // # se l'ha inserito, inserire il numero corretto in un "risultato"
    // # altrimenti andare avanti e considerare il successivo
    // # sicuro ci vorrà un "contatore" - per me un ciclo FOR
    // # che per 5 volte confronta i numeri tra di loro

}, 3000);




