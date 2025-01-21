let chart = document.getElementById("chart");
let profitDisplay = document.getElementById("profit");
let buyButton = document.getElementById("buy");
let sellButton = document.getElementById("sell");

let profit = 0;
let initialPrice = 100; // Harga awal
let currentPrice = initialPrice; // Harga saat ini
let candleWidth = 20; // Lebar candle stick
let candlePosition = 0; // Posisi awal candle stick

// Fungsi untuk memperbarui profit
function updateProfit(amount) {
    profit += amount;
    profitDisplay.innerHTML = `Profit: $${profit}`;
}

// Fungsi untuk menambahkan candle baru ke chart
function addCandle() {
    let candle = document.createElement("div");
    candle.classList.add("candle-stick");

    // Tentukan pergerakan harga acak
    let change = Math.random() * 2 - 1; // Perubahan harga antara -1 hingga 1
    currentPrice += change;

    // Tentukan warna candle (hijau jika naik, merah jika turun)
    if (change > 0) {
        candle.style.backgroundColor = "green"; // Naik
    } else if (change < 0) {
        candle.style.backgroundColor = "red"; // Turun
    }

    // Tentukan posisi dan tinggi candle
    let candleHeight = Math.abs(change) * 20; // Sesuaikan tinggi candle dengan perubahan harga
    candle.style.height = candleHeight + "px";
    candle.style.left = candlePosition + "px"; // Posisi horizontal candle

    // Tambahkan candle ke chart
    chart.appendChild(candle);

    // Update posisi untuk candle berikutnya
    candlePosition += candleWidth; // Geser posisi ke kanan

    // Cek apakah candle menyentuh garis profit
    if (candlePosition >= 300) {  // Jika candle menyentuh garis profit
        updateProfit(50); // Mendapatkan profit
    }

    // Hapus candle yang sudah keluar dari chart
    if (candlePosition > chart.offsetWidth) {
        chart.removeChild(chart.firstChild); // Hapus candle pertama
    }
}

// Fungsi untuk melakukan buy
buyButton.addEventListener("click", () => {
    addCandle();  // Tambahkan candle baru
    buyButton.disabled = true;  // Nonaktifkan tombol buy setelah membeli
    sellButton.disabled = false;  // Aktifkan tombol sell
});

// Fungsi untuk melakukan sell
sellButton.addEventListener("click", () => {
    buyButton.disabled = false;  // Aktifkan tombol buy
    sellButton.disabled = true;  // Nonaktifkan tombol sell
});

// Fungsi untuk menjalankan pergerakan otomatis setiap detik
setInterval(addCandle, 1000);  // Setiap detik tambahkan candle baru  // Setiap detik tambahkan candle baru
