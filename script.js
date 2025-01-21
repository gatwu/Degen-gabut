let candle = document.getElementById("candle-stick");
let profitDisplay = document.getElementById("profit");
let buyButton = document.getElementById("buy");
let sellButton = document.getElementById("sell");

let profit = 0;
let initialPrice = 100; // Harga awal
let isBuying = false; // Menyimpan status apakah pemain membeli atau menjual

// Fungsi untuk memperbarui profit
function updateProfit(amount) {
    profit += amount;
    profitDisplay.innerHTML = `Profit: $${profit}`;
}

// Fungsi untuk pergerakan candle stick
function moveCandle() {
    let newPosition = Math.random() * 400 + 50; // Posisi acak antara 50 dan 450
    candle.style.bottom = newPosition + "px";
    
    if (isBuying) {
        if (newPosition >= 300) {  // Candle mencapai garis profit
            updateProfit(50); // Mendapatkan profit saat candle menyentuh garis profit
        }
    }
}

// Fungsi untuk melakukan buy
buyButton.addEventListener("click", () => {
    isBuying = true;
    moveCandle(); // Mulai pergerakan candle setelah membeli
});

// Fungsi untuk melakukan sell
sellButton.addEventListener("click", () => {
    isBuying = false;
    moveCandle(); // Mulai pergerakan candle setelah menjual
});