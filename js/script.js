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
function getRandomNumber(min, max) {
    max++;
    return Math.floor(Math.random() * (max - min)) + min;
}

//| 'ciclo' in cui poter generare TOT numeri random - la traccia ci dice che saranno 5
let result = 0;
let finalResult = [];
for (let i = 0; i < 5; i++) {
    result = getRandomNumber(1, 100);
    finalResult.push(result);
}
console.log(finalResult);

//| mostro il risultato all'utente: questi saranno i numeri che dovrà ricordarsi
const resultElement = alert(`I numeri che devi ricordare sono: ${finalResult}`);

//| dopo che l'utente preme "ok" dovrà partire un timer di TOT secondi

setTimeout(function () {
    //| dopodicché bisogna far apparire, per 5 volte, un prompt in cui si domanda all'utente di inserire un numero
    let finalUserResult = [];
    for (let k = 0; k < 5; k++) {
        let userResult = parseInt(prompt('Inserisci uno dei numeri che hai visto prima'));
        finalUserResult.push(userResult);
    }
    console.log(finalUserResult);



    //! creare un rapporto tra i due array per capire se i numeri sono uguali

    for (let j = 0; j < finalResult.length; j++) {
        //# se l'utente ha scritto il numero corretto segnarlo
        if (finalResult[j] === finalUserResult) {
            console.log('Bravo');
        } else {
            //# altrimenti dire che ha sbagliato
            console.log('No');
        }
    }
}, 5000);




