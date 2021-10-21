const userKm = prompt('Quanti chilometri vuoi percorrere?');
const userAge = prompt('quuanti anni hai?');

let ticketPrice = userKm * 0.21;

let datiValidi = true;
let errorMsg = '';

if(isNaN(userKm)){
 datiValidi = false;
 errorMsg = 'Ops! Errore nel formato, si accettano soltanto numeri';
}

if(isNaN(userAge)){
 datiValidi = false;
 errorMsg = 'Ops! Errore nel formato, si accettano soltanto numeri';
}

console.log('datiValidi', datiValidi);
console.log('errorMsg', errorMsg);

if(userAge < 18){
 ticketPrice = ticketPrice-(ticketPrice / 100 * 20);
}
else if(userAge > 64){
   ticketPrice = ticketPrice-(ticketPrice / 100 * 40);
}

let finalPrice = 'Il prezzo del tuo biglietto è di euro: ' + parseFloat(ticketPrice).toFixed(2);

if(!datiValidi){
 finalPrice = errorMsg;
}

document.getElementById('output').innerHTML = finalPrice;

// console.log(parseFloat(ticketPrice).toFixed(2));