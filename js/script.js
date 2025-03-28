// Recupero gli elementi dal DOM
const kmInput = document.getElementById("km");
const ageInput = document.getElementById("age");
const button = document.getElementById("calcolatore");
const ageResult = document.getElementById("age-result");
const kmResult = document.getElementById("km-result");
const priceResult = document.getElementById("price-result");

// Prezzo base per km
const kmUnit = 0.21;

// Evento sul pulsante
button.addEventListener("click", function (e) {
    e.preventDefault(); // Evita il refresh della pagina

    // Recupero i valori
    let kmValue = parseInt(kmInput.value);
    let ageValue = parseInt(ageInput.value);

    // Validazione input
    if (isNaN(kmValue) || isNaN(ageValue) || kmValue <= 0 || ageValue < 0) {
        priceResult.innerHTML = `<span class="text-danger">Inserisci valori validi!</span>`;
        return;
    }

    // Calcolo prezzo base
    let price = kmUnit * kmValue;

    // Sconto in base all'età
    if (ageValue < 18) {
        price *= 0.8; // Sconto 20%
    } else if (ageValue > 65) {
        price *= 0.6; // Sconto 40%
    }

    // Mostro i risultati
    ageResult.innerText = `Età: ${ageValue} anni`;
    kmResult.innerText = `Distanza: ${kmValue} km`;
    priceResult.innerHTML = `Prezzo biglietto: <span class="text-success">€${price.toFixed(2)}</span>`;
});