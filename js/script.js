

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
            document.getElementById("ticket_price").innerHTML = nome + ", ecco il tuo prezzo scontato da minorenne: " + finalPrice + " €";
        } else if (etasconto == "over65") {
            finalPrice = priceKm * 0.6
            document.getElementById("ticket_price").innerHTML = nome + ", ecco il tuo prezzo scontato over65: " + finalPrice + " €";
        } else {
            finalPrice = priceKm
            document.getElementById("ticket_price").innerHTML = nome + ", ecco il tuo prezzo: " + finalPrice + " €";
        }
        console.log(priceKm, finalPrice)

        console.log(finalPrice)
    }
)

