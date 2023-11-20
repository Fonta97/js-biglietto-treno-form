

// richiesta input ad utente su lunghezza viaggio e età
const wthIsAKilometer = document.getElementById("km");
const userName = document.getElementById("km");
const sendButton = document.querySelector("send");


console.log(wthIsAKilometer, userName, sendButton);

sendButton.addEventListener("click",
    function () {
        let priceKm = wthIsAKilometer * 0.21;
        let finalPrice
        // calcolo sconto se presente
        if (userAge === "minorenne") {
            finalPrice = wthIsAKilometer * 0.8
        } else if (userAge === "over65") {
            finalPrice = wthIsAKilometer * 0.6
        }

        console.log(priceKm, finalPrice)

        finalPrice = (priceKm).toFixed(2)
    }
)
console.log(finalPrice)

document.getElementById("ticket_price").innerHTML = "Paga o il trenino Thomas ti verrà a prendere di notte:" + finalPrice + "€";