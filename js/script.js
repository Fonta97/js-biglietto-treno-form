// richiesta input ad utente su lunghezza viaggio e età
const wthIsAKilometer = parseInt (document.getElementById('distance').value);
const userName = (const document.getElementById('name').value;);

console.log(wthIsAKilometer, userName);


// dichiarazione variabili costanti prezzo per km e scontistiche in base all'età
let priceKm = wthIsAKilometer * 0.21;
let finalPrice
// calcolo sconto se presente
if (userAge < 18) {
    finalPrice = wthIsAKilometer * 0.8
} else if (userAge > 65) {
    finalPrice = wthIsAKilometer * 0.6
}

console.log(priceKm, finalPrice)

finalPrice = (priceKm).toFixed(2)

console.log(finalPrice)

document.getElementById("ticket_price").innerHTML = "Paga o il trenino Thomas ti verrà a prendere di notte:" + finalPrice + "€";