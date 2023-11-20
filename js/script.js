

// richiesta input ad utente su lunghezza viaggio e età
const wthIsAKilometer = document.getElementById("km");
const userName = document.getElementById("nome");
const sendButton = document.getElementById("send");
const userAge = document.getElementById("eta");


console.log(wthIsAKilometer, userName, sendButton);

sendButton.addEventListener("click",
    function () {
        kmPercorsi = wthIsAKilometer.value;
        etasconto = userAge.value;
        let priceKm = kmPercorsi * 0.21;
        let finalPrice
        nome = userName.value

        // calcolo sconto se presente
        if (etasconto == "minorenne") {
            finalPrice = priceKm * 0.8

        } else if (etasconto == "over65") {
            finalPrice = priceKm * 0.6

        } else {
            finalPrice = priceKm

        }

        // calcolo numero randomico per carrozza e CP
        let randomnumero = Math.floor(Math.random() * 10) + 1
        let randomdiecimila = Math.floor(Math.random() * 10000) + 999

        // visualizzazione risultati e toggle scheda
        document.getElementsById("ticket_box").style.display = 'block';
        document.getElementById("ticket_price").innerHTML = finalPrice.toFixed(2) + " €";
        document.getElementById("randomCarrozza").innerHTML = randomnumero;
        document.getElementById("randomCP").innerHTML = randomdiecimila;
        document.getElementById("passeggero").innerHTML = nome;
    }
)

