const userKm = parseInt(prompt('Quanti chilometri vuoi percorrere?')) ;
const userAge = parseInt(prompt('Quanti anni hai?')) ;
const scontoSiNo = prompt ('Hai un codice sconto?')
let codiceSconto = "";


let ticketPrice = userKm * 0.21;

let datiValidi = true;
let errorMsg = '';
let validCode = true;
let errorCode= '';
let validAge = true;
let errorAge= '';
let finalPrice = '';
let codeOutput = '';
let ageOutput = '';

if(isNaN(userKm)){
 datiValidi = false;
 errorMsg = 'Ops! Errore nel formato, si accettano soltanto numeri';
}

if(isNaN(userAge)){
 datiValidi = false;
 errorMsg = 'Ops! Errore nel formato, si accettano soltanto numeri';
}

if(scontoSiNo==='si' || scontoSiNo==='SI' || scontoSiNo==='Si' || scontoSiNo==='sI'){

  codiceSconto = prompt('Inserisci un codice sconto');

  if(codiceSconto !== 'SCONTO20'){
    validCode = false;
    errorCode = "Il codice inserito non è valido"
  }
  
  if(codiceSconto === 'SCONTO20' && userAge > 20){
    validAge = false;
    errorAge = "Codice non valido per la tua fascia d'età"
  }

}

console.log('datiValidi', datiValidi);
console.log('errorMsg', errorMsg);

console.log('validCode', validCode);
console.log('errorCode', errorCode);

console.log('validAge', validAge);
console.log('errorAge', errorAge);


if(userAge < 18){
  ticketPrice = ticketPrice-(ticketPrice / 100 * 20);
}

if(userAge > 64){
   ticketPrice = ticketPrice-(ticketPrice / 100 * 40);
}

if(validCode===true && validAge===true){
  ticketPrice = ticketPrice-(ticketPrice / 100 * 20);
}

if(!validCode){
  codeOutput = errorCode;
}

if(!validAge){
  ageOutput = errorAge;
}

if(userAge < 18){
  finalPrice = 
  `
  <h3>Hai chiesto di percorrere ${userKm} km </h3>
  <h3>Hai ${userAge} anni e per questo hai diritto al 20% di sconto! </h3>
  <h1>Il prezzo finale del tuo biglietto è di: </h1>
  <p>${ticketPrice.toFixed(2)} €</p> 
  
  `
}
else if(userAge > 64){
  finalPrice = 
  `
  <h3>Hai chiesto di percorrere ${userKm} km </h3>
  <h3>Hai ${userAge} anni e per questo hai diritto al 40% di sconto! </h3>
  <h1>Il prezzo finale del tuo biglietto è di: </h1>
  <p> ${ticketPrice.toFixed(2)} €</p>
  
  `
}

else{
  finalPrice = 
  `
  <h3>Hai chiesto di percorrere ${userKm} km </h3>
  <h1>Il prezzo finale del tuo biglietto è di: </h1>
  <p> ${ticketPrice.toFixed(2)} €</p>
  
  `
}

if(!datiValidi){
 finalPrice = errorMsg;
}

document.getElementById('codeOutput').innerHTML = codeOutput;
document.getElementById('ageOutput').innerHTML = ageOutput;
document.getElementById('output').innerHTML = finalPrice;
