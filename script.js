// Array berisi kata-kata semangat
const quotes = [
    "Memahami diri adalah perjalanan, bukan tujuan. Nikmati setiap langkah kecilmu.",
    "Jadilah peneliti terbaik untuk dirimu sendiri. Setiap pertanyaan adalah petunjuk baru.",
    "Kecepatanmu tak harus sama dengan orang lain. Fokus pada kemajuan pribadimu.",
    "Penerimaan diri adalah langkah pertama. Kamu cukup, persis seperti dirimu saat ini.",
    "Kesalahan adalah data. Gunakan itu untuk mengenal cara terbaik kamu belajar dan bertumbuh.",
    "Kekuatanmu bukan hanya pada apa yang kamu lakukan, tapi pada siapa dirimu ketika melakukannya.",
    "Beranilah untuk beristirahat. Istirahat yang baik adalah bagian dari memahami batas dirimu.",
    "Apa yang kamu rasakan valid. Beri ruang untuk emosimu, dan pahami pesannya.",
];

const quoteDisplay = document.getElementById('quote-display');
const nextQuoteBtn = document.getElementById('next-quote-btn');
const loveContainer = document.querySelector('.love-container');

let currentQuoteIndex = 0;

// Fungsi untuk menampilkan quote berikutnya
function displayNextQuote() {
    // Pastikan quote awal ditampilkan saat pertama kali dibuka
    if (quoteDisplay.textContent.includes('Klik tombol')) {
        currentQuoteIndex = 0;
    } else {
        // Ganti ke quote berikutnya
        currentQuoteIndex = (currentQuoteIndex + 1) % quotes.length;
    }
    
    quoteDisplay.textContent = quotes[currentQuoteIndex];
    createLoveAnimation(); // Panggil animasi hati
}

// Fungsi untuk membuat animasi hati
function createLoveAnimation() {
    const love = document.createElement('div');
    love.classList.add('love');
    love.textContent = '❤️'; // Karakter hati/love

    // Posisi hati muncul di dekat tombol yang diklik
    const rect = nextQuoteBtn.getBoundingClientRect();
    love.style.left = `${rect.left + rect.width / 2}px`; // Tengah horizontal tombol
    love.style.top = `${rect.top + rect.height / 2}px`;  // Tengah vertikal tombol
    
    // Tambahkan sedikit variasi posisi horizontal agar tidak terlalu lurus
    love.style.transform = `translateX(${Math.random() * 40 - 20}px)`; 
    
    loveContainer.appendChild(love);

    // Hapus elemen hati setelah animasi selesai
    setTimeout(() => {
        love.remove();
    }, 4000); // 4000ms sesuai durasi animasi CSS (4s)
}

// Tambahkan event listener ke tombol
nextQuoteBtn.addEventListener('click', displayNextQuote);

// Tampilkan quote pertama kali saat halaman dimuat
// Ini akan menampilkan instruksi awal, quote pertama akan muncul saat tombol diklik.
// Jika Anda ingin quote pertama langsung muncul, panggil: displayNextQuote(); di sini.
// Namun, biarkan quote awal ("Klik tombol...") untuk mendorong interaksi.