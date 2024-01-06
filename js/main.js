// Fungsi ini dipanggil ketika formulir dikirim
function kirimForm() {
  // Mendapatkan elemen formulir berdasarkan ID
  var form = document.getElementById("formKehadiran");

  // Membuat objek FormData untuk mengumpulkan data formulir
  var dataForm = new FormData(form);

// menampilkan inpo
showInfoAlert('tunggu sebentar...');

  // Mengirim data formulir ke server (Google Apps Script)
  fetch("https://script.google.com/macros/s/AKfycbyA0dA5SHephvUZiqFT-2ZIDQHfJEbYqLvSC88u4dpyVz7d7ekMAQ5dXbzeC7vJFO_1/exec", {
      method: "POST",
      body: dataForm
    })
    .then(response => response.json())
    .then(data => {
      // Menampilkan peringatan sukses menggunakan alert
      showSuccessAlert("Sukses, data disimpan di baris ke " + JSON.stringify(data.row));
      // Tambahkan tindakan lebih lanjut yang ingin Anda ambil setelah mengirim formulir
      // Setelah data terkirim, reset formulir
      form.reset();
    })
    .catch(error => {
      // Menampilkan peringatan error menggunakan alert
      showErrorAlert('terjadi masalah, data tdk dpt disimpan');
      console.error("Error:", error);
    });
}


//mengatur tanggal 
var today = new Date();
var day = today.getDate();
var month = today.getMonth() + 1; // Bulan dimulai dari 0, sehingga tambahkan 1

// Pastikan nilai bulan dan hari selalu dua digit
var formattedMonth = (month < 10 ? '0' : '') + month;
var formattedDay = (day < 10 ? '0' : '') + day;

// Format tanggal sesuai dengan standar ISO (YYYY-MM-DD)
var formattedDate = formattedDay + ' | ' + formattedMonth;

document.getElementById('TGL').value = formattedDate;
