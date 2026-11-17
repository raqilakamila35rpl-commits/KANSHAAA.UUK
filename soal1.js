"use strict";
// 1. Menghubungkan semua elemen HTML ke TypeScript
const inputNama = document.getElementById("nama");
const inputGajiPokok = document.getElementById("gajiPokok");
const inputJamLembur = document.getElementById("jamLembur");
const inputHariAbsen = document.getElementById("hariAbsen");
const btnHitung = document.getElementById("btnHitung");
const hasilGaji = document.getElementById("hasilGaji");
// 2. Function hitungGaji tanpa nilai kembalian (void)
function hitungGaji() {
    // 3. Mengambil nilai dari kolom isian dan konversi angka menggunakan Number()
    const nama = inputNama.value;
    const gajiPokok = Number(inputGajiPokok.value);
    const jamLembur = Number(inputJamLembur.value);
    const hariAbsen = Number(inputHariAbsen.value);
    // 4. Dua variabel bernilai tetap (const)
    const UPAH_LEMBUR_PER_JAM = 25000;
    const POTONGAN_PER_ABSEN = 100000;
    // 5. Validasi data negatif
    if (gajiPokok < 0 || jamLembur < 0 || hariAbsen < 0) {
        hasilGaji.innerHTML = "Error: Data tidak valid.";
        return;
    }
    // 6. Menghitung gaji bersih
    const gajiBersih = gajiPokok + jamLembur * UPAH_LEMBUR_PER_JAM - hariAbsen * POTONGAN_PER_ABSEN;
    // 7. Menentukan status kedisiplinan dengan if - else if - else
    let statusKedisiplinan = "";
    if (hariAbsen === 0) {
        statusKedisiplinan = "Sangat Disiplin";
    }
    else if (hariAbsen >= 1 && hariAbsen <= 2) {
        statusKedisiplinan = "Disiplin";
    }
    else if (hariAbsen >= 3 && hariAbsen <= 4) {
        statusKedisiplinan = "Cukup Disiplin";
    }
    else if (hariAbsen >= 5 && hariAbsen <= 6) {
        statusKedisiplinan = "Kurang Disiplin";
    }
    else {
        statusKedisiplinan = "Perlu Pembinaan";
    }
    // 8. Menampilkan hasil ke elemen hasilGaji menggunakan innerHTML
    hasilGaji.innerHTML = `
    Nama: ${nama}<br>
    Gaji bersih: Rp${gajiBersih}<br>
    Kedisiplinan: ${statusKedisiplinan}
  `;
}
// 9. Event listener ketika tombol btnHitung diklik
btnHitung.addEventListener("click", hitungGaji);
