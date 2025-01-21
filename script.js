let candle = document.getElementById("candle-stick");
let profitDisplay = document.getElementById("profit");
let buyButton = document.getElementById("buy");
let sellButton = document.getElementById("sell");

let profit = 0;
let initialPrice = 100; // Harga awal
let isBuying = false; // Status apakah pemain membeli atau menjual
let currentPrice = initialPrice; // Harga saat ini
let candlePosition = 200; // Posisi awal candle stick

// Fungsi untuk memperbarui profit
function updateProfit(amount) {
    profit += amount;
    profitDisplay.innerHTML = `Profit: $${profit}`;
}

// Fungsi untuk pergerakan candle stick otomatis
function moveCandle() {
    // Simulasi pergerakan harga dengan naik turun acak
    let change = Math.random() * 20 - 10; // Perubahan harga antara -10 hingga 10
    currentPrice += change;

    // Update posisi candle stick
    candlePosition = Math.min(Math.max(candlePosition + change, 50), 450); // Batasi posisi antara 50 dan 450
    candle.style.bottom = candlePosition + "px";

    // Cek apakah candle menyentuh garis profit
    if (isBuying) {
        if (candlePosition >= 300) {  // Jika candle menyentuh garis profit
            updateProfit(50); // Mendapatkan profit
        }
    }
}

// Fungsi untuk melakukan buy
buyButton.addEventListener("click", () => {
    isBuying = true;  // Menandakan bahwa pemain membeli
    moveCandle();  // Mulai pergerakan candle otomatis
    buyButton.disabled = true;  // Nonaktifkan tombol buy setelah membeli
    sellButton.disabled = false;  // Aktifkan tombol sell
});

// Fungsi untuk melakukan sell
sellButton.addEventListener("click", () => {
    isBuying = false;  // Menandakan bahwa pemain menjual
    moveCandle();  // Mulai pergerakan candle otomatis
    buyButton.disabled = false;  // Aktifkan tombol buy
    sellButton.disabled = true;  // Nonaktifkan tombol sell
});

// Fungsi untuk menjalankan pergerakan otomatis setiap detik
setInterval(moveCandle, 1000);  // Setiap detik candle bergerak