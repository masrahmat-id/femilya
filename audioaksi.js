document.addEventListener('DOMContentLoaded', (event) => {
    // 1. Ambil elemen audio
    const audioAksi = document.getElementById('audioAksi');
    
    // 2. Ambil elemen tombol
    const tombolBuka = document.getElementById('open');
    const tombolTutup = document.getElementById('reset');

    /**
     * Fungsi untuk memutar audio klik.
     */
    function mainkanSuara() {
        // Mengatur ulang waktu ke 0 agar suara dapat diputar kembali dengan cepat
        audioAksi.currentTime = 0;
        
        // Memainkan suara
        audioAksi.play().catch(error => {
            console.error("Pemutaran audio gagal:", error);
        });
    }
    
    // 3. Tambahkan event listener untuk tombol "BUKA" dan "TUTUP"
    tombolBuka.addEventListener('click', mainkanSuara);
    tombolTutup.addEventListener('click', mainkanSuara);

    /* --- Tambahan Aksi Lain (Opsional) --- */
    
    // Contoh: Mengubah warna kontainer saat tombol BUKA diklik
    const dekorasiKontainer = document.querySelector('.dekorasi1');
    tombolBuka.addEventListener('click', () => {
         dekorasiKontainer.style.backgroundColor = '#f0fff0'; // Warna hijau muda
         console.log("Tombol BUKA diklik dan kontainer diwarnai.");
    });

    // Contoh: Mengembalikan warna kontainer saat tombol TUTUP diklik
    tombolTutup.addEventListener('click', () => {
         dekorasiKontainer.style.backgroundColor = 'transparent'; // Kembali transparan
         console.log("Tombol TUTUP diklik dan warna kontainer direset.");
    });
});
