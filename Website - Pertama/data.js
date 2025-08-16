const nama = "Lutfi Idham Puro";
let usia = 15;

let biodata = document.getElementById(`katentuan`)
console.log (ketentuan);

function generateKetentuan() {
let ketentuanUmur;

  if (usia >= 5 && usia < 13)  {
    ketentuanUmur = "Tidak, Anda Belum Cukup Umur Untuk Menonton Film Marvel"
  }
  else if (usia >= 13 && usia < 45) {
    ketentuanUmur = "Ya, Anda Sudah Cukup Umur Untuk Menonton Film Marvel" 
  }
  else if (usia >= 45) {
    ketentuanUmur = "Ya, Tetapi Anda Tidak Disarankan Untuk Menonton Film Marvel"
  }
   else {
    ketentuanUmur = "Tidak, Anda Dilarang Keras Untuk Menonton Film Marvel Dikarenakan Anda Masih Terlalu Anak Anak"
  }

return ketentuan.innerHTML = ketentuanUmur;
}


console.log(nama);
console.log(usia);
generateKetentuan();